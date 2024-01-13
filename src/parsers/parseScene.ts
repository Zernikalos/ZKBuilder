import {Color, Object3D, Scene} from "three";
import {ZScene} from "../zernikalos/ZScene";
import {zernikalos} from "../../../Zernikalos/build/js/packages/@zernikalos/zernikalos";
import ZVector4 = zernikalos.math.ZVector4;

export function parseScene(obj: Scene): { scene: ZScene, children: Object3D[] } {
    const scene = new ZScene()

    const threeColor = obj.background as Color
    scene.viewport.clearColor = new ZVector4(threeColor?.r, threeColor?.g, threeColor?.b, 1.0)

    return {scene, children:obj.children}
}
