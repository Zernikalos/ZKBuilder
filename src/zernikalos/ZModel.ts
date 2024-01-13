import {zernikalos} from "@zernikalos/zernikalos"
import ZModel = zernikalos.objects.ZModel

export {ZModel}

// export class ZModel extends ZObject {
//     type: ZObjectType = ZObjectType.MODEL
//     mesh: ZMesh = ZMesh.init()
//     material: ZMaterial
//     shaderProgram: ZShaderProgram
//     skeleton?: ZSkeleton
//     skinning?: ZSkinning
//
//     get hasTextures(): boolean {
//         return !_.isNil(this.material.texture)
//     }
// }



