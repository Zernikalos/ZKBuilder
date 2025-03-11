import {ZRef} from "../zernikalos/ZRef";

export class ParserContext {

    private components = new Map<string, ZRef>()

    private componentRegisterCallbacks: Map<string, () => void> = new Map()

    registerComponent(id: string, component: ZRef) {
        if (this.components.has(id)) {
            console.error("Re-registering component", component.refId)
        }
        this.components.set(id, component)
        if (this.componentRegisterCallbacks.has(id)) {
            this.componentRegisterCallbacks.get(id)()
        }
    }

    hasComponent(id: string): boolean {
        return this.components.has(id)
    }

    getComponent(id: string): ZRef {
        return this.components.get(id)
    }

    private registerCallback(id: string, callback: () => void) {
        this.componentRegisterCallbacks.set(id, () => {
            callback()
            this.componentRegisterCallbacks.delete(id)
        })
    }

    getComponentAsync(id: string): Promise<ZRef> {
        return new Promise((resolve, _reject) => {
            this.registerCallback(id, () => {
                resolve(this.getComponent(id))
            })
        })
    }
}