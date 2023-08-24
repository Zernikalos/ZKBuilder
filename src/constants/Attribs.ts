import _ from "lodash";

export class Attrib {
    name: string
    three: string
    shaderName: string

    constructor({name, three, shaderName}: {name: string, three: string, shaderName: string}) {
        this.name = name
        this.shaderName = shaderName
        this.three = three
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


