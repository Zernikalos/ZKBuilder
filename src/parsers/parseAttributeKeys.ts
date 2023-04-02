import {BufferAttribute, BufferGeometry, InterleavedBufferAttribute} from "three"
import {isNil} from "lodash"
import {ZAttributeKey} from "../zernikalos/mesh/ZAttributeKey"
import {filterAttributes} from "./filterAttributes";

function parseAttributeKey(attr: BufferAttribute | InterleavedBufferAttribute, attrCounter: number): ZAttributeKey {
    if (isNil(attr)) {
        throw new Error("Attributes must be defined when exported")
    }
    const attribute = new ZAttributeKey(attrCounter)
    attribute.size = attr.itemSize
    attribute.count = attr.count
    attribute.normalized = attr.normalized
    attribute.offset = (attr as BufferAttribute)?.updateRange?.offset ?? 0
    attribute.stride = (attr as InterleavedBufferAttribute)?.data?.stride ?? 0
    return attribute
}

export function parseAttributeKeys(geometry: BufferGeometry): Map<string, ZAttributeKey> {
    const keys: Map<string, ZAttributeKey> = new Map()

    let attrCounter = 0
    const filteredAttributes = filterAttributes(geometry)
    for (const [key, attr] of filteredAttributes) {
        if (attr instanceof BufferAttribute || attr instanceof InterleavedBufferAttribute) {
            keys.set(key, parseAttributeKey(attr, attrCounter))
            attrCounter++
        }
    }
    return keys
}
