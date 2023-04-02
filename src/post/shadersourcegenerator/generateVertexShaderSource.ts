import {ZModel} from "../../zernikalos/ZModel";
import {ZAttributeKey} from "../../zernikalos/mesh/ZAttributeKey";
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

export function generateVertexShaderSource(obj: ZModel): string {
    const source: (string | string[])[] = [
        HEADER,
        BR,
        ...genUniforms(obj.shaderProgram.uniformsMap),
        ...genInAttributes(obj.mesh.attributeKeysMap),
        genOutAttributes(obj.mesh.attributeKeysMap),
        BR,
        OPEN_MAIN,
        [T, genOutPosition()],
        [T, genOutColor(obj.mesh.attributeKeysMap)],
        CLOSE_MAIN
    ]

    return buildSource(source)
}

function genInAttributes(attributes: Map<string, ZAttributeKey>): string[] {
    function genAttribute(name: string): string {
        switch (name) {
            case ATTR_POSITION.name:
                return `in vec3 ${ATTR_POSITION.inShader};`
            case ATTR_NORMAL.name:
                return `in vec3 ${ATTR_NORMAL.inShader};`
            case ATTR_UV.name:
                return `in vec2 ${ATTR_UV.inShader};`
            case ATTR_COLOR.name:
                return `in vec3 ${ATTR_COLOR.inShader};`
        }
    }

    return [...attributes.entries()].map(([name, _]) => genAttribute(name))
}

function genOutAttributes(attributes: Map<string, ZAttributeKey>) {
    if (!attributes.has("color")) {
        return ""
    }
    return `out vec3 ${ATTR_COLOR.varShader};`
}

function genOutColor(attributes: Map<string, ZAttributeKey>) {
    if (!attributes.has(ATTR_COLOR.name)) {
        return ""
    }
    return `${ATTR_COLOR.varShader} = ${ATTR_COLOR.inShader};`
}

function genUniforms(uniforms: Map<string, ZShaderUniform>): string[] {
    function genUniform(name: string): string {
        switch (name) {
            case UNIF_MODELVIEW.name:
                return `uniform mat4 ${UNIF_MODELVIEW.shader};`
            case UNIF_PROJECTION.name:
                return `uniform mat4 ${UNIF_PROJECTION.shader};`
            case UNIF_MODELVIEWPROJECTION.name:
                return `uniform mat4 ${UNIF_MODELVIEWPROJECTION.shader};`
        }
    }
    return [...uniforms.keys()].map(genUniform)
}

function genOutPosition() {
    return `gl_Position = ${UNIF_MODELVIEWPROJECTION.shader} * vec4(${ATTR_POSITION.inShader},1);`
}
