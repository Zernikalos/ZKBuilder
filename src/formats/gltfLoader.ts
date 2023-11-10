import {ZkoParseableObject} from "./ZkoParseableObject"
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
// import {SkeletonHelper} from "three"
//var helper = new SkeletonHelper( mesh.skeleton.bones[ 0 ] );

export async function gltfLoader(filePath: string): Promise<ZkoParseableObject> {

    // Disables this in order to skip the use of createImageBitmap function
    const originalCreateImageBitmap = window.createImageBitmap
    window.createImageBitmap = undefined

    const originalRevokeURL = URL.revokeObjectURL
    URL.revokeObjectURL = () => {}

    const loader = new GLTFLoader()

    const threeObj = await loader.loadAsync(filePath)

    // const parser = threeObj.parser
    // const json = parser.json
    // if (json.images.length > 0) {
    //     for (const img of json.images) {
    //         const bufferView = await parser.getDependency('bufferView', img.bufferView)
    //     }
    // }

    window.createImageBitmap = originalCreateImageBitmap
    URL.revokeObjectURL = originalRevokeURL
    return new ZkoParseableObject(threeObj.scene)
}
