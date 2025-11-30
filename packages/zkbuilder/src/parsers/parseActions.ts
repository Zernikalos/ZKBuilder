import {AnimationClip, KeyframeTrack, Object3D} from "three";
import {ZVector3} from "@/zernikalos";
import {ZQuaternion} from "@/zernikalos";
import _ from "lodash";
import {ZTypes} from "@/zernikalos";
import {ZPositionFrame, ZRotationFrame, ZScaleFrame} from "@/zernikalos";
import {ZSkeletalAction} from "@/zernikalos";
import {ZBoneTrack} from "@/zernikalos";

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

/**
 * This method transform the KeyframeTrack into a collection of ZPositionFrame, ZRotationFrame and ZScaleFrame
 * @param track
 * @param target
 * @returns
 */
function chunkifyKeyFrameTrack(track: KeyframeTrack, target: RotPosScaleTypes): (ZPositionFrame | ZScaleFrame | ZRotationFrame)[] {
    // Since KeyframeTrack.values is an array of arrays, we need to split it into chunks of the size for the expected track
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
        .map((data: { time: number, value: ZVector3 | ZQuaternion }) => {
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

/**
 * This method transform the KeyframeTrack array into a Map of Bone names to the collection of different tracks
 * @param tracks
 */
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

/**
 * Finds and returns a bone within a given root object by its name or UUID.
 *
 * @param {string} boneNameOrId - The name or UUID of the bone to search for.
 * @param {Object3D} root - The root object in which to search for the bone.
 * @return {Object3D | undefined} The bone object if found, or undefined if not found.
 */
function findForBoneInRoot(boneNameOrId: string, root: Object3D): Object3D | undefined {
    return root.getObjectByName(boneNameOrId) || root.getObjectByProperty("uuid", boneNameOrId)
}

/**
 * Parses an animation clip and maps its tracks to corresponding bones in a 3D object hierarchy, creating a skeletal action.
 *
 * @param {AnimationClip} action - The animation clip containing tracks to be parsed.
 * @param {Object3D} root - The root 3D object used to find bones for track mapping. Usually scene
 * @return {ZSkeletalAction} A skeletal action containing processed tracks corresponding to bones.
 */
function parseAction(action: AnimationClip, root: Object3D) {
    // Creates a map of bone names to its different tracks, this mean, split by type (position, rotation, scale)
    const tracksByBones = selectTracksByBones(action.tracks)

    const ztracks = tracksByBones.entries().map(([boneName, tracksByType]) => {
        // Find the Threejs bone object by its name or UUID in the hierarchy
        const bone = findForBoneInRoot(boneName, root)

        // Creation of the ZBoneTrack object
        const zBoneTrack = new ZBoneTrack(bone.name, bone.uuid)

        // Final transformation, here we will invert the dependency and we will set for every bone all the tracks
        // related to that specific bone.
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
