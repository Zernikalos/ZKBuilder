import {ZMaterial} from "../zernikalos/material/ZMaterial";
import {Material, Texture} from "three";
import _ from "lodash";
import {ZTexture} from "../zernikalos/material/ZTexture";

export async function parseMaterial(mat: Material): Promise<ZMaterial | undefined> {
    if (_.isNil(mat)) {
        return
    }

    const material = new ZMaterial()

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

    const texture = new ZTexture()
    texture.id = "aux"
    texture.dataArray = new Uint8Array(data)

    return texture
}