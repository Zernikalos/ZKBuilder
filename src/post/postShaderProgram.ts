import {ZModel} from "../zernikalos/ZModel";
import {ZShaderProgram} from "../zernikalos/shader/ZShaderProgram"
import {postShaderAttribute} from "./postShaderAttribute";
import {postShaderUniform} from "./postShaderUniform";
import {UNIF_MODELVIEWPROJECTION} from "../constants";

export function postShaderProgram(obj: ZModel): ZShaderProgram {
    const shaderProgram = new ZShaderProgram()

    obj.mesh.attributeKeysMap.forEach((attrKey, name) => {
        const attr = postShaderAttribute(name, attrKey)
        shaderProgram.setAttribute(name, attr)
    })

    // shaderProgram.setUniform(UNIF_MODELVIEW.name, postShaderUniform(UNIF_MODELVIEW.shader))
    // shaderProgram.setUniform(UNIF_PROJECTION.name, postShaderUniform(UNIF_PROJECTION.shader))
    shaderProgram.setUniform(UNIF_MODELVIEWPROJECTION.name, postShaderUniform(UNIF_MODELVIEWPROJECTION.shader))

    return shaderProgram
}
