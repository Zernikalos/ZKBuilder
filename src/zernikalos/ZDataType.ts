import {zernikalos} from "@zernikalos/zernikalos"
import ZDataType = zernikalos.ZDataType
import ZBaseType = zernikalos.ZBaseType;
import ZFormatType = zernikalos.ZFormatType
import ZTypes = zernikalos.ZTypes
import {Zko} from "../proto"

const ogFromObject = Zko.ZkDataType.fromObject
Zko.ZkDataType.fromObject = (obj: any) => {
    if (obj instanceof Zko.ZkDataType) {
        return ogFromObject(obj)
    }
    const newObj = {type: obj.type.ordinal, format: obj.format.ordinal}
    return ogFromObject(newObj)
}

export {ZDataType, ZBaseType, ZFormatType, ZTypes}