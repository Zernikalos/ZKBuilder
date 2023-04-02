import {ZObject, ZObjectType} from "../zernikalos/ZObject"
import {Zko} from "../proto"

function writeTree(obj: ZObject): Zko.ProtoZkObject {
    const auxNode: Zko.ProtoZkObject = convertToProto(obj)

    auxNode.children = obj.children.map(child => writeTree(child))

    return auxNode
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
    }
    return auxNode
}

export async function protoTree(root: ZObject): Promise<Zko.ProtoZkObject> {
    return await writeTree(root)
}

export async function protoWrite(root: ZObject): Promise<Uint8Array> {
    const protoRoot = await writeTree(root)

    return Zko.ProtoZkObject.encode(protoRoot).finish()
}
