import objectHash from "object-hash"
import {ZTransform} from "./ZTransform";
import {IdGenerator} from "../utils/IdGenerator";

export enum ZObjectType {
    OBJECT = "Object",
    SCENE = "Scene",
    MODEL = "Model",
    GROUP = "Group",
    CAMERA = "Camera",
}

export class ZObject {
    type: ZObjectType = ZObjectType.OBJECT
    transform: ZTransform = new ZTransform()
    children: ZObject[] = []

    private _parent: ZObject | undefined = undefined
    private _id: string
    private _name: string

    public get id(): string {
        if (!this._id) {
            this._id = objectHash(this)
        }
        return this._id
    }

    public get name(): string {
        if (!this._name) {
            const id = IdGenerator.add(this.type)
            this._name = `${this.type}_${id}`
        }
        return this._name
    }

    public set name(value: string) {
        if (!value) {
            return
        }
        IdGenerator.pop(this.type)
        this._name = value
    }

    public addChild(child: ZObject) {
        this.children.push(child)
        child.parent = this
    }

    public get parent(): ZObject | undefined {
        return this._parent
    }

    public set parent(obj: ZObject) {
        if (this.type === ZObjectType.SCENE) {
            throw new Error("Scene can't be set as a child")
        }
        this._parent = obj
    }
}
