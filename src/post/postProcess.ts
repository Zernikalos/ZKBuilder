import {ZObject} from "../zernikalos/ZObject"
import {ZModel} from "../zernikalos/ZModel"
import {isNil} from "lodash"
import {postModel} from "./postModel"

export function postProcess(obj: ZObject) {
    let postObj: ZObject
    switch (obj.type) {
        case "Object":
        case "Group":
            postObj = obj
            break
        case "Model":
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
