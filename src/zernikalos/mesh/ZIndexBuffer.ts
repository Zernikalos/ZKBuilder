import {ZBuffer} from "./ZBuffer";

export class ZIndexBuffer extends ZBuffer {

    count: number
    size: number

    constructor() {
        super()
        this.isIndexBuffer = true
    }
}
