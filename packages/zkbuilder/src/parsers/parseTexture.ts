import {Texture} from "three";
import _ from "lodash";
import {
    ZTexture,
    ZTextureFilterMode,
    ZTextureWrapMode,
    ZTextureChannels,
    ZTextureColorSpace,
    ZBaseType
} from "@/zernikalos";
import {ParserContext} from "./ParserContext";

// Import Three.js constants
import * as THREE from "three";

/**
 * Maps Three.js filter mode to Zernikalos filter mode enum
 */
function mapThreeFilterToZTextureFilter(threeFilter: number): any {
    // For minFilter, we only care about Nearest vs Linear (ignore mipmap variants)
    if (threeFilter === THREE.NearestFilter || 
        threeFilter === THREE.NearestMipmapNearestFilter ||
        threeFilter === THREE.NearestMipmapLinearFilter) {
        return ZTextureFilterMode.NEAREST;
    }
    // Default to LINEAR for LinearFilter and all Linear mipmap variants
    return ZTextureFilterMode.LINEAR;
}

/**
 * Maps Three.js wrap mode to Zernikalos wrap mode enum
 */
function mapThreeWrapToZTextureWrap(threeWrap: number): any {
    if (threeWrap === THREE.RepeatWrapping) {
        return ZTextureWrapMode.REPEAT;
    } else if (threeWrap === THREE.ClampToEdgeWrapping) {
        return ZTextureWrapMode.CLAMP_TO_EDGE;
    } else if (threeWrap === THREE.MirroredRepeatWrapping) {
        return ZTextureWrapMode.MIRROR_REPEAT;
    }
    // Default to CLAMP_TO_EDGE
    return ZTextureWrapMode.CLAMP_TO_EDGE;
}

/**
 * Maps Three.js texture type to Zernikalos pixel type
 */
function mapThreeTypeToZPixelType(threeType: number): any {
    switch(threeType) {
        case THREE.UnsignedByteType:
            return ZBaseType.UNSIGNED_BYTE;
        case THREE.ByteType:
            return ZBaseType.BYTE;
        case THREE.ShortType:
            return ZBaseType.SHORT;
        case THREE.UnsignedShortType:
            return ZBaseType.UNSIGNED_SHORT;
        case THREE.IntType:
            return ZBaseType.INT;
        case THREE.UnsignedIntType:
            return ZBaseType.UNSIGNED_INT;
        case THREE.FloatType:
        case THREE.HalfFloatType:
            return ZBaseType.FLOAT;
        default:
            return ZBaseType.UNSIGNED_BYTE;
    }
}

/**
 * Maps Three.js format to Zernikalos texture channels
 */
function mapThreeFormatToZChannels(threeFormat: number): any {
    if (threeFormat === THREE.RGBAFormat) {
        return ZTextureChannels.RGBA;
    } else if (threeFormat === THREE.RGBFormat) {
        return ZTextureChannels.RGB;
    } else if (threeFormat === THREE.RedFormat) {
        return ZTextureChannels.R;
    } else if (threeFormat === THREE.RGFormat) {
        return ZTextureChannels.RG;
    } else {
        return ZTextureChannels.RGBA; // default
    }
}

/**
 * Maps Three.js color space to Zernikalos color space
 */
function mapThreeColorSpaceToZColorSpace(colorSpace?: string): any {
    const isSRGB = colorSpace === THREE.SRGBColorSpace || colorSpace === THREE.LinearSRGBColorSpace;
    return isSRGB ? ZTextureColorSpace.SRGB : ZTextureColorSpace.LINEAR;
}

/**
 * Determines if texture values should be normalized based on type
 */
function mapThreeTypeToNormalized(threeType: number): boolean {
    switch(threeType) {
        case THREE.FloatType:
        case THREE.HalfFloatType:
            // Float types are not normalized (concept doesn't apply)
            return false;
        case THREE.UnsignedByteType:
        case THREE.ByteType:
        case THREE.ShortType:
        case THREE.UnsignedShortType:
            // Integer types are typically normalized for standard image textures
            return true;
        case THREE.IntType:
        case THREE.UnsignedIntType:
            // Int types are typically NOT normalized (used for data/indices)
            return false;
        default:
            return true;
    }
}

/**
 * Internal function to parse texture data from Three.js Texture object
 */
async function internalParseTexture(ctx: ParserContext, tex: Texture): Promise<ZTexture> {
    const zTexture = ZTexture.init()

    let data: ArrayBuffer
    const imgElement = tex.source.data as any
    if (imgElement.src !== undefined) {
        let imageSrc = imgElement.src
        const response = await fetch(imageSrc)
        data = await response.arrayBuffer()
    } else {
        data = imgElement
    }

    zTexture.dataArray = new Int8Array(data)
    zTexture.width = imgElement.width
    zTexture.height = imgElement.height
    zTexture.flipX = (tex as any).flipX ?? false
    zTexture.flipY = tex.flipY

    // Map Three.js filter modes to ZTextureFilterMode
    zTexture.minFilter = mapThreeFilterToZTextureFilter(tex.minFilter)
    zTexture.magFilter = mapThreeFilterToZTextureFilter(tex.magFilter)

    // Map Three.js wrap modes to ZTextureWrapMode
    zTexture.wrapModeU = mapThreeWrapToZTextureWrap(tex.wrapS)
    zTexture.wrapModeV = mapThreeWrapToZTextureWrap(tex.wrapT)

    // Map Three.js texture properties to ZTexture components
    zTexture.pixelType = mapThreeTypeToZPixelType(tex.type)
    zTexture.channels = mapThreeFormatToZChannels(tex.format)
    zTexture.colorSpace = mapThreeColorSpaceToZColorSpace(tex.colorSpace)
    zTexture.normalized = mapThreeTypeToNormalized(tex.type)

    ctx.registerComponentWithTag(tex.uuid, "Texture", zTexture)
    return zTexture
}

/**
 * Parses a Three.js Texture object into a Zernikalos ZTexture
 * Handles async texture loading if the texture data is not yet available
 */
export async function parseTexture(ctx: ParserContext, tex: Texture): Promise<ZTexture> {
    if (ctx.hasComponent(tex.uuid)) {
        return ctx.getComponent(tex.uuid) as ZTexture
    }

    if (!_.isNil(tex?.source?.data)) {
        return await internalParseTexture(ctx, tex)
    }

    return new Promise((resolve) => {
        let attempts = 0
        const maxAttempts = 6 // 3 seconds / 500ms = 6 attempts
        const interval = setInterval(async () => {
            attempts++
            if (!_.isNil(tex?.source?.data)) {
                clearInterval(interval)
                resolve(internalParseTexture(ctx, tex))
            } else if (attempts >= maxAttempts) {
                clearInterval(interval)
                console.error("Failed to parse texture", tex.name || tex.uuid)
                resolve(null as any)
            }
        }, 500)
    })
}

