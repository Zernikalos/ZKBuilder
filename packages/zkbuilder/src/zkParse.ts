import {parseObject} from "./parsers";
import {postProcess} from "./post";
import {ZkoParseableObject} from "./formats/ZkoParseableObject";
import {ZObject} from "./zernikalos/ZObject";
import _ from "lodash";
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

// TODO: Maybe this object should honor the Zko input format
export interface ZkoParsed {
    root: ZObject,
    textures: ZTexture[],
    actions?: ZSkeletalAction[]
}

export async function zkParse(parseableObject: ZkoParseableObject, _options: ParseOptions = {}): Promise<ZkoParsed> {
    EnvSetup.setupEnv()
    // @ts-ignore
    const mergedOptions = _.merge({}, DEFAULT_PARSE_OPTIONS)

    const threeObj = preProcess(parseableObject._threeObj, mergedOptions)
    const actions  = parseableObject._actions

    try {
        // TODO: We could split this into two functions, one for the object and one for the textures
        const {zObject, textures} = await parseObject(threeObj)
        const zactions = parseActions(actions, threeObj)

        const resultZObject = postProcess(zObject)

        return {root: resultZObject, textures, actions: zactions}
    } catch (e) {
        console.error(`Error parsing the object. Error: ${e}`)
        throw e
    } finally {
        EnvSetup.cleanEnv()
    }

}
