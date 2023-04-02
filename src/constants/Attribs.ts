import _ from "lodash";

export class Attrib {
    name: string
    three: string
    inShader: string
    outShader = ""
    varShader = ""

    constructor({name, three, shader, outFragShader, varShader}: {name: string, three: string, shader: string, outFragShader?: string, varShader?: string}) {
        this.name = name
        this.inShader = shader
        this.three = three
        if (!_.isNil(outFragShader) || !_.isNil(varShader)) {
            this.outShader = outFragShader
            this.varShader = varShader
        }
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
        return _.find(this.list, (attr) => attr.inShader === name)
    }

    findByThreeName(name: string) {
        return _.find(this.list, (attr) => attr.three === name)
    }
}


