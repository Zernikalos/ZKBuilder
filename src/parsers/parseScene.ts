import {Color, Object3D, Scene} from "three";
import {ZScene} from "../zernikalos/ZScene";
import {ZVector4} from "../zernikalos/math/ZVector4";

export function parseScene(obj: Scene): { scene: ZScene, children: Object3D[] } {
    const scene = new ZScene()

    const threeColor = obj.background as Color
    scene.viewport.clearColor = new ZVector4(threeColor?.r, threeColor?.g, threeColor?.b, 1.0)

    return {scene, children:obj.children}
}
