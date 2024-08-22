import {parseObject} from "./parsers";
import {postProcess} from "./post";
import {ZkoParseableObject} from "./formats/ZkoParseableObject";
import {ZObject} from "./zernikalos/ZObject";
import _ from "lodash";
import {IdGenerator} from "./utils/IdGenerator";
import {preProcess} from "./pre";
import {parseActions, ZSkeletalAction} from "./parsers/parseActions";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ParseOptions {

}

export const DEFAULT_PARSE_OPTIONS: ParseOptions = {

}

export interface ZkoParsed {
    root: ZObject
    actions?: ZSkeletalAction[]
}

export async function zkParse(parseableObject: ZkoParseableObject, _options: ParseOptions): Promise<ZkoParsed> {
    // @ts-ignore
    const mergedOptions = _.merge({}, DEFAULT_PARSE_OPTIONS)

    IdGenerator.parseBegin()

    const threeObj = preProcess(parseableObject._threeObj, mergedOptions)
    const actions  = parseableObject._actions

    try {
        let zObj = await parseObject(threeObj)
        const zactions = parseActions(actions)

        zObj = postProcess(zObj)

        IdGenerator.reset()
        return {root: zObj, actions: zactions}
    } catch (e) {
        console.error(`Error parsing the object. Error: ${e}`)
    }

}
