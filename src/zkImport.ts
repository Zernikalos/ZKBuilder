import merge from "lodash/merge"
import {zernikalos} from "@zernikalos/zernikalos"
import loadFromProto = zernikalos.loader.loadFromProto
import {ZObject} from "./zernikalos/ZObject";

export interface ImportOptions {
    data: string | Int8Array
}

export const DEFAULT_IMPORT_OPTIONS: Partial<ImportOptions> = {

}

export function zkImport(options: ImportOptions): ZObject {
    const mergedOptions = merge({}, DEFAULT_IMPORT_OPTIONS, options)
    const {data} = mergedOptions

    return loadFromProto(data as Int8Array)
}
