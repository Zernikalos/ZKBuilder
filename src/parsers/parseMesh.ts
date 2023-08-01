import {BufferAttribute, BufferGeometry, InterleavedBufferAttribute} from "three"
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils"
import {ZMesh} from "../zernikalos/mesh/ZMesh"
import {ZBuffer} from "../zernikalos/mesh/ZBuffer";
import { isNil } from "lodash";
import { Zko } from "../proto";
import { ZBufferKey } from "../zernikalos/mesh/ZBufferKey";
import { ATTRS } from "../constants";
import _ from "lodash";

/**
 * Filters only recognized attributes by the parser
 * @param geometry
 */
export function filterAttributes(geometry: BufferGeometry) {
    return Object.entries(geometry.attributes).filter(([key, _attr]) => !_.isNil(ATTRS.findByThreeName(key)))
}

/**
 * Detects the appropiate data type for a buffer attribute
 * @param attr
 */
function detectDataType(attr: BufferAttribute | InterleavedBufferAttribute): Zko.ZDataType {
    const array = attr.array
    if (array instanceof Int16Array) {
        return Zko.ZDataType.SHORT
    }
    if (array instanceof Uint16Array) {
        return Zko.ZDataType.USHORT
    }
    if (array instanceof Int32Array) {
        return Zko.ZDataType.INT
    }
    if (array instanceof Uint32Array) {
        return Zko.ZDataType.UINT
    }
    if (array instanceof Float32Array) {
        return Zko.ZDataType.FLOAT
    }
    if (array instanceof Float64Array) {
        return Zko.ZDataType.DOUBLE
    }
}

/**
 * Parses a single attribute key, converts it from a three attribute into a {ZAttributeKey}
 * @param attr
 * @param attrCounter
 */
function parseBufferKey(attr: BufferAttribute | InterleavedBufferAttribute, attrCounter: number): ZBufferKey {
    if (isNil(attr)) {
        throw new Error("Attributes must be defined when exported")
    }
    const zKey = new ZBufferKey(attrCounter)
    zKey.dataType = detectDataType(attr)
    zKey.size = attr.itemSize
    zKey.count = attr.count
    zKey.normalized = attr.normalized
    zKey.offset = (attr as BufferAttribute)?.updateRange?.offset ?? 0
    zKey.stride = (attr as InterleavedBufferAttribute)?.data?.stride ?? 0
    zKey.bufferId = attrCounter
    return zKey
}

function parseBuffer(buffAttr: BufferAttribute | InterleavedBufferAttribute, attrCounter: number): ZBuffer {
    const data = new Uint8Array(buffAttr.array.buffer)
    const zBuffer = new ZBuffer()
    zBuffer.id = attrCounter
    zBuffer.dataArray = data
    return zBuffer
}

/**
 * Given a three geometry they are transformed into a map of name {string} <-> {ZAttributeKey}
 * @param geometry
 */
function parseBuffersAndKeys(geometry: BufferGeometry) {
    const keys: Map<string, ZBufferKey> = new Map()
    const buffers: Map<string, ZBuffer> = new Map()

    let attrCounter = 0

    if (!_.isNil(geometry.index)) {
        const indicesKey = parseBufferKey(geometry.index, attrCounter)
        const indicesBuffer = parseBuffer(geometry.index, attrCounter)

        indicesKey.isIndexBuffer = true

        buffers.set("indices", indicesBuffer)
        keys.set("indices", indicesKey)
        attrCounter++
    }

    const filteredAttributes = filterAttributes(geometry)
    for (const [key, attr] of filteredAttributes) {
        if (attr instanceof BufferAttribute || attr instanceof InterleavedBufferAttribute) {
            const zKey = parseBufferKey(attr, attrCounter)
            const zBuffer = parseBuffer(attr, attrCounter)

            keys.set(key, zKey)
            buffers.set(key, zBuffer)
            attrCounter++
        }
    }

    return {keys, buffers}
}

/**
 * Parses a three geometry and converts it into a {ZMesh}
 * @param geometry
 */
export function parseMesh(geometry: BufferGeometry): ZMesh {
    // const b = BufferGeometryUtils
    // BufferGeometryUtils.mergeBufferAttributes(geometry.attributes)

    const mesh = new ZMesh()

    // TODO: Make this optional with a flag
    // In case no index is reported create it
    if (_.isNil(geometry.index)) {
        geometry = BufferGeometryUtils.mergeVertices(geometry)
    }

    const {keys, buffers} = parseBuffersAndKeys(geometry)
    mesh.setBufferKeys(keys)
    mesh.setBuffers(buffers)

    return mesh
}
