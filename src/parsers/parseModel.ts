import {Material, Mesh, Object3D, Skeleton, SkinnedMesh} from "three"
import {parseMesh} from "./parseMesh"
import {ZModel} from "../zernikalos/ZModel"
import _ from "lodash";
import {parseMaterial} from "./parseMaterial";
import {parseSkeleton} from "./parseSkeleton";
import {ZSkinning} from "../zernikalos/skeleton/ZSkinning";

export async function parseModel(obj: Mesh | SkinnedMesh): Promise<{ model: ZModel, children: Object3D[] }> {
    const model = new ZModel()
    model.mesh = parseMesh(obj.geometry)
    if (!_.isNil(obj.material)) {
        // TODO: Material can be a list of materials, not just one
        model.material = await parseMaterial(obj.material as Material)
    }
    if (!_.isNil((obj as SkinnedMesh).skeleton)) {
        const skeleton: Skeleton = (obj as SkinnedMesh).skeleton
        model.skeleton = parseSkeleton(skeleton)

        const boneIndices = skeleton.bones.map((bone) => model.skeleton.findBoneByName(bone.name))
            .filter((zbone) => !_.isNil(zbone))
            .map((zbone) => zbone.idx)
        boneIndices.sort((a,b) => a - b)
        const skinning = new ZSkinning()
        skinning.boneIndices = boneIndices
        model.skinning = skinning
    }

    return {model, children: obj.children}
}
