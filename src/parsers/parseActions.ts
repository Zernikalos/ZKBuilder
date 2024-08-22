import {AnimationClip, KeyframeTrack} from "three";
import {ZVector3} from "../zernikalos/math/ZVector3";
import {ZQuaternion} from "../zernikalos/math/ZQuaternion";
import _ from "lodash";
import {ZTypes} from "../zernikalos/ZDataType";
import {ZKeyFrame} from "../zernikalos/action/ZKeyFrame";
import {ZBoneFrameTransform} from "../zernikalos/action/ZBoneFrameTransform";
import {ZSkeletalAction} from "../zernikalos/action/ZSkeletalAction";

type RotPosScaleTypes = "position" | "rotation" | "scale"

function extractTrackNameAndTarget(track: KeyframeTrack): {boneName: string, target: RotPosScaleTypes} {
    const nameSplit = track.name.split(".")
    let target: RotPosScaleTypes = undefined
    switch (nameSplit[1]) {
        case "quaternion":
            target = "rotation"
            break
        case "position":
            target = "position"
            break
        case "scale":
            target = "scale"
            break
    }
    return {boneName: nameSplit[0], target: target}
}

function getSizePerTarget(target: RotPosScaleTypes) {
    switch (target) {
        case "position":
        case "scale":
            return ZTypes.VEC3F.size
        case "rotation":
            return ZTypes.QUATERNIONF.size
    }
}

function parseZSkeletalAction(track: KeyframeTrack, boneName: string, target: RotPosScaleTypes, timesBasedKeyframesMap: Map<number, ZKeyFrame>) {
    _.forEach(track.times, t => {
        if (timesBasedKeyframesMap.has(t)) {
            return
        }
        timesBasedKeyframesMap.set(t, new ZKeyFrame(t))
    })

    const chunks = _.chunk(track.values, getSizePerTarget(target))
    const dataFrames = chunks.map((chunk) => {
        switch (target) {
            case "position":
            case "scale":
                return new ZVector3(chunk[0], chunk[1], chunk[2])
            case "rotation":
                return new ZQuaternion(chunk[0], chunk[1], chunk[2], chunk[3])
        }
    })

    if (track.times.length !== dataFrames.length) {
        return
    }

    for (let i = 0; i < track.times.length; i++) {
        const t = track.times[i]
        const data = dataFrames[i]
        const kf = timesBasedKeyframesMap.get(t)

        if (!kf.pose.has(boneName)) {
            kf.pose.set(boneName,  new ZBoneFrameTransform())
        }
        const bone = kf.pose.get(boneName)

        switch (target) {
            case "position":
                bone.position = data as ZVector3
                break
            case "scale":
                bone.scale = data as ZVector3
                break
            case "rotation":
                bone.rotation = data as ZQuaternion
                break
        }
    }
}

function parseAction(action: AnimationClip) {
    //const boneMap = new Map<String, ZKeyFrame>()
    const timesBasedKeyframesMap = new Map<number, ZKeyFrame>()

    action.tracks.forEach(track => {
        const {boneName, target} = extractTrackNameAndTarget(track)
        parseZSkeletalAction(track, boneName, target, timesBasedKeyframesMap)
    })

    const keyframes: ZKeyFrame[] = _.sortBy([...timesBasedKeyframesMap.values()], "time")
    const skeletalAction = new ZSkeletalAction()
    skeletalAction.keyFrames = keyframes

    return skeletalAction
}

export function parseActions(actions: AnimationClip[]): ZSkeletalAction[] {
    return actions.map(action => parseAction(action))
}
