import {ZRef} from "../zernikalos/ZRef";

export class ParserContext {

    private components = new Map<string, ZRef>()

    private componentRegisterCallbacks: Map<string, (() => void)[]> = new Map()

    registerComponent(id: string, component: ZRef) {
        if (this.components.has(id)) {
            console.error("Re-registering component", component.refId)
        }
        this.components.set(id, component)
        if (this.componentRegisterCallbacks.has(id)) {
            this.componentRegisterCallbacks.get(id)
                .forEach((callback) => {
                    callback()
                })
            this.componentRegisterCallbacks.delete(id)
        }
    }

    hasComponent(id: string): boolean {
        return this.components.has(id)
    }

    getComponent(id: string): ZRef {
        return this.components.get(id)
    }
    
    getComponentsByTag(tag: string): ZRef[] {
        return [...this.components].filter(([id]) => id.endsWith(`.${tag}`)).map(([_, component]) => component)
    }

    private registerCallback(id: string, callback: () => void) {
        if (this.componentRegisterCallbacks.has(id)) {
            this.componentRegisterCallbacks.get(id).push(callback)
            return
        }
        this.componentRegisterCallbacks.set(id, [callback])
    }

    async getComponentAsync(id: string): Promise<ZRef> {
        if (this.hasComponent(id)) {
            return this.getComponent(id)
        }
        return new Promise((resolve, _reject) => {
            this.registerCallback(id, () => {
                resolve(this.getComponent(id))
            })
        })
    }
}