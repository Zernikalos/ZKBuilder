import {ZBuffer} from "./ZBuffer";
import {Zko} from "../../proto";

export class ZVertexBuffer extends ZBuffer {
    constructor() {
        super()
        this.targetBuffer = Zko.BufferTargetType.ARRAY_BUFFER
    }
}
