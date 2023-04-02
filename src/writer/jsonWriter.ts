import stringifyObject from '../utils/stringifyObject';

import {ZObject} from "../zernikalos/ZObject"
import {protoTree} from "./protoWriter";

function jsonReplacer(_key: string, value: any) {
    if (value instanceof Map) {
        return Object.fromEntries(value)
    }
    if (ArrayBuffer.isView(value)) {
        //@ts-ignore
        return Array.from(value)
    }
    return value
}

export async function jsonWrite(node: ZObject, {beauty}: {beauty?: boolean}): Promise<string> {
    if (beauty) {
        return stringifyObject(await protoTree(node))
    }
    return JSON.stringify(node, jsonReplacer)
}
