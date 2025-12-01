import {Object3D} from "three";
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
