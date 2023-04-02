import {ZBuffer} from "./ZBuffer";
import {Zko} from "../../proto";

export class ZIndexBuffer extends ZBuffer {
    constructor() {
        super()
        this.targetBuffer = Zko.BufferTargetType.ELEMENT_ARRAY_BUFFER
    }
}
