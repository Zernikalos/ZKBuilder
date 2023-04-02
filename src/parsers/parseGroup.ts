import {Group} from "three"
import {ZGroup} from "../zernikalos/ZGroup"

export function parseGroup(_obj: Group) {
    const group = new ZGroup()
    return group
}
