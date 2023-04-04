import {ZkoParseableObject} from "./ZkoParseableObject"
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
// import {SkeletonHelper} from "three"
//var helper = new SkeletonHelper( mesh.skeleton.bones[ 0 ] );

export async function gltfLoader(filePath: string): Promise<ZkoParseableObject> {
    const loader = new GLTFLoader()

    const threeObj = await loader.loadAsync(filePath)

    // const parser = threeObj.parser
    // const json = parser.json
    // if (json.images.length > 0) {
    //     for (const img of json.images) {
    //         const bufferView = await parser.getDependency('bufferView', img.bufferView)
    //     }
    // }

    return new ZkoParseableObject(threeObj.scene)
}
