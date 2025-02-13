import {Camera, Object3D, PerspectiveCamera} from "three";
import {ZCamera} from "../zernikalos/ZCamera";
import {ZPerspectiveLens} from "../zernikalos/camera/ZPerspectiveLens";

export function parseCamera(obj: Camera): { camera: ZCamera, children: Object3D[] } {
    const camera = new ZCamera()

    let lens
    if (obj.type.toLowerCase().includes("perspective")) {
        const aux = obj as PerspectiveCamera
        const {near, far, aspect, fov} = aux
        lens = ZPerspectiveLens.initWithAspect(near, far, fov, aspect)
        camera.lens = lens
    }
    if (obj.type.toLowerCase().includes("ortho")) {
        //TODO: Add orthographic
        throw new Error("Not implmented yet: Not supported export for orthographic camera")
    }

    return {camera, children: obj.children}
}
