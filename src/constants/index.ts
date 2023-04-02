import {Attrib, AttribList} from "./Attribs";
import {Uniform} from "./Uniforms";

export const ATTR_POSITION: Attrib = new Attrib({name: 'position', shader: 'position', three: 'position'})
export const ATTR_NORMAL: Attrib = new Attrib({name: 'normal', shader: 'normal', three: 'normal'})
export const ATTR_UV: Attrib = new Attrib({name: 'uv', shader: 'uv', three: 'uv'})
export const ATTR_COLOR: Attrib = new Attrib({name: 'color', shader: 'color', three: 'color', varShader: 'varColor', outFragShader: 'fragColor'})

export const ATTRS = new AttribList([
    ATTR_POSITION, ATTR_NORMAL, ATTR_UV, ATTR_COLOR
])

export const UNIF_MODELVIEWPROJECTION = new Uniform({name: "ModelViewProjectionMatrix", shader: "mvpMatrix"})
export const UNIF_MODELVIEW = new Uniform({name: "ViewModelMatrix", shader: "modelViewMatrix"})
export const UNIF_PROJECTION = new Uniform({name: "ProjectionMatrix", shader: "projMatrix"})

