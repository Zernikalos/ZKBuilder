import {Color, Object3D, Scene} from "three";
import {ZScene} from "@/zernikalos";
import {ZColor} from "@/zernikalos";

export function parseScene(obj: Scene): { scene: ZScene, children: Object3D[] } {
    const scene = new ZScene()

    const threeColor = obj.background as Color
    scene.viewport.clearColor = ZColor.initWithValues(threeColor?.r, threeColor?.g, threeColor?.b, 1.0)

    return {scene, children:obj.children}
}
