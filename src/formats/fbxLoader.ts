import {ZkoParseableObject} from "./ZkoParseableObject"
import {FBXLoader} from "three/examples/jsm/loaders/FBXLoader"

export async function fbxLoader(filePath: string): Promise<ZkoParseableObject> {
    const loader = new FBXLoader()
    const threeObj =  await loader.loadAsync(filePath)

    return new ZkoParseableObject(threeObj)
}
