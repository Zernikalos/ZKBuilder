import {ZSkeleton} from "../../zernikalos/skeleton/ZSkeleton";
import {Zko} from "../../../protobuild";
import ZkSkeleton = Zko.ZkSkeleton;
import _ from "lodash";
import ZkRefSkeleton = Zko.ZkRefSkeleton;
import {WriterContext} from "../WriterContext";

export function skeletonWriter(ctx: WriterContext, skeleton: ZSkeleton): ZkRefSkeleton {
    if (_.isNil(skeleton)) {
        return
    }
    if (ctx.hasWrittenComponent(skeleton)) {
        return ZkRefSkeleton.create({
            refId: skeleton.refId,
            isReference: true
        })
    }
    ctx.registerComponent(skeleton)
    return ZkRefSkeleton.create({
        refId: skeleton.refId,
        isReference: false,
        data: ZkSkeleton.fromObject(skeleton)
    })
}