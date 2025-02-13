import {ZModel} from "../../zernikalos/ZModel"
import {BR, buildSource, CLOSE_MAIN, FLOAT_PRECISSION, HEADER, OPEN_MAIN} from "./shadersourcecommon"
import {
    ATTR_COLOR,
    ATTR_UV,
    UNIF_TEXTURE
} from "../../constants"
import _ from "lodash"
import {kotlinMapToJsMap, mapFlatJs} from "../../utils/mapFlatJs";
import {ZBufferKey} from "../../zernikalos/mesh/ZBufferKey";

export function generateFragmentShaderSource(obj: ZModel) {

    const HAS_TEXTURES = !_.isNil(obj.material?.texture)
    const uniforms = kotlinMapToJsMap(obj.shaderProgram.uniforms)
    const buffers: {key: string, value: ZBufferKey}[] = mapFlatJs(obj.mesh.buffers)

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

        return [...buffers].map((buff) => genAttribute(buff.key))
    }

    function genOutAttributes() {
        return `out vec4 ${ATTR_COLOR.fragName};`
    }

    function genOutColor() {
        if (buffers.some((buff) => buff.key === ATTR_UV.name) && HAS_TEXTURES) {
            return `${ATTR_COLOR.fragName} = texture(${UNIF_TEXTURE.uniformName}, ${ATTR_UV.variantName});`
        }
        if (buffers.some((buff) => buff.key === ATTR_COLOR.name)) {
            return `${ATTR_COLOR.fragName} = vec4(${ATTR_COLOR.variantName}.xyz, 1);`
        }
        return `${ATTR_COLOR.fragName} = vec4(0.5, 0.5, 0.5, 1.0);`
    }
}


