import {ZComponent} from "../zernikalos/ZComponent"

export class ParserContext {

    private components = new Map<string, ZComponent>()

    registerComponent(id: string, component: ZComponent) {
        if (this.components.has(id)) {
            console.error("Re-registering component", component.refId)
        }
        this.components.set(id, component)
    }

    hasComponent(id: string): boolean {
        return this.components.has(id)
    }

    getComponent(id: string): ZComponent {
        return this.components.get(id)
    }
}