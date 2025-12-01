import {ZObject} from "@/zernikalos"
import {ZObjectType} from "@/zernikalos"
import {ZModel} from "@/zernikalos"
import {isNil} from "lodash"
import {postModel} from "./postModel"

export function postProcess(obj: ZObject) {
    let postObj: ZObject
    switch (obj.type) {
        case ZObjectType.SCENE:
        case ZObjectType.GROUP:
        case ZObjectType.CAMERA:
        //case ZObjectType.BONE:
        case ZObjectType.SKELETON:
        //case ZObjectType.JOINT:
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
