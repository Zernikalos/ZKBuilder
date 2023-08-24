import {Zko} from "../proto";

export class Uniform {
    name: string
    shaderName: string
    dataType: Zko.ZDataType

    constructor({name, shaderName, dataType}: {name: string, shaderName: string, dataType: Zko.ZDataType}) {
        this.name = name
        this.shaderName = shaderName
        this.dataType = dataType
    }

    get uniformName() {
        return `u_${this.shaderName}`
    }
}
