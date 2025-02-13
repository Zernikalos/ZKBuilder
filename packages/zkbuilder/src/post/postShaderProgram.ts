import {ZModel} from "../zernikalos/ZModel";
import {ZShaderProgram} from "../zernikalos/shader/ZShaderProgram"
import {
    ATTR_UV,
    ATTRS,
    UNIF_BIND_MATRIX,
    UNIF_BONES, UNIF_INV_BIND_MATRIX,
    UNIF_MODELVIEWPROJECTION,
    UNIF_PROJECTION,
    UNIF_TEXTURE,
    UNIF_VIEW
} from "../constants";
import {Attrib} from "../constants/Attribs";
import {ZAttribute} from "../zernikalos/shader/ZAttribute";
import _ from "lodash";
import {ZUniform} from "../zernikalos/shader/ZUniform";
import {ZBufferKey} from "../zernikalos/mesh/ZBufferKey";
import {Uniform} from "../constants/Uniforms";
import {mapFlatJs} from "../utils/mapFlatJs";
import {zernikalos} from "@zernikalos/zernikalos";
import MapPairJs = zernikalos.utils.MapPairJs;

export function postShaderProgram(obj: ZModel): ZShaderProgram {
    const shaderProgram = ZShaderProgram.init()

    let uniformCounter = 0

    const bufferKeys = mapFlatJs(obj.mesh.buffers)

    ATTRS.list.forEach((attr: Attrib) => {
        const buff = bufferKeys.find((buff: MapPairJs) => buff.key === attr.name)
        if (!_.isNil(buff)) {
            // TODO: Temporal implementation for checks
            if (attr === ATTR_UV && !obj.hasTextures) {

            } else {
                addAttribute(shaderProgram, attr, buff.value)
            }
        }
    })

    if (!_.isNil(obj.material.texture)) {
        addUniform(shaderProgram, UNIF_TEXTURE, uniformCounter)
        uniformCounter++
    }

    if (!_.isNil(obj.skeleton)) {
        addUniform(shaderProgram, UNIF_BONES, uniformCounter)
        uniformCounter++

        addUniform(shaderProgram, UNIF_PROJECTION, uniformCounter)
        uniformCounter++

        addUniform(shaderProgram, UNIF_VIEW, uniformCounter)
        uniformCounter++

        addUniform(shaderProgram, UNIF_BIND_MATRIX, uniformCounter)
        uniformCounter++

        addUniform(shaderProgram, UNIF_INV_BIND_MATRIX, uniformCounter)
        uniformCounter++
    }

    addUniform(shaderProgram, UNIF_MODELVIEWPROJECTION, uniformCounter)
    uniformCounter++

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
    shaderUniform.id = uniformCounter
    return shaderUniform
}

function addAttribute(shaderProgram: ZShaderProgram, attribute: Attrib, bufferKey: ZBufferKey) {
    const shaderAtrib = createShaderAttribute(attribute, bufferKey)
    shaderProgram.addAttributeByName(attribute.name, shaderAtrib)
}

function createShaderAttribute(attribute: Attrib, bufferKey: ZBufferKey): ZAttribute {
    const shaderAttrib = ZAttribute.init()
    shaderAttrib.id = bufferKey.id
    shaderAttrib.attributeName = attribute.attribName
    return shaderAttrib
}

