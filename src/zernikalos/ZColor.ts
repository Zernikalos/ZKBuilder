
export class ZColor {
    r: number
    g: number
    b: number
    a: number

    constructor(r = 0.5, g = 0.5, b = 0.5, a = 1.0) {
        this.r = r ?? 0.5
        this.g = g ?? 0.5
        this.b = b ?? 0.5
        this.a = a ?? 1.0
    }
}
