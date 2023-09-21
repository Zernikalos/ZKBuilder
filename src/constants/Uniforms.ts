import {Zko} from "../proto";

export class Uniform {
    name: string
    shaderName: string
    dataType: Zko.ZkDataType

    constructor({name, shaderName, dataType}: {name: string, shaderName: string, dataType: Zko.ZkDataType}) {
        this.name = name
        this.shaderName = shaderName
        this.dataType = dataType
    }

    get uniformName() {
        return `u_${this.shaderName}`
    }
}
