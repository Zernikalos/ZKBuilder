import {ZSkeleton} from "../../zernikalos/ZSkeleton";
import {Zko} from "../../proto";
import _ from "lodash";
import ZkRefSkeleton = Zko.ZkRefSkeleton;
import {WriterContext} from "../WriterContext";
import {ZObjectType} from "../../zernikalos/ZObjectType";

export function skeletonWriter(_ctx: WriterContext, skeleton: ZSkeleton): ZkRefSkeleton {
    if (_.isNil(skeleton)) {
        return
    }

    return ZkRefSkeleton.create({
        type: ZObjectType.SKELETON.name,
        refId: skeleton.refId,
        isReference: true
    })
}