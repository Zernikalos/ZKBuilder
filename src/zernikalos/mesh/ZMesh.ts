import {ZBufferKey} from "./ZBufferKey";
import {ZIndexBuffer} from "./ZIndexBuffer";
import {ZVertexBuffer} from "./ZVertexBuffer";

export class ZMesh {
    indices: ZIndexBuffer = new ZIndexBuffer()

    private _bufferKeys: Map<string, ZBufferKey> = new Map()
    private _buffers: Map<string, ZVertexBuffer> = new Map()

    public get bufferKeys(): {[key: string]: ZBufferKey} {
        return Object.fromEntries(this._bufferKeys)
    }

    public get buffers(): {[key: string]: ZVertexBuffer} {
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

    public setVertexBuffer(key: string, buffer: ZVertexBuffer) {
        this._buffers.set(key, buffer)
    }
}
