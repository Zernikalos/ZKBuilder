import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace Zko {

    interface IProtoZkObject {
        type: string;
        scene?: (Zko.ZkScene|null);
        group?: (Zko.ZkGroup|null);
        model?: (Zko.ZkModel|null);
        children?: (Zko.ProtoZkObject[]|null);
    }

    class ProtoZkObject implements IProtoZkObject {
        constructor(properties?: Zko.IProtoZkObject);
        public type: string;
        public scene?: (Zko.ZkScene|null);
        public group?: (Zko.ZkGroup|null);
        public model?: (Zko.ZkModel|null);
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

    interface IZkScene {
        id: string;
        name: string;
        transform: Zko.ZkTransform;
        clearColor: Zko.ZkColor;
    }

    class ZkScene implements IZkScene {
        constructor(properties?: Zko.IZkScene);
        public id: string;
        public name: string;
        public transform: Zko.ZkTransform;
        public clearColor: Zko.ZkColor;
        public static create(properties?: Zko.IZkScene): Zko.ZkScene;
        public static encode(message: Zko.ZkScene, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ZkScene;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ZkScene;
        public static toObject(message: Zko.ZkScene, options?: $protobuf.IConversionOptions): { [k: string]: any };
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

    interface IZkModel {
        id: string;
        name: string;
        transform: Zko.ZkTransform;
        shaderProgram: Zko.ZkShaderProgram;
        mesh: Zko.ZkMesh;
    }

    class ZkModel implements IZkModel {
        constructor(properties?: Zko.IZkModel);
        public id: string;
        public name: string;
        public transform: Zko.ZkTransform;
        public shaderProgram: Zko.ZkShaderProgram;
        public mesh: Zko.ZkMesh;
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
        attributeKeys?: ({ [k: string]: Zko.ZkAttributeKey }|null);
        indices: Zko.ZkIndexBuffer;
        vertices?: ({ [k: string]: Zko.ZkVertexBuffer }|null);
    }

    class ZkMesh implements IZkMesh {
        constructor(properties?: Zko.IZkMesh);
        public attributeKeys: { [k: string]: Zko.ZkAttributeKey };
        public indices: Zko.ZkIndexBuffer;
        public vertices: { [k: string]: Zko.ZkVertexBuffer };
        public static create(properties?: Zko.IZkMesh): Zko.ZkMesh;
        public static encode(message: Zko.ZkMesh, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ZkMesh;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ZkMesh;
        public static toObject(message: Zko.ZkMesh, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IZkAttributeKey {
        index: number;
        size: number;
        count: number;
        normalized: boolean;
        offset: number;
        stride: number;
    }

    class ZkAttributeKey implements IZkAttributeKey {
        constructor(properties?: Zko.IZkAttributeKey);
        public index: number;
        public size: number;
        public count: number;
        public normalized: boolean;
        public offset: number;
        public stride: number;
        public static create(properties?: Zko.IZkAttributeKey): Zko.ZkAttributeKey;
        public static encode(message: Zko.ZkAttributeKey, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ZkAttributeKey;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ZkAttributeKey;
        public static toObject(message: Zko.ZkAttributeKey, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    enum BufferTargetType {
        ARRAY_BUFFER = 0,
        ELEMENT_ARRAY_BUFFER = 1
    }

    enum BufferUsageType {
        STATIC_DRAW = 0
    }

    interface IZkIndexBuffer {
        targetBuffer: Zko.BufferTargetType;
        usage: Zko.BufferUsageType;
        itemSize: number;
        count: number;
        dataArray: Uint8Array;
    }

    class ZkIndexBuffer implements IZkIndexBuffer {
        constructor(properties?: Zko.IZkIndexBuffer);
        public targetBuffer: Zko.BufferTargetType;
        public usage: Zko.BufferUsageType;
        public itemSize: number;
        public count: number;
        public dataArray: Uint8Array;
        public static create(properties?: Zko.IZkIndexBuffer): Zko.ZkIndexBuffer;
        public static encode(message: Zko.ZkIndexBuffer, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ZkIndexBuffer;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ZkIndexBuffer;
        public static toObject(message: Zko.ZkIndexBuffer, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IZkVertexBuffer {
        targetBuffer: Zko.BufferTargetType;
        usage: Zko.BufferUsageType;
        itemSize: number;
        count: number;
        dataArray: Uint8Array;
    }

    class ZkVertexBuffer implements IZkVertexBuffer {
        constructor(properties?: Zko.IZkVertexBuffer);
        public targetBuffer: Zko.BufferTargetType;
        public usage: Zko.BufferUsageType;
        public itemSize: number;
        public count: number;
        public dataArray: Uint8Array;
        public static create(properties?: Zko.IZkVertexBuffer): Zko.ZkVertexBuffer;
        public static encode(message: Zko.ZkVertexBuffer, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ZkVertexBuffer;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ZkVertexBuffer;
        public static toObject(message: Zko.ZkVertexBuffer, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IZkShaderProgram {
        vertexShader: Zko.ZkShader;
        fragmentShader: Zko.ZkShader;
        attributes?: ({ [k: string]: Zko.ZkShaderAttribute }|null);
        uniforms?: ({ [k: string]: Zko.ZkShaderUniform }|null);
    }

    class ZkShaderProgram implements IZkShaderProgram {
        constructor(properties?: Zko.IZkShaderProgram);
        public vertexShader: Zko.ZkShader;
        public fragmentShader: Zko.ZkShader;
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

    interface IZkShader {
        type: string;
        source: string;
    }

    class ZkShader implements IZkShader {
        constructor(properties?: Zko.IZkShader);
        public type: string;
        public source: string;
        public static create(properties?: Zko.IZkShader): Zko.ZkShader;
        public static encode(message: Zko.ZkShader, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ZkShader;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ZkShader;
        public static toObject(message: Zko.ZkShader, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IZkShaderAttribute {
        index: number;
        attributeName: string;
    }

    class ZkShaderAttribute implements IZkShaderAttribute {
        constructor(properties?: Zko.IZkShaderAttribute);
        public index: number;
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
        type: Zko.ZkUniformType;
    }

    class ZkShaderUniform implements IZkShaderUniform {
        constructor(properties?: Zko.IZkShaderUniform);
        public uniformName: string;
        public count: number;
        public type: Zko.ZkUniformType;
        public static create(properties?: Zko.IZkShaderUniform): Zko.ZkShaderUniform;
        public static encode(message: Zko.ZkShaderUniform, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zko.ZkShaderUniform;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zko.ZkShaderUniform;
        public static toObject(message: Zko.ZkShaderUniform, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    enum ZkUniformType {
        SCALAR = 0,
        VEC2 = 1,
        VEC3 = 2,
        VEC4 = 3,
        MAT2 = 4,
        MAT3 = 5,
        MAT4 = 6
    }
}
