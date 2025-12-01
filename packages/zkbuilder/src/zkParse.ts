import {parseObject} from "./parsers";
import {postProcess} from "./post";
import {ZkoParseableObject} from "./formats/ZkoParseableObject";
import _ from "lodash";
import {preProcess} from "./pre";
import {parseActions} from "./parsers/parseActions";
import {EnvSetup} from "./EnvSetup";
import {ZkoParsed} from "./parsers";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ParseOptions {

}

export const DEFAULT_PARSE_OPTIONS: ParseOptions = {

}

export async function zkParse(parseableObject: ZkoParseableObject, _options: ParseOptions = {}): Promise<ZkoParsed> {
    EnvSetup.setupEnv()
    // @ts-ignore
    const mergedOptions = _.merge({}, DEFAULT_PARSE_OPTIONS)

    const threeObj = preProcess(parseableObject._threeObj, mergedOptions)
    const actions  = parseableObject._actions

    try {
        // TODO: We could split this into two functions, one for the object and one for the textures
        const {zObject, zComponents} = await parseObject(threeObj)
        const zActions = parseActions(actions, threeObj)

        const resultZObject = postProcess(zObject)

        return {root: resultZObject, components: zComponents, actions: zActions}
    } catch (e) {
        console.error(`Error parsing the object. Error: ${e}`)
        throw e
    } finally {
        EnvSetup.cleanEnv()
    }

}
