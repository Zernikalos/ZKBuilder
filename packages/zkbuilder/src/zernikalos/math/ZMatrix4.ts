import {zernikalos} from "@zernikalos/zernikalos"
import {Zko} from "../../proto"
import ZMatrix4 = zernikalos.math.ZMatrix4

export {ZMatrix4}

const ogFromObject = Zko.ZkMatrix4.fromObject

Zko.ZkMatrix4.fromObject = (obj: any) => {
    if (obj instanceof Zko.ZkMatrix4) {
        return ogFromObject(obj)
    }

    return ogFromObject({
        floatArray: [...obj.floatArray]
    })
}