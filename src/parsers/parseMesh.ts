import {BufferGeometry} from "three"
// import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils"
import {parseAttributeKeys} from "./parseAttributeKeys"
import {ZMesh} from "../zernikalos/mesh/ZMesh"
import {ZVertexBuffer} from "../zernikalos/mesh/ZVertexBuffer";
import {filterAttributes} from "./filterAttributes";

export function parseMesh(geometry: BufferGeometry) {
    // const b = BufferGeometryUtils
    // BufferGeometryUtils.mergeBufferAttributes(geometry.attributes)

    const mesh = new ZMesh()

    mesh.setAttributeKeys(parseAttributeKeys(geometry))

    // @ts-ignore
    mesh.indices.dataArray = geometry.index?.array.length > 0 ? new Int8Array(geometry.index?.array.buffer) : new Int8Array([])
    mesh.indices.itemSize = geometry.index?.itemSize
    mesh.indices.count = geometry.index?.count

    const filteredAttributes = filterAttributes(geometry)
    for (const [key, attr] of filteredAttributes) {
        // @ts-ignore
        const data = new Uint8Array(attr.array.buffer)
        const vertexBuffer = new ZVertexBuffer()
        vertexBuffer.dataArray = data
        vertexBuffer.itemSize = attr.itemSize
        vertexBuffer.count = attr.count
        mesh.setVertexBuffer(key, vertexBuffer)
    }

    return mesh
}
