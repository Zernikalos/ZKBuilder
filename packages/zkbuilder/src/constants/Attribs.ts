import _ from "lodash";
import type {ZDataType} from "@/zernikalos";

export class Attrib {
    name: string
    three: string
    shaderName: string
    id: number
    desiredDataType?: ZDataType

    constructor({id, name, three, shaderName, desiredDataType}: {
        id: number
        name: string
        three: string
        shaderName: string
        desiredDataType?: ZDataType
    }) {
        this.id = id
        this.name = name
        this.shaderName = shaderName
        this.three = three
        this.desiredDataType = desiredDataType
    }

    get attribName() {
        return `a_${this.shaderName}`
    }

    get fragName() {
        return `f_${this.shaderName}`
    }

    get variantName() {
        return `v_${this.shaderName}`
    }
}

export class AttribList {
    list: Attrib[] = []

    constructor(attrs: Attrib[] = []) {
        this.list.push(...attrs)
    }

    findByName(name: string) {
        return _.find(this.list, (attr) => attr.name === name)
    }

    findByShader(name: string) {
        return _.find(this.list, (attr) => attr.shaderName === name)
    }

    findByThreeName(name: string) {
        return _.find(this.list, (attr) => attr.three === name)
    }
}


