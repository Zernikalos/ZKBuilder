import {ZBufferKey} from "./ZBufferKey";
import {ZBuffer} from "./ZBuffer";

export class ZMesh {

    private _bufferKeys: Map<string, ZBufferKey> = new Map()
    private _buffers: Map<string, ZBuffer> = new Map()

    public get bufferKeys(): {[key: string]: ZBufferKey} {
        return Object.fromEntries(this._bufferKeys)
    }

    public get buffers(): {[key: string]: ZBuffer} {
        return Object.fromEntries(this._buffers)
    }

    public get bufferKeysMap() {
        return this._bufferKeys
    }

    public get buffersMap() {
        return this._buffers
    }

    public setBufferKey(key: string, attr: ZBufferKey) {
        this._bufferKeys.set(key, attr)
    }

    public setBufferKeys(keys: Map<string, ZBufferKey>) {
        for (const [key, attr] of keys.entries()) {
            this.setBufferKey(key, attr)
        }
    }

    public setBuffers(buffers: Map<string, ZBuffer>) {
        for (const [key, buff] of buffers.entries()) {
            this.setBuffer(key, buff)
        }
    }

    public setBuffer(key: string, buffer: ZBuffer) {
        this._buffers.set(key, buffer)
    }
}
