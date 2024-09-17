import {ZObject} from "../zernikalos/ZObject"
import {Zko, ZkoFile} from "../proto"
import _ from "lodash"
import {ZObjectType} from "../zernikalos/ZObjectType"
import {modelWriter} from "./sceneobjects/modelWriter"
import {ZModel} from "../zernikalos/ZModel"
import {WriterContext} from "./WriterContext"
import {ZkoParsed} from "../zkParse";
import {ZKO_VERSION} from "../constants/ZkoVersion";

export async function writeZko(zkoParsed: ZkoParsed): Promise<ZkoFile> {
    const tree = await writeTree(zkoParsed.root)
    let actions: Zko.ZkSkeletalAction[] = []
    if (!_.isNil(zkoParsed.actions)) {
        actions = zkoParsed.actions.map((action) => Zko.ZkSkeletalAction.fromObject(action))
    }
    return new Zko.ZkoFile({
        header: headerWrite(),
        root: tree,
        actions
    })
}

async function writeTree(obj: ZObject): Promise<Zko.ProtoZkObject> {
    const ctx = new WriterContext()
    return innerWriteTree(ctx, obj)
}

function headerWrite(): Zko.ZkoHeader {
    return Zko.ZkoHeader.create({
        version: ZKO_VERSION
    })
}

async function innerWriteTree(ctx: WriterContext, obj: ZObject): Promise<Zko.ProtoZkObject> {
    const auxNode: Zko.ProtoZkObject = await asyncConvertToProto(ctx, obj)
    if (_.isNil(auxNode)) {
        throw new Error(`Unrecognized conversion for object ${obj.name} with type ${obj.type}`)
    }

    const children: Zko.ProtoZkObject[] = []
    for (const child of obj.children) {
        const zkChild = await innerWriteTree(ctx, child)
        children.push(zkChild)
    }

    auxNode.children = children

    return auxNode
}

function asyncConvertToProto(ctx: WriterContext, obj: ZObject): Promise<Zko.ProtoZkObject> {
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve(convertToProto(ctx, obj))
        })
    })
}

function convertToProto(ctx: WriterContext, obj: ZObject) {
    // TODO: The use of fromObject affects a lot to the performance
    let auxNode: Zko.ProtoZkObject
    switch (obj.type.name) {
        case ZObjectType.SCENE.name:
            auxNode = new Zko.ProtoZkObject({
                type: ZObjectType.SCENE.name,
                scene: Zko.ZkScene.fromObject(obj)
            })
            break
        case ZObjectType.GROUP.name:
            auxNode = new Zko.ProtoZkObject({
                type: ZObjectType.GROUP.name,
                group: Zko.ZkGroup.fromObject(obj)
            })
            break
        case ZObjectType.MODEL.name:
            auxNode = new Zko.ProtoZkObject({
                type: ZObjectType.MODEL.name,
                model: modelWriter(ctx, obj as ZModel)
            })
            break
        case ZObjectType.CAMERA.name:
            auxNode = new Zko.ProtoZkObject({
                type: ZObjectType.CAMERA.name,
                camera: Zko.ZkCamera.fromObject(obj)
            })
            break
        case ZObjectType.SKELETON.name:
            auxNode = new Zko.ProtoZkObject({
                type: ZObjectType.SKELETON.name,
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
