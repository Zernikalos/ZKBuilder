import {ZVector3} from "./math/ZVector3";
import {ZQuaternion} from "./math/ZQuaternion";

export class ZTransform {
    location: ZVector3 = new ZVector3(0, 0, 0)
    rotation: ZQuaternion = new ZQuaternion(1, 0, 0 ,0)
    scale: ZVector3 = new ZVector3(1, 1 , 1)
}
