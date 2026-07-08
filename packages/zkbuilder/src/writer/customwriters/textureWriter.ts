import {WriterContext} from "../WriterContext";
import {ZTexture} from "@/zernikalos";
import {Zko} from "../../proto";
import _ from "lodash";

export function textureWriter(_ctx: WriterContext, texture: ZTexture): Zko.ZkRefTexture {
    if (_.isNil(texture)) {
        return
    }

    return Zko.ZkRefTexture.create({
        refId: texture.refId,
        isReference: true
    })
}