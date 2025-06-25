import {AnimationClip, KeyframeTrack, Object3D} from "three";
import {ZVector3} from "../zernikalos/math/ZVector3";
import {ZQuaternion} from "../zernikalos/math/ZQuaternion";
import _ from "lodash";
import {ZTypes} from "../zernikalos/ZDataType";
import {ZPositionFrame, ZRotationFrame, ZScaleFrame} from "../zernikalos/action/ZKeyFrame";
import {ZSkeletalAction} from "../zernikalos/action/ZSkeletalAction";
import {ZBoneTrack} from "../zernikalos/action/ZBoneTrack";

type RotPosScaleTypes = "position" | "rotation" | "scale"

type BoneName = string

interface TrackAndTarget {
    boneName: string
    target: RotPosScaleTypes
}

function extractTrackNameAndTarget(track: KeyframeTrack): TrackAndTarget {
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
    return {boneName: String(nameSplit[0]), target: target}
}

function getSizePerTarget(target: RotPosScaleTypes) {
    switch (target) {
        case "position":
        case "scale":
            return ZTypes.VEC3F.size
        case "rotation":
            return ZTypes.QUATERNION.size
    }
}

function chunkifyKeyFrameTrack(track: KeyframeTrack, target: RotPosScaleTypes): (ZPositionFrame | ZScaleFrame | ZRotationFrame)[] {
    const chunks = _.chunk(track.values, getSizePerTarget(target))
    return chunks
        .map((chunk, index) => {
            const time = track.times[index]
            switch (target) {
                case "position":
                case "scale":
                    return {
                        time,
                        value: ZVector3.initWithValues(chunk[0], chunk[1], chunk[2])
                    }
                case "rotation":
                    return {
                        time,
                        value: ZQuaternion.initWithValues(chunk[3], chunk[0], chunk[1], chunk[2])
                    }
        }})
        .map((data) => {
            switch (target) {
                case "position":
                    return new ZPositionFrame(
                        data.time,
                        data.value as ZVector3
                    )
                case "scale":
                    return new ZScaleFrame(
                        data.time,
                        data.value as ZVector3
                    )
                case "rotation":
                    return new ZRotationFrame(
                        data.time,
                        data.value as ZQuaternion
                    )
            }
        })
}

function selectTracksByBones(tracks: KeyframeTrack[]): Map<BoneName, Map<RotPosScaleTypes, KeyframeTrack>> {
    const organizedTracks = new Map<BoneName, Map<RotPosScaleTypes, KeyframeTrack>>();

    tracks.forEach(track => {
        const {boneName, target} = extractTrackNameAndTarget(track);

        if (!organizedTracks.has(boneName)) {
            organizedTracks.set(boneName, new Map<RotPosScaleTypes, KeyframeTrack>());
        }

        organizedTracks.get(boneName).set(target, track);
    });

    return organizedTracks;
}

function findForBoneInRoot(boneNameOrId: string, root: Object3D): Object3D | undefined {
    return root.getObjectByName(boneNameOrId) || root.getObjectByProperty("uuid", boneNameOrId)
}


function parseAction(action: AnimationClip, root: Object3D) {
    const tracksByBones = selectTracksByBones(action.tracks)

    const ztracks = tracksByBones.entries().map(([boneName, tracksByType]) => {
        const bone = findForBoneInRoot(boneName, root)

        const zBoneTrack = new ZBoneTrack(bone.name, bone.uuid)
        if (tracksByType.has("position")) {
            const positionTrack = tracksByType.get("position");
            const positionFrames = chunkifyKeyFrameTrack(positionTrack, "position")
            positionFrames.forEach((positionFrame) => {
                zBoneTrack.addPositionFrame(positionFrame as ZPositionFrame)
            })
        }

        if (tracksByType.has("rotation")) {
            const rotationTrack = tracksByType.get("rotation");
            const rotationFrames = chunkifyKeyFrameTrack(rotationTrack, "rotation")
            rotationFrames.forEach((rotationFrame) => {
                zBoneTrack.addRotationFrame(rotationFrame as ZRotationFrame)
            })
        }

        if (tracksByType.has("scale")) {
            const scaleTrack = tracksByType.get("scale");
            const scaleFrames = chunkifyKeyFrameTrack(scaleTrack, "scale")
            scaleFrames.forEach((scaleFrame) => {
                zBoneTrack.addScaleFrame(scaleFrame as ZScaleFrame)
            })
        }
        return zBoneTrack
    })

    const skeletalAction = new ZSkeletalAction(action.name)
    skeletalAction.duration = action.duration
    ztracks.forEach(ztrack => skeletalAction.addTrack(ztrack))

    return skeletalAction
}

export function parseActions(actions: AnimationClip[], root: Object3D): ZSkeletalAction[] {
    return actions.map(action => parseAction(action, root))
}
