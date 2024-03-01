import {ZMaterial} from "../../zernikalos/material/ZMaterial";
import _ from "lodash";
import {ZTexture} from "../../zernikalos/material/ZTexture";
import {ZkMaterial, ZkRefMaterial, ZkRefTexture, ZkTexture} from "../../../protobuild";
import {WriterContext} from "../WriterContext";

export function materialWriter(ctx: WriterContext, material: ZMaterial): ZkRefMaterial {
    if (_.isNil(material)) {
        return
    }
    const texture = material.texture
    let zkTexture = undefined
    if (!_.isNil(texture)) {
        zkTexture = textureWriter(ctx, texture)
    }
    return ZkRefMaterial.create({
        refId: material.refId,
        isReference: false,
        data: ZkMaterial.create({
            texture: zkTexture
        })
    })

}

function textureWriter(ctx: WriterContext, texture: ZTexture): ZkRefTexture {
    if (_.isNil(texture)) {
        return
    }
    if (ctx.hasWrittenComponent(texture)) {
        return ZkRefTexture.create({
            refId: texture.refId,
            isReference: true
        })
    }
    ctx.registerComponent(texture)
    return ZkRefTexture.create({
        refId: texture.refId,
        isReference: false,
        data: ZkTexture.fromObject(texture)
    })
}