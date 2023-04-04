import {ZObject, ZObjectType} from "../zernikalos/ZObject"
import {ZModel} from "../zernikalos/ZModel"
import {isNil} from "lodash"
import {postModel} from "./postModel"

export function postProcess(obj: ZObject) {
    let postObj: ZObject
    switch (obj.type) {
        case ZObjectType.SCENE:
        case ZObjectType.OBJECT:
        case ZObjectType.GROUP:
        case ZObjectType.CAMERA:
            postObj = obj
            break
        case ZObjectType.MODEL:
            postObj = postModel(obj as ZModel)
            break
    }
    if (!postObj || !postObj.type) {
        console.error("Error POST processing ZObject instance")
        return
    }
    postObj.children = obj.children
        .map((child: ZObject)=> postProcess(child))
        .filter((child: ZObject) => !isNil(child))
    return postObj
}
