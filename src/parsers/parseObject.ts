import { ZGroup } from "../zernikalos/ZGroup";
import {ZObject} from "../zernikalos/ZObject"
import {parseGroup} from "./parseGroup"
import {parseModel} from "./parseModel"
import {isNil} from "lodash"
import {Camera, Group, Mesh, Object3D, Scene} from "three"
import {parseTransform} from "./parseTransform"
import {parseScene} from "./parseScene"
import {parseCamera} from "./parseCamera"

export async function parseObject(threeObj: Object3D): Promise<ZObject | undefined> {
    let zObject: ZObject

    switch (threeObj.type) {
        case "Group":
            zObject = parseGroup(threeObj as Group)
            break
        case "Mesh":
        case "SkinnedMesh":
            zObject = await parseModel(threeObj as Mesh)
            break
        case "PerspectiveCamera":
        case "OrthographicCamera":
            zObject = parseCamera(threeObj as Camera)
            break
        case "Scene":
            zObject = parseScene(threeObj as Scene)
            break
    }

    if (!zObject || !zObject.type) {
        console.warn(`Error detecting object of type ${threeObj.type}, setting a default ZObject`)
        // TODO: Fix this type
        zObject = new ZGroup()
    }
    zObject.name = threeObj.name
    zObject.transform = parseTransform(threeObj)

    const parsedChildren = await Promise.all(
        threeObj.children
        .map(async (child: Object3D)=> await parseObject(child))
    )

    zObject.children = parsedChildren.filter((child: ZObject) => !isNil(child))
    return zObject
}
