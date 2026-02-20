import { Bone, Matrix4, Skeleton, SkinnedMesh } from "three";
import _ from "lodash";
import { ParserContext } from "./ParserContext";
import { ZMatrix4, ZSkinning } from "@/zernikalos";
import { parseBone } from "./parseSkeleton";

/**
 * Parses a SkinnedMesh from Three.js and extracts the UUIDs of its bones
 * @param ctx Parser context to register components
 * @param mesh The SkinnedMesh to extract bone UUIDs from
 * @returns The ZSkinning component with bone UUIDs
 */
export function parseSkinning(ctx: ParserContext, mesh: SkinnedMesh): ZSkinning | undefined {
    if (_.isNil(mesh.skeleton) || _.isEmpty(mesh.skeleton.bones)) {
        return
    }

    const skeleton: Skeleton = mesh.skeleton

    // Check if we already processed this mesh
    if (ctx.hasComponent(skeleton.uuid)) {
        return ctx.getComponent(skeleton.uuid) as ZSkinning
    }

    // Create a new ZSkinning component
    const skinning = ZSkinning.init();

    skinning.modelSkinBindMatrix = ZMatrix4.initWithValues(mesh.bindMatrix.elements)

    skeleton.bones.forEach((bone: Bone) => {
        const zbone = parseBone(ctx, bone)
        skinning.addBoneId(zbone.id)
    })

    const invBindMatrices = skeleton.boneInverses
    invBindMatrices.forEach((invBindMatrix: Matrix4, idx: number) => {
        const zInvBindMatrix = ZMatrix4.initWithValues(invBindMatrix.elements)
        skinning.addInverseBindMatrixAt(idx, zInvBindMatrix)
    })
    
    // Register the skinning component
    ctx.registerComponent(mesh.skeleton.uuid, skinning);
    
    return skinning;
}
