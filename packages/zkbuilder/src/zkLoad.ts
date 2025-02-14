import {objLoader} from "./formats/objLoader";
import {gltfLoader} from "./formats/gltfLoader";
import {ZkoParseableObject} from "./formats/ZkoParseableObject";
import _ from "lodash";
import {fbxLoader} from "./formats/fbxLoader";
import {colladaLoader} from "./formats/colladaLoader";

export type InputFileFormat = "obj" | "gltf" | "fbx" | "collada"

export interface LoadOptions {
    filePath: string
    format?: InputFileFormat
}

export const DEFAULT_LOAD_OPTIONS: Partial<LoadOptions> = {
    format: "obj",
}

export async function zkLoad(options: LoadOptions): Promise<ZkoParseableObject> {
    let result: ZkoParseableObject

    const mergedOptions: LoadOptions = _.merge({}, DEFAULT_LOAD_OPTIONS, options)
    const {filePath, format} = mergedOptions
    
    if (_.isNil(filePath)) {
        throw new Error("Filepath argument needs to be defined")
    }

    switch (format) {
        case "obj":
            result = await objLoader(filePath)
            break
        case "gltf":
            result = await gltfLoader(filePath)
            break
        case "fbx":
            result = await fbxLoader(filePath)
            break
        case "collada":
            result = await colladaLoader(filePath)
            break
    }
    return result
}
