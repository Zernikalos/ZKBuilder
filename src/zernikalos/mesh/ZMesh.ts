import {ZAttributeKey} from "./ZAttributeKey";
import {ZIndexBuffer} from "./ZIndexBuffer";
import {ZVertexBuffer} from "./ZVertexBuffer";

export class ZMesh {
    indices: ZIndexBuffer = new ZIndexBuffer()

    private _attributeKeys: Map<string, ZAttributeKey> = new Map()
    private _vertices: Map<string, ZVertexBuffer> = new Map()

    public get attributeKeys(): {[key: string]: ZAttributeKey} {
        return Object.fromEntries(this._attributeKeys)
    }

    public get vertices(): {[key: string]: ZVertexBuffer} {
        return Object.fromEntries(this._vertices)
    }

    public get attributeKeysMap() {
        return this._attributeKeys
    }

    public get verticesMap() {
        return this._vertices
    }

    public setAttributeKey(key: string, attr: ZAttributeKey) {
        this._attributeKeys.set(key, attr)
    }

    public setAttributeKeys(keys: Map<string, ZAttributeKey>) {
        for (const [key, attr] of keys.entries()) {
            this.setAttributeKey(key, attr)
        }
    }

    public setVertexBuffer(key: string, buffer: ZVertexBuffer) {
        this._vertices.set(key, buffer)
    }
}
