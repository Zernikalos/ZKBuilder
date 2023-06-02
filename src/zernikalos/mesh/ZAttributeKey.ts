import {Zko} from "../../proto"

export class ZAttributeKey {
    index = 0
    dataType: Zko.DataType = Zko.DataType.FLOAT
    size = 0
    count = 0
    normalized = false
    offset = 0
    stride = 0

    constructor(attrCounter: number) {
        this.index = attrCounter
    }
}
