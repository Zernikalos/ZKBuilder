import {ZObject} from "@/zernikalos"
import {Zko, ZkoFormat} from "../proto"
import _ from "lodash"
import {ZObjectType} from "@/zernikalos"
import {modelWriter} from "./sceneobjects/modelWriter"
import {ZModel} from "@/zernikalos"
import {WriterContext} from "./WriterContext"
import {ZkoParsed} from "../parsers";
import {ZKO_VERSION} from "../constants/ZkoVersion";
import ZkoObjectProto = Zko.ZkoObjectProto;
import ZkoHierarchyNode = Zko.ZkoHierarchyNode;

/**
 * Processes and writes a ZKO format object, including its hierarchy, components, objects, and actions.
 *
 * @param {ZkoParsed} zkoParsed - An object representing the parsed ZKO input, containing the root, actions, and other related data.
 * @return {Promise<ZkoFormat>} A promise that resolves to a ZkoFormat object, representing the formatted ZKO data.
 */
export async function writeZko(zkoParsed: ZkoParsed): Promise<ZkoFormat> {
    const {hierarchy, objectMap} = await writeTree(zkoParsed.root)
    let actions: Zko.ZkSkeletalAction[] = []
    if (!_.isNil(zkoParsed.actions)) {
        actions = zkoParsed.actions.map((action) => Zko.ZkSkeletalAction.fromObject(action))
    }
    const components = componentCollectionsWrite(zkoParsed)

    const objects = sortObjectList([...objectMap.values()])
    return new Zko.ZkoFormat({
        header: headerWrite(),
        components,
        hierarchy,
        objects,
        actions
    })
}

/**
 * Represents the result of writing a tree structure, encapsulating a map of objects and its hierarchy.
 *
 * @interface WriteTreeResult
 *
 * @property {Map<string, ZkoObjectProto>} objectMap - A map containing object data, where the key is a string and the value is an instance of ZkoObjectProto.
 * @property {ZkoHierarchyNode} hierarchy - Represents the structural hierarchy associated with the written tree.
 */
interface WriteTreeResult {
    objectMap: Map<string, ZkoObjectProto>;
    hierarchy: ZkoHierarchyNode;
}

/**
 * Writes a hierarchical tree structure based on the given object.
 *
 * @param {ZObject} obj - The root object used to generate the tree structure.
 * @return {Promise<WriteTreeResult>} A promise resolving to an object containing the generated object map and hierarchy.
 */
async function writeTree(obj: ZObject): Promise<WriteTreeResult> {
    const ctx = new WriterContext()
    const objMap = new Map<string, ZkoObjectProto>()
    const rootHierarchyNode = ZkoHierarchyNode.fromObject({
        refId: obj.refId,
    })
    await innerWriteTree(ctx, objMap, rootHierarchyNode, obj)
    return {
        objectMap: objMap,
        hierarchy: rootHierarchyNode,
    }
}

/**
 * Creates and returns a ZkoHeader instance initialized with the predefined version.
 *
 * @return {Zko.ZkoHeader} A new instance of Zko.ZkoHeader with the specified version.
 */
function headerWrite(): Zko.ZkoHeader {
    return Zko.ZkoHeader.create({
        version: ZKO_VERSION
    })
}

/**
 * Processes the parsed ZKO object and converts its components into a ZkComponentCollection.
 *
 * @param {ZkoParsed} zkoParsed - The parsed ZKO object containing component data.
 * @return {Zko.ZkComponentCollection} The constructed ZkComponentCollection object.
 */
function componentCollectionsWrite(zkoParsed: ZkoParsed): Zko.ZkComponentCollection{
    return Zko.ZkComponentCollection.fromObject(zkoParsed.components)
}

/**
 * Recursively processes and writes a hierarchical structure by converting objects to a specific format,
 * storing them in a map, and maintaining a hierarchy of nodes.
 *
 * @param {WriterContext} ctx - The context object used for the conversion process.
 * @param {Map<string, ZkoObjectProto>} objMap - A map where the converted objects are stored with their reference IDs as keys.
 * @param {ZkoHierarchyNode} parentHierarchyNode - The parent node in the hierarchy tree to which child nodes will be added.
 * @param {ZObject} currentObj - The current object being processed and converted.
 * @return {Promise<void>} A promise that resolves when the tree processing and writing are complete.
 */
