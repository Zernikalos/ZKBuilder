import {Group, Object3D} from "three"
import {ZGroup} from "@/zernikalos"

export function parseGroup(threeObj: Group): {group: ZGroup, children: Object3D[]} {
    const group = new ZGroup()
    return {group, children: threeObj.children}
}
