import {ZShaderAttribute} from "../zernikalos/shader/ZShaderAttribute"
import {ZAttributeKey} from "../zernikalos/mesh/ZAttributeKey";
import {ATTRS} from "../constants";

export function postShaderAttribute(name: string, attrKey: ZAttributeKey): ZShaderAttribute {
    const shaderAttrib = new ZShaderAttribute()
    shaderAttrib.index = attrKey.index
    shaderAttrib.attributeName = ATTRS.findByName(name).inShader
    return shaderAttrib
}
