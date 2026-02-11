import {ZObject} from "@/zernikalos"
import {ZGroup} from "@/zernikalos"
import {parseGroup} from "./parseGroup"
import {parseModel} from "./parseModel"
import {isNil} from "lodash"
import {Bone, Camera, Group, Light, Mesh, Object3D, Scene} from "three"
import {parseTransform} from "./parseTransform"
import {parseScene} from "./parseScene"
import {parseCamera} from "./parseCamera"
import {ParserContext} from "./ParserContext";
import {parseSkeletonObject} from "./parseSkeleton";
import { ZTexture } from "@/zernikalos"
import { ZMesh } from "@/zernikalos"
import {ZkComponentCollection} from "./ZkoParsed"
import { parseLight } from "./parseLight"

export interface ParseResult {
    zObject: ZObject,
    zComponents: ZkComponentCollection
}

export async function parseObject(threeObj: Object3D): Promise<ParseResult> {
    const ctx = new ParserContext()

    const zobj = await parseObjectRecursive(ctx, threeObj)
    const textures = ctx.getComponentsByTag("Texture") as ZTexture[]
    const meshes = ctx.getComponentsByTag("Mesh") as ZMesh[]

    const componentCollection = {
        textures,
        meshes
    }
    return {zObject: zobj, zComponents: componentCollection}
}

async function parseObjectRecursive(ctx: ParserContext, threeObj: Object3D): Promise<ZObject | undefined> {
    const {zObject, children} = await parseObjectByType(ctx, threeObj)

    const parsedChildren = []
    for (const child of children) {
        const parsed = await parseObjectRecursive(ctx, child)
        parsedChildren.push(parsed)
    }

    zObject.children = parsedChildren.filter((child: ZObject) => !isNil(child))
    return zObject
}

async function parseObjectByType(ctx: ParserContext, threeObj: Object3D): Promise<{zObject: ZObject, children: Object3D[]}> {
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
            res = await parseModel(ctx, threeObj as Mesh)
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
        case "Bone":
            res = parseSkeletonObject(ctx, threeObj as Bone)
            zObject = res.skeleton
            children = res.children
            break
        case "Light":
        case "DirectionalLight":
        case "PointLight":
        case "SpotLight":
            res = parseLight(threeObj as Light)
            zObject = res.light
            children = res.children
            break
        // case "Joint":
        //     res = parseJoint(threeObj as JointNode)
        //     zObject = res.joint
        //     children = res.children
        //     break
    }

    if (isNil(zObject) || isNil(zObject.type)) {
        console.warn(`Error detecting object of type ${threeObj.type}, setting a default ZObject`)
        // TODO: Fix this type
        zObject = new ZGroup()
        children = threeObj.children
    }
    zObject.name = threeObj.name
    zObject.transform = parseTransform(threeObj)

    // This is for being able to recognize the type when the reactivity comes in
    Object.seal(zObject.type)

    return {zObject, children}
}