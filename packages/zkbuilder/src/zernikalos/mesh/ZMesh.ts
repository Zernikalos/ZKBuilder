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
    const {bufferContents, bufferKeys} = writeBuffers(buffers as any as {[key: string]: ZBuffer}[])

    return ogFromObject({
        refId: obj.refId,
        bufferKeys,
        bufferContents
    })
}

/**
 * Interface representing a temporary buffer content.
 *
 * This interface contains the structure for handling temporary buffers
 * with a unique identifier and a data array containing raw byte data.
 */
interface TempBufferContent {
    id: number,
    dataArray: Int8Array
}

/**
 * Writes the buffers into a temporary format that can be serialized.
 * @param buffers
 */
function writeBuffers(buffers: {[key: string]: ZBuffer}[]) {
    const bufferContents: TempBufferContent[] = []
    const bufferKeys = []

    // We need to find the index of the BufferContent that contains the same data as the current buffer,
    const findWrittenBufferConentIndex = (dataArray: Int8Array) => {
        return bufferContents.findIndex((buff) => buff.dataArray === dataArray)
    }

    // We need to write the buffers into a temporary format that can be serialized.
    for (const pairBuff of buffers) {
        const buff = pairBuff.value
        
        let currentBufferContent: TempBufferContent
        const currentBufferContentIdx = findWrittenBufferConentIndex(buff.dataArray)
        // If the buffer is not already written, we need to write it into the bufferContents array.
        if (currentBufferContentIdx == -1) {
            currentBufferContent = {
                id: bufferContents.length,
                dataArray: buff.dataArray
            }
            bufferContents.push(currentBufferContent)
        } else {
            currentBufferContent = bufferContents[currentBufferContentIdx]
        }
        bufferKeys.push(createTempBufferKey(buff, currentBufferContent))
    }

    return {bufferContents, bufferKeys}
}

/**
 * Creates a temporary buffer key from a ZBuffer object.
 * @param buff
 * @param tempBufferContent
 */
function createTempBufferKey(buff: ZBuffer, tempBufferContent: TempBufferContent): Partial<ZBufferKey> {
    return {
        bufferId: tempBufferContent.id,
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
