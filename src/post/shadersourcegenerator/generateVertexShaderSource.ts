import {ZModel} from "../../zernikalos/ZModel"
import {
    BR, buildSource,
    CLOSE_MAIN,
    HEADER,
    OPEN_MAIN,
    T,
} from "./shadersourcecommon"
import {ATTR_COLOR, ATTR_NORMAL, ATTR_POSITION, ATTR_UV, UNIF_MODELVIEWPROJECTION} from "../../constants"
import {UNIF_MODELVIEW, UNIF_PROJECTION} from "../../constants"
import _ from "lodash"
import {kotlinMapToJsMap, mapFlatJs} from "../../utils/mapFlatJs";

export function generateVertexShaderSource(obj: ZModel): string {

    const HAS_TEXTURES = !_.isNil(obj.material?.texture)
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


