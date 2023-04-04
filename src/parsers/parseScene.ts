import {Color, Scene} from "three";
import {ZScene} from "../zernikalos/ZScene";
import {ZColor} from "../zernikalos/ZColor";

export function parseScene(obj: Scene): ZScene {
    const scene = new ZScene()

    const threeColor = obj.background as Color
    scene.clearColor = new ZColor(threeColor?.r, threeColor?.g, threeColor?.b, 1.0)

    return scene
}
