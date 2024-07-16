import {ZRefComponent} from "../zernikalos/ZRefComponent"

export class ParserContext {

    private components = new Map<number | string, ZRefComponent>()

    registerComponent(id: number | string, component: ZRefComponent) {
        if (this.components.has(id)) {
            console.error("Re-registering component", component.refId)
        }
        this.components.set(id, component)
    }

    hasComponent(id: number | string): boolean {
        return this.components.has(id)
    }

    getComponent(id: number | string): ZRefComponent {
        return this.components.get(id)
    }
}