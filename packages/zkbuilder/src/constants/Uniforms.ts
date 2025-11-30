import {ZDataType} from "@/zernikalos";

export class Uniform {
    name: string
    shaderName: string
    dataType: ZDataType

    constructor({name, shaderName, dataType}: {name: string, shaderName: string, dataType: ZDataType}) {
        this.name = name
        this.shaderName = shaderName
        this.dataType = dataType
    }

    get uniformName() {
        return `u_${this.shaderName}`
    }
}
