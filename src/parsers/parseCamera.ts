import {Camera, PerspectiveCamera} from "three";
import {ZCamera} from "../zernikalos/ZCamera";
import {ZPerspectiveLens} from "../zernikalos/camera/ZPerspectiveLens";

export function parseCamera(obj: Camera): ZCamera {
    const camera = new ZCamera()

    let lens
    if (obj.type.toLowerCase().includes("perspective")) {
        const aux = obj as PerspectiveCamera
        const {near, far, aspect, fov} = aux
        lens = new ZPerspectiveLens(near, far, aspect, fov)
        camera.lens = lens
    }
    if (obj.type.toLowerCase().includes("ortho")) {
        //TODO: Add orthographic
        throw new Error("Not implmented yet: Not supported export for orthographic camera")
    }

    return camera
}
