import {ZShader, ShaderType} from "../zernikalos/shader/ZShader"
import {ZModel} from "../zernikalos/ZModel";
import {generateVertexShaderSource, generateFragmentShaderSource} from "./shadersourcegenerator";

export function postShader(type: ShaderType, obj: ZModel): ZShader {
    const shader = new ZShader()
    shader.type = type
    if (type === "vertex") {
        shader.source = generateVertexShaderSource(obj)
    } else {
        shader.source = generateFragmentShaderSource(obj)
    }
    return shader
}
