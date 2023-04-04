import {ZLens} from "./ZLens"

export class ZPerspectiveLens extends ZLens {
    aspectRatio: number
    fov: number

    constructor(near = 0.1, far = 1000, aspectRatio = 1.0, fov =  50.0) {
        super(near, far)
        this.aspectRatio = aspectRatio ?? 1.0
        this.fov = fov ?? 50.0
    }
}
