import {ZModel} from "../zernikalos/ZModel";
import {ZShaderProgram} from "../zernikalos/shader/ZShaderProgram"
import {ATTRS, UNIF_MODELVIEWPROJECTION, UNIF_TEXTURE} from "../constants";
import {Attrib} from "../constants/Attribs";
import {ZAttribute} from "../zernikalos/shader/ZAttribute";
import _ from "lodash";
import {ZUniform} from "../zernikalos/shader/ZUniform";
import {ZBufferKey} from "../zernikalos/mesh/ZBufferKey";
import {Uniform} from "../constants/Uniforms";
import {mapFlatJs} from "../utils/mapFlatJs";

export function postShaderProgram(obj: ZModel): ZShaderProgram {
    const shaderProgram = ZShaderProgram.init()

    let uniformCounter = 0

    const bufferKeys = mapFlatJs(obj.mesh.buffers)

    ATTRS.list.forEach((attr: Attrib) => {
        const buff = bufferKeys.find((buff) => buff.key === attr.name)
        if (!_.isNil(buff)) {
            addAttribute(shaderProgram, attr, buff.value)
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
    shaderProgram.addUniform(uniform.name, shaderUniform)
}

function createShaderUniform(uniform: Uniform, uniformCounter: number): ZUniform {
    const shaderUniform = ZUniform.init()
    shaderUniform.uniformName = uniform.uniformName
    shaderUniform.dataType = uniform.dataType
    // TODO: This might be incorrect in the future
    shaderUniform.count = 1
    shaderUniform.idx = uniformCounter
    return shaderUniform
}

function addAttribute(shaderProgram: ZShaderProgram, attribute: Attrib, bufferKey: ZBufferKey) {
    const shaderAtrib = createShaderAttribute(attribute, bufferKey)
    shaderProgram.addAttribute(attribute.name, shaderAtrib)
}

function createShaderAttribute(attribute: Attrib, bufferKey: ZBufferKey): ZAttribute {
    const shaderAttrib = ZAttribute.init()
    shaderAttrib.id = bufferKey.id
    shaderAttrib.attributeName = attribute.attribName
    return shaderAttrib
}

