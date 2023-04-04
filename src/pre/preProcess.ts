import _ from "lodash";
import {Object3D, PerspectiveCamera, Scene} from "three";
import {ParseOptions} from "../zkParse";

export function preProcess(threeObj: Object3D, options: ParseOptions): Object3D {

    let scene = threeObj
    const isSceneRoot = threeObj.type === "Scene"
    if (options.defaultScene && !isSceneRoot) {
        scene = new Scene()
        scene.add(threeObj)
    }

    const hasCamera = !_.isNil(threeObj.getObjectByProperty("type", "Camera"))
    if (options.defaultCamera && !hasCamera) {
        const camera = new PerspectiveCamera()
        scene.add(camera)
    }

    return scene
}
