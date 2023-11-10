import {Zko} from "../../proto";

export class ZShaderUniform {
    uniformName: string = ""
    count: number
    dataType: Zko.ZkDataType
    idx: number

    constructor({uniformName, count, dataType, idx}:{uniformName: string, count: number, dataType: Zko.ZkDataType, idx: number}) {
        this.uniformName = uniformName
        this.count = count
        this.dataType = dataType
        this.idx = idx
    }
}
