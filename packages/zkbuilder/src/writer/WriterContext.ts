import {ZRef} from "@/zernikalos";

export class WriterContext {
    private writtenComponents: Map<String, ZRef> = new Map()
    registerComponent(comp: ZRef) {
        if (this.writtenComponents.has(comp.refId)) {
            throw new Error("Component already registered")
        }
        this.writtenComponents.set(comp.refId, comp)
    }

    hasWrittenComponent(comp: ZRef): boolean {
        return this.writtenComponents.has(comp.refId)
    }
}