import {ZObject} from "../zernikalos/ZObject"
import {ZGroup} from "../zernikalos/ZGroup"
import {parseGroup} from "./parseGroup"
import {parseModel} from "./parseModel"
import {isNil} from "lodash"
import {Camera, Group, Mesh, Object3D, Scene} from "three"
import {parseTransform} from "./parseTransform"
import {parseScene} from "./parseScene"
import {parseCamera} from "./parseCamera"
import {JointNode, parseJoint} from "./parseSkeleton"

export async function parseObject(threeObj: Object3D): Promise<ZObject | undefined> {
    return await parseObjectRecursive(threeObj)
}

async function parseObjectRecursive(threeObj: Object3D): Promise<ZObject | undefined> {
    const {zObject, children} = await parseObjectByType(threeObj)

    const parsedChildren = await Promise.all(
        children
            .map(async (child: Object3D)=> await parseObjectRecursive(child))
    )

    zObject.children = parsedChildren.filter((child: ZObject) => !isNil(child))
    return zObject
}

async function parseObjectByType(threeObj: Object3D): Promise<{zObject: ZObject, children: Object3D[]}> {
    let zObject: ZObject
    let res
    let children

    switch (threeObj.type) {
        case "Group":
            res = parseGroup(threeObj as Group)
            zObject = res.group
            children = res.children
            break
        case "Mesh":
        case "SkinnedMesh":
            res = await parseModel(threeObj as Mesh)
            zObject = res.model
            children = res.children
            break
        case "PerspectiveCamera":
        case "OrthographicCamera":
            res = parseCamera(threeObj as Camera)
            zObject = res.camera
            children = res.children
            break
        case "Scene":
            res = parseScene(threeObj as Scene)
            zObject = res.scene
            children = res.children
            break
        // case "Bone":
        //     res = parseSkeleton(threeObj as Bone)
        //     zObject = res.skeleton
        //     children = res.children
        //     break
        case "Joint":
            res = parseJoint(threeObj as JointNode)
            zObject = res.joint
            children = res.children
            break
    }

    if (isNil(zObject) || isNil(zObject.type)) {
        console.warn(`Error detecting object of type ${threeObj.type}, setting a default ZObject`)
        // TODO: Fix this type
        zObject = new ZGroup()
        children = threeObj.children
    }
    zObject.name = threeObj.name
    zObject.transform = parseTransform(threeObj)

    return {zObject, children}
}