import {parseObject} from "./parsers";
import {postProcess} from "./post";
import {ZkoParseableObject} from "./formats/ZkoParseableObject";
import {ZObject} from "./zernikalos/ZObject";
import _ from "lodash";
import {IdGenerator} from "./utils/IdGenerator";
import {preProcess} from "./pre";
import {parseActions} from "./parsers/parseActions";
import {ZSkeletalAction} from "./zernikalos/action/ZSkeletalAction";
import {EnvSetup} from "./EnvSetup";
import { ZTexture } from "./zernikalos/material/ZTexture";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ParseOptions {

}

export const DEFAULT_PARSE_OPTIONS: ParseOptions = {

}

export interface ZkoParsed {
    root: ZObject,
    textures: ZTexture[],
    actions?: ZSkeletalAction[]
}

export async function zkParse(parseableObject: ZkoParseableObject, _options: ParseOptions = {}): Promise<ZkoParsed> {
    EnvSetup.setupEnv()
    // @ts-ignore
    const mergedOptions = _.merge({}, DEFAULT_PARSE_OPTIONS)

    IdGenerator.parseBegin()

    const threeObj = preProcess(parseableObject._threeObj, mergedOptions)
    const actions  = parseableObject._actions

    try {
        const {zObject, textures} = await parseObject(threeObj)
        const zactions = parseActions(actions)

        const resultZObject = postProcess(zObject)

        IdGenerator.reset()
        return {root: resultZObject, textures, actions: zactions}
    } catch (e) {
        console.error(`Error parsing the object. Error: ${e}`)
        throw e
    } finally {
        EnvSetup.cleanEnv()
    }

}
