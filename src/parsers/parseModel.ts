import {Material, Mesh} from "three"
import {parseMesh} from "./parseMesh"
import {ZModel} from "../zernikalos/ZModel"
import _ from "lodash";
import {parseMaterial} from "./parseMaterial";

export async function parseModel(obj: Mesh): Promise<ZModel> {
    const model = new ZModel()
    model.mesh = parseMesh(obj.geometry)
    if (!_.isNil(obj.material)) {
        // TODO: Material can be a list of materials, not just one
        model.material = await parseMaterial(obj.material as Material)
    }

    return model
}
