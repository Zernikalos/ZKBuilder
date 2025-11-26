import { ZkoFormat } from "./proto"
import { InputFileFormat, LoadOptions, zkLoad } from "./zkLoad"
import { DEFAULT_PARSE_OPTIONS, ParseOptions, zkParse } from "./zkParse"
import { DEFAULT_EXPORT_OPTIONS, ExportFormat, ExportOptions, zkExport } from "./zkExport"
import { ZkoParseableObject } from "./formats/ZkoParseableObject"
import { ZkoParsed } from "./parsers"
import _ from "lodash"

export interface ConvertOptions {
    parsingOptions?: ParseOptions
    exportOptions?: ExportOptions
}

export const DEFAULT_CONVERT_OPTIONS: ConvertOptions = {
    parsingOptions: DEFAULT_PARSE_OPTIONS,
    exportOptions: DEFAULT_EXPORT_OPTIONS
}

export interface ZkConvertResult {
    filePath: string
    inputFormat: InputFileFormat
    outputFormat: ExportFormat
    _loaded: ZkoParseableObject
    zko: ZkoParsed
    exported: string | Uint8Array | ZkoFormat
}

export async function zkConvert(loadOptions: LoadOptions, convertOptions: ConvertOptions = DEFAULT_CONVERT_OPTIONS): Promise<ZkConvertResult> {
    const options = _.merge(DEFAULT_CONVERT_OPTIONS, convertOptions)
    const loadedData = await zkLoad(loadOptions)
    const parsedData = await zkParse(loadedData, options.parsingOptions)
    const exportedData = await zkExport(parsedData, options.exportOptions)

    return {
        filePath: loadOptions.filePath,
        inputFormat: loadOptions.format,
        outputFormat: options.exportOptions.format,
        _loaded: loadedData,
        zko: parsedData,
        exported: exportedData
    }
}