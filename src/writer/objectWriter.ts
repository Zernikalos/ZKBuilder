import {ZObject} from "../zernikalos/ZObject";
import {writeTree} from "./baseWriter";
import {ProtoZkObject} from "../proto";

export async function objectWrite(node: ZObject): Promise<ProtoZkObject> {
    return writeTree(node)
}