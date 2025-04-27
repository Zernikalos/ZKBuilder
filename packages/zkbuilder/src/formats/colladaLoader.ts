import {ZkoParseableObject} from "./ZkoParseableObject"
import {ColladaLoader} from "three/examples/jsm/loaders/ColladaLoader"

export async function colladaLoader(filePath: string): Promise<ZkoParseableObject> {
    const loader = new ColladaLoader()
    const threeObj =  await loader.loadAsync(filePath)

    const scene = threeObj.scene
    // @ts-ignore
    return new ZkoParseableObject(scene, scene.animations)
}