import {ZRef} from "@/zernikalos";

type ComponentId = string
type ComponentTag = string

interface ComponentRegistryItem {
    component: ZRef
    tag?: ComponentTag
}

export class ParserContext {

    private components = new Map<ComponentId, ComponentRegistryItem>()

    private componentRegisterCallbacks: Map<ComponentId, (() => void)[]> = new Map()

    registerComponent(id: ComponentId, component: ZRef) {
        if (this.components.has(id)) {
            console.error("Re-registering component", component.refId)
        }
        this.components.set(id, {component})
        this.triggerPendingCallbacks(id)
    }

    registerComponentWithTag(id: ComponentId, tag: ComponentTag, component: ZRef) {
        if (this.components.has(id)) {
            console.error("Re-registering component", component.refId)
        }
        this.components.set(id, {component, tag})
        this.triggerPendingCallbacks(id)
    }

    private triggerPendingCallbacks(id: ComponentId) {
        if (this.componentRegisterCallbacks.has(id)) {
            this.componentRegisterCallbacks.get(id)
                .forEach((callback) => {
                    callback()
                })
            this.componentRegisterCallbacks.delete(id)
        }
    }

    hasComponent(id: ComponentId): boolean {
        return this.components.has(id)
    }

    getComponent(id: ComponentId): ZRef {
        return this.components.get(id).component
    }
    
    getComponentsByTag(tag: ComponentTag): ZRef[] {
        //return [...this.components].filter(([id]) => id.endsWith(`.${tag}`)).map(([_, component]) => component)
        return Array.from(this.components.values()).filter((item) => item.tag === tag).map((item) => item.component)
    }

    private registerCallback(id: ComponentId, callback: () => void) {
        if (this.componentRegisterCallbacks.has(id)) {
            this.componentRegisterCallbacks.get(id).push(callback)
            return
        }
        this.componentRegisterCallbacks.set(id, [callback])
    }

    async getComponentAsync(id: ComponentId): Promise<ZRef> {
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