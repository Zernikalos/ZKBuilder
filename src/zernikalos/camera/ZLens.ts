
export abstract class ZLens {
    near: number
    far: number

    protected constructor(near = 0.1, far = 1000) {
        this.near = near ?? 0.1
        this.far = far ?? 1000
    }
}
