import {ZObject} from "../zernikalos/ZObject";
import {writeTree} from "./baseWriter";
import {ProtoZObject} from "../proto";

export async function objectWrite(node: ZObject): Promise<ProtoZObject> {
    return writeTree(node)
}