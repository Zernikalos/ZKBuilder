import {ZObject} from "./zernikalos/ZObject";
import {buf2hex} from "./utils/buf2hex";
import merge from "lodash/merge";
import {jsonWrite} from "./writer/jsonWriter";
import {protoWrite} from "./writer/protoWriter";
import {objectWrite} from "./writer/objectWriter";
import {Zko} from "../protobuild";

export interface ExportOptions {
    format: 'json' | 'proto' | 'object'
    beauty?: boolean
    stringify?: boolean
}

export const DEFAULT_EXPORT_OPTIONS: ExportOptions = {
    format: "json",
    beauty: false,
    stringify: false
}

export async function zkExport(zkObj: ZObject, options: ExportOptions = DEFAULT_EXPORT_OPTIONS) {
    let result

    const mergedOptions = merge({}, DEFAULT_EXPORT_OPTIONS, options)
    const {format, beauty} = mergedOptions
    switch (format) {
        case "json":
            result = await jsonWrite(zkObj, {beauty})
            break
        case "proto":
            result = await protoWrite(zkObj)
            break
        case "object":
            result = await objectWrite(zkObj)
            break
    }
    if (options.stringify) {
        result = stringify(result)
    }
    return result
}

function stringify(parsed: string | Uint8Array | Zko.ProtoZkObject): string {
    if (typeof parsed === 'string') {
        return parsed
    } else if (parsed instanceof Uint8Array) {
        return buf2hex(parsed)
    } else if (parsed instanceof Zko.ProtoZkObject) {
        return JSON.stringify(parsed)
    }
}
