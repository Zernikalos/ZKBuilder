import {ZBone} from "./ZBone";
import {ZObject, ZObjectType} from "../ZObject";

export class ZSkeleton extends ZObject {
    type = ZObjectType.SKELETON

    root: ZBone
}