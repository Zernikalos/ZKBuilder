import {zernikalos} from "@zernikalos/zernikalos"
import {Zko} from "../../proto";
import ZKeyFrame = zernikalos.action.ZKeyFrame
import {kotlinMapToJsObject} from "../../utils/mapFlatJs";

export {ZKeyFrame}

const ogFromObject = Zko.ZkKeyFrame.fromObject
Zko.ZkKeyFrame.fromObject = (obj: any) => {
    if (obj instanceof Zko.ZkKeyFrame) {
        return ogFromObject(obj)
    }
    const newObj = {
        time: obj.time,
        pose: kotlinMapToJsObject(obj.pose),
    }
    return ogFromObject(newObj)
}
