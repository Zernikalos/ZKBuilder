import {ZModel} from "../../zernikalos/ZModel";
import {Zko} from "../../proto";
import ZkMesh = Zko.ZkMesh;
import ZkShaderProgram = Zko.ZkShaderProgram;
import ZkTransform = Zko.ZkTransform;
import {materialWriter} from "./materialWriter";
import {skeletonWriter} from "./skeletonWriter";
import {WriterContext} from "../WriterContext";

export function modelWriter(ctx: WriterContext, model: ZModel) {
    return Zko.ZkModel.create({
        id: model.refId,
        name: model.name,
        transform: ZkTransform.fromObject(model.transform),
        mesh: ZkMesh.fromObject(model.mesh),
        shaderProgram: ZkShaderProgram.fromObject(model.shaderProgram),
        material: materialWriter(ctx, model.material),
        skeleton: skeletonWriter(ctx, model.skeleton),
    })
}