import {ZComponent} from "../zernikalos/ZComponent"

export class WriterContext {
    private writtenComponents: Map<String, ZComponent> = new Map()
    registerComponent(comp: ZComponent) {
        if (this.writtenComponents.has(comp.refId)) {
            throw new Error("Component already registered")
        }
        this.writtenComponents.set(comp.refId, comp)
    }

    hasWrittenComponent(comp: ZComponent): boolean {
        return this.writtenComponents.has(comp.refId)
    }
}