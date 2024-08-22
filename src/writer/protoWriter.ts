import {Zko} from "../proto"
import {writeZko} from "./baseWriter";
import {ZkoParsed} from "../zkParse";

export async function protoWrite(zkoParsed: ZkoParsed): Promise<Uint8Array> {
    const zkoFile = await writeZko(zkoParsed)

    return Zko.Zko.encode(zkoFile).finish()
}

