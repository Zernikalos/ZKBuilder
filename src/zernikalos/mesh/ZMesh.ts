import {ZBufferKey} from "./ZBufferKey";
import {ZRawBuffer} from "./ZRawBuffer";

export class ZMesh {

    public bufferKeys: ZBufferKey[] = []
    public rawBuffers: ZRawBuffer[] = []

    public addBufferKey(bufferKey: ZBufferKey) {
        this.bufferKeys.push(bufferKey)
    }

    public addBufferKeys(bufferKeys: ZBufferKey[]) {
        for (const key of bufferKeys) {
            this.addBufferKey(key)
        }
    }

    public addRawBuffers(rawBuffers: ZRawBuffer[]) {
        for (const buff of rawBuffers) {
            this.addRawBuffer(buff)
        }
    }

    public addRawBuffer(rawBuffer: ZRawBuffer) {
        this.rawBuffers.push(rawBuffer)
    }
}
