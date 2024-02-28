import {ZSkinning} from "../../zernikalos/skeleton/ZSkinning";
import _ from "lodash";
import {Zko} from "../../../protobuild";
import ZkSkinning = Zko.ZkSkinning;
import {WriterContext} from "../WriterContext";

export function skinningWriter(_ctx: WriterContext, skinning: ZSkinning) {
    if (_.isNil(skinning)) {
        return
    }
    return ZkSkinning.fromObject(skinning)
}