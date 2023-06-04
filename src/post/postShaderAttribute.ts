import {ZShaderAttribute} from "../zernikalos/shader/ZShaderAttribute"
import {ZBufferKey} from "../zernikalos/mesh/ZBufferKey";
import {ATTRS} from "../constants";

export function postShaderAttribute(name: string, bufferKey: ZBufferKey): ZShaderAttribute {
    const shaderAttrib = new ZShaderAttribute()
    shaderAttrib.id = bufferKey.id
    shaderAttrib.attributeName = ATTRS.findByName(name).inShader
    return shaderAttrib
}
