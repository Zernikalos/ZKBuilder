import {ZkoParseableObject} from "./ZkoParseableObject"
import {ColladaLoader} from "three/examples/jsm/loaders/ColladaLoader"

export async function colladaLoader(filePath: string): Promise<ZkoParseableObject> {
    const loader = new ColladaLoader()
    const threeObj =  await loader.loadAsync(filePath)

    // @ts-ignore
    return new ZkoParseableObject(threeObj.scene, threeObj?.animations)
}