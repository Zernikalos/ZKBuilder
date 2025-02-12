import {writeZko} from "./baseWriter";
import {ZkoParsed} from "../zkParse";
import {ZkoFormat} from "../proto";

export async function objectWrite(zkParsed: ZkoParsed): Promise<ZkoFormat> {
    return writeZko(zkParsed)
}
