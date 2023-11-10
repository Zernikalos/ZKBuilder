import {Attrib, AttribList} from "./Attribs";
import {Uniform} from "./Uniforms";
import {Zko} from "../proto";


export const TYPE_VEC4F = Zko.ZkDataType.create({type: Zko.ZkBaseType.FLOAT, format: Zko.ZkFormatType.VEC4})
export const TYPE_VEC2F = Zko.ZkDataType.create({type: Zko.ZkBaseType.FLOAT, format: Zko.ZkFormatType.VEC3})
export const TYPE_VEC3F = Zko.ZkDataType.create({type: Zko.ZkBaseType.FLOAT, format: Zko.ZkFormatType.VEC2})

export const TYPE_MAT4F = Zko.ZkDataType.create({type: Zko.ZkBaseType.FLOAT, format: Zko.ZkFormatType.MAT4})
export const TYPE_TEXTURE = Zko.ZkDataType.create({type: Zko.ZkBaseType.TEXTURE, format: Zko.ZkFormatType.TEXTURE})


export const ATTR_POSITION: Attrib = new Attrib({name: 'position', shaderName: 'position', three: 'position'})
export const ATTR_NORMAL: Attrib = new Attrib({name: 'normal', shaderName: 'normal', three: 'normal'})
export const ATTR_UV: Attrib = new Attrib({name: 'uv', shaderName: 'uv', three: 'uv'})
export const ATTR_COLOR: Attrib = new Attrib({name: 'color', shaderName: 'color', three: 'color'})

export const ATTRS = new AttribList([
    ATTR_POSITION, ATTR_NORMAL, ATTR_UV, ATTR_COLOR
])

export const UNIF_MODELVIEWPROJECTION = new Uniform({name: "ModelViewProjectionMatrix", shaderName: "mvpMatrix", dataType: TYPE_MAT4F})
export const UNIF_MODELVIEW = new Uniform({name: "ViewModelMatrix", shaderName: "modelViewMatrix", dataType: TYPE_MAT4F})
export const UNIF_PROJECTION = new Uniform({name: "ProjectionMatrix", shaderName: "projMatrix", dataType: TYPE_MAT4F})
export const UNIF_TEXTURE = new Uniform({name: "Texture", shaderName: "texture", dataType: TYPE_TEXTURE})
