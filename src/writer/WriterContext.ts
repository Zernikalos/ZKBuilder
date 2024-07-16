import {ZRefComponent} from "../zernikalos/ZRefComponent"

export class WriterContext {
    private writtenComponents: Map<Number, ZRefComponent> = new Map()
    registerComponent(comp: ZRefComponent) {
        if (this.writtenComponents.has(comp.refId)) {
            throw new Error("Component already registered")
        }
        this.writtenComponents.set(comp.refId, comp)
    }

    hasWrittenComponent(comp: ZRefComponent): boolean {
        return this.writtenComponents.has(comp.refId)
    }
}