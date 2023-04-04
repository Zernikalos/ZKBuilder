import {ZObject, ZObjectType} from "./ZObject"
import {ZPerspectiveLens} from "./camera/ZPerspectiveLens";
import {ZLens} from "./camera/ZLens";

export class ZCamera extends ZObject {
    type = ZObjectType.CAMERA
    lens: ZLens = new ZPerspectiveLens()
}
