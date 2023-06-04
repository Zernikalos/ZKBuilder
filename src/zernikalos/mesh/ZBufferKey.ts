import {Zko} from "../../proto"

export class ZBufferKey {
    id: number = 0
    dataType: Zko.DataType = Zko.DataType.FLOAT
    size: number = 0
    count: number = 0
    normalized: boolean = false
    offset: number = 0
    stride: number = 0

    constructor(attrCounter: number) {
        this.id = attrCounter
    }
}
