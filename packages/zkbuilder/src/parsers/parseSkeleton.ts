import {Bone, Object3D} from "three";
import {ZBone} from "../zernikalos/skeleton/ZBone"
import {parseTransform} from "./parseTransform"
import _ from "lodash";
import {ZSkeleton} from "../zernikalos/ZSkeleton"
import {ParserContext} from "./ParserContext";

export class JointNode extends Object3D {
    type = "Joint"
    zbone: ZBone

    children: Object3D[] = []
}

export function parseSkeletonObject(ctx: ParserContext, obj: Bone): { skeleton: ZSkeleton, children: Object3D[]} {
    const boneRoot = findParentBone(obj)
    // Only root bones will be processed here
    if (_.isNil(boneRoot) || boneRoot.type !== "Bone") {
        return
    }

    const {root, children} = parseBonesObjectFromRoot(ctx, boneRoot)
    const skeleton = new ZSkeleton()
    skeleton.root = root

    ctx.registerComponent(boneRoot.uuid, skeleton)

    return {skeleton, children}
}

/**
 * Parses a root bone and all its children into a ZSkeleton
 * @param rootBone
 * @returns
 */
function parseBonesObjectFromRoot(ctx: ParserContext, rootBone: Bone): {root: ZBone, children: Object3D[]} {
    let root: ZBone | undefined = undefined
    const queue: [ZBone | undefined, Bone][] = []
    queue.push([undefined, rootBone])
    const children: Object3D[] = []

    while (!_.isEmpty(queue)) {
        const [parent, bone] = queue.shift()

        const zbone: ZBone = parseBone(ctx, bone)

        if (!_.isNil(parent)) {
            parent.addChild(zbone)
        } else {
            root = zbone
        }
        const noBoneChildren: Object3D[] = bone.children.filter((child) => child.type !== "Bone") as Object3D[]
        // TODO: Set here the noBoneChildrenWithParent too
        children.push(...noBoneChildren)

        const boneChildren: Bone[] = bone.children.filter((child) => child.type === "Bone") as Bone[]
        const boneChildrenWithParent: [ZBone | undefined, Bone][] = boneChildren.map((bone) => [zbone, bone])
        queue.push(...boneChildrenWithParent)
    }
    return {root, children}
}

function findParentBone(bone: Bone): Bone {
    let boneRoot = bone
    while (!_.isNil(boneRoot.parent) && boneRoot.parent.type === "Bone") {
        boneRoot = boneRoot.parent as Bone
    }
    return boneRoot
}

// export function parseJoint(joint: JointNode): {joint: ZJoint, children: Object3D[]} {
//     const zjoint = new ZJoint()
//     zjoint.bone = joint.zbone
//     zjoint.name = joint.name
//     return {joint: zjoint, children: joint.children}
// }


// @ts-ignore
// function recursiveParseSkeleton(obj: Object3D, idx: number, nextIdx: number) {
//     // if (obj.type !== "Bone") {
//     //     const parent = obj.parent
//     //
//     //     let semiJointNode
//     //     if (joints.has(parent.uuid)) {
//     //         semiJointNode = joints.get(parent.uuid)
//     //     } else {
//     //         semiJointNode = new JointNode()
//     //         semiJointNode.name = parent.name
//     //         semiJointNode.zbone = zparent
//     //         joints.set(parent.uuid, semiJointNode)
//     //     }
//     //     semiJointNode.children.push(obj)
//     //     return
//     // }
//
//     const zbone: ZBone = parseBone(obj, idx)
//     if (isNil(zbone)) {
//         return
//     }
//
//     const children = obj.children.filter((child) => child.type === "Bone")
//     let childIdx = idx
//     const boneChildren = children
//         //@ts-ignore
//         .map((bone: Object3D) => recursiveParseSkeleton(bone, childIdx++, ))
//         .filter((bone: ZBone) => !isNil(bone))
//     boneChildren.forEach((childBone) => zbone.addChild(childBone))
//
//     return zbone
// }

export function parseBone(ctx: ParserContext, bone: Bone): ZBone | undefined {
    if (_.isNil(bone) || bone.type !== "Bone") {
        return
    }

    if (ctx.hasComponent(bone.uuid + ".Bone")) {
        return ctx.getComponent(bone.uuid + ".Bone") as ZBone
    }

    const zbone = ZBone.init()
    zbone.id = bone.uuid
    zbone.name = bone.name
    zbone.transform = parseTransform(bone)

    ctx.registerComponent(bone.uuid + ".Bone", zbone)
    return zbone
}
