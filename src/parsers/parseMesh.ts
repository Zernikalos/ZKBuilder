import {BufferAttribute, BufferGeometry, InterleavedBufferAttribute} from "three"
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils"
import {ZMesh} from "../zernikalos/mesh/ZMesh"
import {ZRawBuffer} from "../zernikalos/mesh/ZRawBuffer";
import _, {isNil} from "lodash";
import {ZBufferKey} from "../zernikalos/mesh/ZBufferKey";
import {ATTRS} from "../constants";
import {ZBaseType, ZDataType, ZFormatType} from "../zernikalos/ZDataType";
import {Attrib} from "../constants/Attribs";

/**
 * Filters only recognized attributes by the parser
 * @param geometry
 */
function filterAttributes(geometry: BufferGeometry) {
    return Object.entries(geometry.attributes).filter(([key, _attr]) => !_.isNil(ATTRS.findByThreeName(key)))
}

function findZAttributeByName(name: string): Attrib {
    return ATTRS.findByThreeName(name)
}

/**
 * Detects the appropriate base data type for a buffer key attribute
 * @param attr
 */
function detectBaseType(attr: BufferAttribute | InterleavedBufferAttribute): ZBaseType {
    const array = attr.array
    if (array instanceof Int16Array) {
        return ZBaseType.SHORT
    }
    if (array instanceof Uint16Array) {
        return ZBaseType.UNSIGNED_SHORT
    }
    if (array instanceof Int32Array) {
        return ZBaseType.INT
    }
    if (array instanceof Uint32Array) {
        return ZBaseType.UNSIGNED_INT
    }
    if (array instanceof Float32Array) {
        return ZBaseType.FLOAT
    }
    if (array instanceof Float64Array) {
        return ZBaseType.DOUBLE
    }
}

/**
 * Detects the appropriate base data type for a buffer key attribute
 * @param attr
 */
function detectFormatType(attr: BufferAttribute | InterleavedBufferAttribute): ZFormatType {
    const itemSize = attr.itemSize
    switch (itemSize) {
        case 1:
            return ZFormatType.SCALAR
        case 2:
            return ZFormatType.VEC2
        case 3:
            return ZFormatType.VEC3
        case 4:
            return ZFormatType.VEC4
    }
}

/**
 * Detects the appropriate data type for a buffer key attribute
 * @param attr
 */
function detectDataType(attr: BufferAttribute | InterleavedBufferAttribute): ZDataType {
    const baseType = detectBaseType(attr)
    const formatType = detectFormatType(attr)
    return new ZDataType(baseType, formatType)
}

/**
 * Parses a single attribute key, converts it from a three attribute into a {ZAttributeKey}
 * @param attr
 * @param attrName
 * @param attrCounter
 */
function parseBufferKey(attr: BufferAttribute | InterleavedBufferAttribute, attrName: string, attrCounter: number): ZBufferKey {
    if (isNil(attr)) {
        throw new Error("Attributes must be defined when exported")
    }
    const zKey = ZBufferKey.init()
    zKey.id = attrCounter
    zKey.dataType = detectDataType(attr)
    zKey.name = attrName
    zKey.size = attr.itemSize
    zKey.count = attr.count
    zKey.normalized = attr.normalized
    zKey.offset = (attr as BufferAttribute)?.updateRange?.offset ?? 0
    zKey.stride = (attr as InterleavedBufferAttribute)?.data?.stride ?? 0
    // TODO: This is not correct if there are less buffers, interleaved
    zKey.bufferId = attrCounter
    return zKey
}

function parseBuffer(buffAttr: BufferAttribute | InterleavedBufferAttribute, attrCounter: number): ZRawBuffer {
    const data = new Int8Array(buffAttr.array.buffer)
    const zBuffer = ZRawBuffer.initWithArgs(attrCounter, data)
    zBuffer.id = attrCounter
    zBuffer.dataArray = data
    return zBuffer
}

/**
 * Given a three geometry they are transformed into a map of name {string} <-> {ZAttributeKey}
 * @param geometry
 */
function parseBuffersAndKeys(geometry: BufferGeometry) {
    const keys: ZBufferKey[] = []
    const rawBuffers: ZRawBuffer[] = []

    let attrCounter = 0

    if (!_.isNil(geometry.index)) {
        const indicesKey = parseBufferKey(geometry.index, "indices", attrCounter)
        const indicesBuffer = parseBuffer(geometry.index, attrCounter)

        indicesKey.isIndexBuffer = true

        keys.push(indicesKey)
        rawBuffers.push(indicesBuffer)
        attrCounter++
    }

    const filteredAttributes = filterAttributes(geometry)
    for (const [threeName, attr] of filteredAttributes) {
        if (attr instanceof BufferAttribute || attr instanceof InterleavedBufferAttribute) {
            const zattr = findZAttributeByName(threeName)
            const zKey = parseBufferKey(attr, zattr.name, attrCounter)
            const zBuffer = parseBuffer(attr, attrCounter)

            keys.push(zKey)
            rawBuffers.push(zBuffer)
            attrCounter++
        }
    }

    return {keys, rawBuffers}
}

/**
 * Parses a three geometry and converts it into a {ZMesh}
 * @param geometry
 */
export function parseMesh(geometry: BufferGeometry): ZMesh {
    // const b = BufferGeometryUtils
    // BufferGeometryUtils.mergeBufferAttributes(geometry.attributes)

    const mesh = ZMesh.init()

    // TODO: Make this optional with a flag
    // In case no index is reported create it
    if (_.isNil(geometry.index)) {
        geometry = BufferGeometryUtils.mergeVertices(geometry)
    }

    const {keys, rawBuffers} = parseBuffersAndKeys(geometry)
    keys.forEach(key => mesh.addBufferKey(key))
    rawBuffers.forEach(buff => mesh.addRawBuffer(buff))

    return mesh
}
