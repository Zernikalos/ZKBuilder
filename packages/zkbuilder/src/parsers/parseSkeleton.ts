import {Bone, Object3D} from "three";
import {ZBone} from "../zernikalos/skeleton/ZBone"
import {parseTransform} from "./parseTransform"
import _ from "lodash";
import {ZSkeleton} from "../zernikalos/ZSkeleton"
//import {ZJoint} from "../zernikalos/skeleton/ZJoint";

export class JointNode extends Object3D {
    type = "Joint"
    zbone: ZBone

    children: Object3D[] = []
}

// export function parseSkeleton(obj: Skeleton): ZSkeleton {
//     const boneRoot = findParentBone(obj.bones[0])
//     // Only root bones will be processed here
//     if (_.isNil(boneRoot) || boneRoot.type !== "Bone") {
//         return
//     }
//
//     // const root = recursiveParseSkeleton(boneRoot, 0)
//     const root = parseBonesFromRoot(boneRoot, obj.bones)
//     const skeleton = ZSkeleton.init()
//     skeleton.root = root
//
//     // return {skeleton, children: [...joints.values()]}
//     return skeleton
// }

export function parseSkeletonObject(obj: Bone): { skeleton: ZSkeleton, children: Object3D[]} {
    const boneRoot = findParentBone(obj)
    // Only root bones will be processed here
    if (_.isNil(boneRoot) || boneRoot.type !== "Bone") {
        return
    }

    // const root = recursiveParseSkeleton(boneRoot, 0)
    const {root, children} = parseBonesObjectFromRoot(boneRoot)
    const skeleton = new ZSkeleton()
    skeleton.root = root

    return {skeleton, children}
    // return skeleton
}

function parseBonesObjectFromRoot(rootBone: Bone): {root: ZBone, children: Object3D[]} {
    let root: ZBone | undefined = undefined
    const queue: [ZBone | undefined, Bone][] = []
    queue.push([undefined, rootBone])
    const children: Object3D[] = []

    let idx = 0
    while (!_.isEmpty(queue)) {
        const [parent, bone] = queue.shift()

        const zbone: ZBone = parseBone(bone, idx)
        idx++

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

function getBoneIdx(bone: Bone, bones: Bone[]) {
    return bones.findIndex((b) => b.id === bone.id)
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

function parseBonesFromRoot(rootBone: Bone, bones: Bone[]): ZBone {
    let root: ZBone | undefined = undefined
    const q: [ZBone | undefined, Bone][] = []
    q.push([undefined, rootBone])

    while (!_.isEmpty(q)) {
        const [parent, bone] = q.shift()
        const realIdx = getBoneIdx(bone, bones)

        const zbone: ZBone = parseBone(bone, realIdx)

        if (!_.isNil(parent)) {
            parent.addChild(zbone)
        } else {
            root = zbone
        }
        const boneChildren: Bone[] = bone.children.filter((child) => child.type === "Bone") as Bone[]
        const boneChildrenWithParent: [ZBone | undefined, Bone][] = boneChildren.map((bone) => [zbone, bone])
        q.push(...boneChildrenWithParent)
    }
    return root
}

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

function parseBone(bone: Bone, idx: number): ZBone {
    if (bone.type !== "Bone") {
        return
    }

    const zbone = ZBone.init()
    zbone.idx = idx
    zbone.name = bone.name
    zbone.transform = parseTransform(bone)

    return zbone
}
