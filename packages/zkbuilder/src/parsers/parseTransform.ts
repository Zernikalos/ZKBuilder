import {Matrix4, Object3D} from "three";
import {ZTransform} from "@/zernikalos";
import {ZVector3} from "@/zernikalos";
import {ZQuaternion} from "@/zernikalos";

export function parseTransform(obj: Object3D): ZTransform {
    const transform = new ZTransform()

    const position = obj.position
    transform.position = ZVector3.initWithValues(position.x, position.y, position.z)

    const quaternion = obj.quaternion
    transform.rotation = ZQuaternion.initWithValues(quaternion.w, quaternion.x, quaternion.y, quaternion.z)

    const scale = obj.scale
    transform.scale = ZVector3.initWithValues(scale.x, scale.y, scale.z)

    return transform
}

export function parseTransformFromMatrix4(matrix: Matrix4): ZTransform {
    const transform = new ZTransform()

    transform.position = ZVector3.initWithValues(matrix.elements[12], matrix.elements[13], matrix.elements[14])
    transform.rotation = ZQuaternion.initWithValues(matrix.elements[0], matrix.elements[1], matrix.elements[2], matrix.elements[3])
    transform.scale = ZVector3.initWithValues(matrix.elements[0], matrix.elements[1], matrix.elements[2])

    return transform
}