import _ from "lodash"
import stringifyObject from '../utils/stringifyObject'

import {ZObject} from "../zernikalos/ZObject"
import {writeTree} from "./baseWriter"
import {ExportOptions} from "../zkExport"

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

export async function jsonWrite(node: ZObject, options: ExportOptions): Promise<string> {
    const {beauty} = options
    const treeNode = await writeTree(node)

    if (beauty) {
        return stringifyObject(treeNode)
    }
    return JSON.stringify(treeNode, jsonReplacer)
}
