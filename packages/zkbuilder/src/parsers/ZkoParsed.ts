import {ZMesh} from "../zernikalos/mesh/ZMesh";
import {ZTexture} from "../zernikalos/material/ZTexture";
import {ZObject} from "../zernikalos/ZObject";
import {ZSkeletalAction} from "../zernikalos/action/ZSkeletalAction";

export interface ZkComponentCollection {
    meshes?: ZMesh[]
    textures?: ZTexture[]
}

// TODO: Maybe this object should honor the Zko input format
export interface ZkoParsed {
    root: ZObject,
    components: ZkComponentCollection,
    actions?: ZSkeletalAction[]
}