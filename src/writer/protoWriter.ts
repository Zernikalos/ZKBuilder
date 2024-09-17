import {Zko} from "../proto"
import {writeZko} from "./baseWriter";
import {ZkoParsed} from "../zkParse";
import ZkoFile = Zko.ZkoFile;

export async function protoWrite(zkoParsed: ZkoParsed): Promise<Uint8Array> {
    const zkoFile = await writeZko(zkoParsed)

    return ZkoFile.encode(zkoFile).finish()
}

