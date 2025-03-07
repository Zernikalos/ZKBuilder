import {ZRef} from "../zernikalos/ZRef";

export class ParserContext {

    private components = new Map<string, ZRef>()

    registerComponent(id: string, component: ZRef) {
        if (this.components.has(id)) {
            console.error("Re-registering component", component.refId)
        }
        this.components.set(id, component)
    }

    hasComponent(id: string): boolean {
        return this.components.has(id)
    }

    getComponent(id: string): ZRef {
        return this.components.get(id)
    }

    getComponentAsync(id: string): Promise<ZRef> {
        return new Promise((resolve, _reject) => {
            const interval = setInterval(() => {
                if (this.hasComponent(id)) {
                    clearInterval(interval)
                    resolve(this.getComponent(id))
                }
            }, 200)
        })
    }
}