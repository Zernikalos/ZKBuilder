import {ZBoneFrameTransform} from "./ZBoneFrameTransform";

export class ZKeyFrame {
    time: number
    pose: Map<string, ZBoneFrameTransform> = new Map()

    constructor(time: number) {
        this.time = time
    }
}
