import {Bone, Object3D, Skeleton} from "three";
import {ZBone} from "../zernikalos/skeleton/ZBone"
import {parseTransform} from "./parseTransform"
import _, {isNil} from "lodash";
import {ZSkeleton} from "../zernikalos/skeleton/ZSkeleton"
import {ZJoint} from "../zernikalos/skeleton/ZJoint";

export class JointNode extends Object3D {
    type = "Joint"
    zbone: ZBone

    children: Object3D[] = []
}

export function parseSkeleton(obj: Skeleton): ZSkeleton {
    const boneRoot = findParentBone(obj.bones[0])
    // Only root bones will be processed here
    if (_.isNil(boneRoot) || boneRoot.type !== "Bone") {
        return
    }

    const joints: Map<string, JointNode> = new Map()
    const root = recursiveParseSkeleton(boneRoot, undefined, joints)
    const skeleton = ZSkeleton.init()
    skeleton.root = root

    // return {skeleton, children: [...joints.values()]}
    return skeleton
}

function findParentBone(bone: Bone): Bone {
    let boneRoot = bone
    while (!_.isNil(boneRoot.parent) && boneRoot.parent.type === "Bone") {
        boneRoot = boneRoot.parent as Bone
    }
    return boneRoot
}

export function parseJoint(joint: JointNode): {joint: ZJoint, children: Object3D[]} {
    const zjoint = new ZJoint()
    zjoint.bone = joint.zbone
    zjoint.name = joint.name
    return {joint: zjoint, children: joint.children}
}

function recursiveParseSkeleton(obj: Object3D, zparent: ZBone | undefined, joints: Map<string, JointNode>) {
    if (obj.type !== "Bone") {
        const parent = obj.parent

        let semiJointNode
        if (joints.has(parent.uuid)) {
            semiJointNode = joints.get(parent.uuid)
        } else {
            semiJointNode = new JointNode()
            semiJointNode.name = parent.name
            semiJointNode.zbone = zparent
            joints.set(parent.uuid, semiJointNode)
        }
        semiJointNode.children.push(obj)
        return
    }

    const zbone: ZBone = parseBone(obj)
    if (isNil(zbone)) {
        return
    }

    const boneChildren = obj.children
        .map((bone: Object3D) => recursiveParseSkeleton(bone, zbone, joints))
        .filter((bone: ZBone) => !isNil(bone))
    boneChildren.forEach((childBone) => zbone.addChildren(childBone))

    return zbone
}

function parseBone(bone: Object3D): ZBone {
    if (bone.type !== "Bone") {
        return
    }

    const zbone = ZBone.init()

    zbone.name = bone.name
    zbone.transform = parseTransform(bone)

    return zbone
}
