import {Attrib, AttribList} from "./Attribs";
import {Uniform} from "./Uniforms";
import {ZTypes} from "../zernikalos/ZDataType";

export const ATTR_POSITION: Attrib = new Attrib({name: 'position', shaderName: 'position', three: 'position'})
export const ATTR_NORMAL: Attrib = new Attrib({name: 'normal', shaderName: 'normal', three: 'normal'})
export const ATTR_UV: Attrib = new Attrib({name: 'uv', shaderName: 'uv', three: 'uv'})
export const ATTR_COLOR: Attrib = new Attrib({name: 'color', shaderName: 'color', three: 'color'})

export const ATTR_BONE_WEIGHT: Attrib = new Attrib({name: 'boneWeight', shaderName: 'boneWeight', three: 'skinWeight'})

export const ATTR_BONE_INDICES: Attrib = new Attrib({name: 'boneIndices', shaderName: 'boneIndices', three: 'skinIndex'})

export const ATTRS = new AttribList([
    ATTR_POSITION, ATTR_NORMAL, ATTR_UV, ATTR_COLOR, ATTR_BONE_WEIGHT, ATTR_BONE_INDICES
])

export const UNIF_MODELVIEWPROJECTION = new Uniform({name: "ModelViewProjectionMatrix", shaderName: "mvpMatrix", dataType: ZTypes.MAT4F})
export const UNIF_MODELVIEW = new Uniform({name: "ViewModelMatrix", shaderName: "modelViewMatrix", dataType: ZTypes.MAT4F})
export const UNIF_PROJECTION = new Uniform({name: "ProjectionMatrix", shaderName: "projMatrix", dataType: ZTypes.MAT4F})
export const UNIF_TEXTURE = new Uniform({name: "Texture", shaderName: "texture", dataType: ZTypes.TEXTURE})
