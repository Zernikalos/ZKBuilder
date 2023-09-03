import {Attrib, AttribList} from "./Attribs";
import {Uniform} from "./Uniforms";
import {Zko} from "../../protobuild";
import ZDataType = Zko.ZDataType;

export const ATTR_POSITION: Attrib = new Attrib({name: 'position', shaderName: 'position', three: 'position'})
export const ATTR_NORMAL: Attrib = new Attrib({name: 'normal', shaderName: 'normal', three: 'normal'})
export const ATTR_UV: Attrib = new Attrib({name: 'uv', shaderName: 'uv', three: 'uv'})
export const ATTR_COLOR: Attrib = new Attrib({name: 'color', shaderName: 'color', three: 'color'})

export const ATTRS = new AttribList([
    ATTR_POSITION, ATTR_NORMAL, ATTR_UV, ATTR_COLOR
])

export const UNIF_MODELVIEWPROJECTION = new Uniform({name: "ModelViewProjectionMatrix", shaderName: "mvpMatrix", dataType: ZDataType.MAT4F})
export const UNIF_MODELVIEW = new Uniform({name: "ViewModelMatrix", shaderName: "modelViewMatrix", dataType: ZDataType.MAT4F})
export const UNIF_PROJECTION = new Uniform({name: "ProjectionMatrix", shaderName: "projMatrix", dataType: ZDataType.MAT4F})
export const UNIF_TEXTURE = new Uniform({name: "Texture", shaderName: "texture", dataType: ZDataType.TEXTURE})
