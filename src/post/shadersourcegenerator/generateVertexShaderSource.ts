import {ZModel} from "../../zernikalos/ZModel"
import {
    BR, buildSource,
    CLOSE_MAIN,
    HEADER,
    OPEN_MAIN,
    T,
} from "./shadersourcecommon"
import {
    ATTR_POSITION,
    ATTR_NORMAL,
    ATTR_COLOR,
    ATTR_BONE_INDICES,
    ATTR_BONE_WEIGHT,
    ATTR_UV
} from "../../constants"
import {
    UNIF_MODELVIEWPROJECTION,
    UNIF_MODELVIEW,
    UNIF_PROJECTION,
    UNIF_BONES,
    UNIF_VIEW,
    UNIF_BIND_MATRIX,
    UNIF_INV_BIND_MATRIX
} from "../../constants"
import _ from "lodash"
import {kotlinMapToJsMap, mapFlatJs} from "../../utils/mapFlatJs";

export function generateVertexShaderSource(obj: ZModel): string {

    const HAS_TEXTURES = !_.isNil(obj.material?.texture)
    // TODO: This false here is intentional until completing the bones and armatures feature
    const HAS_SKINNING = !_.isNil(obj.skeleton) && !_.isNil(obj.skinning) && false
    // const uniforms: Map<string, ZUniform> = obj.shaderProgram.uniformsMap
    const uniforms = kotlinMapToJsMap(obj.shaderProgram.uniforms)
    const buffers = mapFlatJs(obj.mesh.buffers)

    const source: (string | string[])[] = [
        HEADER,
        BR,
        ...genUniforms(),
        ...genInAttributes(),
        genOutAttributes(),
        BR,
        OPEN_MAIN,
        [T, genOutPosition()],
        [T, genOutColor()],
        [T, genOutUv()],
        CLOSE_MAIN
    ]

    return buildSource(source)

    function genInAttributes(): string[] {
        function genAttribute(name: string): string {
            switch (name) {
                case ATTR_POSITION.name:
                    return `in vec3 ${ATTR_POSITION.attribName};`
                case ATTR_NORMAL.name:
                    return `in vec3 ${ATTR_NORMAL.attribName};`
                case ATTR_UV.name:
                    if (!HAS_TEXTURES) {
                        return ""
                    }
                    return `in vec2 ${ATTR_UV.attribName};`
                case ATTR_COLOR.name:
                    return `in vec3 ${ATTR_COLOR.attribName};`
                case ATTR_BONE_INDICES.name:
                    return `in vec4 ${ATTR_BONE_INDICES.attribName};`
                case ATTR_BONE_WEIGHT.name:
                    return `in vec4 ${ATTR_BONE_WEIGHT.attribName};`
            }
        }

        return [...buffers].map((buff) => genAttribute(buff.key))
    }

    function genOutAttributes() {
        function genAttribute(name: string): string {
            switch (name) {
                case ATTR_COLOR.name:
                    return `out vec3 ${ATTR_COLOR.variantName};`
                case ATTR_UV.name:
                    if (!HAS_TEXTURES){
                        return ""
                    }
                    return `out vec2 ${ATTR_UV.variantName};`
            }
        }
        return [...buffers].map((buff) => genAttribute(buff.key))
    }

    function genOutColor() {
        if (!buffers.some((buff) => buff.key === ATTR_COLOR.name)) {
            return ""
        }
        return `${ATTR_COLOR.variantName} = ${ATTR_COLOR.attribName};`
    }

    function genOutUv() {
        if (!buffers.some((buff) => buff.key === ATTR_UV.name) || !HAS_TEXTURES) {
            return ""
        }
        return `${ATTR_UV.variantName} = ${ATTR_UV.attribName};`
    }

    function genUniforms(): string[] {
        function genUniform(name: string): string {
            switch (name) {
                case UNIF_MODELVIEW.name:
                    return `uniform mat4 ${UNIF_MODELVIEW.uniformName};`
                case UNIF_PROJECTION.name:
                    return `uniform mat4 ${UNIF_PROJECTION.uniformName};`
                case UNIF_VIEW.name:
                    return `uniform mat4 ${UNIF_VIEW.uniformName};`
                case UNIF_MODELVIEWPROJECTION.name:
                    return `uniform mat4 ${UNIF_MODELVIEWPROJECTION.uniformName};`
                case UNIF_BONES.name:
                    return `uniform mat4 ${UNIF_BONES.uniformName}[150];`
                case UNIF_BIND_MATRIX.name:
                    return `uniform mat4 ${UNIF_BIND_MATRIX.uniformName};`
                case UNIF_INV_BIND_MATRIX.name:
                    return `uniform mat4 ${UNIF_INV_BIND_MATRIX.uniformName};`
            }
        }
        return [...uniforms.keys()].map(genUniform)
    }

    function genOutPosition() {
        if (HAS_SKINNING) {
            return `
                vec4 skinVertex = ${UNIF_BIND_MATRIX.uniformName} * vec4(${ATTR_POSITION.attribName}, 1.0 );
                
                vec4 skinned = vec4(0.0);
                skinned += ${UNIF_BONES.uniformName}[int(${ATTR_BONE_INDICES.attribName}[0])] * skinVertex * ${ATTR_BONE_WEIGHT.attribName}[0];
                skinned += ${UNIF_BONES.uniformName}[int(${ATTR_BONE_INDICES.attribName}[1])] * skinVertex * ${ATTR_BONE_WEIGHT.attribName}[1];
                skinned += ${UNIF_BONES.uniformName}[int(${ATTR_BONE_INDICES.attribName}[2])] * skinVertex * ${ATTR_BONE_WEIGHT.attribName}[2];
                skinned += ${UNIF_BONES.uniformName}[int(${ATTR_BONE_INDICES.attribName}[3])] * skinVertex * ${ATTR_BONE_WEIGHT.attribName}[3];
                
                gl_Position = ${UNIF_MODELVIEWPROJECTION.uniformName} * ${UNIF_INV_BIND_MATRIX.uniformName} * skinned;
            `
        }
        return `gl_Position = ${UNIF_MODELVIEWPROJECTION.uniformName} * vec4(${ATTR_POSITION.attribName},1);`
    }
}


