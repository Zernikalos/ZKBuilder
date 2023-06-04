import {ZModel} from "../zernikalos/ZModel";
import {ZShaderProgram} from "../zernikalos/shader/ZShaderProgram"
import {postShaderAttribute} from "./postShaderAttribute";
import {postShaderUniform} from "./postShaderUniform";
import {ATTRS, UNIF_MODELVIEWPROJECTION} from "../constants";
import {Attrib} from "../constants/Attribs";
import {ZShaderAttribute} from "../zernikalos/shader/ZShaderAttribute";
import _ from "lodash";

export function postShaderProgram(obj: ZModel): ZShaderProgram {
    const shaderProgram = new ZShaderProgram()

    ATTRS.list.forEach((attr: Attrib) => {
        const bufferKey = obj.mesh.bufferKeysMap.get(attr.name)
        if (!_.isNil(bufferKey)) {
            const zattrib: ZShaderAttribute = postShaderAttribute(attr.name, bufferKey)
            shaderProgram.setAttribute(attr.name, zattrib)
        }
    })

    // shaderProgram.setUniform(UNIF_MODELVIEW.name, postShaderUniform(UNIF_MODELVIEW.shader))
    // shaderProgram.setUniform(UNIF_PROJECTION.name, postShaderUniform(UNIF_PROJECTION.shader))
    shaderProgram.setUniform(UNIF_MODELVIEWPROJECTION.name, postShaderUniform(UNIF_MODELVIEWPROJECTION.shader))

    return shaderProgram
}
