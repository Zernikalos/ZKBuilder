import {ZObject, ZObjectType} from "./ZObject"
import {ZMesh} from "./mesh/ZMesh"
import {ZShaderProgram} from "./shader/ZShaderProgram"
import {ZMaterial} from "./material/ZMaterial";

export class ZModel extends ZObject {
    type: ZObjectType = ZObjectType.MODEL
    mesh: ZMesh = ZMesh.init()
    material: ZMaterial
    shaderProgram: ZShaderProgram
}



