import {Material, Mesh, Object3D, Skeleton, SkinnedMesh} from "three"
import {parseMesh} from "./parseMesh"
import {ZModel} from "../zernikalos/ZModel"
import _ from "lodash";
import {parseMaterial} from "./parseMaterial";
import {parseSkeletonAndSkinning} from "./parseSkeleton";
import {ParserContext} from "./ParserContext";

export async function parseModel(ctx: ParserContext, obj: Mesh | SkinnedMesh): Promise<{ model: ZModel, children: Object3D[] }> {
    const model = new ZModel()
    model.mesh = parseMesh(ctx, obj)
    if (!_.isNil(obj.material)) {
        // TODO: Material can be a list of materials, not just one
        model.material = await parseMaterial(ctx, obj.material as Material)
    }
    if (!_.isNil((obj as SkinnedMesh).skeleton)) {
        const threeSkeleton: Skeleton = (obj as SkinnedMesh).skeleton
        const {skeleton, skinning} = parseSkeletonAndSkinning(threeSkeleton)
        model.skeleton = skeleton
        model.skinning = skinning
    }

    return {model, children: obj.children}
}