async function innerWriteTree(
    ctx: WriterContext,
    objMap: Map<string, ZkoObjectProto>,
    parentHierarchyNode: ZkoHierarchyNode,
    currentObj: ZObject): Promise<void> {

    const auxNode: Zko.ZkoObjectProto = await asyncConvertZtoZk(ctx, currentObj)
    if (_.isNil(auxNode)) {
        throw new Error(`Unrecognized conversion for object ${currentObj.name} with type ${currentObj.type}`)
    }
    // Adding to the map
    objMap.set(currentObj.refId, auxNode)
    for (const child of currentObj.children) {
        // Adding to the hierarchy
        const childHierarchyNode: ZkoHierarchyNode = new ZkoHierarchyNode({
            refId: child.refId
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

/**
 * Converts a ZObject into a ZkoObjectProto asynchronously using the provided WriterContext.
 *
 * @param {WriterContext} ctx - The context for writing, containing necessary configuration and state.
 * @param {ZObject} obj - The object to be converted to a protocol buffer representation.
 * @return {Promise<Zko.ZkoObjectProto>} A promise that resolves to the protocol buffer representation of the given object.
 */
function asyncConvertZtoZk(ctx: WriterContext, obj: ZObject): Promise<Zko.ZkoObjectProto> {
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve(convertZtoZk(ctx, obj))
        })
    })
}

/**
 * Converts a ZObject into its corresponding ZkoObjectProto representation.
 *
 * The conversion depends on the type of the provided object, and different
 * processing is applied based on the object's type.
 *
 * @param {WriterContext} ctx - The context used for writing or converting the object to the proto format.
 * @param {ZObject} obj - The object that needs to be converted into a proto representation.
 * @return {Zko.ZkoObjectProto} The converted ZkoObjectProto representation of the provided ZObject.
 */
function convertZtoZk(ctx: WriterContext, obj: ZObject): Zko.ZkoObjectProto {
    // TODO: The use of fromObject affects a lot to the performance
    let auxNode: Zko.ZkoObjectProto
    switch (obj.type.name) {
        case ZObjectType.SCENE.name:
            auxNode = new Zko.ZkoObjectProto({
                type: ZObjectType.SCENE.name,
                refId: obj.refId,
                isReference: false,
                scene: Zko.ZkScene.fromObject(obj)
            })
            break
        case ZObjectType.GROUP.name:
            auxNode = new Zko.ZkoObjectProto({
                type: ZObjectType.GROUP.name,
                refId: obj.refId,
                isReference: false,
                group: Zko.ZkGroup.fromObject(obj)
            })
            break
        case ZObjectType.MODEL.name:
            auxNode = new Zko.ZkoObjectProto({
                type: ZObjectType.MODEL.name,
                refId: obj.refId,
                isReference: false,
                model: modelWriter(ctx, obj as ZModel)
            })
            break
        case ZObjectType.CAMERA.name:
            auxNode = new Zko.ZkoObjectProto({
                type: ZObjectType.CAMERA.name,
                refId: obj.refId,
                isReference: false,
                camera: Zko.ZkCamera.fromObject(obj)
            })
            break
        case ZObjectType.SKELETON.name:
            auxNode = new Zko.ZkoObjectProto({
                type: ZObjectType.SKELETON.name,
                refId: obj.refId,
                isReference: false,
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

function sortObjectList(list: ZkoObjectProto[]): ZkoObjectProto[] {
    return list.sort((a, b) => {
        if (a.type === ZObjectType.SKELETON.name && b.type === ZObjectType.SKELETON.name) {
            return a.refId.localeCompare(b.refId);
        }

        if (a.type === ZObjectType.SKELETON.name) return -1;
        if (b.type === ZObjectType.SKELETON.name) return 1;

        return a.refId.localeCompare(b.refId);
    })
}
