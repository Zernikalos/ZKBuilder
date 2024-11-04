import {zernikalos} from "@zernikalos/zernikalos"
import ZMesh = zernikalos.components.mesh.ZMesh
import {Zko} from "../../proto";
import {mapFlatJs} from "../../utils/mapFlatJs";
import ZBuffer = zernikalos.components.mesh.ZBuffer;
import {ZBufferKey} from "./ZBufferKey";
import {ZRawBuffer} from "./ZRawBuffer";

export {ZMesh}

const ogFromObject = Zko.ZkMesh.fromObject

Zko.ZkMesh.fromObject = (obj: any) => {
    if (obj instanceof Zko.ZkMesh) {
        return ogFromObject(obj)
    }
    const buffers = mapFlatJs(obj.buffers)
    const bufferKeys = buffers.map((pair) => createTempBufferKey(pair.value))
    const rawBuffers = buffers.map((pair) => createTempRawBuffer(pair.value))

    return ogFromObject({
        refId: obj.refId,
        bufferKeys,
        rawBuffers
    })
}

function createTempBufferKey(buff: ZBuffer): Partial<ZBufferKey> {
    return {
        bufferId: buff.bufferId,
        count: buff.count,
        dataType: buff.dataType,
        id: buff.id,
        isIndexBuffer: buff.isIndexBuffer,
        name: buff.name,
        normalized: buff.normalized,
        offset: buff.offset,
        size: buff.size,
        stride: buff.stride
    }
}

function createTempRawBuffer(buff: ZBuffer): Partial<ZRawBuffer> {
    return {
        id: buff.bufferId,
        dataArray: buff.dataArray,
    }
}