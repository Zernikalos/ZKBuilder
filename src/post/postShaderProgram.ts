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

    let uniformCounter = 0

    ATTRS.list.forEach((attr: Attrib) => {
        const bufferKey = obj.mesh.bufferKeys.find((key: ZBufferKey) => key.name === attr.name)
        if (!_.isNil(bufferKey)) {
            addAttribute(shaderProgram, attr, bufferKey)
        }
    })

    addUniform(shaderProgram, UNIF_MODELVIEWPROJECTION, uniformCounter)
    uniformCounter++

    if (!_.isNil(obj.material.texture)) {
        addUniform(shaderProgram, UNIF_TEXTURE, uniformCounter)
        uniformCounter++
    }

    return shaderProgram
}

function addUniform(shaderProgram: ZShaderProgram, uniform: Uniform, uniformCounter: number) {
    const shaderUniform = createShaderUniform(uniform, uniformCounter)
    shaderProgram.setUniform(uniform.name, shaderUniform)
}

function createShaderUniform(uniform: Uniform, uniformCounter: number): ZShaderUniform {
    return new ZShaderUniform({
        uniformName: uniform.uniformName,
        dataType: uniform.dataType,
        // TODO: This might be incorrect in the future
        count: 1,
        idx: uniformCounter
    })
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

