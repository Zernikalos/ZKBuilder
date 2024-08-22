import {writeZko} from "./baseWriter";
import {ZkoParsed} from "../zkParse";
import {ZkoFile} from "../proto";

export async function objectWrite(zkParsed: ZkoParsed): Promise<ZkoFile> {
    return writeZko(zkParsed)
}
