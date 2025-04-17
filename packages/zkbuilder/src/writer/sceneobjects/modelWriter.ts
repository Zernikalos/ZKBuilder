import {ZModel} from "../../zernikalos/ZModel";
import {Zko} from "../../proto";
import {materialWriter} from "./materialWriter";
import {WriterContext} from "../WriterContext";
import {skeletonWriter} from "./skeletonWriter";

export function modelWriter(ctx: WriterContext, model: ZModel) {
    return Zko.ZkModel.create({
        id: model.refId,
        name: model.name,
        transform: Zko.ZkTransform.fromObject(model.transform),
        mesh: Zko.ZkMesh.fromObject(model.mesh),
        shaderProgram: Zko.ZkShaderProgram.fromObject(model.shaderProgram),
        material: materialWriter(ctx, model.material),
        skeleton: skeletonWriter(ctx, model.skeleton),
        skinning: model.skinning ? Zko.ZkSkinning.fromObject(model.skinning) : undefined
    })
}