import {ZMaterial} from "../zernikalos/material/ZMaterial";
import {Material, Texture} from "three";
import _ from "lodash";
import {ZTexture} from "../zernikalos/material/ZTexture";
import hash from "hash-it";

export async function parseMaterial(mat: Material): Promise<ZMaterial | undefined> {
    if (_.isNil(mat)) {
        return
    }

    const material = ZMaterial.init()

    // @ts-ignore
    const tex = mat?.map
    if (!_.isNil(tex)) {
        material.texture = await parseTexture(tex)
    }

    return material
}

async function parseTexture(tex: Texture): Promise<ZTexture> {
    const imgElement: HTMLImageElement = tex.source.data
    const response = await fetch(imgElement.src)
    const data = await response.arrayBuffer()

    const texture = ZTexture.init()
    texture.dataArray = new Int8Array(data)
    texture.id = `${hash(texture.dataArray)}`

    return texture
}