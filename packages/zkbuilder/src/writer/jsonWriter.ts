import stringifyObject from '../utils/stringifyObject'

import {writeZko} from "./baseWriter"
import {ExportOptions} from "../zkExport"
import {ZkoParsed} from "../parsers";

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

export async function jsonWrite(zkParsed: ZkoParsed, options: ExportOptions): Promise<string> {
    const {beauty} = options
    const zkoFile = await writeZko(zkParsed)

    if (beauty) {
        return stringifyObject(zkoFile)
    }
    return JSON.stringify(zkoFile, jsonReplacer)
}
