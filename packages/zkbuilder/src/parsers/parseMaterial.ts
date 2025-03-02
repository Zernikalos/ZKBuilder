import {ZMaterial} from "../zernikalos/material/ZMaterial";
import {Material, Texture} from "three";
import _ from "lodash";
import {ZTexture} from "../zernikalos/material/ZTexture";
import hash from "hash-it";
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
    if (ctx.hasComponent(tex.uuid)) {
        return ctx.getComponent(tex.uuid) as unknown as ZTexture
    }

    const internalParseTexture = async (tex: Texture): Promise<ZTexture> => {
        const texture = ZTexture.init()

        let data
        const imgElement = tex.source.data
        if (imgElement.src !== undefined) {
            let imageSrc = imgElement.src
            if (imageSrc.startsWith("blob:")) {
                imageSrc = imageSrc.replace("blob:", "")
            }
            const response = await fetch(imageSrc)
            data = await response.arrayBuffer()
        } else {
            data = imgElement
        }

        texture.dataArray = new Int8Array(data)
        // TODO: Is this field required any longer?
        texture.id = `${hash(texture.dataArray)}`
        texture.width = imgElement.width
        texture.height = imgElement.height
        texture.flipX = (tex as any).flipX ?? false
        texture.flipY = tex.flipY
        ctx.registerComponent(tex.uuid, texture)
        return texture
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