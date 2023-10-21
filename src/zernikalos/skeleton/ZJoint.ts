import {ZObject, ZObjectType} from "../ZObject";
import {ZBone} from "./ZBone";

export class ZJoint extends ZObject {
    type = ZObjectType.JOINT

    bone: ZBone
}