import {ZModel} from "../../zernikalos/ZModel"
import {ZShaderUniform} from "../../zernikalos/shader/ZShaderUniform"
import {ZBufferKey} from "../../zernikalos/mesh/ZBufferKey"
import {BR, buildSource, CLOSE_MAIN, FLOAT_PRECISSION, HEADER, OPEN_MAIN} from "./shadersourcecommon"
import {
    ATTR_COLOR,
    ATTR_UV,
    UNIF_TEXTURE
} from "../../constants"
import _ from "lodash"

export function generateFragmentShaderSource(obj: ZModel) {

    const HAS_TEXTURES = !_.isNil(obj.material?.texture)
    const uniforms: Map<string, ZShaderUniform> = obj.shaderProgram.uniformsMap
    const bufferKeys: ZBufferKey[] = obj.mesh.bufferKeys

    const source: string[] = [
        HEADER,
        BR,
        FLOAT_PRECISSION,
        BR,
        ...genUniforms(),
        ...genInAttributes(),
        genOutAttributes(),
        BR,
        OPEN_MAIN,
        genOutColor(),
        CLOSE_MAIN
    ]

    return buildSource(source)

    function genUniforms(): string[] {
        function genUniform(name: string): string {
            switch (name) {
                case UNIF_TEXTURE.name:
                    return `uniform sampler2D ${UNIF_TEXTURE.uniformName};`
            }
        }
        return [...uniforms.keys()].map(genUniform)
    }

    function genInAttributes(): string[] {
        function genAttribute(name: string): string {
            switch (name) {
                case ATTR_COLOR.name:
                    return `smooth in vec3 ${ATTR_COLOR.variantName};`
                case ATTR_UV.name:
                    if (!HAS_TEXTURES) {
                        return ""
                    }
                    return `smooth in vec2 ${ATTR_UV.variantName};`
            }
        }

        return [...bufferKeys].map((bufferKey: ZBufferKey) => genAttribute(bufferKey.name))
    }

    function genOutAttributes() {
        return `out vec4 ${ATTR_COLOR.fragName};`
    }

    function genOutColor() {
        if (bufferKeys.some((key) => key.name === ATTR_UV.name) && HAS_TEXTURES) {
            return `${ATTR_COLOR.fragName} = texture(${UNIF_TEXTURE.uniformName}, ${ATTR_UV.variantName});`
        }
        if (bufferKeys.some((key) => key.name === ATTR_COLOR.name)) {
            return `${ATTR_COLOR.fragName} = vec4(${ATTR_COLOR.variantName}.xyz, 1);`
        }
        return `${ATTR_COLOR.fragName} = vec4(0.5, 0.5, 0.5, 1.0);`
    }
}


