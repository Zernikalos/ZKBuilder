import {ZModel} from "../zernikalos/ZModel";
import {ZShaderProgram} from "../zernikalos/shader/ZShaderProgram"
import {ATTRS, UNIF_MODELVIEWPROJECTION, UNIF_TEXTURE} from "../constants";
import {Attrib} from "../constants/Attribs";
import {ZShaderAttribute} from "../zernikalos/shader/ZShaderAttribute";
import _ from "lodash";
import {ZShaderUniform} from "../zernikalos/shader/ZShaderUniform";
import {ZBufferKey} from "../zernikalos/mesh/ZBufferKey";
import {Uniform} from "../constants/Uniforms";

export function postShaderProgram(obj: ZModel): ZShaderProgram {
    const shaderProgram = new ZShaderProgram()

    ATTRS.list.forEach((attr: Attrib) => {
        const bufferKey = obj.mesh.bufferKeys.find((key: ZBufferKey) => key.name === attr.name)
        if (!_.isNil(bufferKey)) {
            addAttribute(shaderProgram, attr, bufferKey)
        }
    })

    if (!_.isNil(obj.material.texture)) {
        addUniform(shaderProgram, UNIF_TEXTURE)
    }

    addUniform(shaderProgram, UNIF_MODELVIEWPROJECTION)

    return shaderProgram
}

function addUniform(shaderProgram: ZShaderProgram, uniform: Uniform) {
    const shaderUniform = createShaderUniform(uniform)
    shaderProgram.setUniform(uniform.name, shaderUniform)
}

function createShaderUniform(uniform: Uniform): ZShaderUniform {
    const shaderUniform = new ZShaderUniform()
    shaderUniform.uniformName = uniform.uniformName
    shaderUniform.dataType = uniform.dataType
    shaderUniform.count = 1
    return shaderUniform
}

function addAttribute(shaderProgram: ZShaderProgram, attribute: Attrib, bufferKey: ZBufferKey) {
    const shaderAtrib = createShaderAttribute(attribute, bufferKey)
    shaderProgram.setAttribute(attribute.name, shaderAtrib)
}

function createShaderAttribute(attribute: Attrib, bufferKey: ZBufferKey): ZShaderAttribute {
    const shaderAttrib = new ZShaderAttribute()
    shaderAttrib.id = bufferKey.id
    shaderAttrib.attributeName = attribute.attribName
    return shaderAttrib
}

