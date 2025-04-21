import {ZMaterial} from "../../zernikalos/material/ZMaterial"
import _ from "lodash"
import {ZTexture} from "../../zernikalos/material/ZTexture"
import {Zko} from "../../proto"
import {WriterContext} from "../WriterContext"

export function materialWriter(ctx: WriterContext, material: ZMaterial): Zko.ZkRefMaterial {
    if (_.isNil(material)) {
        return
    }
    const texture = material.texture
    let zkTexture = undefined
    if (!_.isNil(texture)) {
        zkTexture = textureWriter(ctx, texture)
    }
    return Zko.ZkRefMaterial.create({
        refId: material.refId,
        isReference: false,
        data: Zko.ZkMaterial.create({
            texture: zkTexture
        })
    })

}

function textureWriter(_ctx: WriterContext, texture: ZTexture): Zko.ZkRefTexture {
    if (_.isNil(texture)) {
        return
    }

    return Zko.ZkRefTexture.create({
        refId: texture.refId,
        isReference: true
    })
}