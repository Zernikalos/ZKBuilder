import {ZObject} from "../zernikalos/ZObject"
import {Zko, ZkoFormat} from "../proto"
import _ from "lodash"
import {ZObjectType} from "../zernikalos/ZObjectType"
import {modelWriter} from "./sceneobjects/modelWriter"
import {ZModel} from "../zernikalos/ZModel"
import {WriterContext} from "./WriterContext"
import {ZkoParsed} from "../zkParse";
import {ZKO_VERSION} from "../constants/ZkoVersion";
import ZkoObjectProto = Zko.ZkoObjectProto;
import ZkoHierarchyNode = Zko.ZkoHierarchyNode;
import {mapToObject} from "../utils/mapToObject";

export async function writeZko(zkoParsed: ZkoParsed): Promise<ZkoFormat> {
    const {hierarchy, objectMap} = await writeTree(zkoParsed.root)
    let actions: Zko.ZkSkeletalAction[] = []
    if (!_.isNil(zkoParsed.actions)) {
        actions = zkoParsed.actions.map((action) => Zko.ZkSkeletalAction.fromObject(action))
    }
    return new Zko.ZkoFormat({
        header: headerWrite(),
        hierarchy,
        objects: mapToObject(objectMap),
        actions
    })
}

interface WriteTreeResult {
    objectMap: Map<string, ZkoObjectProto>;
    hierarchy: ZkoHierarchyNode;
}

async function writeTree(obj: ZObject): Promise<WriteTreeResult> {
    const ctx = new WriterContext()
    const objMap = new Map<string, ZkoObjectProto>()
    const rootHierarchyNode = ZkoHierarchyNode.fromObject({
        refId: obj.id,
    })
    await innerWriteTree(ctx, objMap, rootHierarchyNode, obj)
    return {
        objectMap: objMap,
        hierarchy: rootHierarchyNode,
    }
}

function headerWrite(): Zko.ZkoHeader {
    return Zko.ZkoHeader.create({
        version: ZKO_VERSION
    })
}

async function innerWriteTree(
    ctx: WriterContext,
    objMap: Map<string, ZkoObjectProto>,
    parentHierarchyNode: ZkoHierarchyNode,
    currentObj: ZObject): Promise<void> {

    const auxNode: Zko.ZkoObjectProto = await asyncConvertToProto(ctx, currentObj)
    if (_.isNil(auxNode)) {
        throw new Error(`Unrecognized conversion for object ${currentObj.name} with type ${currentObj.type}`)
    }
    // Adding to the map
    objMap.set(currentObj.id, auxNode)
    for (const child of currentObj.children) {
        // Adding to the hierarchy
        const childHierarchyNode: ZkoHierarchyNode = new ZkoHierarchyNode({
            refId: child.id
        })
        parentHierarchyNode.children.push(childHierarchyNode)
        await innerWriteTree(
            ctx,
            objMap,
            childHierarchyNode,
            child
        )
    }
}

function asyncConvertToProto(ctx: WriterContext, obj: ZObject): Promise<Zko.ZkoObjectProto> {
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve(convertToProto(ctx, obj))
        })
    })
}

function convertToProto(ctx: WriterContext, obj: ZObject): Zko.ZkoObjectProto {
    // TODO: The use of fromObject affects a lot to the performance
    let auxNode: Zko.ZkoObjectProto
    switch (obj.type.name) {
        case ZObjectType.SCENE.name:
            auxNode = new Zko.ZkoObjectProto({
                type: ZObjectType.SCENE.name,
                refId: obj.id,
                scene: Zko.ZkScene.fromObject(obj)
            })
            break
        case ZObjectType.GROUP.name:
            auxNode = new Zko.ZkoObjectProto({
                type: ZObjectType.GROUP.name,
                refId: obj.id,
                group: Zko.ZkGroup.fromObject(obj)
            })
            break
        case ZObjectType.MODEL.name:
            auxNode = new Zko.ZkoObjectProto({
                type: ZObjectType.MODEL.name,
                refId: obj.id,
                model: modelWriter(ctx, obj as ZModel)
            })
            break
        case ZObjectType.CAMERA.name:
            auxNode = new Zko.ZkoObjectProto({
                type: ZObjectType.CAMERA.name,
                refId: obj.id,
                camera: Zko.ZkCamera.fromObject(obj)
            })
            break
        case ZObjectType.SKELETON.name:
            auxNode = new Zko.ZkoObjectProto({
                type: ZObjectType.SKELETON.name,
                refId: obj.id,
                skeleton: Zko.ZkSkeleton.fromObject(obj)
            })
            break
        // case ZObjectType.JOINT:
        //     auxNode = new Zko.ProtoZkObject({
        //         type: "Joint",
        //         joint: Zko.ZkJoint.fromObject(obj)
        //     })
    }
    return auxNode
}
