import {Mesh} from "three"
import {parseMesh} from "./parseMesh"
import {ZModel} from "../zernikalos/ZModel"

export function parseModel(obj: Mesh): ZModel {
    const model = new ZModel()
    model.mesh = parseMesh(obj.geometry)

    return model
}
