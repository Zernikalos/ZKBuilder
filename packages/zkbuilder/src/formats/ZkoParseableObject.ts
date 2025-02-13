import {AnimationClip, Object3D} from "three";

export class ZkoParseableObject {
    private threeObj: Object3D
    private actions: AnimationClip[]

    constructor(obj: Object3D, actions: AnimationClip[] = undefined) {
        this.threeObj = obj
        this.actions = actions
    }

    public get _threeObj(): Object3D {
        return this.threeObj
    }

    public get _actions(): AnimationClip[] {
        return this.actions
    }

}
