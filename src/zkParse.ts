import {parseObject} from "./parsers";
import {postProcess} from "./post";
import {ZkoParseableObject} from "./formats/ZkoParseableObject";
import {ZObject} from "./zernikalos/ZObject";
import _ from "lodash";
import {IdGenerator} from "./utils/IdGenerator";
import {preProcess} from "./pre";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ParseOptions {

}

export const DEFAULT_PARSE_OPTIONS: ParseOptions = {

}

export async function zkParse(parseableObject: ZkoParseableObject, _options: ParseOptions): Promise<ZObject> {

    // @ts-ignore
    const mergedOptions = _.merge({}, DEFAULT_PARSE_OPTIONS)

    IdGenerator.parseBegin()

    const threeObj = preProcess(parseableObject._threeObj, mergedOptions)
    try {
        let zObj = await parseObject(threeObj)
        zObj = postProcess(zObj)

        IdGenerator.reset()
        return zObj
    } catch (e) {
        console.error(`Error parsing the object. Error: ${e}`)
    }

}
