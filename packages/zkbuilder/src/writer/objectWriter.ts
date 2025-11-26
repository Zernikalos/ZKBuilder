import {writeZko} from "./baseWriter";
import {ZkoParsed} from "../parsers";
import {ZkoFormat} from "../proto";

export async function objectWrite(zkParsed: ZkoParsed): Promise<ZkoFormat> {
    return writeZko(zkParsed)
}
