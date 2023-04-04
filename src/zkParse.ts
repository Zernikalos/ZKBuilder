import {parseObject} from "./parsers";
import {postProcess} from "./post";
import {ZkoParseableObject} from "./formats/ZkoParseableObject";
import {ZObject} from "./zernikalos/ZObject";
import _ from "lodash";
import {IdGenerator} from "./utils/IdGenerator";
import {preProcess} from "./pre";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ParseOptions {
    defaultScene?: boolean
    defaultCamera?: boolean
}

export const DEFAULT_PARSE_OPTIONS: ParseOptions = {
    defaultScene: false,
    defaultCamera: false
}

export function zkParse(parseableObject: ZkoParseableObject, options: ParseOptions): ZObject {

    // @ts-ignore
    const mergedOptions = _.merge({}, DEFAULT_PARSE_OPTIONS, options)

    IdGenerator.parseBegin()

    const threeObj = preProcess(parseableObject._threeObj, mergedOptions)
    let zObj = parseObject(threeObj)
    zObj = postProcess(zObj)

    IdGenerator.reset()
    return zObj
}
