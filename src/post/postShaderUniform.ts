import {ZShaderUniform} from "../zernikalos/shader/ZShaderUniform";
import {Zko} from "../proto";

export function postShaderUniform(uniformName: string) {
    const uniform = new ZShaderUniform()
    uniform.uniformName = uniformName
    uniform.type = Zko.ZDataType.MAT4F
    uniform.count = 1
    return uniform
}
