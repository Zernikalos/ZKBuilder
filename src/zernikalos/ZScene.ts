import {ZObject, ZObjectType} from "./ZObject";
import {ZColor} from "./ZColor";

export class ZScene extends ZObject {
    type: ZObjectType = ZObjectType.SCENE
    clearColor: ZColor = new ZColor(0.5, 0.5, 0.5, 0.5)
}
