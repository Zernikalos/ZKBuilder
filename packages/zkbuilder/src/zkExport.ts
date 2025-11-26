import {merge} from "lodash";
import {jsonWrite} from "./writer/jsonWriter";
import {protoWrite} from "./writer/protoWriter";
import {objectWrite} from "./writer/objectWriter";
import {ZkoParsed} from "./parsers";
import {Zko, ZkoFormat} from "./proto";
import _ from "lodash";

export type ExportFormat = 'json' | 'proto' | 'object'

export interface ExportOptions {
    format: ExportFormat
    beauty?: boolean
    stringify?: boolean
}

export const DEFAULT_EXPORT_OPTIONS: ExportOptions = {
    format: "proto",
    beauty: false,
    stringify: false
}

export async function zkExport(zkParsed: ZkoParsed, options: ExportOptions = DEFAULT_EXPORT_OPTIONS): Promise<string | Uint8Array | ZkoFormat> {
    let result

    if (_.isNil(zkParsed)) {
        throw new Error("ZkoParsed is required")
    }

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
        if (options.format === "proto") {
            throw new Error("Cannot stringify binary format")
        }
        result = stringify(result as string | ZkoFormat)
    }
    return result
}

function stringify(parsed: string | ZkoFormat): string {
    if (typeof parsed === 'string') {
        return parsed
    } else if (parsed instanceof Zko.ZkoObjectProto) {
        return JSON.stringify(parsed)
    }
}
