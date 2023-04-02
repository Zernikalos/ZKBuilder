import {ZModel} from "../../zernikalos/ZModel";
import {ZAttributeKey} from "../../zernikalos/mesh/ZAttributeKey";
import {BR, buildSource, CLOSE_MAIN, FLOAT_PRECISSION, HEADER, OPEN_MAIN} from "./shadersourcecommon";
import {ATTR_COLOR} from "../../constants";

export function generateFragmentShaderSource(obj: ZModel) {
    const source: string[] = [
        HEADER,
        BR,
        FLOAT_PRECISSION,
        BR,
        ...genInAttributes(obj.mesh.attributeKeysMap),
        genOutAttributes(obj.mesh.attributeKeysMap),
        BR,
        OPEN_MAIN,
        genOutColor(obj.mesh.attributeKeysMap),
        CLOSE_MAIN
    ]

    return buildSource(source)
}

function genInAttributes(attributes: Map<string, ZAttributeKey>): string[] {
    function genAttribute(name: string): string {
        switch (name) {
            case ATTR_COLOR.name:
                return `smooth in vec3 ${ATTR_COLOR.varShader};`
        }
    }

    return [...attributes.entries()].map(([name, _]) => genAttribute(name))
}

function genOutAttributes(_attributes: Map<string, ZAttributeKey>) {
    return `out vec4 ${ATTR_COLOR.outShader};`
}

function genOutColor(attributes: Map<string, ZAttributeKey>) {
    if (attributes.has(ATTR_COLOR.name)) {
        return `${ATTR_COLOR.outShader} = vec4(${ATTR_COLOR.varShader}.xyz, 1);`
    }
    return `${ATTR_COLOR.outShader} = vec4(0.5, 0.5, 0.5, 1.0);`
}
