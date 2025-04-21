import {ZMaterial} from "../zernikalos/material/ZMaterial";
import {Material, Texture} from "three";
import _ from "lodash";
import {ZTexture} from "../zernikalos/material/ZTexture";
import {ParserContext} from "./ParserContext";

export async function parseMaterial(ctx: ParserContext,mat: Material): Promise<ZMaterial | undefined> {
    if (_.isNil(mat)) {
        return
    }

    if (ctx.hasComponent(mat.uuid)) {
        return ctx.getComponent(mat.uuid) as ZMaterial
    }

    const material = ZMaterial.init()

    // @ts-ignore
    const tex = mat?.map
    if (!_.isNil(tex)) {
        material.texture = await parseTexture(ctx, tex)
    }
    ctx.registerComponent(mat.uuid, material)

    return material
}

async function parseTexture(ctx: ParserContext, tex: Texture): Promise<ZTexture> {
    if (ctx.hasComponent(tex.uuid + ".Texture")) {
        return ctx.getComponent(tex.uuid + ".Texture") as ZTexture
    }

    const internalParseTexture = async (tex: Texture): Promise<ZTexture> => {
        const zTexture = ZTexture.init()

        let data
        const imgElement = tex.source.data
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
        ctx.registerComponent(tex.uuid + ".Texture", zTexture)
        return zTexture
    }

    if (!_.isNil(tex?.source?.data)) {
        return await internalParseTexture(tex)
    }

    return new Promise((resolve) => {
        const interval = setInterval(async () => {
            if (!_.isNil(tex?.source?.data)) {
                resolve(internalParseTexture(tex))
                clearInterval(interval)
            }
        }, 500)
    })
}