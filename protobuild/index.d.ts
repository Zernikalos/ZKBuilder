import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace Zko {

    interface IZko {
        header: Zko.ZkoHeader;
        data: Zko.ProtoZkObject;
    }

    class Zko implements IZko {
        constructor(properties?: Zko.IZko);
        public header: Zko.ZkoHeader;
        public data: Zko.ProtoZkObject;
        public static create(properties?: Zko.IZko): Zko.Zko;
        public static encode(message: Zko.Zko, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.Zko;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.Zko;
        public static toObject(message: Zko.Zko, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IZkoHeader {
        version: string;
    }

    class ZkoHeader implements IZkoHeader {
        constructor(properties?: Zko.IZkoHeader);
        public version: string;
        public static create(properties?: Zko.IZkoHeader): Zko.ZkoHeader;
        public static encode(message: Zko.ZkoHeader, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ZkoHeader;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ZkoHeader;
        public static toObject(message: Zko.ZkoHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IProtoZkObject {
        type: string;
        scene?: (Zko.ZkScene|null);
        group?: (Zko.ZkGroup|null);
        model?: (Zko.ZkModel|null);
        camera?: (Zko.ZkCamera|null);
        skeleton?: (Zko.ZkSkeleton|null);
        joint?: (Zko.ZkJoint|null);
        children?: (Zko.ProtoZkObject[]|null);
    }

    class ProtoZkObject implements IProtoZkObject {
        constructor(properties?: Zko.IProtoZkObject);
        public type: string;
        public scene?: (Zko.ZkScene|null);
        public group?: (Zko.ZkGroup|null);
        public model?: (Zko.ZkModel|null);
        public camera?: (Zko.ZkCamera|null);
        public skeleton?: (Zko.ZkSkeleton|null);
        public joint?: (Zko.ZkJoint|null);
        public children: Zko.ProtoZkObject[];
        public static create(properties?: Zko.IProtoZkObject): Zko.ProtoZkObject;
        public static encode(message: Zko.ProtoZkObject, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ProtoZkObject;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ProtoZkObject;
        public static toObject(message: Zko.ProtoZkObject, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    enum ZkBaseType {
        NONE = 0,
        BYTE = 1,
        UBYTE = 2,
        SHORT = 3,
        USHORT = 4,
        INT = 5,
        UINT = 6,
        FLOAT = 7,
        DOUBLE = 8,
        TEXTURE = 9
    }

    enum ZkFormatType {
        NONE = 0,
        SCALAR = 1,
        VEC2 = 2,
        VEC3 = 3,
        VEC4 = 4,
        MAT2 = 5,
        MAT3 = 6,
        MAT4 = 7,
        TEXTURE = 8
    }

    interface IZkDataType {
        type: Zko.ZkBaseType;
        format: Zko.ZkFormatType;
    }

    class ZkDataType implements IZkDataType {
        constructor(properties?: Zko.IZkDataType);
        public type: Zko.ZkBaseType;
        public format: Zko.ZkFormatType;
        public static create(properties?: Zko.IZkDataType): Zko.ZkDataType;
        public static encode(message: Zko.ZkDataType, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ZkDataType;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ZkDataType;
        public static toObject(message: Zko.ZkDataType, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    enum ZkRefType {
        MESH = 0,
        TEXTURE = 2,
        MATERIAL = 3
    }

    interface IZkReference {
        refId: number;
        type: Zko.ZkRefType;
        mesh?: (Zko.ZkMesh|null);
        texture?: (ZkTexture|null);
        material?: (ZkMaterial|null);
    }

    class ZkReference implements IZkReference {
        constructor(properties?: Zko.IZkReference);
        public refId: number;
        public type: Zko.ZkRefType;
        public mesh?: (Zko.ZkMesh|null);
        public texture?: (ZkTexture|null);
        public material?: (ZkMaterial|null);
        public static create(properties?: Zko.IZkReference): Zko.ZkReference;
        public static encode(message: Zko.ZkReference, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ZkReference;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ZkReference;
        public static toObject(message: Zko.ZkReference, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IZkTransform {
        location: Zko.ZkVector3;
        rotation: Zko.ZkQuaternion;
        scale: Zko.ZkVector3;
    }

    class ZkTransform implements IZkTransform {
        constructor(properties?: Zko.IZkTransform);
        public location: Zko.ZkVector3;
        public rotation: Zko.ZkQuaternion;
        public scale: Zko.ZkVector3;
        public static create(properties?: Zko.IZkTransform): Zko.ZkTransform;
        public static encode(message: Zko.ZkTransform, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ZkTransform;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ZkTransform;
        public static toObject(message: Zko.ZkTransform, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IZkVector3 {
        x: number;
        y: number;
        z: number;
    }

    class ZkVector3 implements IZkVector3 {
        constructor(properties?: Zko.IZkVector3);
        public x: number;
        public y: number;
        public z: number;
        public static create(properties?: Zko.IZkVector3): Zko.ZkVector3;
        public static encode(message: Zko.ZkVector3, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ZkVector3;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ZkVector3;
        public static toObject(message: Zko.ZkVector3, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IZkVector4 {
        x: number;
        y: number;
        z: number;
        w: number;
    }

    class ZkVector4 implements IZkVector4 {
        constructor(properties?: Zko.IZkVector4);
        public x: number;
        public y: number;
        public z: number;
        public w: number;
        public static create(properties?: Zko.IZkVector4): Zko.ZkVector4;
        public static encode(message: Zko.ZkVector4, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ZkVector4;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ZkVector4;
        public static toObject(message: Zko.ZkVector4, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IZkQuaternion {
        w: number;
        x: number;
        y: number;
        z: number;
    }

    class ZkQuaternion implements IZkQuaternion {
        constructor(properties?: Zko.IZkQuaternion);
        public w: number;
        public x: number;
        public y: number;
        public z: number;
        public static create(properties?: Zko.IZkQuaternion): Zko.ZkQuaternion;
        public static encode(message: Zko.ZkQuaternion, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ZkQuaternion;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ZkQuaternion;
        public static toObject(message: Zko.ZkQuaternion, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IZkGroup {
        id: string;
        name: string;
        transform: Zko.ZkTransform;
    }

    class ZkGroup implements IZkGroup {
        constructor(properties?: Zko.IZkGroup);
        public id: string;
        public name: string;
        public transform: Zko.ZkTransform;
        public static create(properties?: Zko.IZkGroup): Zko.ZkGroup;
        public static encode(message: Zko.ZkGroup, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ZkGroup;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ZkGroup;
        public static toObject(message: Zko.ZkGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IZkScene {
        id: string;
        name: string;
        transform: Zko.ZkTransform;
        clearColor?: (Zko.ZkColor|null);
    }

    class ZkScene implements IZkScene {
        constructor(properties?: Zko.IZkScene);
        public id: string;
        public name: string;
        public transform: Zko.ZkTransform;
        public clearColor?: (Zko.ZkColor|null);
        public static create(properties?: Zko.IZkScene): Zko.ZkScene;
        public static encode(message: Zko.ZkScene, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ZkScene;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ZkScene;
        public static toObject(message: Zko.ZkScene, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IZkColor {
        r: number;
        g: number;
        b: number;
        a: number;
    }

    class ZkColor implements IZkColor {
        constructor(properties?: Zko.IZkColor);
        public r: number;
        public g: number;
        public b: number;
        public a: number;
        public static create(properties?: Zko.IZkColor): Zko.ZkColor;
        public static encode(message: Zko.ZkColor, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ZkColor;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ZkColor;
        public static toObject(message: Zko.ZkColor, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IZkModel {
        id: string;
        name: string;
        transform: Zko.ZkTransform;
        mesh: Zko.ZkMesh;
        shaderProgram: Zko.ZkShaderProgram;
        material?: (ZkRefMaterial|null);
        skinning?: (Zko.ZkSkinning|null);
        skeleton?: (Zko.ZkRefSkeleton|null);
    }

    class ZkModel implements IZkModel {
        constructor(properties?: Zko.IZkModel);
        public id: string;
        public name: string;
        public transform: Zko.ZkTransform;
        public mesh: Zko.ZkMesh;
        public shaderProgram: Zko.ZkShaderProgram;
        public material?: (ZkRefMaterial|null);
        public skinning?: (Zko.ZkSkinning|null);
        public skeleton?: (Zko.ZkRefSkeleton|null);
        public static create(properties?: Zko.IZkModel): Zko.ZkModel;
        public static encode(message: Zko.ZkModel, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ZkModel;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ZkModel;
        public static toObject(message: Zko.ZkModel, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IZkMesh {
        refId: number;
        isReference: boolean;
        bufferKeys?: (Zko.ZkBufferKey[]|null);
        rawBuffers?: (Zko.ZkRawBuffer[]|null);
    }

    class ZkMesh implements IZkMesh {
        constructor(properties?: Zko.IZkMesh);
        public refId: number;
        public isReference: boolean;
        public bufferKeys: Zko.ZkBufferKey[];
        public rawBuffers: Zko.ZkRawBuffer[];
        public static create(properties?: Zko.IZkMesh): Zko.ZkMesh;
        public static encode(message: Zko.ZkMesh, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ZkMesh;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ZkMesh;
        public static toObject(message: Zko.ZkMesh, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IZkBufferKey {
        id: number;
        dataType: Zko.ZkDataType;
        name: string;
        size: number;
        count: number;
        normalized: boolean;
        offset: number;
        stride: number;
        isIndexBuffer: boolean;
        bufferId: number;
    }

    class ZkBufferKey implements IZkBufferKey {
        constructor(properties?: Zko.IZkBufferKey);
        public id: number;
        public dataType: Zko.ZkDataType;
        public name: string;
        public size: number;
        public count: number;
        public normalized: boolean;
        public offset: number;
        public stride: number;
        public isIndexBuffer: boolean;
        public bufferId: number;
        public static create(properties?: Zko.IZkBufferKey): Zko.ZkBufferKey;
        public static encode(message: Zko.ZkBufferKey, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ZkBufferKey;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ZkBufferKey;
        public static toObject(message: Zko.ZkBufferKey, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IZkRawBuffer {
        id: number;
        dataArray: Uint8Array;
    }

    class ZkRawBuffer implements IZkRawBuffer {
        constructor(properties?: Zko.IZkRawBuffer);
        public id: number;
        public dataArray: Uint8Array;
        public static create(properties?: Zko.IZkRawBuffer): Zko.ZkRawBuffer;
        public static encode(message: Zko.ZkRawBuffer, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ZkRawBuffer;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ZkRawBuffer;
        public static toObject(message: Zko.ZkRawBuffer, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IZkShaderProgram {
        refId: number;
        attributes?: ({ [k: string]: Zko.ZkShaderAttribute }|null);
        uniforms?: ({ [k: string]: Zko.ZkShaderUniform }|null);
    }

    class ZkShaderProgram implements IZkShaderProgram {
        constructor(properties?: Zko.IZkShaderProgram);
        public refId: number;
        public attributes: { [k: string]: Zko.ZkShaderAttribute };
        public uniforms: { [k: string]: Zko.ZkShaderUniform };
        public static create(properties?: Zko.IZkShaderProgram): Zko.ZkShaderProgram;
        public static encode(message: Zko.ZkShaderProgram, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ZkShaderProgram;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ZkShaderProgram;
        public static toObject(message: Zko.ZkShaderProgram, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IZkShaderAttribute {
        id: number;
        attributeName: string;
    }

    class ZkShaderAttribute implements IZkShaderAttribute {
        constructor(properties?: Zko.IZkShaderAttribute);
        public id: number;
        public attributeName: string;
        public static create(properties?: Zko.IZkShaderAttribute): Zko.ZkShaderAttribute;
        public static encode(message: Zko.ZkShaderAttribute, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ZkShaderAttribute;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ZkShaderAttribute;
        public static toObject(message: Zko.ZkShaderAttribute, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IZkShaderUniform {
        uniformName: string;
        count: number;
        dataType: Zko.ZkDataType;
        idx: number;
    }

    class ZkShaderUniform implements IZkShaderUniform {
        constructor(properties?: Zko.IZkShaderUniform);
        public uniformName: string;
        public count: number;
        public dataType: Zko.ZkDataType;
        public idx: number;
        public static create(properties?: Zko.IZkShaderUniform): Zko.ZkShaderUniform;
        public static encode(message: Zko.ZkShaderUniform, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ZkShaderUniform;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ZkShaderUniform;
        public static toObject(message: Zko.ZkShaderUniform, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IZkRefSkeleton {
        refId: number;
        isReference: boolean;
        data?: (Zko.ZkSkeleton|null);
    }

    class ZkRefSkeleton implements IZkRefSkeleton {
        constructor(properties?: Zko.IZkRefSkeleton);
        public refId: number;
        public isReference: boolean;
        public data?: (Zko.ZkSkeleton|null);
        public static create(properties?: Zko.IZkRefSkeleton): Zko.ZkRefSkeleton;
        public static encode(message: Zko.ZkRefSkeleton, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ZkRefSkeleton;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ZkRefSkeleton;
        public static toObject(message: Zko.ZkRefSkeleton, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IZkSkeleton {
        refId: number;
        isReference: boolean;
        id?: (string|null);
        name?: (string|null);
        root?: (Zko.ZkBone|null);
    }

    class ZkSkeleton implements IZkSkeleton {
        constructor(properties?: Zko.IZkSkeleton);
        public refId: number;
        public isReference: boolean;
        public id: string;
        public name: string;
        public root?: (Zko.ZkBone|null);
        public static create(properties?: Zko.IZkSkeleton): Zko.ZkSkeleton;
        public static encode(message: Zko.ZkSkeleton, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ZkSkeleton;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ZkSkeleton;
        public static toObject(message: Zko.ZkSkeleton, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IZkBone {
        id: string;
        name: string;
        idx: number;
        transform: Zko.ZkTransform;
        children?: (Zko.ZkBone[]|null);
    }

    class ZkBone implements IZkBone {
        constructor(properties?: Zko.IZkBone);
        public id: string;
        public name: string;
        public idx: number;
        public transform: Zko.ZkTransform;
        public children: Zko.ZkBone[];
        public static create(properties?: Zko.IZkBone): Zko.ZkBone;
        public static encode(message: Zko.ZkBone, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ZkBone;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ZkBone;
        public static toObject(message: Zko.ZkBone, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IZkSkinning {
        boneIndices?: (number[]|null);
    }

    class ZkSkinning implements IZkSkinning {
        constructor(properties?: Zko.IZkSkinning);
        public boneIndices: number[];
        public static create(properties?: Zko.IZkSkinning): Zko.ZkSkinning;
        public static encode(message: Zko.ZkSkinning, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ZkSkinning;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ZkSkinning;
        public static toObject(message: Zko.ZkSkinning, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IZkJoint {
        id: string;
        name: string;
        transform: Zko.ZkTransform;
        bone: Zko.ZkBone;
    }

    class ZkJoint implements IZkJoint {
        constructor(properties?: Zko.IZkJoint);
        public id: string;
        public name: string;
        public transform: Zko.ZkTransform;
        public bone: Zko.ZkBone;
        public static create(properties?: Zko.IZkJoint): Zko.ZkJoint;
        public static encode(message: Zko.ZkJoint, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ZkJoint;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ZkJoint;
        public static toObject(message: Zko.ZkJoint, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IZkCamera {
        id: string;
        name: string;
        transform: Zko.ZkTransform;
        lens: Zko.ZkLens;
    }

    class ZkCamera implements IZkCamera {
        constructor(properties?: Zko.IZkCamera);
        public id: string;
        public name: string;
        public transform: Zko.ZkTransform;
        public lens: Zko.ZkLens;
        public static create(properties?: Zko.IZkCamera): Zko.ZkCamera;
        public static encode(message: Zko.ZkCamera, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ZkCamera;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ZkCamera;
        public static toObject(message: Zko.ZkCamera, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IZkLens {
        near: number;
        far: number;
        aspectRatio?: (number|null);
        fov?: (number|null);
    }

    class ZkLens implements IZkLens {
        constructor(properties?: Zko.IZkLens);
        public near: number;
        public far: number;
        public aspectRatio: number;
        public fov: number;
        public static create(properties?: Zko.IZkLens): Zko.ZkLens;
        public static encode(message: Zko.ZkLens, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ZkLens;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ZkLens;
        public static toObject(message: Zko.ZkLens, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

export interface IZkRefMaterial {
    refId: number;
    isReference: boolean;
    data?: (ZkMaterial|null);
}

export class ZkRefMaterial implements IZkRefMaterial {
    constructor(properties?: IZkRefMaterial);
    public refId: number;
    public isReference: boolean;
    public data?: (ZkMaterial|null);
    public static create(properties?: IZkRefMaterial): ZkRefMaterial;
    public static encode(message: ZkRefMaterial, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ZkRefMaterial;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ZkRefMaterial;
    public static toObject(message: ZkRefMaterial, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IZkMaterial {
    texture?: (ZkRefTexture|null);
}

export class ZkMaterial implements IZkMaterial {
    constructor(properties?: IZkMaterial);
    public texture?: (ZkRefTexture|null);
    public static create(properties?: IZkMaterial): ZkMaterial;
    public static encode(message: ZkMaterial, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ZkMaterial;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ZkMaterial;
    public static toObject(message: ZkMaterial, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IZkRefTexture {
    refId: number;
    isReference: boolean;
    data?: (ZkTexture|null);
}

export class ZkRefTexture implements IZkRefTexture {
    constructor(properties?: IZkRefTexture);
    public refId: number;
    public isReference: boolean;
    public data?: (ZkTexture|null);
    public static create(properties?: IZkRefTexture): ZkRefTexture;
    public static encode(message: ZkRefTexture, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ZkRefTexture;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ZkRefTexture;
    public static toObject(message: ZkRefTexture, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IZkTexture {
    id?: (string|null);
    width?: (number|null);
    height?: (number|null);
    dataArray?: (Uint8Array|null);
}

export class ZkTexture implements IZkTexture {
    constructor(properties?: IZkTexture);
    public id: string;
    public width: number;
    public height: number;
    public dataArray: Uint8Array;
    public static create(properties?: IZkTexture): ZkTexture;
    public static encode(message: ZkTexture, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ZkTexture;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ZkTexture;
    public static toObject(message: ZkTexture, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
