import {Object3D} from "three";
import {ZTransform} from "../zernikalos/ZTransform";
import {ZVector3} from "../zernikalos/math/ZVector3";
import {ZQuaternion} from "../zernikalos/math/ZQuaternion";

export function parseTransform(obj: Object3D): ZTransform {
    const transform = new ZTransform()

    const position = obj.position
    transform.location = new ZVector3(position.x, position.y, position.z)

    const quaternion = obj.quaternion
    transform.rotation = new ZQuaternion(quaternion.w, quaternion.x, quaternion.y, quaternion.z)

    const scale = obj.scale
    transform.scale = new ZVector3(scale.x, scale.y, scale.z)

    return transform
}
