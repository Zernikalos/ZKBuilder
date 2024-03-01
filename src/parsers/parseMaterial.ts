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

    const imgElement: HTMLImageElement = tex.source.data
    const response = await fetch(imgElement.src)
    const data = await response.arrayBuffer()

    const texture = ZTexture.init()
    texture.dataArray = new Int8Array(data)
    // TODO: Is this field required any longer?
    texture.id = `${hash(texture.dataArray)}`
    texture.width = imgElement.width
    texture.height = imgElement.height

    ctx.registerComponent(tex.uuid, texture)
    return texture
}