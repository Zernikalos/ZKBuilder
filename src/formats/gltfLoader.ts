import {ZkoParseableObject} from "./ZkoParseableObject"
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
// import {SkeletonHelper} from "three"
//var helper = new SkeletonHelper( mesh.skeleton.bones[ 0 ] );

export async function gltfLoader(filePath: string): Promise<ZkoParseableObject> {
    const loader = new GLTFLoader()

    const threeObj = await loader.loadAsync(filePath)
    return new ZkoParseableObject(threeObj.scene)
}
