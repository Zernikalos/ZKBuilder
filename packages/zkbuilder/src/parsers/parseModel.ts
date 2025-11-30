import {Material, Mesh, Object3D, Skeleton, SkinnedMesh} from "three"
import {parseMesh} from "./parseMesh"
import {ZModel} from "@/zernikalos"
import _ from "lodash";
import {parseMaterial} from "./parseMaterial";
import {ParserContext} from "./ParserContext";
import {ZSkeleton} from "@/zernikalos";
import {ZRef} from "@/zernikalos";
import { parseSkinning } from "./parseSkinning";

export async function parseModel(ctx: ParserContext, obj: Mesh | SkinnedMesh): Promise<{ model: ZModel, children: Object3D[] }> {
    const model = new ZModel()
    model.mesh = parseMesh(ctx, obj)
    if (!_.isNil(obj.material)) {
        // TODO: Material can be a list of materials, not just one
        model.material = await parseMaterial(ctx, obj.material as Material)
    }
    if (!_.isNil((obj as SkinnedMesh).skeleton)) {
        const threeSkeleton: Skeleton = (obj as SkinnedMesh).skeleton
        // TODO: This could potentially fail
        ctx.getComponentAsync(threeSkeleton.bones[0].uuid).then((skeleton: ZRef) => {
            model.skeleton = skeleton as ZSkeleton
        })
        model.skinning = parseSkinning(ctx, obj as SkinnedMesh)
    }

    return {model, children: obj.children}
}
