import {ZComponent} from "../zernikalos/ZComponent"

export class ParserContext {

    private components = new Map<number | string, ZComponent>()

    registerComponent(id: number | string, component: ZComponent) {
        if (this.components.has(id)) {
            console.error("Re-registering component", component.refId)
        }
        this.components.set(id, component)
    }

    hasComponent(id: number | string): boolean {
        return this.components.has(id)
    }

    getComponent(id: number | string): ZComponent {
        return this.components.get(id)
    }
}