import {ZModel} from "../../zernikalos/ZModel";
import {ZBufferKey} from "../../zernikalos/mesh/ZBufferKey";
import {
    BR, buildSource,
    CLOSE_MAIN,
    HEADER,
    OPEN_MAIN,
    T,
} from "./shadersourcecommon"
import {ATTR_COLOR, ATTR_NORMAL, ATTR_POSITION, ATTR_UV, UNIF_MODELVIEWPROJECTION} from "../../constants";
import {UNIF_MODELVIEW, UNIF_PROJECTION} from "../../constants";
import {ZShaderUniform} from "../../zernikalos/shader/ZShaderUniform";
import _ from "lodash";

export function generateVertexShaderSource(obj: ZModel): string {

    const HAS_TEXTURES = !_.isNil(obj.material?.texture)
    const uniforms: Map<string, ZShaderUniform> = obj.shaderProgram.uniformsMap
    const bufferKeys: Map<string, ZBufferKey> = obj.mesh.bufferKeysMap

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
            }
        }

        return [...bufferKeys.entries()].map(([name, _]) => genAttribute(name))
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
        return [...bufferKeys.entries()].map(([name, _]) => genAttribute(name))
    }

    function genOutColor() {
        if (!bufferKeys.has(ATTR_COLOR.name)) {
            return ""
        }
        return `${ATTR_COLOR.variantName} = ${ATTR_COLOR.attribName};`
    }

    function genOutUv() {
        if (!bufferKeys.has(ATTR_UV.name) || !HAS_TEXTURES) {
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
                case UNIF_MODELVIEWPROJECTION.name:
                    return `uniform mat4 ${UNIF_MODELVIEWPROJECTION.uniformName};`
            }
        }
        return [...uniforms.keys()].map(genUniform)
    }

    function genOutPosition() {
        return `gl_Position = ${UNIF_MODELVIEWPROJECTION.uniformName} * vec4(${ATTR_POSITION.attribName},1);`
    }
}


