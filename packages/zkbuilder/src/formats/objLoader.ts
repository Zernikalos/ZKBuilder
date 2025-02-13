import {ZkoParseableObject} from "./ZkoParseableObject";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";

export async function objLoader(filePath: string): Promise<ZkoParseableObject> {
    const loader = new OBJLoader()

    const threeObj = await loader.loadAsync(filePath)
    return new ZkoParseableObject(threeObj)
}
