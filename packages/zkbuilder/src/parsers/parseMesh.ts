import {BufferAttribute, BufferGeometry, InterleavedBufferAttribute, Mesh, SkinnedMesh, TrianglesDrawMode} from "three"
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils"
import {ZMesh} from "../zernikalos/mesh/ZMesh"
import {ZRawBuffer} from "../zernikalos/mesh/ZRawBuffer"
import {ZBuffer} from "../zernikalos/mesh/ZBuffer"
import _ from "lodash"
import {ZBufferKey} from "../zernikalos/mesh/ZBufferKey"
import {ATTR_INDEX, ATTRS} from "../constants";
import {ZBaseType, ZDataType, ZFormatType} from "../zernikalos/ZDataType"
import {Attrib} from "../constants/Attribs"
import {ParserContext} from "./ParserContext"

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
    if (array instanceof Int8Array) {
        return ZBaseType.BYTE
    }
    if (array instanceof Uint8Array) {
        return ZBaseType.UNSIGNED_BYTE
    }
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
    throw new Error(`Unable to detect base type for attr: ${attr.name}`)
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
    throw new Error(`Unable to detect format type for attr: ${attr.name}`)
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
 * @param zattr
 */
function parseBufferKey(attr: BufferAttribute | InterleavedBufferAttribute, zattr: Attrib): ZBufferKey {
    if (_.isNil(attr)) {
        throw new Error("Attributes must be defined when exported")
    }
    const zKey = new ZBufferKey()
    zKey.id = zattr.id
    zKey.dataType = detectDataType(attr)
    zKey.name = zattr.name
    zKey.size = attr.itemSize
    zKey.count = attr.count
    zKey.normalized = attr.normalized
    // @ts-ignore
    zKey.offset = (attr as BufferAttribute)?.updateRange?.offset ?? 0
    zKey.stride = (attr as InterleavedBufferAttribute)?.data?.stride ?? 0
    // TODO: This is not correct if there are less buffers, interleaved
    zKey.bufferId = zattr.id
    return zKey
}

function parseBuffer(buffAttr: BufferAttribute | InterleavedBufferAttribute, zattr: Attrib): ZRawBuffer {
    // Creating a copy first is required in order to avoid issues with shared memory
    const copyData = buffAttr.array.slice()
    const data = new Int8Array(copyData.buffer)
    return new ZRawBuffer(zattr.id, data)
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
        const indicesKey = parseBufferKey(geometry.index, ATTR_INDEX)
        const indicesBuffer = parseBuffer(geometry.index, ATTR_INDEX)

        indicesKey.isIndexBuffer = true

        keys.push(indicesKey)
        rawBuffers.push(indicesBuffer)
        attrCounter++
    }

    const filteredAttributes = filterAttributes(geometry)
    for (const [threeName, attr] of filteredAttributes) {
        if (attr instanceof BufferAttribute || attr instanceof InterleavedBufferAttribute) {
            const zattr = findZAttributeByName(threeName)
            const zKey = parseBufferKey(attr, zattr)
            const zBuffer = parseBuffer(attr, zattr)

            keys.push(zKey)
            rawBuffers.push(zBuffer)
            attrCounter++
        }
    }

    return {keys, rawBuffers}
}

/**
 * Parses a three geometry and converts it into a {ZMesh}
 * @param ctx
 * @param mesh
 */
export function parseMesh(ctx: ParserContext, mesh: Mesh | SkinnedMesh): ZMesh {
    // const b = BufferGeometryUtils
    // BufferGeometryUtils.mergeBufferAttributes(geometry.attributes)

    if (ctx.hasComponent(mesh.uuid)) {
        return ctx.getComponent(mesh.uuid) as ZMesh
    }

    let geometry = mesh.geometry
    const zmesh = ZMesh.init()

    geometry = sanitizeGeometry(geometry)

    const {keys, rawBuffers} = parseBuffersAndKeys(geometry)

    const buffers = buildZBuffers(keys, rawBuffers)
    buffers.forEach(buff => zmesh.addBuffer(buff))
    ctx.registerComponent(mesh.uuid, zmesh)

    return zmesh
}

// TODO: Make this optional with a flag
// In case no index is reported create it
function sanitizeGeometry(geometry: BufferGeometry) {
    if (_.isNil(geometry.index)) {
        geometry = BufferGeometryUtils.mergeVertices(geometry)
    }
    if (!geometry.hasAttribute("normal")) {
        geometry.computeVertexNormals()
    }
    geometry = BufferGeometryUtils.toTrianglesDrawMode(geometry, TrianglesDrawMode)

    return geometry
}

function buildZBuffers(keys: ZBufferKey[], rawBuffers: ZRawBuffer[]): ZBuffer[] {
    return keys.map(key => {
        const rawBuffer = _.find(rawBuffers, (rawBuff) => rawBuff.id === key.bufferId)
        return ZBuffer.initWithArgs(
            key.id,
            key.dataType,
            key.name,
            key.size,
            key.count,
            key.normalized,
            key.offset,
            key.stride,
            key.isIndexBuffer,
            rawBuffer.id,
            rawBuffer.dataArray
        )
    })
}
