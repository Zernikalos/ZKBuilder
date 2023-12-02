import {Bone, Object3D} from "three";
import {ZBone} from "../zernikalos/skeleton/ZBone"
import {parseTransform} from "./parseTransform"
import {isNil} from "lodash";
import {ZSkeleton} from "../zernikalos/skeleton/ZSkeleton"
import {ZJoint} from "../zernikalos/skeleton/ZJoint";

export class JointNode extends Object3D {
    type = "Joint"
    zbone: ZBone

    children: Object3D[] = []
}

export function parseSkeleton(obj: Bone): { skeleton: ZSkeleton, children: Object3D[] } {
    // Only root bones will be processed here
    if (obj.parent.type === "Bone") {
        return
    }

    const children: Object3D[] = []
    const joints: Map<string, JointNode> = new Map()
    const root = recursiveParseSkeleton(obj, undefined, children, joints)
    const skeleton = new ZSkeleton()
    skeleton.root = root

    return {skeleton, children: [...joints.values()]}
}

export function parseJoint(joint: JointNode): {joint: ZJoint, children: Object3D[]} {
    const zjoint = new ZJoint()
    zjoint.bone = joint.zbone
    zjoint.name = joint.name
    return {joint: zjoint, children: joint.children}
}

function recursiveParseSkeleton(obj: Object3D, zparent: ZBone | undefined, children: Object3D[], joints: Map<string, JointNode>) {
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

    zbone.children = obj.children
        .map((bone: Object3D) => recursiveParseSkeleton(bone, zbone, children, joints))
        .filter((bone: ZBone) => !isNil(bone))

    return zbone
}

function parseBone(bone: Object3D): ZBone {
    if (bone.type !== "Bone") {
        return
    }

    const zbone = new ZBone()

    zbone.name = bone.name
    zbone.transform = parseTransform(bone)

    return zbone
}
