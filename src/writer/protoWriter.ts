import {ZObject} from "../zernikalos/ZObject"
import {Zko} from "../proto"
import {writeTree} from "./baseWriter";
import {ZKO_VERSION} from "../constants/ZkoVersion";

export async function protoWrite(root: ZObject): Promise<Uint8Array> {
    const header = headerWrite()
    const protoRoot = await writeTree(root)

    const zkoFile = Zko.Zko.create({
        header,
        data: protoRoot
    })

    return Zko.Zko.encode(zkoFile).finish()
}

function headerWrite(): Zko.ZkoHeader {
    return Zko.ZkoHeader.create({
        version: ZKO_VERSION
    })
}
