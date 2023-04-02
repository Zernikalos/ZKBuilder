import {ZObjectType} from "../zernikalos/ZObject";

/**
 * Simple ID generation based on numbers of element per type
 */
export class IdGenerator {

    private static counters: Map<ZObjectType, number>

    public static parseBegin() {
        IdGenerator.counters = new Map()
    }

    public static add(type: ZObjectType) {
        if (!IdGenerator.counters.has(type)) {
            IdGenerator.counters.set(type, 0)
        }
        const count = IdGenerator.counters.get(type) + 1
        IdGenerator.counters.set(type, count)
        return count
    }

    public static pop(type: ZObjectType) {
        if (!IdGenerator.counters.has(type)) {
            IdGenerator.counters.set(type, 0)
        }
        const count = Math.max(IdGenerator.counters.get(type) - 1, 0)
        IdGenerator.counters.set(type, count)
    }

    public static reset() {
        IdGenerator.counters.clear()
    }
}
