import {Zko} from "../proto"
import {writeZko} from "./baseWriter";
import {ZkoParsed} from "../zkParse";
import ZkoFormat = Zko.ZkoFormat;

export async function protoWrite(zkoParsed: ZkoParsed): Promise<Uint8Array> {
    const zkoFile = await writeZko(zkoParsed)

    return ZkoFormat.encode(zkoFile).finish()
}

