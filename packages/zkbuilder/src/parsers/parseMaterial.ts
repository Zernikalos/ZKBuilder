import {ZMaterial, ZPbrMaterialData, ZPhongMaterialData} from "@/zernikalos";
import {Material, MeshPhongMaterial, MeshStandardMaterial, Texture} from "three";
import _ from "lodash";
import {ZTexture} from "@/zernikalos";
import {ParserContext} from "./ParserContext";
import { ZColor } from "@/zernikalos";

export async function parseMaterial(ctx: ParserContext,mat: Material): Promise<ZMaterial | undefined> {
    if (_.isNil(mat)) {
        return
    }

    if (ctx.hasComponent(mat.uuid)) {
        return ctx.getComponent(mat.uuid) as ZMaterial
    }

    const material = ZMaterial.init()

    if (mat instanceof MeshStandardMaterial) {
        material.pbr = parseMeshStandardMaterial(mat)
    }

    if (mat instanceof MeshPhongMaterial) {
        material.phong = parseMeshPhongMaterial(mat)
    }

    // @ts-ignore
    const tex = mat?.map
    if (!_.isNil(tex)) {
        material.texture = await parseTexture(ctx, tex)
    }
    ctx.registerComponent(mat.uuid, material)

    return material
}

function parseMeshStandardMaterial(material: MeshStandardMaterial): ZPbrMaterialData {
    const pbrMaterial = new ZPbrMaterialData(
        ZColor.initWithValues(material.color.r, material.color.g, material.color.b),
        ZColor.initWithValues(material.emissive.r, material.emissive.g, material.emissive.b),
        material.emissiveIntensity,
        material.metalness,
        material.roughness
    )
    return pbrMaterial
}

function parseMeshPhongMaterial(material: MeshPhongMaterial): ZPhongMaterialData {
    const phongMaterial = new ZPhongMaterialData(
        ZColor.initWithValues(material.color.r, material.color.g, material.color.b),
        ZColor.initWithValues(material.emissive.r, material.emissive.g, material.emissive.b),
        ZColor.initWithValues(material.specular.r, material.specular.g, material.specular.b),
        material.shininess
    )
    return phongMaterial
}

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
    // TODO: Is this field required any longer?
    zTexture.width = imgElement.width
    zTexture.height = imgElement.height
    zTexture.flipX = (tex as any).flipX ?? false
    zTexture.flipY = tex.flipY
    ctx.registerComponentWithTag(tex.uuid, "Texture", zTexture)
    return zTexture
}

async function parseTexture(ctx: ParserContext, tex: Texture): Promise<ZTexture> {
    if (ctx.hasComponent(tex.uuid)) {
        return ctx.getComponent(tex.uuid) as ZTexture
    }

    // const internalParseTexture = async (tex: Texture): Promise<ZTexture> => {
    //     const zTexture = ZTexture.init()

    //     let data: ArrayBuffer
    //     const imgElement = tex.source.data as any
    //     if (imgElement.src !== undefined) {
    //         let imageSrc = imgElement.src
    //         const response = await fetch(imageSrc)
    //         data = await response.arrayBuffer()
    //     } else {
    //         data = imgElement
    //     }

    //     zTexture.dataArray = new Int8Array(data)
    //     // TODO: Is this field required any longer?
    //     zTexture.width = imgElement.width
    //     zTexture.height = imgElement.height
    //     zTexture.flipX = (tex as any).flipX ?? false
    //     zTexture.flipY = tex.flipY
    //     ctx.registerComponentWithTag(tex.uuid, "Texture", zTexture)
    //     return zTexture
    // }

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