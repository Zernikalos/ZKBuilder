import {writeZko} from "./baseWriter";
import {ZkoParsed} from "../zkParse";
import {Zko} from "../proto";

export async function objectWrite(zkParsed: ZkoParsed): Promise<Zko.Zko> {
    return writeZko(zkParsed)
}
