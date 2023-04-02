import {ZModel} from "../zernikalos/ZModel";
import {postShader} from "./postShader";

export function postShaderProgramSource(obj: ZModel): void {
    obj.shaderProgram.vertexShader = postShader("vertex", obj)
    obj.shaderProgram.fragmentShader = postShader("fragment", obj)
}
