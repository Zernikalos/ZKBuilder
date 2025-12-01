import {WriterContext} from "../WriterContext";
import {ZMesh} from "@/zernikalos"
import {Zko} from "../../proto"
import _ from "lodash";

export function meshWriter(_ctx: WriterContext, mesh: ZMesh): Zko.ZkRefMesh {
    if (_.isNil(mesh)) {
        return
    }

    return Zko.ZkRefMesh.create({
        refId: mesh.refId,
        isReference: true
    })
}