import {ZModel} from "../zernikalos/ZModel"
import {postShaderProgram} from "./postShaderProgram"
import {postShaderProgramSource} from "./postShaderProgramSource";

export function postModel(obj: ZModel): ZModel {
    obj.mesh.buildBuffers()
    obj.shaderProgram = postShaderProgram(obj)
    postShaderProgramSource(obj)
    return obj
}
