
export class Uniform {
    name: string
    shader: string

    constructor({name, shader}: {name: string, shader: string}) {
        this.name = name
        this.shader = shader
    }
}
