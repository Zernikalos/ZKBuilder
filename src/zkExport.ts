import {buf2hex} from "./utils/buf2hex";
import {merge} from "lodash";
import {jsonWrite} from "./writer/jsonWriter";
import {protoWrite} from "./writer/protoWriter";
import {objectWrite} from "./writer/objectWriter";
import {ZkoParsed} from "./zkParse";
import {Zko, ZkoFile} from "./proto";

export interface ExportOptions {
    format: 'json' | 'proto' | 'object'
    beauty?: boolean
    stringify?: boolean
}

export const DEFAULT_EXPORT_OPTIONS: ExportOptions = {
    format: "proto",
    beauty: false,
    stringify: false
}

export async function zkExport(zkParsed: ZkoParsed, options: ExportOptions = DEFAULT_EXPORT_OPTIONS): Promise<string | Uint8Array | ZkoFile> {
    let result

    const mergedOptions = merge({}, DEFAULT_EXPORT_OPTIONS, options)
    const {format} = mergedOptions
    switch (format) {
        case "json":
            result = await jsonWrite(zkParsed, mergedOptions)
            break
        case "proto":
            result = await protoWrite(zkParsed)
            break
        case "object":
            result = await objectWrite(zkParsed)
            break
    }
    if (options.stringify) {
        result = stringify(result)
    }
    return result
}

function stringify(parsed: string | Uint8Array | ZkoFile): string {
    if (typeof parsed === 'string') {
        return parsed
    } else if (parsed instanceof Uint8Array) {
        return buf2hex(parsed)
    } else if (parsed instanceof Zko.ProtoZkObject) {
        return JSON.stringify(parsed)
    }
}
