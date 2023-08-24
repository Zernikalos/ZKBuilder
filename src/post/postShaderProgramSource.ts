import {ZModel} from "../zernikalos/ZModel";
import {ShaderType, ZShader} from "../zernikalos/shader/ZShader";
import {generateFragmentShaderSource, generateVertexShaderSource} from "./shadersourcegenerator";

export function postShaderProgramSource(obj: ZModel): void {
    obj.shaderProgram.vertexShader = postShader("vertex", obj)
    obj.shaderProgram.fragmentShader = postShader("fragment", obj)
}

function postShader(type: ShaderType, obj: ZModel): ZShader {
    const shader = new ZShader()
    shader.type = type
    if (type === "vertex") {
        shader.source = generateVertexShaderSource(obj)
    } else {
        shader.source = generateFragmentShaderSource(obj)
    }
    return shader
}
