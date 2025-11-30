import {ZMesh} from "@/zernikalos";
import {ZTexture} from "@/zernikalos";
import {ZObject} from "@/zernikalos";
import {ZSkeletalAction} from "@/zernikalos";

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