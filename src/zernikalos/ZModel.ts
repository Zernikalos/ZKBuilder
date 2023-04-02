import {ZObject, ZObjectType} from "./ZObject"
import {ZMesh} from "./mesh/ZMesh"
import {ZShaderProgram} from "./shader/ZShaderProgram"

export class ZModel extends ZObject {
    type: ZObjectType = ZObjectType.MODEL
    mesh = new ZMesh()
    shaderProgram: ZShaderProgram
}



