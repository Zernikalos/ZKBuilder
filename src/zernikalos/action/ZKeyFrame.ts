import {ZBoneFrameTransform} from "./ZBoneFrameTransform";
import {Zko} from "../../../protobuild";

export class ZKeyFrame {
    time: number
    pose: Map<string, ZBoneFrameTransform> = new Map()

    constructor(time: number) {
        this.time = time
    }
}

const ogFromObject = Zko.ZkKeyFrame.fromObject
Zko.ZkKeyFrame.fromObject = (obj: any) => {
    if (obj instanceof Zko.ZkKeyFrame) {
        return ogFromObject(obj)
    }
    const newObj = {
        time: obj.time,
        pose: Object.fromEntries(obj.pose)
    }
    return ogFromObject(newObj)
}
