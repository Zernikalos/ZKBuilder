import {zernikalos} from "@zernikalos/zernikalos";
import ZRef = zernikalos.components.ZRef;

export class ParserContext {

    private components = new Map<number | string, ZRef>()

    registerComponent(id: number | string, component: ZRef) {
        if (this.components.has(id)) {
            console.error("Re-registering component", component.refId)
        }
        this.components.set(id, component)
    }

    hasComponent(id: number | string): boolean {
        return this.components.has(id)
    }

    getComponent(id: number | string): ZRef {
        return this.components.get(id)
    }
}