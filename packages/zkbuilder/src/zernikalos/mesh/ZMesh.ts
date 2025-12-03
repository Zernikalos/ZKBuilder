import {zernikalos} from "@zernikalos/zernikalos"
import ZMesh = zernikalos.components.mesh.ZMesh
import {Zko} from "../../proto";
import {mapFlatJs} from "../../utils/mapFlatJs";
import ZBuffer = zernikalos.components.mesh.ZBuffer;
import {ZBufferKey} from "./ZBufferKey";

export {ZMesh}

const ogFromObject = Zko.ZkMesh.fromObject

Zko.ZkMesh.fromObject = (obj: any) => {
    if (obj instanceof Zko.ZkMesh) {
        return ogFromObject(obj)
    }
    const buffers = mapFlatJs(obj.buffers)
    const {rawBuffers, bufferKeys} = writeBuffers(buffers as any as {[key: string]: ZBuffer}[])

    return ogFromObject({
        refId: obj.refId,
        bufferKeys,
        rawBuffers
    })
}

/**
 * Interface representing a temporary raw buffer.
 *
 * This interface contains the structure for handling temporary buffers
 * with a unique identifier and a data array containing raw byte data.
 */
interface TempRawBuffer {
    id: number,
    dataArray: Int8Array
}

/**
 * Writes the buffers into a temporary format that can be serialized.
 * @param buffers
 */
function writeBuffers(buffers: {[key: string]: ZBuffer}[]) {
    const rawBuffers: TempRawBuffer[] = []
    const bufferKeys = []

    // We need to find the index of the raw buffer that contains the same data as the current buffer,
    const findWrittenRawBufferIndex = (dataArray: Int8Array) => {
        return rawBuffers.findIndex((buff) => buff.dataArray === dataArray)
    }

    // We need to write the buffers into a temporary format that can be serialized.
    for (const pairBuff of buffers) {
        const buff = pairBuff.value
        
        let currentRawBuffer: TempRawBuffer
        const currentRawBufferIdx = findWrittenRawBufferIndex(buff.dataArray)
        // If the buffer is not already written, we need to write it into the rawBuffers array.
        if (currentRawBufferIdx == -1) {
            currentRawBuffer = {
                id: rawBuffers.length,
                dataArray: buff.dataArray
            }
            rawBuffers.push(currentRawBuffer)
        } else {
            currentRawBuffer = rawBuffers[currentRawBufferIdx]
        }
        bufferKeys.push(createTempBufferKey(buff, currentRawBuffer))
    }

    return {rawBuffers, bufferKeys}
}

/**
 * Creates a temporary buffer key from a ZBuffer object.
 * @param buff
 * @param tempRawBuffer
 */
function createTempBufferKey(buff: ZBuffer, tempRawBuffer: TempRawBuffer): Partial<ZBufferKey> {
    return {
        bufferId: tempRawBuffer.id,
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
