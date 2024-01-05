import {ZObject, ZObjectType} from "./ZObject"
import {ZMesh} from "./mesh/ZMesh"
import {ZShaderProgram} from "./shader/ZShaderProgram"
import {ZMaterial} from "./material/ZMaterial";
import {ZSkinning} from "./skeleton/ZSkinning";
import {ZSkeleton} from "./skeleton/ZSkeleton";

export class ZModel extends ZObject {
    type: ZObjectType = ZObjectType.MODEL
    mesh: ZMesh = ZMesh.init()
    material: ZMaterial
    shaderProgram: ZShaderProgram
    skeleton?: ZSkeleton
    skinning?: ZSkinning
}



