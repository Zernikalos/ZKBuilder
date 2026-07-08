import {ZMaterial} from "@/zernikalos"
import _ from "lodash"
import {Zko} from "../../proto"
import {WriterContext} from "../WriterContext"
import {textureWriter} from "./textureWriter";

export function materialWriter(ctx: WriterContext, material: ZMaterial): Zko.ZkMaterial {
    if (_.isNil(material)) {
        return
    }
    const texture = material.texture
    let zkTexture = undefined
    if (!_.isNil(texture)) {
        zkTexture = textureWriter(ctx, texture)
    }
    return Zko.ZkMaterial.create({
        refId: material.refId,
        pbr: material.pbr ? Zko.ZkPbrMaterial.fromObject(material.pbr) : undefined,
        phong: material.phong ? Zko.ZkPhongMaterial.fromObject(material.phong) : undefined,
        texture: zkTexture,
    })
}