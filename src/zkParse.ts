import {parseObject} from "./parsers";
import {postProcess} from "./post";
import {ZkoParseableObject} from "./formats/ZkoParseableObject";
import {ZObject} from "./zernikalos/ZObject";
import _ from "lodash";
import {IdGenerator} from "./utils/IdGenerator";
import {ZScene} from "./zernikalos/ZScene";

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

    let zObj = parseObject(parseableObject._threeObj)
    zObj = postProcess(zObj)

    if (mergedOptions.defaultScene) {
        zObj = addDefaultScene(zObj)
    }

    IdGenerator.reset()
    return zObj
}

function addDefaultScene(zObj: ZObject) {
    const scene = new ZScene()
    scene.addChild(zObj)
    return scene
}
