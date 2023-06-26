import {BufferAttribute, BufferGeometry, InterleavedBufferAttribute} from "three"
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils"
import {ZMesh} from "../zernikalos/mesh/ZMesh"
import {ZVertexBuffer} from "../zernikalos/mesh/ZVertexBuffer";
import { isNil } from "lodash";
import { Zko } from "../proto";
import { ZBufferKey } from "../zernikalos/mesh/ZBufferKey";
import { ATTRS } from "../constants";
import _ from "lodash";
import {ZIndexBuffer} from "../zernikalos/mesh/ZIndexBuffer";

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
function detectDataType(attr: BufferAttribute | InterleavedBufferAttribute): Zko.DataType {
    const array = attr.array
    if (array instanceof Int16Array) {
        return Zko.DataType.SHORT
    }
    if (array instanceof Uint16Array) {
        return Zko.DataType.USHORT
    }
    if (array instanceof Int32Array) {
        return Zko.DataType.INT
    }
    if (array instanceof Uint32Array) {
        return Zko.DataType.UINT
    }
    if (array instanceof Float32Array) {
        return Zko.DataType.FLOAT
    }
    if (array instanceof Float64Array) {
        return Zko.DataType.DOUBLE
    }
}

/**
 * Parses a single attribute key, converts it from a three attribute into a {ZAttributeKey}
 * @param attr
 * @param attrCounter
 */
function parseAttributeKey(attr: BufferAttribute | InterleavedBufferAttribute, attrCounter: number): ZBufferKey {
    if (isNil(attr)) {
        throw new Error("Attributes must be defined when exported")
    }
    const attribute = new ZBufferKey(attrCounter)
    attribute.dataType = detectDataType(attr)
    attribute.size = attr.itemSize
    attribute.count = attr.count
    attribute.normalized = attr.normalized
    attribute.offset = (attr as BufferAttribute)?.updateRange?.offset ?? 0
    attribute.stride = (attr as InterleavedBufferAttribute)?.data?.stride ?? 0
    return attribute
}

/**
 * Given a three geometry they are transformed into a map of name {string} <-> {ZAttributeKey}
 * @param geometry
 */
export function parseAttributeKeys(geometry: BufferGeometry): Map<string, ZBufferKey> {
    const keys: Map<string, ZBufferKey> = new Map()
    let attrCounter = 0

    // if (!_.isNil(geometry.index)) {
    //     const indicesKey = parseAttributeKey(geometry.index, attrCounter)
    //     keys.set("indices", indicesKey)
    //     attrCounter++
    // }

    const filteredAttributes = filterAttributes(geometry)
    for (const [key, attr] of filteredAttributes) {
        if (attr instanceof BufferAttribute || attr instanceof InterleavedBufferAttribute) {
            keys.set(key, parseAttributeKey(attr, attrCounter))
            attrCounter++
        }
    }
    return keys
}

/**
 * Parses a three geometry and converts it into a {ZMesh}
 * @param geometry
 */
export function parseMesh(inputGeometry: BufferGeometry): ZMesh {
    // const b = BufferGeometryUtils
    // BufferGeometryUtils.mergeBufferAttributes(geometry.attributes)

    let geometry = inputGeometry
    const mesh = new ZMesh()

    // TODO: Make this optional with a flag
    // In case no index is reported create it
    if (_.isNil(geometry.index)) {
        geometry = BufferGeometryUtils.mergeVertices(geometry)
    }

    mesh.setBufferKeys(parseAttributeKeys(geometry))

    mesh.indices = new ZIndexBuffer()
    // @ts-ignore
    mesh.indices.dataArray = geometry.index?.array.length > 0 ? new Int8Array(geometry.index?.array.buffer) : new Int8Array([])
    mesh.indices.size = geometry.index?.itemSize
    mesh.indices.count = geometry.index?.count

    const filteredAttributes = filterAttributes(geometry)
    for (const [key, attr] of filteredAttributes) {
        // @ts-ignore
        const data = new Uint8Array(attr.array.buffer)
        const vertexBuffer = new ZVertexBuffer()
        vertexBuffer.dataArray = data
        mesh.setVertexBuffer(key, vertexBuffer)
    }

    return mesh
}
