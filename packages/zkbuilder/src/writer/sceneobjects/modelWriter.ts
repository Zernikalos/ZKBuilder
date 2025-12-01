import {ZModel} from "@/zernikalos";
import {Zko} from "../../proto";
import {materialWriter} from "./materialWriter";
import {WriterContext} from "../WriterContext";
import {skeletonWriter} from "./skeletonWriter";
import {meshWriter} from "./meshWriter";

export function modelWriter(ctx: WriterContext, model: ZModel) {
    return Zko.ZkModel.create({
        id: model.refId,
        name: model.name,
        transform: Zko.ZkTransform.fromObject(model.transform),
        mesh: meshWriter(ctx, model.mesh),
        material: materialWriter(ctx, model.material),
        skeleton: skeletonWriter(ctx, model.skeleton),
        skinning: model.skinning ? Zko.ZkSkinning.fromObject(model.skinning) : undefined
    })
}