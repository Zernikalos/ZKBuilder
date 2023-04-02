import {Zko} from "../../proto";

export class ZBuffer {
    targetBuffer: Zko.BufferTargetType
    usage: Zko.BufferUsageType
    count: number
    itemSize: number
    dataArray: Uint8Array

    constructor() {
        this.usage = Zko.BufferUsageType.STATIC_DRAW
    }
}
