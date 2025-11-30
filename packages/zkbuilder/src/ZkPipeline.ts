import { ZkoFormat } from "./proto"
import { LoadOptions, zkLoad } from "./zkLoad"
import { ParseOptions, zkParse } from "./zkParse"
import { ZkoParsed } from "./parsers"
import { ExportOptions, zkExport } from "./zkExport"
import { ZkoParseableObject } from "./formats/ZkoParseableObject"

export class ZkPipeline {
    private steps: {
        loaded?: ZkoParseableObject
        parsed?: ZkoParsed
        exported?: string | Uint8Array | ZkoFormat
    } = {}

    get loaded() { 
        return this.steps.loaded 
    }

    get parsed() { 
        return this.steps.parsed 
    }

    get exported() { 
        return this.steps.exported 
    }
    
    get data() { 
        return this.steps 
    }

    // Método para obtener información del pipeline
    get status() {
        return {
            hasLoaded: !!this.steps.loaded,
            hasParsed: !!this.steps.parsed,
            hasExported: !!this.steps.exported
        }
    }

    async load(options: LoadOptions) {
        this.steps.loaded = await zkLoad(options)
        return this
    }

    async parse(options?: ParseOptions) {
        if (!this.steps.loaded) {
            throw new Error('Must load first')
        }
        this.steps.parsed = await zkParse(this.steps.loaded, options)
        return this
    }

    async export(options?: ExportOptions) {
        if (!this.steps.parsed) {
            throw new Error('Must parse first')
        }
        this.steps.exported = await zkExport(this.steps.parsed, options)
        return this.steps.exported
    }
}
