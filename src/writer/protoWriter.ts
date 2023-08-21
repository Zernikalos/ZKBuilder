import {ZObject} from "../zernikalos/ZObject"
import {Zko} from "../proto"
import {writeTree} from "./baseWriter";

export async function protoWrite(root: ZObject): Promise<Uint8Array> {
    const protoRoot = await writeTree(root)

    return Zko.ProtoZkObject.encode(protoRoot).finish()
}
