import {Texture} from "three";
import _ from "lodash";
import {ZTexture} from "@/zernikalos";
import {ParserContext} from "./ParserContext";
import {zernikalos} from "@zernikalos/zernikalos";

// Import Three.js constants
import * as THREE from "three";

// Import Zernikalos enums
const ZTextureFilterMode = zernikalos.components.material.ZTextureFilterMode;
const ZTextureWrapMode = zernikalos.components.material.ZTextureWrapMode;
const ZTextureFormat = zernikalos.components.material.ZTextureFormat;

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
 * Maps Three.js format and colorSpace to Zernikalos format enum
 */
function mapThreeFormatToZTextureFormat(threeFormat: number, colorSpace?: string): any {
    const isSRGB = colorSpace === THREE.SRGBColorSpace || colorSpace === THREE.LinearSRGBColorSpace;

    if (threeFormat === THREE.RGBAFormat) {
        return isSRGB ? ZTextureFormat.RGBA8UNORM_SRGB : ZTextureFormat.RGBA8UNORM;
    } else if (threeFormat === THREE.RGBFormat) {
        // RGB8UNORM might not be available, fallback to RGBA8UNORM
        return isSRGB ? ZTextureFormat.RGBA8UNORM_SRGB : ZTextureFormat.RGBA8UNORM;
    } else if (threeFormat === THREE.RedFormat) {
        return ZTextureFormat.R8UNORM;
    } else if (threeFormat === THREE.RGFormat) {
        return ZTextureFormat.RG8UNORM;
    }
    
    // Default to RGBA8UNORM
    return isSRGB ? ZTextureFormat.RGBA8UNORM_SRGB : ZTextureFormat.RGBA8UNORM;
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

    // Map Three.js format and colorSpace to ZTextureFormat
    zTexture.format = mapThreeFormatToZTextureFormat(tex.format, tex.colorSpace)

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
        const interval = setInterval(async () => {
            if (!_.isNil(tex?.source?.data)) {
                resolve(internalParseTexture(ctx, tex))
                clearInterval(interval)
            }
        }, 500)
    })
}

