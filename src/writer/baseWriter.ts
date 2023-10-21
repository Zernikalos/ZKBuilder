import {ZObject, ZObjectType} from "../zernikalos/ZObject";
import {Zko} from "../proto";
import _ from "lodash";

export async function writeTree(obj: ZObject): Promise<Zko.ProtoZkObject> {
    const auxNode: Zko.ProtoZkObject = await asyncConvertToProto(obj)
    if (_.isNil(auxNode)) {
        throw new Error(`Unrecognized conversion for object ${obj.name} with type ${obj.type}`)
    }

    auxNode.children = await Promise.all(obj.children.map(async child => await writeTree(child)))

    return auxNode
}

function asyncConvertToProto(obj: ZObject): Promise<Zko.ProtoZkObject> {
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve(convertToProto(obj))
        })
    })
}

function convertToProto(obj: ZObject) {
    // TODO: The use of fromObject affects a lot to the performance
    let auxNode: Zko.ProtoZkObject
    switch (obj.type) {
        case ZObjectType.SCENE:
            auxNode = new Zko.ProtoZkObject({
                type: "Scene",
                scene: Zko.ZkScene.fromObject(obj)
            })
            break
        case ZObjectType.GROUP:
        case ZObjectType.OBJECT:
            auxNode = new Zko.ProtoZkObject({
                type: "Group",
                group: Zko.ZkGroup.fromObject(obj)
            })
            break
        case ZObjectType.MODEL:
            auxNode = new Zko.ProtoZkObject({
                type: "Model",
                model: Zko.ZkModel.fromObject(obj)
            })
            break
        case ZObjectType.CAMERA:
            auxNode = new Zko.ProtoZkObject({
                type: "Camera",
                camera: Zko.ZkCamera.fromObject(obj)
            })
            break
        case ZObjectType.SKELETON:
            auxNode = new Zko.ProtoZkObject({
                type: "Skeleton",
                skeleton: Zko.ZkSkeleton.fromObject(obj)
            })
            break
        case ZObjectType.JOINT:
            auxNode = new Zko.ProtoZkObject({
                type: "Joint",
                joint: Zko.ZkJoint.fromObject(obj)
            })
    }
    return auxNode
}
