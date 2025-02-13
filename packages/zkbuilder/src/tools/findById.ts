import {ZObject} from "../zernikalos/ZObject"

export function findById(obj: ZObject, id: string): ZObject | undefined {
    if (obj.id === id) {
        return obj
    }
    for (const child of obj.children) {
        const found = findById(child, id)
        if (found) {
            return found
        }
    }
}
