/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const Zko = $root.Zko = (() => {

    /**
     * Namespace Zko.
     * @exports Zko
     * @namespace
     */
    const Zko = {};

    Zko.Zko = (function() {

        /**
         * Properties of a Zko.
         * @memberof Zko
         * @interface IZko
         * @property {Zko.ZkoHeader} header Zko header
         * @property {Zko.ProtoZkObject} data Zko data
         */

        /**
         * Constructs a new Zko.
         * @memberof Zko
         * @classdesc Represents a Zko.
         * @implements IZko
         * @constructor
         * @param {Zko.IZko=} [properties] Properties to set
         */
        function Zko(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Zko header.
         * @member {Zko.ZkoHeader} header
         * @memberof Zko.Zko
         * @instance
         */
        Zko.prototype.header = null;

        /**
         * Zko data.
         * @member {Zko.ProtoZkObject} data
         * @memberof Zko.Zko
         * @instance
         */
        Zko.prototype.data = null;

        /**
         * Creates a new Zko instance using the specified properties.
         * @function create
         * @memberof Zko.Zko
         * @static
         * @param {Zko.IZko=} [properties] Properties to set
         * @returns {Zko.Zko} Zko instance
         */
        Zko.create = function create(properties) {
            return new Zko(properties);
        };

        /**
         * Encodes the specified Zko message. Does not implicitly {@link Zko.Zko.verify|verify} messages.
         * @function encode
         * @memberof Zko.Zko
         * @static
         * @param {Zko.Zko} message Zko message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Zko.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.Zko.ZkoHeader.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            $root.Zko.ProtoZkObject.encode(message.data, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Zko message from the specified reader or buffer.
         * @function decode
         * @memberof Zko.Zko
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zko.Zko} Zko
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Zko.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zko.Zko();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.header = $root.Zko.ZkoHeader.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.data = $root.Zko.ProtoZkObject.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("header"))
                throw $util.ProtocolError("missing required 'header'", { instance: message });
            if (!message.hasOwnProperty("data"))
                throw $util.ProtocolError("missing required 'data'", { instance: message });
            return message;
        };

        /**
         * Verifies a Zko message.
         * @function verify
         * @memberof Zko.Zko
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Zko.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                let error = $root.Zko.ZkoHeader.verify(message.header);
                if (error)
                    return "header." + error;
            }
            {
                let error = $root.Zko.ProtoZkObject.verify(message.data);
                if (error)
                    return "data." + error;
            }
            return null;
        };

        /**
         * Creates a Zko message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zko.Zko
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zko.Zko} Zko
         */
        Zko.fromObject = function fromObject(object) {
            if (object instanceof $root.Zko.Zko)
                return object;
            let message = new $root.Zko.Zko();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".Zko.Zko.header: object expected");
                message.header = $root.Zko.ZkoHeader.fromObject(object.header);
            }
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".Zko.Zko.data: object expected");
                message.data = $root.Zko.ProtoZkObject.fromObject(object.data);
            }
            return message;
        };

        /**
         * Creates a plain object from a Zko message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zko.Zko
         * @static
         * @param {Zko.Zko} message Zko
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Zko.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.data = null;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.Zko.ZkoHeader.toObject(message.header, options);
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = $root.Zko.ProtoZkObject.toObject(message.data, options);
            return object;
        };

        /**
         * Converts this Zko to JSON.
         * @function toJSON
         * @memberof Zko.Zko
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Zko.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Zko
         * @function getTypeUrl
         * @memberof Zko.Zko
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Zko.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Zko.Zko";
        };

        return Zko;
    })();

    Zko.ZkoHeader = (function() {

        /**
         * Properties of a ZkoHeader.
         * @memberof Zko
         * @interface IZkoHeader
         * @property {string} version ZkoHeader version
         */

        /**
         * Constructs a new ZkoHeader.
         * @memberof Zko
         * @classdesc Represents a ZkoHeader.
         * @implements IZkoHeader
         * @constructor
         * @param {Zko.IZkoHeader=} [properties] Properties to set
         */
        function ZkoHeader(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZkoHeader version.
         * @member {string} version
         * @memberof Zko.ZkoHeader
         * @instance
         */
        ZkoHeader.prototype.version = "";

        /**
         * Creates a new ZkoHeader instance using the specified properties.
         * @function create
         * @memberof Zko.ZkoHeader
         * @static
         * @param {Zko.IZkoHeader=} [properties] Properties to set
         * @returns {Zko.ZkoHeader} ZkoHeader instance
         */
        ZkoHeader.create = function create(properties) {
            return new ZkoHeader(properties);
        };

        /**
         * Encodes the specified ZkoHeader message. Does not implicitly {@link Zko.ZkoHeader.verify|verify} messages.
         * @function encode
         * @memberof Zko.ZkoHeader
         * @static
         * @param {Zko.ZkoHeader} message ZkoHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZkoHeader.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.version);
            return writer;
        };

        /**
         * Decodes a ZkoHeader message from the specified reader or buffer.
         * @function decode
         * @memberof Zko.ZkoHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zko.ZkoHeader} ZkoHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZkoHeader.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zko.ZkoHeader();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.version = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("version"))
                throw $util.ProtocolError("missing required 'version'", { instance: message });
            return message;
        };

        /**
         * Verifies a ZkoHeader message.
         * @function verify
         * @memberof Zko.ZkoHeader
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZkoHeader.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.version))
                return "version: string expected";
            return null;
        };

        /**
         * Creates a ZkoHeader message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zko.ZkoHeader
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zko.ZkoHeader} ZkoHeader
         */
        ZkoHeader.fromObject = function fromObject(object) {
            if (object instanceof $root.Zko.ZkoHeader)
                return object;
            let message = new $root.Zko.ZkoHeader();
            if (object.version != null)
                message.version = String(object.version);
            return message;
        };

        /**
         * Creates a plain object from a ZkoHeader message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zko.ZkoHeader
         * @static
         * @param {Zko.ZkoHeader} message ZkoHeader
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZkoHeader.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.version = "";
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            return object;
        };

        /**
         * Converts this ZkoHeader to JSON.
         * @function toJSON
         * @memberof Zko.ZkoHeader
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZkoHeader.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ZkoHeader
         * @function getTypeUrl
         * @memberof Zko.ZkoHeader
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ZkoHeader.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Zko.ZkoHeader";
        };

        return ZkoHeader;
    })();

    Zko.ProtoZkObject = (function() {

        /**
         * Properties of a ProtoZkObject.
         * @memberof Zko
         * @interface IProtoZkObject
         * @property {string} type ProtoZkObject type
         * @property {Zko.ZkScene|null} [scene] ProtoZkObject scene
         * @property {Zko.ZkGroup|null} [group] ProtoZkObject group
         * @property {Zko.ZkModel|null} [model] ProtoZkObject model
         * @property {Zko.ZkCamera|null} [camera] ProtoZkObject camera
         * @property {Zko.ZkSkeleton|null} [skeleton] ProtoZkObject skeleton
         * @property {Zko.ZkJoint|null} [joint] ProtoZkObject joint
         * @property {Array.<Zko.ProtoZkObject>|null} [children] ProtoZkObject children
         */

        /**
         * Constructs a new ProtoZkObject.
         * @memberof Zko
         * @classdesc Represents a ProtoZkObject.
         * @implements IProtoZkObject
         * @constructor
         * @param {Zko.IProtoZkObject=} [properties] Properties to set
         */
        function ProtoZkObject(properties) {
            this.children = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProtoZkObject type.
         * @member {string} type
         * @memberof Zko.ProtoZkObject
         * @instance
         */
        ProtoZkObject.prototype.type = "";

        /**
         * ProtoZkObject scene.
         * @member {Zko.ZkScene|null|undefined} scene
         * @memberof Zko.ProtoZkObject
         * @instance
         */
        ProtoZkObject.prototype.scene = null;

        /**
         * ProtoZkObject group.
         * @member {Zko.ZkGroup|null|undefined} group
         * @memberof Zko.ProtoZkObject
         * @instance
         */
        ProtoZkObject.prototype.group = null;

        /**
         * ProtoZkObject model.
         * @member {Zko.ZkModel|null|undefined} model
         * @memberof Zko.ProtoZkObject
         * @instance
         */
        ProtoZkObject.prototype.model = null;

        /**
         * ProtoZkObject camera.
         * @member {Zko.ZkCamera|null|undefined} camera
         * @memberof Zko.ProtoZkObject
         * @instance
         */
        ProtoZkObject.prototype.camera = null;

        /**
         * ProtoZkObject skeleton.
         * @member {Zko.ZkSkeleton|null|undefined} skeleton
         * @memberof Zko.ProtoZkObject
         * @instance
         */
        ProtoZkObject.prototype.skeleton = null;

        /**
         * ProtoZkObject joint.
         * @member {Zko.ZkJoint|null|undefined} joint
         * @memberof Zko.ProtoZkObject
         * @instance
         */
        ProtoZkObject.prototype.joint = null;

        /**
         * ProtoZkObject children.
         * @member {Array.<Zko.ProtoZkObject>} children
         * @memberof Zko.ProtoZkObject
         * @instance
         */
        ProtoZkObject.prototype.children = $util.emptyArray;

        /**
         * Creates a new ProtoZkObject instance using the specified properties.
         * @function create
         * @memberof Zko.ProtoZkObject
         * @static
         * @param {Zko.IProtoZkObject=} [properties] Properties to set
         * @returns {Zko.ProtoZkObject} ProtoZkObject instance
         */
        ProtoZkObject.create = function create(properties) {
            return new ProtoZkObject(properties);
        };

        /**
         * Encodes the specified ProtoZkObject message. Does not implicitly {@link Zko.ProtoZkObject.verify|verify} messages.
         * @function encode
         * @memberof Zko.ProtoZkObject
         * @static
         * @param {Zko.ProtoZkObject} message ProtoZkObject message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProtoZkObject.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            if (message.scene != null && Object.hasOwnProperty.call(message, "scene"))
                $root.Zko.ZkScene.encode(message.scene, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.group != null && Object.hasOwnProperty.call(message, "group"))
                $root.Zko.ZkGroup.encode(message.group, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.model != null && Object.hasOwnProperty.call(message, "model"))
                $root.Zko.ZkModel.encode(message.model, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.camera != null && Object.hasOwnProperty.call(message, "camera"))
                $root.Zko.ZkCamera.encode(message.camera, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.skeleton != null && Object.hasOwnProperty.call(message, "skeleton"))
                $root.Zko.ZkSkeleton.encode(message.skeleton, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.joint != null && Object.hasOwnProperty.call(message, "joint"))
                $root.Zko.ZkJoint.encode(message.joint, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.children != null && message.children.length)
                for (let i = 0; i < message.children.length; ++i)
                    $root.Zko.ProtoZkObject.encode(message.children[i], writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ProtoZkObject message from the specified reader or buffer.
         * @function decode
         * @memberof Zko.ProtoZkObject
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zko.ProtoZkObject} ProtoZkObject
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProtoZkObject.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zko.ProtoZkObject();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.string();
                        break;
                    }
                case 2: {
                        message.scene = $root.Zko.ZkScene.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.group = $root.Zko.ZkGroup.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.model = $root.Zko.ZkModel.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.camera = $root.Zko.ZkCamera.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.skeleton = $root.Zko.ZkSkeleton.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.joint = $root.Zko.ZkJoint.decode(reader, reader.uint32());
                        break;
                    }
                case 100: {
                        if (!(message.children && message.children.length))
                            message.children = [];
                        message.children.push($root.Zko.ProtoZkObject.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            return message;
        };

        /**
         * Verifies a ProtoZkObject message.
         * @function verify
         * @memberof Zko.ProtoZkObject
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProtoZkObject.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.type))
                return "type: string expected";
            if (message.scene != null && message.hasOwnProperty("scene")) {
                let error = $root.Zko.ZkScene.verify(message.scene);
                if (error)
                    return "scene." + error;
            }
            if (message.group != null && message.hasOwnProperty("group")) {
                let error = $root.Zko.ZkGroup.verify(message.group);
                if (error)
                    return "group." + error;
            }
            if (message.model != null && message.hasOwnProperty("model")) {
                let error = $root.Zko.ZkModel.verify(message.model);
                if (error)
                    return "model." + error;
            }
            if (message.camera != null && message.hasOwnProperty("camera")) {
                let error = $root.Zko.ZkCamera.verify(message.camera);
                if (error)
                    return "camera." + error;
            }
            if (message.skeleton != null && message.hasOwnProperty("skeleton")) {
                let error = $root.Zko.ZkSkeleton.verify(message.skeleton);
                if (error)
                    return "skeleton." + error;
            }
            if (message.joint != null && message.hasOwnProperty("joint")) {
                let error = $root.Zko.ZkJoint.verify(message.joint);
                if (error)
                    return "joint." + error;
            }
            if (message.children != null && message.hasOwnProperty("children")) {
                if (!Array.isArray(message.children))
                    return "children: array expected";
                for (let i = 0; i < message.children.length; ++i) {
                    let error = $root.Zko.ProtoZkObject.verify(message.children[i]);
                    if (error)
                        return "children." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ProtoZkObject message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zko.ProtoZkObject
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zko.ProtoZkObject} ProtoZkObject
         */
        ProtoZkObject.fromObject = function fromObject(object) {
            if (object instanceof $root.Zko.ProtoZkObject)
                return object;
            let message = new $root.Zko.ProtoZkObject();
            if (object.type != null)
                message.type = String(object.type);
            if (object.scene != null) {
                if (typeof object.scene !== "object")
                    throw TypeError(".Zko.ProtoZkObject.scene: object expected");
                message.scene = $root.Zko.ZkScene.fromObject(object.scene);
            }
            if (object.group != null) {
                if (typeof object.group !== "object")
                    throw TypeError(".Zko.ProtoZkObject.group: object expected");
                message.group = $root.Zko.ZkGroup.fromObject(object.group);
            }
            if (object.model != null) {
                if (typeof object.model !== "object")
                    throw TypeError(".Zko.ProtoZkObject.model: object expected");
                message.model = $root.Zko.ZkModel.fromObject(object.model);
            }
            if (object.camera != null) {
                if (typeof object.camera !== "object")
                    throw TypeError(".Zko.ProtoZkObject.camera: object expected");
                message.camera = $root.Zko.ZkCamera.fromObject(object.camera);
            }
            if (object.skeleton != null) {
                if (typeof object.skeleton !== "object")
                    throw TypeError(".Zko.ProtoZkObject.skeleton: object expected");
                message.skeleton = $root.Zko.ZkSkeleton.fromObject(object.skeleton);
            }
            if (object.joint != null) {
                if (typeof object.joint !== "object")
                    throw TypeError(".Zko.ProtoZkObject.joint: object expected");
                message.joint = $root.Zko.ZkJoint.fromObject(object.joint);
            }
            if (object.children) {
                if (!Array.isArray(object.children))
                    throw TypeError(".Zko.ProtoZkObject.children: array expected");
                message.children = [];
                for (let i = 0; i < object.children.length; ++i) {
                    if (typeof object.children[i] !== "object")
                        throw TypeError(".Zko.ProtoZkObject.children: object expected");
                    message.children[i] = $root.Zko.ProtoZkObject.fromObject(object.children[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ProtoZkObject message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zko.ProtoZkObject
         * @static
         * @param {Zko.ProtoZkObject} message ProtoZkObject
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProtoZkObject.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.children = [];
            if (options.defaults) {
                object.type = "";
                object.scene = null;
                object.group = null;
                object.model = null;
                object.camera = null;
                object.skeleton = null;
                object.joint = null;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.scene != null && message.hasOwnProperty("scene"))
                object.scene = $root.Zko.ZkScene.toObject(message.scene, options);
            if (message.group != null && message.hasOwnProperty("group"))
                object.group = $root.Zko.ZkGroup.toObject(message.group, options);
            if (message.model != null && message.hasOwnProperty("model"))
                object.model = $root.Zko.ZkModel.toObject(message.model, options);
            if (message.camera != null && message.hasOwnProperty("camera"))
                object.camera = $root.Zko.ZkCamera.toObject(message.camera, options);
            if (message.skeleton != null && message.hasOwnProperty("skeleton"))
                object.skeleton = $root.Zko.ZkSkeleton.toObject(message.skeleton, options);
            if (message.joint != null && message.hasOwnProperty("joint"))
                object.joint = $root.Zko.ZkJoint.toObject(message.joint, options);
            if (message.children && message.children.length) {
                object.children = [];
                for (let j = 0; j < message.children.length; ++j)
                    object.children[j] = $root.Zko.ProtoZkObject.toObject(message.children[j], options);
            }
            return object;
        };

        /**
         * Converts this ProtoZkObject to JSON.
         * @function toJSON
         * @memberof Zko.ProtoZkObject
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProtoZkObject.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProtoZkObject
         * @function getTypeUrl
         * @memberof Zko.ProtoZkObject
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProtoZkObject.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Zko.ProtoZkObject";
        };

        return ProtoZkObject;
    })();

    /**
     * ZkBaseType enum.
     * @name Zko.ZkBaseType
     * @enum {number}
     * @property {number} NONE=0 NONE value
     * @property {number} BYTE=1 BYTE value
     * @property {number} UBYTE=2 UBYTE value
     * @property {number} SHORT=3 SHORT value
     * @property {number} USHORT=4 USHORT value
     * @property {number} INT=5 INT value
     * @property {number} UINT=6 UINT value
     * @property {number} FLOAT=7 FLOAT value
     * @property {number} DOUBLE=8 DOUBLE value
     * @property {number} TEXTURE=9 TEXTURE value
     */
    Zko.ZkBaseType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NONE"] = 0;
        values[valuesById[1] = "BYTE"] = 1;
        values[valuesById[2] = "UBYTE"] = 2;
        values[valuesById[3] = "SHORT"] = 3;
        values[valuesById[4] = "USHORT"] = 4;
        values[valuesById[5] = "INT"] = 5;
        values[valuesById[6] = "UINT"] = 6;
        values[valuesById[7] = "FLOAT"] = 7;
        values[valuesById[8] = "DOUBLE"] = 8;
        values[valuesById[9] = "TEXTURE"] = 9;
        return values;
    })();

    /**
     * ZkFormatType enum.
     * @name Zko.ZkFormatType
     * @enum {number}
     * @property {number} NONE=0 NONE value
     * @property {number} SCALAR=1 SCALAR value
     * @property {number} VEC2=2 VEC2 value
     * @property {number} VEC3=3 VEC3 value
     * @property {number} VEC4=4 VEC4 value
     * @property {number} MAT2=5 MAT2 value
     * @property {number} MAT3=6 MAT3 value
     * @property {number} MAT4=7 MAT4 value
     * @property {number} TEXTURE=8 TEXTURE value
     */
    Zko.ZkFormatType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NONE"] = 0;
        values[valuesById[1] = "SCALAR"] = 1;
        values[valuesById[2] = "VEC2"] = 2;
        values[valuesById[3] = "VEC3"] = 3;
        values[valuesById[4] = "VEC4"] = 4;
        values[valuesById[5] = "MAT2"] = 5;
        values[valuesById[6] = "MAT3"] = 6;
        values[valuesById[7] = "MAT4"] = 7;
        values[valuesById[8] = "TEXTURE"] = 8;
        return values;
    })();

    Zko.ZkDataType = (function() {

        /**
         * Properties of a ZkDataType.
         * @memberof Zko
         * @interface IZkDataType
         * @property {Zko.ZkBaseType} type ZkDataType type
         * @property {Zko.ZkFormatType} format ZkDataType format
         */

        /**
         * Constructs a new ZkDataType.
         * @memberof Zko
         * @classdesc This type will merge two concepts, the base type used
         * and the format provided by that type
         * This will be useful for scenarios where we need to handle the base type
         * but we don't need to know how it is expressed
         * @implements IZkDataType
         * @constructor
         * @param {Zko.IZkDataType=} [properties] Properties to set
         */
        function ZkDataType(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZkDataType type.
         * @member {Zko.ZkBaseType} type
         * @memberof Zko.ZkDataType
         * @instance
         */
        ZkDataType.prototype.type = 0;

        /**
         * ZkDataType format.
         * @member {Zko.ZkFormatType} format
         * @memberof Zko.ZkDataType
         * @instance
         */
        ZkDataType.prototype.format = 0;

        /**
         * Creates a new ZkDataType instance using the specified properties.
         * @function create
         * @memberof Zko.ZkDataType
         * @static
         * @param {Zko.IZkDataType=} [properties] Properties to set
         * @returns {Zko.ZkDataType} ZkDataType instance
         */
        ZkDataType.create = function create(properties) {
            return new ZkDataType(properties);
        };

        /**
         * Encodes the specified ZkDataType message. Does not implicitly {@link Zko.ZkDataType.verify|verify} messages.
         * @function encode
         * @memberof Zko.ZkDataType
         * @static
         * @param {Zko.ZkDataType} message ZkDataType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZkDataType.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.format);
            return writer;
        };

        /**
         * Decodes a ZkDataType message from the specified reader or buffer.
         * @function decode
         * @memberof Zko.ZkDataType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zko.ZkDataType} ZkDataType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZkDataType.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zko.ZkDataType();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.format = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("format"))
                throw $util.ProtocolError("missing required 'format'", { instance: message });
            return message;
        };

        /**
         * Verifies a ZkDataType message.
         * @function verify
         * @memberof Zko.ZkDataType
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZkDataType.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                break;
            }
            switch (message.format) {
            default:
                return "format: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
                break;
            }
            return null;
        };

        /**
         * Creates a ZkDataType message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zko.ZkDataType
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zko.ZkDataType} ZkDataType
         */
        ZkDataType.fromObject = function fromObject(object) {
            if (object instanceof $root.Zko.ZkDataType)
                return object;
            let message = new $root.Zko.ZkDataType();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "NONE":
            case 0:
                message.type = 0;
                break;
            case "BYTE":
            case 1:
                message.type = 1;
                break;
            case "UBYTE":
            case 2:
                message.type = 2;
                break;
            case "SHORT":
            case 3:
                message.type = 3;
                break;
            case "USHORT":
            case 4:
                message.type = 4;
                break;
            case "INT":
            case 5:
                message.type = 5;
                break;
            case "UINT":
            case 6:
                message.type = 6;
                break;
            case "FLOAT":
            case 7:
                message.type = 7;
                break;
            case "DOUBLE":
            case 8:
                message.type = 8;
                break;
            case "TEXTURE":
            case 9:
                message.type = 9;
                break;
            }
            switch (object.format) {
            default:
                if (typeof object.format === "number") {
                    message.format = object.format;
                    break;
                }
                break;
            case "NONE":
            case 0:
                message.format = 0;
                break;
            case "SCALAR":
            case 1:
                message.format = 1;
                break;
            case "VEC2":
            case 2:
                message.format = 2;
                break;
            case "VEC3":
            case 3:
                message.format = 3;
                break;
            case "VEC4":
            case 4:
                message.format = 4;
                break;
            case "MAT2":
            case 5:
                message.format = 5;
                break;
            case "MAT3":
            case 6:
                message.format = 6;
                break;
            case "MAT4":
            case 7:
                message.format = 7;
                break;
            case "TEXTURE":
            case 8:
                message.format = 8;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a ZkDataType message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zko.ZkDataType
         * @static
         * @param {Zko.ZkDataType} message ZkDataType
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZkDataType.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "NONE" : 0;
                object.format = options.enums === String ? "NONE" : 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.Zko.ZkBaseType[message.type] === undefined ? message.type : $root.Zko.ZkBaseType[message.type] : message.type;
            if (message.format != null && message.hasOwnProperty("format"))
                object.format = options.enums === String ? $root.Zko.ZkFormatType[message.format] === undefined ? message.format : $root.Zko.ZkFormatType[message.format] : message.format;
            return object;
        };

        /**
         * Converts this ZkDataType to JSON.
         * @function toJSON
         * @memberof Zko.ZkDataType
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZkDataType.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ZkDataType
         * @function getTypeUrl
         * @memberof Zko.ZkDataType
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ZkDataType.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Zko.ZkDataType";
        };

        return ZkDataType;
    })();

    /**
     * ZkRefType enum.
     * @name Zko.ZkRefType
     * @enum {number}
     * @property {number} MESH=0 MESH value
     * @property {number} TEXTURE=2 TEXTURE value
     * @property {number} MATERIAL=3 MATERIAL value
     */
    Zko.ZkRefType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MESH"] = 0;
        values[valuesById[2] = "TEXTURE"] = 2;
        values[valuesById[3] = "MATERIAL"] = 3;
        return values;
    })();

    Zko.ZkReference = (function() {

        /**
         * Properties of a ZkReference.
         * @memberof Zko
         * @interface IZkReference
         * @property {number} refId ZkReference refId
         * @property {Zko.ZkRefType} type ZkReference type
         * @property {Zko.ZkMesh|null} [mesh] ZkReference mesh
         * @property {ZkTexture|null} [texture] ZkReference texture
         * @property {ZkMaterial|null} [material] ZkReference material
         */

        /**
         * Constructs a new ZkReference.
         * @memberof Zko
         * @classdesc Represents a ZkReference.
         * @implements IZkReference
         * @constructor
         * @param {Zko.IZkReference=} [properties] Properties to set
         */
        function ZkReference(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZkReference refId.
         * @member {number} refId
         * @memberof Zko.ZkReference
         * @instance
         */
        ZkReference.prototype.refId = 0;

        /**
         * ZkReference type.
         * @member {Zko.ZkRefType} type
         * @memberof Zko.ZkReference
         * @instance
         */
        ZkReference.prototype.type = 0;

        /**
         * ZkReference mesh.
         * @member {Zko.ZkMesh|null|undefined} mesh
         * @memberof Zko.ZkReference
         * @instance
         */
        ZkReference.prototype.mesh = null;

        /**
         * ZkReference texture.
         * @member {ZkTexture|null|undefined} texture
         * @memberof Zko.ZkReference
         * @instance
         */
        ZkReference.prototype.texture = null;

        /**
         * ZkReference material.
         * @member {ZkMaterial|null|undefined} material
         * @memberof Zko.ZkReference
         * @instance
         */
        ZkReference.prototype.material = null;

        /**
         * Creates a new ZkReference instance using the specified properties.
         * @function create
         * @memberof Zko.ZkReference
         * @static
         * @param {Zko.IZkReference=} [properties] Properties to set
         * @returns {Zko.ZkReference} ZkReference instance
         */
        ZkReference.create = function create(properties) {
            return new ZkReference(properties);
        };

        /**
         * Encodes the specified ZkReference message. Does not implicitly {@link Zko.ZkReference.verify|verify} messages.
         * @function encode
         * @memberof Zko.ZkReference
         * @static
         * @param {Zko.ZkReference} message ZkReference message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZkReference.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.refId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.mesh != null && Object.hasOwnProperty.call(message, "mesh"))
                $root.Zko.ZkMesh.encode(message.mesh, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.texture != null && Object.hasOwnProperty.call(message, "texture"))
                $root.ZkTexture.encode(message.texture, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.material != null && Object.hasOwnProperty.call(message, "material"))
                $root.ZkMaterial.encode(message.material, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ZkReference message from the specified reader or buffer.
         * @function decode
         * @memberof Zko.ZkReference
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zko.ZkReference} ZkReference
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZkReference.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zko.ZkReference();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.refId = reader.uint32();
                        break;
                    }
                case 2: {
                        message.type = reader.int32();
                        break;
                    }
                case 10: {
                        message.mesh = $root.Zko.ZkMesh.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.texture = $root.ZkTexture.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.material = $root.ZkMaterial.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("refId"))
                throw $util.ProtocolError("missing required 'refId'", { instance: message });
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            return message;
        };

        /**
         * Verifies a ZkReference message.
         * @function verify
         * @memberof Zko.ZkReference
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZkReference.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.refId))
                return "refId: integer expected";
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 2:
            case 3:
                break;
            }
            if (message.mesh != null && message.hasOwnProperty("mesh")) {
                let error = $root.Zko.ZkMesh.verify(message.mesh);
                if (error)
                    return "mesh." + error;
            }
            if (message.texture != null && message.hasOwnProperty("texture")) {
                let error = $root.ZkTexture.verify(message.texture);
                if (error)
                    return "texture." + error;
            }
            if (message.material != null && message.hasOwnProperty("material")) {
                let error = $root.ZkMaterial.verify(message.material);
                if (error)
                    return "material." + error;
            }
            return null;
        };

        /**
         * Creates a ZkReference message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zko.ZkReference
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zko.ZkReference} ZkReference
         */
        ZkReference.fromObject = function fromObject(object) {
            if (object instanceof $root.Zko.ZkReference)
                return object;
            let message = new $root.Zko.ZkReference();
            if (object.refId != null)
                message.refId = object.refId >>> 0;
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "MESH":
            case 0:
                message.type = 0;
                break;
            case "TEXTURE":
            case 2:
                message.type = 2;
                break;
            case "MATERIAL":
            case 3:
                message.type = 3;
                break;
            }
            if (object.mesh != null) {
                if (typeof object.mesh !== "object")
                    throw TypeError(".Zko.ZkReference.mesh: object expected");
                message.mesh = $root.Zko.ZkMesh.fromObject(object.mesh);
            }
            if (object.texture != null) {
                if (typeof object.texture !== "object")
                    throw TypeError(".Zko.ZkReference.texture: object expected");
                message.texture = $root.ZkTexture.fromObject(object.texture);
            }
            if (object.material != null) {
                if (typeof object.material !== "object")
                    throw TypeError(".Zko.ZkReference.material: object expected");
                message.material = $root.ZkMaterial.fromObject(object.material);
            }
            return message;
        };

        /**
         * Creates a plain object from a ZkReference message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zko.ZkReference
         * @static
         * @param {Zko.ZkReference} message ZkReference
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZkReference.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.refId = 0;
                object.type = options.enums === String ? "MESH" : 0;
                object.mesh = null;
                object.texture = null;
                object.material = null;
            }
            if (message.refId != null && message.hasOwnProperty("refId"))
                object.refId = message.refId;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.Zko.ZkRefType[message.type] === undefined ? message.type : $root.Zko.ZkRefType[message.type] : message.type;
            if (message.mesh != null && message.hasOwnProperty("mesh"))
                object.mesh = $root.Zko.ZkMesh.toObject(message.mesh, options);
            if (message.texture != null && message.hasOwnProperty("texture"))
                object.texture = $root.ZkTexture.toObject(message.texture, options);
            if (message.material != null && message.hasOwnProperty("material"))
                object.material = $root.ZkMaterial.toObject(message.material, options);
            return object;
        };

        /**
         * Converts this ZkReference to JSON.
         * @function toJSON
         * @memberof Zko.ZkReference
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZkReference.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ZkReference
         * @function getTypeUrl
         * @memberof Zko.ZkReference
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ZkReference.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Zko.ZkReference";
        };

        return ZkReference;
    })();

    Zko.ZkTransform = (function() {

        /**
         * Properties of a ZkTransform.
         * @memberof Zko
         * @interface IZkTransform
         * @property {Zko.ZkVector3} location ZkTransform location
         * @property {Zko.ZkQuaternion} rotation ZkTransform rotation
         * @property {Zko.ZkVector3} scale ZkTransform scale
         */

        /**
         * Constructs a new ZkTransform.
         * @memberof Zko
         * @classdesc Represents a ZkTransform.
         * @implements IZkTransform
         * @constructor
         * @param {Zko.IZkTransform=} [properties] Properties to set
         */
        function ZkTransform(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZkTransform location.
         * @member {Zko.ZkVector3} location
         * @memberof Zko.ZkTransform
         * @instance
         */
        ZkTransform.prototype.location = null;

        /**
         * ZkTransform rotation.
         * @member {Zko.ZkQuaternion} rotation
         * @memberof Zko.ZkTransform
         * @instance
         */
        ZkTransform.prototype.rotation = null;

        /**
         * ZkTransform scale.
         * @member {Zko.ZkVector3} scale
         * @memberof Zko.ZkTransform
         * @instance
         */
        ZkTransform.prototype.scale = null;

        /**
         * Creates a new ZkTransform instance using the specified properties.
         * @function create
         * @memberof Zko.ZkTransform
         * @static
         * @param {Zko.IZkTransform=} [properties] Properties to set
         * @returns {Zko.ZkTransform} ZkTransform instance
         */
        ZkTransform.create = function create(properties) {
            return new ZkTransform(properties);
        };

        /**
         * Encodes the specified ZkTransform message. Does not implicitly {@link Zko.ZkTransform.verify|verify} messages.
         * @function encode
         * @memberof Zko.ZkTransform
         * @static
         * @param {Zko.ZkTransform} message ZkTransform message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZkTransform.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.Zko.ZkVector3.encode(message.location, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            $root.Zko.ZkQuaternion.encode(message.rotation, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            $root.Zko.ZkVector3.encode(message.scale, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ZkTransform message from the specified reader or buffer.
         * @function decode
         * @memberof Zko.ZkTransform
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zko.ZkTransform} ZkTransform
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZkTransform.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zko.ZkTransform();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.location = $root.Zko.ZkVector3.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.rotation = $root.Zko.ZkQuaternion.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.scale = $root.Zko.ZkVector3.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("location"))
                throw $util.ProtocolError("missing required 'location'", { instance: message });
            if (!message.hasOwnProperty("rotation"))
                throw $util.ProtocolError("missing required 'rotation'", { instance: message });
            if (!message.hasOwnProperty("scale"))
                throw $util.ProtocolError("missing required 'scale'", { instance: message });
            return message;
        };

        /**
         * Verifies a ZkTransform message.
         * @function verify
         * @memberof Zko.ZkTransform
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZkTransform.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                let error = $root.Zko.ZkVector3.verify(message.location);
                if (error)
                    return "location." + error;
            }
            {
                let error = $root.Zko.ZkQuaternion.verify(message.rotation);
                if (error)
                    return "rotation." + error;
            }
            {
                let error = $root.Zko.ZkVector3.verify(message.scale);
                if (error)
                    return "scale." + error;
            }
            return null;
        };

        /**
         * Creates a ZkTransform message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zko.ZkTransform
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zko.ZkTransform} ZkTransform
         */
        ZkTransform.fromObject = function fromObject(object) {
            if (object instanceof $root.Zko.ZkTransform)
                return object;
            let message = new $root.Zko.ZkTransform();
            if (object.location != null) {
                if (typeof object.location !== "object")
                    throw TypeError(".Zko.ZkTransform.location: object expected");
                message.location = $root.Zko.ZkVector3.fromObject(object.location);
            }
            if (object.rotation != null) {
                if (typeof object.rotation !== "object")
                    throw TypeError(".Zko.ZkTransform.rotation: object expected");
                message.rotation = $root.Zko.ZkQuaternion.fromObject(object.rotation);
            }
            if (object.scale != null) {
                if (typeof object.scale !== "object")
                    throw TypeError(".Zko.ZkTransform.scale: object expected");
                message.scale = $root.Zko.ZkVector3.fromObject(object.scale);
            }
            return message;
        };

        /**
         * Creates a plain object from a ZkTransform message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zko.ZkTransform
         * @static
         * @param {Zko.ZkTransform} message ZkTransform
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZkTransform.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.location = null;
                object.rotation = null;
                object.scale = null;
            }
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = $root.Zko.ZkVector3.toObject(message.location, options);
            if (message.rotation != null && message.hasOwnProperty("rotation"))
                object.rotation = $root.Zko.ZkQuaternion.toObject(message.rotation, options);
            if (message.scale != null && message.hasOwnProperty("scale"))
                object.scale = $root.Zko.ZkVector3.toObject(message.scale, options);
            return object;
        };

        /**
         * Converts this ZkTransform to JSON.
         * @function toJSON
         * @memberof Zko.ZkTransform
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZkTransform.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ZkTransform
         * @function getTypeUrl
         * @memberof Zko.ZkTransform
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ZkTransform.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Zko.ZkTransform";
        };

        return ZkTransform;
    })();

    Zko.ZkVector3 = (function() {

        /**
         * Properties of a ZkVector3.
         * @memberof Zko
         * @interface IZkVector3
         * @property {number} x ZkVector3 x
         * @property {number} y ZkVector3 y
         * @property {number} z ZkVector3 z
         */

        /**
         * Constructs a new ZkVector3.
         * @memberof Zko
         * @classdesc Represents a ZkVector3.
         * @implements IZkVector3
         * @constructor
         * @param {Zko.IZkVector3=} [properties] Properties to set
         */
        function ZkVector3(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZkVector3 x.
         * @member {number} x
         * @memberof Zko.ZkVector3
         * @instance
         */
        ZkVector3.prototype.x = 0;

        /**
         * ZkVector3 y.
         * @member {number} y
         * @memberof Zko.ZkVector3
         * @instance
         */
        ZkVector3.prototype.y = 0;

        /**
         * ZkVector3 z.
         * @member {number} z
         * @memberof Zko.ZkVector3
         * @instance
         */
        ZkVector3.prototype.z = 0;

        /**
         * Creates a new ZkVector3 instance using the specified properties.
         * @function create
         * @memberof Zko.ZkVector3
         * @static
         * @param {Zko.IZkVector3=} [properties] Properties to set
         * @returns {Zko.ZkVector3} ZkVector3 instance
         */
        ZkVector3.create = function create(properties) {
            return new ZkVector3(properties);
        };

        /**
         * Encodes the specified ZkVector3 message. Does not implicitly {@link Zko.ZkVector3.verify|verify} messages.
         * @function encode
         * @memberof Zko.ZkVector3
         * @static
         * @param {Zko.ZkVector3} message ZkVector3 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZkVector3.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.z);
            return writer;
        };

        /**
         * Decodes a ZkVector3 message from the specified reader or buffer.
         * @function decode
         * @memberof Zko.ZkVector3
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zko.ZkVector3} ZkVector3
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZkVector3.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zko.ZkVector3();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.float();
                        break;
                    }
                case 2: {
                        message.y = reader.float();
                        break;
                    }
                case 3: {
                        message.z = reader.float();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("x"))
                throw $util.ProtocolError("missing required 'x'", { instance: message });
            if (!message.hasOwnProperty("y"))
                throw $util.ProtocolError("missing required 'y'", { instance: message });
            if (!message.hasOwnProperty("z"))
                throw $util.ProtocolError("missing required 'z'", { instance: message });
            return message;
        };

        /**
         * Verifies a ZkVector3 message.
         * @function verify
         * @memberof Zko.ZkVector3
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZkVector3.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.x !== "number")
                return "x: number expected";
            if (typeof message.y !== "number")
                return "y: number expected";
            if (typeof message.z !== "number")
                return "z: number expected";
            return null;
        };

        /**
         * Creates a ZkVector3 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zko.ZkVector3
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zko.ZkVector3} ZkVector3
         */
        ZkVector3.fromObject = function fromObject(object) {
            if (object instanceof $root.Zko.ZkVector3)
                return object;
            let message = new $root.Zko.ZkVector3();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.z != null)
                message.z = Number(object.z);
            return message;
        };

        /**
         * Creates a plain object from a ZkVector3 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zko.ZkVector3
         * @static
         * @param {Zko.ZkVector3} message ZkVector3
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZkVector3.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
            return object;
        };

        /**
         * Converts this ZkVector3 to JSON.
         * @function toJSON
         * @memberof Zko.ZkVector3
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZkVector3.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ZkVector3
         * @function getTypeUrl
         * @memberof Zko.ZkVector3
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ZkVector3.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Zko.ZkVector3";
        };

        return ZkVector3;
    })();

    Zko.ZkVector4 = (function() {

        /**
         * Properties of a ZkVector4.
         * @memberof Zko
         * @interface IZkVector4
         * @property {number} x ZkVector4 x
         * @property {number} y ZkVector4 y
         * @property {number} z ZkVector4 z
         * @property {number} w ZkVector4 w
         */

        /**
         * Constructs a new ZkVector4.
         * @memberof Zko
         * @classdesc Represents a ZkVector4.
         * @implements IZkVector4
         * @constructor
         * @param {Zko.IZkVector4=} [properties] Properties to set
         */
        function ZkVector4(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZkVector4 x.
         * @member {number} x
         * @memberof Zko.ZkVector4
         * @instance
         */
        ZkVector4.prototype.x = 0;

        /**
         * ZkVector4 y.
         * @member {number} y
         * @memberof Zko.ZkVector4
         * @instance
         */
        ZkVector4.prototype.y = 0;

        /**
         * ZkVector4 z.
         * @member {number} z
         * @memberof Zko.ZkVector4
         * @instance
         */
        ZkVector4.prototype.z = 0;

        /**
         * ZkVector4 w.
         * @member {number} w
         * @memberof Zko.ZkVector4
         * @instance
         */
        ZkVector4.prototype.w = 0;

        /**
         * Creates a new ZkVector4 instance using the specified properties.
         * @function create
         * @memberof Zko.ZkVector4
         * @static
         * @param {Zko.IZkVector4=} [properties] Properties to set
         * @returns {Zko.ZkVector4} ZkVector4 instance
         */
        ZkVector4.create = function create(properties) {
            return new ZkVector4(properties);
        };

        /**
         * Encodes the specified ZkVector4 message. Does not implicitly {@link Zko.ZkVector4.verify|verify} messages.
         * @function encode
         * @memberof Zko.ZkVector4
         * @static
         * @param {Zko.ZkVector4} message ZkVector4 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZkVector4.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.z);
            writer.uint32(/* id 4, wireType 5 =*/37).float(message.w);
            return writer;
        };

        /**
         * Decodes a ZkVector4 message from the specified reader or buffer.
         * @function decode
         * @memberof Zko.ZkVector4
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zko.ZkVector4} ZkVector4
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZkVector4.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zko.ZkVector4();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.float();
                        break;
                    }
                case 2: {
                        message.y = reader.float();
                        break;
                    }
                case 3: {
                        message.z = reader.float();
                        break;
                    }
                case 4: {
                        message.w = reader.float();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("x"))
                throw $util.ProtocolError("missing required 'x'", { instance: message });
            if (!message.hasOwnProperty("y"))
                throw $util.ProtocolError("missing required 'y'", { instance: message });
            if (!message.hasOwnProperty("z"))
                throw $util.ProtocolError("missing required 'z'", { instance: message });
            if (!message.hasOwnProperty("w"))
                throw $util.ProtocolError("missing required 'w'", { instance: message });
            return message;
        };

        /**
         * Verifies a ZkVector4 message.
         * @function verify
         * @memberof Zko.ZkVector4
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZkVector4.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.x !== "number")
                return "x: number expected";
            if (typeof message.y !== "number")
                return "y: number expected";
            if (typeof message.z !== "number")
                return "z: number expected";
            if (typeof message.w !== "number")
                return "w: number expected";
            return null;
        };

        /**
         * Creates a ZkVector4 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zko.ZkVector4
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zko.ZkVector4} ZkVector4
         */
        ZkVector4.fromObject = function fromObject(object) {
            if (object instanceof $root.Zko.ZkVector4)
                return object;
            let message = new $root.Zko.ZkVector4();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.z != null)
                message.z = Number(object.z);
            if (object.w != null)
                message.w = Number(object.w);
            return message;
        };

        /**
         * Creates a plain object from a ZkVector4 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zko.ZkVector4
         * @static
         * @param {Zko.ZkVector4} message ZkVector4
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZkVector4.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
                object.w = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
            if (message.w != null && message.hasOwnProperty("w"))
                object.w = options.json && !isFinite(message.w) ? String(message.w) : message.w;
            return object;
        };

        /**
         * Converts this ZkVector4 to JSON.
         * @function toJSON
         * @memberof Zko.ZkVector4
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZkVector4.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ZkVector4
         * @function getTypeUrl
         * @memberof Zko.ZkVector4
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ZkVector4.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Zko.ZkVector4";
        };

        return ZkVector4;
    })();

    Zko.ZkQuaternion = (function() {

        /**
         * Properties of a ZkQuaternion.
         * @memberof Zko
         * @interface IZkQuaternion
         * @property {number} w ZkQuaternion w
         * @property {number} x ZkQuaternion x
         * @property {number} y ZkQuaternion y
         * @property {number} z ZkQuaternion z
         */

        /**
         * Constructs a new ZkQuaternion.
         * @memberof Zko
         * @classdesc Represents a ZkQuaternion.
         * @implements IZkQuaternion
         * @constructor
         * @param {Zko.IZkQuaternion=} [properties] Properties to set
         */
        function ZkQuaternion(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZkQuaternion w.
         * @member {number} w
         * @memberof Zko.ZkQuaternion
         * @instance
         */
        ZkQuaternion.prototype.w = 0;

        /**
         * ZkQuaternion x.
         * @member {number} x
         * @memberof Zko.ZkQuaternion
         * @instance
         */
        ZkQuaternion.prototype.x = 0;

        /**
         * ZkQuaternion y.
         * @member {number} y
         * @memberof Zko.ZkQuaternion
         * @instance
         */
        ZkQuaternion.prototype.y = 0;

        /**
         * ZkQuaternion z.
         * @member {number} z
         * @memberof Zko.ZkQuaternion
         * @instance
         */
        ZkQuaternion.prototype.z = 0;

        /**
         * Creates a new ZkQuaternion instance using the specified properties.
         * @function create
         * @memberof Zko.ZkQuaternion
         * @static
         * @param {Zko.IZkQuaternion=} [properties] Properties to set
         * @returns {Zko.ZkQuaternion} ZkQuaternion instance
         */
        ZkQuaternion.create = function create(properties) {
            return new ZkQuaternion(properties);
        };

        /**
         * Encodes the specified ZkQuaternion message. Does not implicitly {@link Zko.ZkQuaternion.verify|verify} messages.
         * @function encode
         * @memberof Zko.ZkQuaternion
         * @static
         * @param {Zko.ZkQuaternion} message ZkQuaternion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZkQuaternion.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.w);
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.x);
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.y);
            writer.uint32(/* id 4, wireType 5 =*/37).float(message.z);
            return writer;
        };

        /**
         * Decodes a ZkQuaternion message from the specified reader or buffer.
         * @function decode
         * @memberof Zko.ZkQuaternion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zko.ZkQuaternion} ZkQuaternion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZkQuaternion.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zko.ZkQuaternion();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.w = reader.float();
                        break;
                    }
                case 2: {
                        message.x = reader.float();
                        break;
                    }
                case 3: {
                        message.y = reader.float();
                        break;
                    }
                case 4: {
                        message.z = reader.float();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("w"))
                throw $util.ProtocolError("missing required 'w'", { instance: message });
            if (!message.hasOwnProperty("x"))
                throw $util.ProtocolError("missing required 'x'", { instance: message });
            if (!message.hasOwnProperty("y"))
                throw $util.ProtocolError("missing required 'y'", { instance: message });
            if (!message.hasOwnProperty("z"))
                throw $util.ProtocolError("missing required 'z'", { instance: message });
            return message;
        };

        /**
         * Verifies a ZkQuaternion message.
         * @function verify
         * @memberof Zko.ZkQuaternion
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZkQuaternion.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.w !== "number")
                return "w: number expected";
            if (typeof message.x !== "number")
                return "x: number expected";
            if (typeof message.y !== "number")
                return "y: number expected";
            if (typeof message.z !== "number")
                return "z: number expected";
            return null;
        };

        /**
         * Creates a ZkQuaternion message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zko.ZkQuaternion
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zko.ZkQuaternion} ZkQuaternion
         */
        ZkQuaternion.fromObject = function fromObject(object) {
            if (object instanceof $root.Zko.ZkQuaternion)
                return object;
            let message = new $root.Zko.ZkQuaternion();
            if (object.w != null)
                message.w = Number(object.w);
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.z != null)
                message.z = Number(object.z);
            return message;
        };

        /**
         * Creates a plain object from a ZkQuaternion message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zko.ZkQuaternion
         * @static
         * @param {Zko.ZkQuaternion} message ZkQuaternion
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZkQuaternion.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.w = 0;
                object.x = 0;
                object.y = 0;
                object.z = 0;
            }
            if (message.w != null && message.hasOwnProperty("w"))
                object.w = options.json && !isFinite(message.w) ? String(message.w) : message.w;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
            return object;
        };

        /**
         * Converts this ZkQuaternion to JSON.
         * @function toJSON
         * @memberof Zko.ZkQuaternion
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZkQuaternion.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ZkQuaternion
         * @function getTypeUrl
         * @memberof Zko.ZkQuaternion
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ZkQuaternion.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Zko.ZkQuaternion";
        };

        return ZkQuaternion;
    })();

    Zko.ZkGroup = (function() {

        /**
         * Properties of a ZkGroup.
         * @memberof Zko
         * @interface IZkGroup
         * @property {string} id ZkGroup id
         * @property {string} name ZkGroup name
         * @property {Zko.ZkTransform} transform ZkGroup transform
         */

        /**
         * Constructs a new ZkGroup.
         * @memberof Zko
         * @classdesc Represents a ZkGroup.
         * @implements IZkGroup
         * @constructor
         * @param {Zko.IZkGroup=} [properties] Properties to set
         */
        function ZkGroup(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZkGroup id.
         * @member {string} id
         * @memberof Zko.ZkGroup
         * @instance
         */
        ZkGroup.prototype.id = "";

        /**
         * ZkGroup name.
         * @member {string} name
         * @memberof Zko.ZkGroup
         * @instance
         */
        ZkGroup.prototype.name = "";

        /**
         * ZkGroup transform.
         * @member {Zko.ZkTransform} transform
         * @memberof Zko.ZkGroup
         * @instance
         */
        ZkGroup.prototype.transform = null;

        /**
         * Creates a new ZkGroup instance using the specified properties.
         * @function create
         * @memberof Zko.ZkGroup
         * @static
         * @param {Zko.IZkGroup=} [properties] Properties to set
         * @returns {Zko.ZkGroup} ZkGroup instance
         */
        ZkGroup.create = function create(properties) {
            return new ZkGroup(properties);
        };

        /**
         * Encodes the specified ZkGroup message. Does not implicitly {@link Zko.ZkGroup.verify|verify} messages.
         * @function encode
         * @memberof Zko.ZkGroup
         * @static
         * @param {Zko.ZkGroup} message ZkGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZkGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            $root.Zko.ZkTransform.encode(message.transform, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ZkGroup message from the specified reader or buffer.
         * @function decode
         * @memberof Zko.ZkGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zko.ZkGroup} ZkGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZkGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zko.ZkGroup();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.transform = $root.Zko.ZkTransform.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("transform"))
                throw $util.ProtocolError("missing required 'transform'", { instance: message });
            return message;
        };

        /**
         * Verifies a ZkGroup message.
         * @function verify
         * @memberof Zko.ZkGroup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZkGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            {
                let error = $root.Zko.ZkTransform.verify(message.transform);
                if (error)
                    return "transform." + error;
            }
            return null;
        };

        /**
         * Creates a ZkGroup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zko.ZkGroup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zko.ZkGroup} ZkGroup
         */
        ZkGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.Zko.ZkGroup)
                return object;
            let message = new $root.Zko.ZkGroup();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.transform != null) {
                if (typeof object.transform !== "object")
                    throw TypeError(".Zko.ZkGroup.transform: object expected");
                message.transform = $root.Zko.ZkTransform.fromObject(object.transform);
            }
            return message;
        };

        /**
         * Creates a plain object from a ZkGroup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zko.ZkGroup
         * @static
         * @param {Zko.ZkGroup} message ZkGroup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZkGroup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.transform = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.transform != null && message.hasOwnProperty("transform"))
                object.transform = $root.Zko.ZkTransform.toObject(message.transform, options);
            return object;
        };

        /**
         * Converts this ZkGroup to JSON.
         * @function toJSON
         * @memberof Zko.ZkGroup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZkGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ZkGroup
         * @function getTypeUrl
         * @memberof Zko.ZkGroup
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ZkGroup.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Zko.ZkGroup";
        };

        return ZkGroup;
    })();

    Zko.ZkScene = (function() {

        /**
         * Properties of a ZkScene.
         * @memberof Zko
         * @interface IZkScene
         * @property {string} id ZkScene id
         * @property {string} name ZkScene name
         * @property {Zko.ZkTransform} transform ZkScene transform
         * @property {Zko.ZkColor|null} [clearColor] ZkScene clearColor
         */

        /**
         * Constructs a new ZkScene.
         * @memberof Zko
         * @classdesc Represents a ZkScene.
         * @implements IZkScene
         * @constructor
         * @param {Zko.IZkScene=} [properties] Properties to set
         */
        function ZkScene(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZkScene id.
         * @member {string} id
         * @memberof Zko.ZkScene
         * @instance
         */
        ZkScene.prototype.id = "";

        /**
         * ZkScene name.
         * @member {string} name
         * @memberof Zko.ZkScene
         * @instance
         */
        ZkScene.prototype.name = "";

        /**
         * ZkScene transform.
         * @member {Zko.ZkTransform} transform
         * @memberof Zko.ZkScene
         * @instance
         */
        ZkScene.prototype.transform = null;

        /**
         * ZkScene clearColor.
         * @member {Zko.ZkColor|null|undefined} clearColor
         * @memberof Zko.ZkScene
         * @instance
         */
        ZkScene.prototype.clearColor = null;

        /**
         * Creates a new ZkScene instance using the specified properties.
         * @function create
         * @memberof Zko.ZkScene
         * @static
         * @param {Zko.IZkScene=} [properties] Properties to set
         * @returns {Zko.ZkScene} ZkScene instance
         */
        ZkScene.create = function create(properties) {
            return new ZkScene(properties);
        };

        /**
         * Encodes the specified ZkScene message. Does not implicitly {@link Zko.ZkScene.verify|verify} messages.
         * @function encode
         * @memberof Zko.ZkScene
         * @static
         * @param {Zko.ZkScene} message ZkScene message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZkScene.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            $root.Zko.ZkTransform.encode(message.transform, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.clearColor != null && Object.hasOwnProperty.call(message, "clearColor"))
                $root.Zko.ZkColor.encode(message.clearColor, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ZkScene message from the specified reader or buffer.
         * @function decode
         * @memberof Zko.ZkScene
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zko.ZkScene} ZkScene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZkScene.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zko.ZkScene();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.transform = $root.Zko.ZkTransform.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.clearColor = $root.Zko.ZkColor.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("transform"))
                throw $util.ProtocolError("missing required 'transform'", { instance: message });
            return message;
        };

        /**
         * Verifies a ZkScene message.
         * @function verify
         * @memberof Zko.ZkScene
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZkScene.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            {
                let error = $root.Zko.ZkTransform.verify(message.transform);
                if (error)
                    return "transform." + error;
            }
            if (message.clearColor != null && message.hasOwnProperty("clearColor")) {
                let error = $root.Zko.ZkColor.verify(message.clearColor);
                if (error)
                    return "clearColor." + error;
            }
            return null;
        };

        /**
         * Creates a ZkScene message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zko.ZkScene
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zko.ZkScene} ZkScene
         */
        ZkScene.fromObject = function fromObject(object) {
            if (object instanceof $root.Zko.ZkScene)
                return object;
            let message = new $root.Zko.ZkScene();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.transform != null) {
                if (typeof object.transform !== "object")
                    throw TypeError(".Zko.ZkScene.transform: object expected");
                message.transform = $root.Zko.ZkTransform.fromObject(object.transform);
            }
            if (object.clearColor != null) {
                if (typeof object.clearColor !== "object")
                    throw TypeError(".Zko.ZkScene.clearColor: object expected");
                message.clearColor = $root.Zko.ZkColor.fromObject(object.clearColor);
            }
            return message;
        };

        /**
         * Creates a plain object from a ZkScene message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zko.ZkScene
         * @static
         * @param {Zko.ZkScene} message ZkScene
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZkScene.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.transform = null;
                object.clearColor = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.transform != null && message.hasOwnProperty("transform"))
                object.transform = $root.Zko.ZkTransform.toObject(message.transform, options);
            if (message.clearColor != null && message.hasOwnProperty("clearColor"))
                object.clearColor = $root.Zko.ZkColor.toObject(message.clearColor, options);
            return object;
        };

        /**
         * Converts this ZkScene to JSON.
         * @function toJSON
         * @memberof Zko.ZkScene
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZkScene.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ZkScene
         * @function getTypeUrl
         * @memberof Zko.ZkScene
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ZkScene.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Zko.ZkScene";
        };

        return ZkScene;
    })();

    Zko.ZkColor = (function() {

        /**
         * Properties of a ZkColor.
         * @memberof Zko
         * @interface IZkColor
         * @property {number} r ZkColor r
         * @property {number} g ZkColor g
         * @property {number} b ZkColor b
         * @property {number} a ZkColor a
         */

        /**
         * Constructs a new ZkColor.
         * @memberof Zko
         * @classdesc Represents a ZkColor.
         * @implements IZkColor
         * @constructor
         * @param {Zko.IZkColor=} [properties] Properties to set
         */
        function ZkColor(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZkColor r.
         * @member {number} r
         * @memberof Zko.ZkColor
         * @instance
         */
        ZkColor.prototype.r = 0;

        /**
         * ZkColor g.
         * @member {number} g
         * @memberof Zko.ZkColor
         * @instance
         */
        ZkColor.prototype.g = 0;

        /**
         * ZkColor b.
         * @member {number} b
         * @memberof Zko.ZkColor
         * @instance
         */
        ZkColor.prototype.b = 0;

        /**
         * ZkColor a.
         * @member {number} a
         * @memberof Zko.ZkColor
         * @instance
         */
        ZkColor.prototype.a = 0;

        /**
         * Creates a new ZkColor instance using the specified properties.
         * @function create
         * @memberof Zko.ZkColor
         * @static
         * @param {Zko.IZkColor=} [properties] Properties to set
         * @returns {Zko.ZkColor} ZkColor instance
         */
        ZkColor.create = function create(properties) {
            return new ZkColor(properties);
        };

        /**
         * Encodes the specified ZkColor message. Does not implicitly {@link Zko.ZkColor.verify|verify} messages.
         * @function encode
         * @memberof Zko.ZkColor
         * @static
         * @param {Zko.ZkColor} message ZkColor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZkColor.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.r);
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.g);
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.b);
            writer.uint32(/* id 4, wireType 5 =*/37).float(message.a);
            return writer;
        };

        /**
         * Decodes a ZkColor message from the specified reader or buffer.
         * @function decode
         * @memberof Zko.ZkColor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zko.ZkColor} ZkColor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZkColor.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zko.ZkColor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.r = reader.float();
                        break;
                    }
                case 2: {
                        message.g = reader.float();
                        break;
                    }
                case 3: {
                        message.b = reader.float();
                        break;
                    }
                case 4: {
                        message.a = reader.float();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("r"))
                throw $util.ProtocolError("missing required 'r'", { instance: message });
            if (!message.hasOwnProperty("g"))
                throw $util.ProtocolError("missing required 'g'", { instance: message });
            if (!message.hasOwnProperty("b"))
                throw $util.ProtocolError("missing required 'b'", { instance: message });
            if (!message.hasOwnProperty("a"))
                throw $util.ProtocolError("missing required 'a'", { instance: message });
            return message;
        };

        /**
         * Verifies a ZkColor message.
         * @function verify
         * @memberof Zko.ZkColor
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZkColor.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.r !== "number")
                return "r: number expected";
            if (typeof message.g !== "number")
                return "g: number expected";
            if (typeof message.b !== "number")
                return "b: number expected";
            if (typeof message.a !== "number")
                return "a: number expected";
            return null;
        };

        /**
         * Creates a ZkColor message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zko.ZkColor
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zko.ZkColor} ZkColor
         */
        ZkColor.fromObject = function fromObject(object) {
            if (object instanceof $root.Zko.ZkColor)
                return object;
            let message = new $root.Zko.ZkColor();
            if (object.r != null)
                message.r = Number(object.r);
            if (object.g != null)
                message.g = Number(object.g);
            if (object.b != null)
                message.b = Number(object.b);
            if (object.a != null)
                message.a = Number(object.a);
            return message;
        };

        /**
         * Creates a plain object from a ZkColor message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zko.ZkColor
         * @static
         * @param {Zko.ZkColor} message ZkColor
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZkColor.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.r = 0;
                object.g = 0;
                object.b = 0;
                object.a = 0;
            }
            if (message.r != null && message.hasOwnProperty("r"))
                object.r = options.json && !isFinite(message.r) ? String(message.r) : message.r;
            if (message.g != null && message.hasOwnProperty("g"))
                object.g = options.json && !isFinite(message.g) ? String(message.g) : message.g;
            if (message.b != null && message.hasOwnProperty("b"))
                object.b = options.json && !isFinite(message.b) ? String(message.b) : message.b;
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = options.json && !isFinite(message.a) ? String(message.a) : message.a;
            return object;
        };

        /**
         * Converts this ZkColor to JSON.
         * @function toJSON
         * @memberof Zko.ZkColor
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZkColor.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ZkColor
         * @function getTypeUrl
         * @memberof Zko.ZkColor
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ZkColor.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Zko.ZkColor";
        };

        return ZkColor;
    })();

    Zko.ZkModel = (function() {

        /**
         * Properties of a ZkModel.
         * @memberof Zko
         * @interface IZkModel
         * @property {string} id ZkModel id
         * @property {string} name ZkModel name
         * @property {Zko.ZkTransform} transform ZkModel transform
         * @property {Zko.ZkMesh} mesh ZkModel mesh
         * @property {Zko.ZkShaderProgram} shaderProgram ZkModel shaderProgram
         * @property {ZkRefMaterial|null} [material] ZkModel material
         * @property {Zko.ZkSkinning|null} [skinning] ZkModel skinning
         * @property {Zko.ZkRefSkeleton|null} [skeleton] ZkModel skeleton
         */

        /**
         * Constructs a new ZkModel.
         * @memberof Zko
         * @classdesc Represents a ZkModel.
         * @implements IZkModel
         * @constructor
         * @param {Zko.IZkModel=} [properties] Properties to set
         */
        function ZkModel(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZkModel id.
         * @member {string} id
         * @memberof Zko.ZkModel
         * @instance
         */
        ZkModel.prototype.id = "";

        /**
         * ZkModel name.
         * @member {string} name
         * @memberof Zko.ZkModel
         * @instance
         */
        ZkModel.prototype.name = "";

        /**
         * ZkModel transform.
         * @member {Zko.ZkTransform} transform
         * @memberof Zko.ZkModel
         * @instance
         */
        ZkModel.prototype.transform = null;

        /**
         * ZkModel mesh.
         * @member {Zko.ZkMesh} mesh
         * @memberof Zko.ZkModel
         * @instance
         */
        ZkModel.prototype.mesh = null;

        /**
         * ZkModel shaderProgram.
         * @member {Zko.ZkShaderProgram} shaderProgram
         * @memberof Zko.ZkModel
         * @instance
         */
        ZkModel.prototype.shaderProgram = null;

        /**
         * ZkModel material.
         * @member {ZkRefMaterial|null|undefined} material
         * @memberof Zko.ZkModel
         * @instance
         */
        ZkModel.prototype.material = null;

        /**
         * ZkModel skinning.
         * @member {Zko.ZkSkinning|null|undefined} skinning
         * @memberof Zko.ZkModel
         * @instance
         */
        ZkModel.prototype.skinning = null;

        /**
         * ZkModel skeleton.
         * @member {Zko.ZkRefSkeleton|null|undefined} skeleton
         * @memberof Zko.ZkModel
         * @instance
         */
        ZkModel.prototype.skeleton = null;

        /**
         * Creates a new ZkModel instance using the specified properties.
         * @function create
         * @memberof Zko.ZkModel
         * @static
         * @param {Zko.IZkModel=} [properties] Properties to set
         * @returns {Zko.ZkModel} ZkModel instance
         */
        ZkModel.create = function create(properties) {
            return new ZkModel(properties);
        };

        /**
         * Encodes the specified ZkModel message. Does not implicitly {@link Zko.ZkModel.verify|verify} messages.
         * @function encode
         * @memberof Zko.ZkModel
         * @static
         * @param {Zko.ZkModel} message ZkModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZkModel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            $root.Zko.ZkTransform.encode(message.transform, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            $root.Zko.ZkMesh.encode(message.mesh, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            $root.Zko.ZkShaderProgram.encode(message.shaderProgram, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.material != null && Object.hasOwnProperty.call(message, "material"))
                $root.ZkRefMaterial.encode(message.material, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.skinning != null && Object.hasOwnProperty.call(message, "skinning"))
                $root.Zko.ZkSkinning.encode(message.skinning, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.skeleton != null && Object.hasOwnProperty.call(message, "skeleton"))
                $root.Zko.ZkRefSkeleton.encode(message.skeleton, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ZkModel message from the specified reader or buffer.
         * @function decode
         * @memberof Zko.ZkModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zko.ZkModel} ZkModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZkModel.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zko.ZkModel();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.transform = $root.Zko.ZkTransform.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.mesh = $root.Zko.ZkMesh.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.shaderProgram = $root.Zko.ZkShaderProgram.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.material = $root.ZkRefMaterial.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.skinning = $root.Zko.ZkSkinning.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.skeleton = $root.Zko.ZkRefSkeleton.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("transform"))
                throw $util.ProtocolError("missing required 'transform'", { instance: message });
            if (!message.hasOwnProperty("mesh"))
                throw $util.ProtocolError("missing required 'mesh'", { instance: message });
            if (!message.hasOwnProperty("shaderProgram"))
                throw $util.ProtocolError("missing required 'shaderProgram'", { instance: message });
            return message;
        };

        /**
         * Verifies a ZkModel message.
         * @function verify
         * @memberof Zko.ZkModel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZkModel.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            {
                let error = $root.Zko.ZkTransform.verify(message.transform);
                if (error)
                    return "transform." + error;
            }
            {
                let error = $root.Zko.ZkMesh.verify(message.mesh);
                if (error)
                    return "mesh." + error;
            }
            {
                let error = $root.Zko.ZkShaderProgram.verify(message.shaderProgram);
                if (error)
                    return "shaderProgram." + error;
            }
            if (message.material != null && message.hasOwnProperty("material")) {
                let error = $root.ZkRefMaterial.verify(message.material);
                if (error)
                    return "material." + error;
            }
            if (message.skinning != null && message.hasOwnProperty("skinning")) {
                let error = $root.Zko.ZkSkinning.verify(message.skinning);
                if (error)
                    return "skinning." + error;
            }
            if (message.skeleton != null && message.hasOwnProperty("skeleton")) {
                let error = $root.Zko.ZkRefSkeleton.verify(message.skeleton);
                if (error)
                    return "skeleton." + error;
            }
            return null;
        };

        /**
         * Creates a ZkModel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zko.ZkModel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zko.ZkModel} ZkModel
         */
        ZkModel.fromObject = function fromObject(object) {
            if (object instanceof $root.Zko.ZkModel)
                return object;
            let message = new $root.Zko.ZkModel();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.transform != null) {
                if (typeof object.transform !== "object")
                    throw TypeError(".Zko.ZkModel.transform: object expected");
                message.transform = $root.Zko.ZkTransform.fromObject(object.transform);
            }
            if (object.mesh != null) {
                if (typeof object.mesh !== "object")
                    throw TypeError(".Zko.ZkModel.mesh: object expected");
                message.mesh = $root.Zko.ZkMesh.fromObject(object.mesh);
            }
            if (object.shaderProgram != null) {
                if (typeof object.shaderProgram !== "object")
                    throw TypeError(".Zko.ZkModel.shaderProgram: object expected");
                message.shaderProgram = $root.Zko.ZkShaderProgram.fromObject(object.shaderProgram);
            }
            if (object.material != null) {
                if (typeof object.material !== "object")
                    throw TypeError(".Zko.ZkModel.material: object expected");
                message.material = $root.ZkRefMaterial.fromObject(object.material);
            }
            if (object.skinning != null) {
                if (typeof object.skinning !== "object")
                    throw TypeError(".Zko.ZkModel.skinning: object expected");
                message.skinning = $root.Zko.ZkSkinning.fromObject(object.skinning);
            }
            if (object.skeleton != null) {
                if (typeof object.skeleton !== "object")
                    throw TypeError(".Zko.ZkModel.skeleton: object expected");
                message.skeleton = $root.Zko.ZkRefSkeleton.fromObject(object.skeleton);
            }
            return message;
        };

        /**
         * Creates a plain object from a ZkModel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zko.ZkModel
         * @static
         * @param {Zko.ZkModel} message ZkModel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZkModel.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.transform = null;
                object.mesh = null;
                object.shaderProgram = null;
                object.material = null;
                object.skinning = null;
                object.skeleton = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.transform != null && message.hasOwnProperty("transform"))
                object.transform = $root.Zko.ZkTransform.toObject(message.transform, options);
            if (message.mesh != null && message.hasOwnProperty("mesh"))
                object.mesh = $root.Zko.ZkMesh.toObject(message.mesh, options);
            if (message.shaderProgram != null && message.hasOwnProperty("shaderProgram"))
                object.shaderProgram = $root.Zko.ZkShaderProgram.toObject(message.shaderProgram, options);
            if (message.material != null && message.hasOwnProperty("material"))
                object.material = $root.ZkRefMaterial.toObject(message.material, options);
            if (message.skinning != null && message.hasOwnProperty("skinning"))
                object.skinning = $root.Zko.ZkSkinning.toObject(message.skinning, options);
            if (message.skeleton != null && message.hasOwnProperty("skeleton"))
                object.skeleton = $root.Zko.ZkRefSkeleton.toObject(message.skeleton, options);
            return object;
        };

        /**
         * Converts this ZkModel to JSON.
         * @function toJSON
         * @memberof Zko.ZkModel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZkModel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ZkModel
         * @function getTypeUrl
         * @memberof Zko.ZkModel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ZkModel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Zko.ZkModel";
        };

        return ZkModel;
    })();

    Zko.ZkMesh = (function() {

        /**
         * Properties of a ZkMesh.
         * @memberof Zko
         * @interface IZkMesh
         * @property {number} refId ZkMesh refId
         * @property {boolean} isReference ZkMesh isReference
         * @property {Array.<Zko.ZkBufferKey>|null} [bufferKeys] ZkMesh bufferKeys
         * @property {Array.<Zko.ZkRawBuffer>|null} [rawBuffers] ZkMesh rawBuffers
         */

        /**
         * Constructs a new ZkMesh.
         * @memberof Zko
         * @classdesc Mesh will provide:
         * A relationship between the BufferKey and its Buffers
         * @implements IZkMesh
         * @constructor
         * @param {Zko.IZkMesh=} [properties] Properties to set
         */
        function ZkMesh(properties) {
            this.bufferKeys = [];
            this.rawBuffers = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZkMesh refId.
         * @member {number} refId
         * @memberof Zko.ZkMesh
         * @instance
         */
        ZkMesh.prototype.refId = 0;

        /**
         * ZkMesh isReference.
         * @member {boolean} isReference
         * @memberof Zko.ZkMesh
         * @instance
         */
        ZkMesh.prototype.isReference = false;

        /**
         * ZkMesh bufferKeys.
         * @member {Array.<Zko.ZkBufferKey>} bufferKeys
         * @memberof Zko.ZkMesh
         * @instance
         */
        ZkMesh.prototype.bufferKeys = $util.emptyArray;

        /**
         * ZkMesh rawBuffers.
         * @member {Array.<Zko.ZkRawBuffer>} rawBuffers
         * @memberof Zko.ZkMesh
         * @instance
         */
        ZkMesh.prototype.rawBuffers = $util.emptyArray;

        /**
         * Creates a new ZkMesh instance using the specified properties.
         * @function create
         * @memberof Zko.ZkMesh
         * @static
         * @param {Zko.IZkMesh=} [properties] Properties to set
         * @returns {Zko.ZkMesh} ZkMesh instance
         */
        ZkMesh.create = function create(properties) {
            return new ZkMesh(properties);
        };

        /**
         * Encodes the specified ZkMesh message. Does not implicitly {@link Zko.ZkMesh.verify|verify} messages.
         * @function encode
         * @memberof Zko.ZkMesh
         * @static
         * @param {Zko.ZkMesh} message ZkMesh message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZkMesh.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.refId);
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isReference);
            if (message.bufferKeys != null && message.bufferKeys.length)
                for (let i = 0; i < message.bufferKeys.length; ++i)
                    $root.Zko.ZkBufferKey.encode(message.bufferKeys[i], writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
            if (message.rawBuffers != null && message.rawBuffers.length)
                for (let i = 0; i < message.rawBuffers.length; ++i)
                    $root.Zko.ZkRawBuffer.encode(message.rawBuffers[i], writer.uint32(/* id 102, wireType 2 =*/818).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ZkMesh message from the specified reader or buffer.
         * @function decode
         * @memberof Zko.ZkMesh
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zko.ZkMesh} ZkMesh
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZkMesh.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zko.ZkMesh();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.refId = reader.uint32();
                        break;
                    }
                case 2: {
                        message.isReference = reader.bool();
                        break;
                    }
                case 101: {
                        if (!(message.bufferKeys && message.bufferKeys.length))
                            message.bufferKeys = [];
                        message.bufferKeys.push($root.Zko.ZkBufferKey.decode(reader, reader.uint32()));
                        break;
                    }
                case 102: {
                        if (!(message.rawBuffers && message.rawBuffers.length))
                            message.rawBuffers = [];
                        message.rawBuffers.push($root.Zko.ZkRawBuffer.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("refId"))
                throw $util.ProtocolError("missing required 'refId'", { instance: message });
            if (!message.hasOwnProperty("isReference"))
                throw $util.ProtocolError("missing required 'isReference'", { instance: message });
            return message;
        };

        /**
         * Verifies a ZkMesh message.
         * @function verify
         * @memberof Zko.ZkMesh
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZkMesh.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.refId))
                return "refId: integer expected";
            if (typeof message.isReference !== "boolean")
                return "isReference: boolean expected";
            if (message.bufferKeys != null && message.hasOwnProperty("bufferKeys")) {
                if (!Array.isArray(message.bufferKeys))
                    return "bufferKeys: array expected";
                for (let i = 0; i < message.bufferKeys.length; ++i) {
                    let error = $root.Zko.ZkBufferKey.verify(message.bufferKeys[i]);
                    if (error)
                        return "bufferKeys." + error;
                }
            }
            if (message.rawBuffers != null && message.hasOwnProperty("rawBuffers")) {
                if (!Array.isArray(message.rawBuffers))
                    return "rawBuffers: array expected";
                for (let i = 0; i < message.rawBuffers.length; ++i) {
                    let error = $root.Zko.ZkRawBuffer.verify(message.rawBuffers[i]);
                    if (error)
                        return "rawBuffers." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ZkMesh message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zko.ZkMesh
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zko.ZkMesh} ZkMesh
         */
        ZkMesh.fromObject = function fromObject(object) {
            if (object instanceof $root.Zko.ZkMesh)
                return object;
            let message = new $root.Zko.ZkMesh();
            if (object.refId != null)
                message.refId = object.refId >>> 0;
            if (object.isReference != null)
                message.isReference = Boolean(object.isReference);
            if (object.bufferKeys) {
                if (!Array.isArray(object.bufferKeys))
                    throw TypeError(".Zko.ZkMesh.bufferKeys: array expected");
                message.bufferKeys = [];
                for (let i = 0; i < object.bufferKeys.length; ++i) {
                    if (typeof object.bufferKeys[i] !== "object")
                        throw TypeError(".Zko.ZkMesh.bufferKeys: object expected");
                    message.bufferKeys[i] = $root.Zko.ZkBufferKey.fromObject(object.bufferKeys[i]);
                }
            }
            if (object.rawBuffers) {
                if (!Array.isArray(object.rawBuffers))
                    throw TypeError(".Zko.ZkMesh.rawBuffers: array expected");
                message.rawBuffers = [];
                for (let i = 0; i < object.rawBuffers.length; ++i) {
                    if (typeof object.rawBuffers[i] !== "object")
                        throw TypeError(".Zko.ZkMesh.rawBuffers: object expected");
                    message.rawBuffers[i] = $root.Zko.ZkRawBuffer.fromObject(object.rawBuffers[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ZkMesh message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zko.ZkMesh
         * @static
         * @param {Zko.ZkMesh} message ZkMesh
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZkMesh.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.bufferKeys = [];
                object.rawBuffers = [];
            }
            if (options.defaults) {
                object.refId = 0;
                object.isReference = false;
            }
            if (message.refId != null && message.hasOwnProperty("refId"))
                object.refId = message.refId;
            if (message.isReference != null && message.hasOwnProperty("isReference"))
                object.isReference = message.isReference;
            if (message.bufferKeys && message.bufferKeys.length) {
                object.bufferKeys = [];
                for (let j = 0; j < message.bufferKeys.length; ++j)
                    object.bufferKeys[j] = $root.Zko.ZkBufferKey.toObject(message.bufferKeys[j], options);
            }
            if (message.rawBuffers && message.rawBuffers.length) {
                object.rawBuffers = [];
                for (let j = 0; j < message.rawBuffers.length; ++j)
                    object.rawBuffers[j] = $root.Zko.ZkRawBuffer.toObject(message.rawBuffers[j], options);
            }
            return object;
        };

        /**
         * Converts this ZkMesh to JSON.
         * @function toJSON
         * @memberof Zko.ZkMesh
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZkMesh.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ZkMesh
         * @function getTypeUrl
         * @memberof Zko.ZkMesh
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ZkMesh.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Zko.ZkMesh";
        };

        return ZkMesh;
    })();

    Zko.ZkBufferKey = (function() {

        /**
         * Properties of a ZkBufferKey.
         * @memberof Zko
         * @interface IZkBufferKey
         * @property {number} id ID for this BufferKey.
         * Might differ from BufferId
         * @property {Zko.ZkDataType} dataType Type of data stored
         * @property {string} name ZkBufferKey name
         * @property {number} size How many elements are stored per data unit.
         * Example: a Vec3 will have size equals to 3 in the same way a Scalar will be 1
         * @property {number} count How many elements of this type are stored.
         * Example: If we store 15 Vec3 elements in the data array the count will have a value of 15.
         * @property {boolean} normalized ZkBufferKey normalized
         * @property {number} offset ZkBufferKey offset
         * @property {number} stride If the data is tightly represented within the array how many elements it requires to be jumped to the next one
         * Example: We store a Vec3 postion and a Vec3 normal in the very same array, the stride will be 6
         * @property {boolean} isIndexBuffer ZkBufferKey isIndexBuffer
         * @property {number} bufferId Refers to the RawBuffer Id
         */

        /**
         * Constructs a new ZkBufferKey.
         * @memberof Zko
         * @classdesc BufferKeys are the one in charge to provide specific data about how the information is being stored inside
         * the RawBuffer data arrays
         * @implements IZkBufferKey
         * @constructor
         * @param {Zko.IZkBufferKey=} [properties] Properties to set
         */
        function ZkBufferKey(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ID for this BufferKey.
         * Might differ from BufferId
         * @member {number} id
         * @memberof Zko.ZkBufferKey
         * @instance
         */
        ZkBufferKey.prototype.id = 0;

        /**
         * Type of data stored
         * @member {Zko.ZkDataType} dataType
         * @memberof Zko.ZkBufferKey
         * @instance
         */
        ZkBufferKey.prototype.dataType = null;

        /**
         * ZkBufferKey name.
         * @member {string} name
         * @memberof Zko.ZkBufferKey
         * @instance
         */
        ZkBufferKey.prototype.name = "";

        /**
         * How many elements are stored per data unit.
         * Example: a Vec3 will have size equals to 3 in the same way a Scalar will be 1
         * @member {number} size
         * @memberof Zko.ZkBufferKey
         * @instance
         */
        ZkBufferKey.prototype.size = 0;

        /**
         * How many elements of this type are stored.
         * Example: If we store 15 Vec3 elements in the data array the count will have a value of 15.
         * @member {number} count
         * @memberof Zko.ZkBufferKey
         * @instance
         */
        ZkBufferKey.prototype.count = 0;

        /**
         * ZkBufferKey normalized.
         * @member {boolean} normalized
         * @memberof Zko.ZkBufferKey
         * @instance
         */
        ZkBufferKey.prototype.normalized = false;

        /**
         * ZkBufferKey offset.
         * @member {number} offset
         * @memberof Zko.ZkBufferKey
         * @instance
         */
        ZkBufferKey.prototype.offset = 0;

        /**
         * If the data is tightly represented within the array how many elements it requires to be jumped to the next one
         * Example: We store a Vec3 postion and a Vec3 normal in the very same array, the stride will be 6
         * @member {number} stride
         * @memberof Zko.ZkBufferKey
         * @instance
         */
        ZkBufferKey.prototype.stride = 0;

        /**
         * ZkBufferKey isIndexBuffer.
         * @member {boolean} isIndexBuffer
         * @memberof Zko.ZkBufferKey
         * @instance
         */
        ZkBufferKey.prototype.isIndexBuffer = false;

        /**
         * Refers to the RawBuffer Id
         * @member {number} bufferId
         * @memberof Zko.ZkBufferKey
         * @instance
         */
        ZkBufferKey.prototype.bufferId = 0;

        /**
         * Creates a new ZkBufferKey instance using the specified properties.
         * @function create
         * @memberof Zko.ZkBufferKey
         * @static
         * @param {Zko.IZkBufferKey=} [properties] Properties to set
         * @returns {Zko.ZkBufferKey} ZkBufferKey instance
         */
        ZkBufferKey.create = function create(properties) {
            return new ZkBufferKey(properties);
        };

        /**
         * Encodes the specified ZkBufferKey message. Does not implicitly {@link Zko.ZkBufferKey.verify|verify} messages.
         * @function encode
         * @memberof Zko.ZkBufferKey
         * @static
         * @param {Zko.ZkBufferKey} message ZkBufferKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZkBufferKey.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            $root.Zko.ZkDataType.encode(message.dataType, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.size);
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.count);
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.normalized);
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.offset);
            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.stride);
            writer.uint32(/* id 9, wireType 0 =*/72).bool(message.isIndexBuffer);
            writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.bufferId);
            return writer;
        };

        /**
         * Decodes a ZkBufferKey message from the specified reader or buffer.
         * @function decode
         * @memberof Zko.ZkBufferKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zko.ZkBufferKey} ZkBufferKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZkBufferKey.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zko.ZkBufferKey();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.dataType = $root.Zko.ZkDataType.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.name = reader.string();
                        break;
                    }
                case 4: {
                        message.size = reader.uint32();
                        break;
                    }
                case 5: {
                        message.count = reader.uint32();
                        break;
                    }
                case 6: {
                        message.normalized = reader.bool();
                        break;
                    }
                case 7: {
                        message.offset = reader.uint32();
                        break;
                    }
                case 8: {
                        message.stride = reader.uint32();
                        break;
                    }
                case 9: {
                        message.isIndexBuffer = reader.bool();
                        break;
                    }
                case 10: {
                        message.bufferId = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("dataType"))
                throw $util.ProtocolError("missing required 'dataType'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("size"))
                throw $util.ProtocolError("missing required 'size'", { instance: message });
            if (!message.hasOwnProperty("count"))
                throw $util.ProtocolError("missing required 'count'", { instance: message });
            if (!message.hasOwnProperty("normalized"))
                throw $util.ProtocolError("missing required 'normalized'", { instance: message });
            if (!message.hasOwnProperty("offset"))
                throw $util.ProtocolError("missing required 'offset'", { instance: message });
            if (!message.hasOwnProperty("stride"))
                throw $util.ProtocolError("missing required 'stride'", { instance: message });
            if (!message.hasOwnProperty("isIndexBuffer"))
                throw $util.ProtocolError("missing required 'isIndexBuffer'", { instance: message });
            if (!message.hasOwnProperty("bufferId"))
                throw $util.ProtocolError("missing required 'bufferId'", { instance: message });
            return message;
        };

        /**
         * Verifies a ZkBufferKey message.
         * @function verify
         * @memberof Zko.ZkBufferKey
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZkBufferKey.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            {
                let error = $root.Zko.ZkDataType.verify(message.dataType);
                if (error)
                    return "dataType." + error;
            }
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isInteger(message.size))
                return "size: integer expected";
            if (!$util.isInteger(message.count))
                return "count: integer expected";
            if (typeof message.normalized !== "boolean")
                return "normalized: boolean expected";
            if (!$util.isInteger(message.offset))
                return "offset: integer expected";
            if (!$util.isInteger(message.stride))
                return "stride: integer expected";
            if (typeof message.isIndexBuffer !== "boolean")
                return "isIndexBuffer: boolean expected";
            if (!$util.isInteger(message.bufferId))
                return "bufferId: integer expected";
            return null;
        };

        /**
         * Creates a ZkBufferKey message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zko.ZkBufferKey
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zko.ZkBufferKey} ZkBufferKey
         */
        ZkBufferKey.fromObject = function fromObject(object) {
            if (object instanceof $root.Zko.ZkBufferKey)
                return object;
            let message = new $root.Zko.ZkBufferKey();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.dataType != null) {
                if (typeof object.dataType !== "object")
                    throw TypeError(".Zko.ZkBufferKey.dataType: object expected");
                message.dataType = $root.Zko.ZkDataType.fromObject(object.dataType);
            }
            if (object.name != null)
                message.name = String(object.name);
            if (object.size != null)
                message.size = object.size >>> 0;
            if (object.count != null)
                message.count = object.count >>> 0;
            if (object.normalized != null)
                message.normalized = Boolean(object.normalized);
            if (object.offset != null)
                message.offset = object.offset >>> 0;
            if (object.stride != null)
                message.stride = object.stride >>> 0;
            if (object.isIndexBuffer != null)
                message.isIndexBuffer = Boolean(object.isIndexBuffer);
            if (object.bufferId != null)
                message.bufferId = object.bufferId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a ZkBufferKey message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zko.ZkBufferKey
         * @static
         * @param {Zko.ZkBufferKey} message ZkBufferKey
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZkBufferKey.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.dataType = null;
                object.name = "";
                object.size = 0;
                object.count = 0;
                object.normalized = false;
                object.offset = 0;
                object.stride = 0;
                object.isIndexBuffer = false;
                object.bufferId = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.dataType != null && message.hasOwnProperty("dataType"))
                object.dataType = $root.Zko.ZkDataType.toObject(message.dataType, options);
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.size != null && message.hasOwnProperty("size"))
                object.size = message.size;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            if (message.normalized != null && message.hasOwnProperty("normalized"))
                object.normalized = message.normalized;
            if (message.offset != null && message.hasOwnProperty("offset"))
                object.offset = message.offset;
            if (message.stride != null && message.hasOwnProperty("stride"))
                object.stride = message.stride;
            if (message.isIndexBuffer != null && message.hasOwnProperty("isIndexBuffer"))
                object.isIndexBuffer = message.isIndexBuffer;
            if (message.bufferId != null && message.hasOwnProperty("bufferId"))
                object.bufferId = message.bufferId;
            return object;
        };

        /**
         * Converts this ZkBufferKey to JSON.
         * @function toJSON
         * @memberof Zko.ZkBufferKey
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZkBufferKey.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ZkBufferKey
         * @function getTypeUrl
         * @memberof Zko.ZkBufferKey
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ZkBufferKey.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Zko.ZkBufferKey";
        };

        return ZkBufferKey;
    })();

    Zko.ZkRawBuffer = (function() {

        /**
         * Properties of a ZkRawBuffer.
         * @memberof Zko
         * @interface IZkRawBuffer
         * @property {number} id ZkRawBuffer id
         * @property {Uint8Array} dataArray ZkRawBuffer dataArray
         */

        /**
         * Constructs a new ZkRawBuffer.
         * @memberof Zko
         * @classdesc Represents a ZkRawBuffer.
         * @implements IZkRawBuffer
         * @constructor
         * @param {Zko.IZkRawBuffer=} [properties] Properties to set
         */
        function ZkRawBuffer(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZkRawBuffer id.
         * @member {number} id
         * @memberof Zko.ZkRawBuffer
         * @instance
         */
        ZkRawBuffer.prototype.id = 0;

        /**
         * ZkRawBuffer dataArray.
         * @member {Uint8Array} dataArray
         * @memberof Zko.ZkRawBuffer
         * @instance
         */
        ZkRawBuffer.prototype.dataArray = $util.newBuffer([]);

        /**
         * Creates a new ZkRawBuffer instance using the specified properties.
         * @function create
         * @memberof Zko.ZkRawBuffer
         * @static
         * @param {Zko.IZkRawBuffer=} [properties] Properties to set
         * @returns {Zko.ZkRawBuffer} ZkRawBuffer instance
         */
        ZkRawBuffer.create = function create(properties) {
            return new ZkRawBuffer(properties);
        };

        /**
         * Encodes the specified ZkRawBuffer message. Does not implicitly {@link Zko.ZkRawBuffer.verify|verify} messages.
         * @function encode
         * @memberof Zko.ZkRawBuffer
         * @static
         * @param {Zko.ZkRawBuffer} message ZkRawBuffer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZkRawBuffer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.dataArray);
            return writer;
        };

        /**
         * Decodes a ZkRawBuffer message from the specified reader or buffer.
         * @function decode
         * @memberof Zko.ZkRawBuffer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zko.ZkRawBuffer} ZkRawBuffer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZkRawBuffer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zko.ZkRawBuffer();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.dataArray = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("dataArray"))
                throw $util.ProtocolError("missing required 'dataArray'", { instance: message });
            return message;
        };

        /**
         * Verifies a ZkRawBuffer message.
         * @function verify
         * @memberof Zko.ZkRawBuffer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZkRawBuffer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!(message.dataArray && typeof message.dataArray.length === "number" || $util.isString(message.dataArray)))
                return "dataArray: buffer expected";
            return null;
        };

        /**
         * Creates a ZkRawBuffer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zko.ZkRawBuffer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zko.ZkRawBuffer} ZkRawBuffer
         */
        ZkRawBuffer.fromObject = function fromObject(object) {
            if (object instanceof $root.Zko.ZkRawBuffer)
                return object;
            let message = new $root.Zko.ZkRawBuffer();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.dataArray != null)
                if (typeof object.dataArray === "string")
                    $util.base64.decode(object.dataArray, message.dataArray = $util.newBuffer($util.base64.length(object.dataArray)), 0);
                else if (object.dataArray.length >= 0)
                    message.dataArray = object.dataArray;
            return message;
        };

        /**
         * Creates a plain object from a ZkRawBuffer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zko.ZkRawBuffer
         * @static
         * @param {Zko.ZkRawBuffer} message ZkRawBuffer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZkRawBuffer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                if (options.bytes === String)
                    object.dataArray = "";
                else {
                    object.dataArray = [];
                    if (options.bytes !== Array)
                        object.dataArray = $util.newBuffer(object.dataArray);
                }
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.dataArray != null && message.hasOwnProperty("dataArray"))
                object.dataArray = options.bytes === String ? $util.base64.encode(message.dataArray, 0, message.dataArray.length) : options.bytes === Array ? Array.prototype.slice.call(message.dataArray) : message.dataArray;
            return object;
        };

        /**
         * Converts this ZkRawBuffer to JSON.
         * @function toJSON
         * @memberof Zko.ZkRawBuffer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZkRawBuffer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ZkRawBuffer
         * @function getTypeUrl
         * @memberof Zko.ZkRawBuffer
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ZkRawBuffer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Zko.ZkRawBuffer";
        };

        return ZkRawBuffer;
    })();

    Zko.ZkShaderProgram = (function() {

        /**
         * Properties of a ZkShaderProgram.
         * @memberof Zko
         * @interface IZkShaderProgram
         * @property {number} refId ZkShaderProgram refId
         * @property {Object.<string,Zko.ZkShaderAttribute>|null} [attributes] ZkShaderProgram attributes
         * @property {Object.<string,Zko.ZkShaderUniform>|null} [uniforms] ZkShaderProgram uniforms
         */

        /**
         * Constructs a new ZkShaderProgram.
         * @memberof Zko
         * @classdesc Represents a ZkShaderProgram.
         * @implements IZkShaderProgram
         * @constructor
         * @param {Zko.IZkShaderProgram=} [properties] Properties to set
         */
        function ZkShaderProgram(properties) {
            this.attributes = {};
            this.uniforms = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZkShaderProgram refId.
         * @member {number} refId
         * @memberof Zko.ZkShaderProgram
         * @instance
         */
        ZkShaderProgram.prototype.refId = 0;

        /**
         * ZkShaderProgram attributes.
         * @member {Object.<string,Zko.ZkShaderAttribute>} attributes
         * @memberof Zko.ZkShaderProgram
         * @instance
         */
        ZkShaderProgram.prototype.attributes = $util.emptyObject;

        /**
         * ZkShaderProgram uniforms.
         * @member {Object.<string,Zko.ZkShaderUniform>} uniforms
         * @memberof Zko.ZkShaderProgram
         * @instance
         */
        ZkShaderProgram.prototype.uniforms = $util.emptyObject;

        /**
         * Creates a new ZkShaderProgram instance using the specified properties.
         * @function create
         * @memberof Zko.ZkShaderProgram
         * @static
         * @param {Zko.IZkShaderProgram=} [properties] Properties to set
         * @returns {Zko.ZkShaderProgram} ZkShaderProgram instance
         */
        ZkShaderProgram.create = function create(properties) {
            return new ZkShaderProgram(properties);
        };

        /**
         * Encodes the specified ZkShaderProgram message. Does not implicitly {@link Zko.ZkShaderProgram.verify|verify} messages.
         * @function encode
         * @memberof Zko.ZkShaderProgram
         * @static
         * @param {Zko.ZkShaderProgram} message ZkShaderProgram message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZkShaderProgram.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.attributes != null && Object.hasOwnProperty.call(message, "attributes"))
                for (let keys = Object.keys(message.attributes), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.Zko.ZkShaderAttribute.encode(message.attributes[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.uniforms != null && Object.hasOwnProperty.call(message, "uniforms"))
                for (let keys = Object.keys(message.uniforms), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.Zko.ZkShaderUniform.encode(message.uniforms[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            writer.uint32(/* id 500, wireType 0 =*/4000).uint32(message.refId);
            return writer;
        };

        /**
         * Decodes a ZkShaderProgram message from the specified reader or buffer.
         * @function decode
         * @memberof Zko.ZkShaderProgram
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zko.ZkShaderProgram} ZkShaderProgram
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZkShaderProgram.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zko.ZkShaderProgram(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 500: {
                        message.refId = reader.uint32();
                        break;
                    }
                case 3: {
                        if (message.attributes === $util.emptyObject)
                            message.attributes = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = null;
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = $root.Zko.ZkShaderAttribute.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.attributes[key] = value;
                        break;
                    }
                case 4: {
                        if (message.uniforms === $util.emptyObject)
                            message.uniforms = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = null;
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = $root.Zko.ZkShaderUniform.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.uniforms[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("refId"))
                throw $util.ProtocolError("missing required 'refId'", { instance: message });
            return message;
        };

        /**
         * Verifies a ZkShaderProgram message.
         * @function verify
         * @memberof Zko.ZkShaderProgram
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZkShaderProgram.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.refId))
                return "refId: integer expected";
            if (message.attributes != null && message.hasOwnProperty("attributes")) {
                if (!$util.isObject(message.attributes))
                    return "attributes: object expected";
                let key = Object.keys(message.attributes);
                for (let i = 0; i < key.length; ++i) {
                    let error = $root.Zko.ZkShaderAttribute.verify(message.attributes[key[i]]);
                    if (error)
                        return "attributes." + error;
                }
            }
            if (message.uniforms != null && message.hasOwnProperty("uniforms")) {
                if (!$util.isObject(message.uniforms))
                    return "uniforms: object expected";
                let key = Object.keys(message.uniforms);
                for (let i = 0; i < key.length; ++i) {
                    let error = $root.Zko.ZkShaderUniform.verify(message.uniforms[key[i]]);
                    if (error)
                        return "uniforms." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ZkShaderProgram message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zko.ZkShaderProgram
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zko.ZkShaderProgram} ZkShaderProgram
         */
        ZkShaderProgram.fromObject = function fromObject(object) {
            if (object instanceof $root.Zko.ZkShaderProgram)
                return object;
            let message = new $root.Zko.ZkShaderProgram();
            if (object.refId != null)
                message.refId = object.refId >>> 0;
            if (object.attributes) {
                if (typeof object.attributes !== "object")
                    throw TypeError(".Zko.ZkShaderProgram.attributes: object expected");
                message.attributes = {};
                for (let keys = Object.keys(object.attributes), i = 0; i < keys.length; ++i) {
                    if (typeof object.attributes[keys[i]] !== "object")
                        throw TypeError(".Zko.ZkShaderProgram.attributes: object expected");
                    message.attributes[keys[i]] = $root.Zko.ZkShaderAttribute.fromObject(object.attributes[keys[i]]);
                }
            }
            if (object.uniforms) {
                if (typeof object.uniforms !== "object")
                    throw TypeError(".Zko.ZkShaderProgram.uniforms: object expected");
                message.uniforms = {};
                for (let keys = Object.keys(object.uniforms), i = 0; i < keys.length; ++i) {
                    if (typeof object.uniforms[keys[i]] !== "object")
                        throw TypeError(".Zko.ZkShaderProgram.uniforms: object expected");
                    message.uniforms[keys[i]] = $root.Zko.ZkShaderUniform.fromObject(object.uniforms[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ZkShaderProgram message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zko.ZkShaderProgram
         * @static
         * @param {Zko.ZkShaderProgram} message ZkShaderProgram
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZkShaderProgram.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults) {
                object.attributes = {};
                object.uniforms = {};
            }
            if (options.defaults)
                object.refId = 0;
            let keys2;
            if (message.attributes && (keys2 = Object.keys(message.attributes)).length) {
                object.attributes = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.attributes[keys2[j]] = $root.Zko.ZkShaderAttribute.toObject(message.attributes[keys2[j]], options);
            }
            if (message.uniforms && (keys2 = Object.keys(message.uniforms)).length) {
                object.uniforms = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.uniforms[keys2[j]] = $root.Zko.ZkShaderUniform.toObject(message.uniforms[keys2[j]], options);
            }
            if (message.refId != null && message.hasOwnProperty("refId"))
                object.refId = message.refId;
            return object;
        };

        /**
         * Converts this ZkShaderProgram to JSON.
         * @function toJSON
         * @memberof Zko.ZkShaderProgram
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZkShaderProgram.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ZkShaderProgram
         * @function getTypeUrl
         * @memberof Zko.ZkShaderProgram
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ZkShaderProgram.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Zko.ZkShaderProgram";
        };

        return ZkShaderProgram;
    })();

    Zko.ZkShaderAttribute = (function() {

        /**
         * Properties of a ZkShaderAttribute.
         * @memberof Zko
         * @interface IZkShaderAttribute
         * @property {number} id ZkShaderAttribute id
         * @property {string} attributeName ZkShaderAttribute attributeName
         */

        /**
         * Constructs a new ZkShaderAttribute.
         * @memberof Zko
         * @classdesc Represents a ZkShaderAttribute.
         * @implements IZkShaderAttribute
         * @constructor
         * @param {Zko.IZkShaderAttribute=} [properties] Properties to set
         */
        function ZkShaderAttribute(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZkShaderAttribute id.
         * @member {number} id
         * @memberof Zko.ZkShaderAttribute
         * @instance
         */
        ZkShaderAttribute.prototype.id = 0;

        /**
         * ZkShaderAttribute attributeName.
         * @member {string} attributeName
         * @memberof Zko.ZkShaderAttribute
         * @instance
         */
        ZkShaderAttribute.prototype.attributeName = "";

        /**
         * Creates a new ZkShaderAttribute instance using the specified properties.
         * @function create
         * @memberof Zko.ZkShaderAttribute
         * @static
         * @param {Zko.IZkShaderAttribute=} [properties] Properties to set
         * @returns {Zko.ZkShaderAttribute} ZkShaderAttribute instance
         */
        ZkShaderAttribute.create = function create(properties) {
            return new ZkShaderAttribute(properties);
        };

        /**
         * Encodes the specified ZkShaderAttribute message. Does not implicitly {@link Zko.ZkShaderAttribute.verify|verify} messages.
         * @function encode
         * @memberof Zko.ZkShaderAttribute
         * @static
         * @param {Zko.ZkShaderAttribute} message ZkShaderAttribute message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZkShaderAttribute.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.attributeName);
            return writer;
        };

        /**
         * Decodes a ZkShaderAttribute message from the specified reader or buffer.
         * @function decode
         * @memberof Zko.ZkShaderAttribute
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zko.ZkShaderAttribute} ZkShaderAttribute
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZkShaderAttribute.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zko.ZkShaderAttribute();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.attributeName = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("attributeName"))
                throw $util.ProtocolError("missing required 'attributeName'", { instance: message });
            return message;
        };

        /**
         * Verifies a ZkShaderAttribute message.
         * @function verify
         * @memberof Zko.ZkShaderAttribute
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZkShaderAttribute.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isString(message.attributeName))
                return "attributeName: string expected";
            return null;
        };

        /**
         * Creates a ZkShaderAttribute message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zko.ZkShaderAttribute
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zko.ZkShaderAttribute} ZkShaderAttribute
         */
        ZkShaderAttribute.fromObject = function fromObject(object) {
            if (object instanceof $root.Zko.ZkShaderAttribute)
                return object;
            let message = new $root.Zko.ZkShaderAttribute();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.attributeName != null)
                message.attributeName = String(object.attributeName);
            return message;
        };

        /**
         * Creates a plain object from a ZkShaderAttribute message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zko.ZkShaderAttribute
         * @static
         * @param {Zko.ZkShaderAttribute} message ZkShaderAttribute
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZkShaderAttribute.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.attributeName = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.attributeName != null && message.hasOwnProperty("attributeName"))
                object.attributeName = message.attributeName;
            return object;
        };

        /**
         * Converts this ZkShaderAttribute to JSON.
         * @function toJSON
         * @memberof Zko.ZkShaderAttribute
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZkShaderAttribute.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ZkShaderAttribute
         * @function getTypeUrl
         * @memberof Zko.ZkShaderAttribute
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ZkShaderAttribute.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Zko.ZkShaderAttribute";
        };

        return ZkShaderAttribute;
    })();

    Zko.ZkShaderUniform = (function() {

        /**
         * Properties of a ZkShaderUniform.
         * @memberof Zko
         * @interface IZkShaderUniform
         * @property {string} uniformName ZkShaderUniform uniformName
         * @property {number} count ZkShaderUniform count
         * @property {Zko.ZkDataType} dataType ZkShaderUniform dataType
         * @property {number} idx ZkShaderUniform idx
         */

        /**
         * Constructs a new ZkShaderUniform.
         * @memberof Zko
         * @classdesc Represents a ZkShaderUniform.
         * @implements IZkShaderUniform
         * @constructor
         * @param {Zko.IZkShaderUniform=} [properties] Properties to set
         */
        function ZkShaderUniform(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZkShaderUniform uniformName.
         * @member {string} uniformName
         * @memberof Zko.ZkShaderUniform
         * @instance
         */
        ZkShaderUniform.prototype.uniformName = "";

        /**
         * ZkShaderUniform count.
         * @member {number} count
         * @memberof Zko.ZkShaderUniform
         * @instance
         */
        ZkShaderUniform.prototype.count = 0;

        /**
         * ZkShaderUniform dataType.
         * @member {Zko.ZkDataType} dataType
         * @memberof Zko.ZkShaderUniform
         * @instance
         */
        ZkShaderUniform.prototype.dataType = null;

        /**
         * ZkShaderUniform idx.
         * @member {number} idx
         * @memberof Zko.ZkShaderUniform
         * @instance
         */
        ZkShaderUniform.prototype.idx = 0;

        /**
         * Creates a new ZkShaderUniform instance using the specified properties.
         * @function create
         * @memberof Zko.ZkShaderUniform
         * @static
         * @param {Zko.IZkShaderUniform=} [properties] Properties to set
         * @returns {Zko.ZkShaderUniform} ZkShaderUniform instance
         */
        ZkShaderUniform.create = function create(properties) {
            return new ZkShaderUniform(properties);
        };

        /**
         * Encodes the specified ZkShaderUniform message. Does not implicitly {@link Zko.ZkShaderUniform.verify|verify} messages.
         * @function encode
         * @memberof Zko.ZkShaderUniform
         * @static
         * @param {Zko.ZkShaderUniform} message ZkShaderUniform message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZkShaderUniform.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uniformName);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.count);
            $root.Zko.ZkDataType.encode(message.dataType, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.idx);
            return writer;
        };

        /**
         * Decodes a ZkShaderUniform message from the specified reader or buffer.
         * @function decode
         * @memberof Zko.ZkShaderUniform
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zko.ZkShaderUniform} ZkShaderUniform
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZkShaderUniform.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zko.ZkShaderUniform();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.uniformName = reader.string();
                        break;
                    }
                case 2: {
                        message.count = reader.uint32();
                        break;
                    }
                case 3: {
                        message.dataType = $root.Zko.ZkDataType.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.idx = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("uniformName"))
                throw $util.ProtocolError("missing required 'uniformName'", { instance: message });
            if (!message.hasOwnProperty("count"))
                throw $util.ProtocolError("missing required 'count'", { instance: message });
            if (!message.hasOwnProperty("dataType"))
                throw $util.ProtocolError("missing required 'dataType'", { instance: message });
            if (!message.hasOwnProperty("idx"))
                throw $util.ProtocolError("missing required 'idx'", { instance: message });
            return message;
        };

        /**
         * Verifies a ZkShaderUniform message.
         * @function verify
         * @memberof Zko.ZkShaderUniform
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZkShaderUniform.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.uniformName))
                return "uniformName: string expected";
            if (!$util.isInteger(message.count))
                return "count: integer expected";
            {
                let error = $root.Zko.ZkDataType.verify(message.dataType);
                if (error)
                    return "dataType." + error;
            }
            if (!$util.isInteger(message.idx))
                return "idx: integer expected";
            return null;
        };

        /**
         * Creates a ZkShaderUniform message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zko.ZkShaderUniform
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zko.ZkShaderUniform} ZkShaderUniform
         */
        ZkShaderUniform.fromObject = function fromObject(object) {
            if (object instanceof $root.Zko.ZkShaderUniform)
                return object;
            let message = new $root.Zko.ZkShaderUniform();
            if (object.uniformName != null)
                message.uniformName = String(object.uniformName);
            if (object.count != null)
                message.count = object.count >>> 0;
            if (object.dataType != null) {
                if (typeof object.dataType !== "object")
                    throw TypeError(".Zko.ZkShaderUniform.dataType: object expected");
                message.dataType = $root.Zko.ZkDataType.fromObject(object.dataType);
            }
            if (object.idx != null)
                message.idx = object.idx >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a ZkShaderUniform message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zko.ZkShaderUniform
         * @static
         * @param {Zko.ZkShaderUniform} message ZkShaderUniform
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZkShaderUniform.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.uniformName = "";
                object.count = 0;
                object.dataType = null;
                object.idx = 0;
            }
            if (message.uniformName != null && message.hasOwnProperty("uniformName"))
                object.uniformName = message.uniformName;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            if (message.dataType != null && message.hasOwnProperty("dataType"))
                object.dataType = $root.Zko.ZkDataType.toObject(message.dataType, options);
            if (message.idx != null && message.hasOwnProperty("idx"))
                object.idx = message.idx;
            return object;
        };

        /**
         * Converts this ZkShaderUniform to JSON.
         * @function toJSON
         * @memberof Zko.ZkShaderUniform
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZkShaderUniform.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ZkShaderUniform
         * @function getTypeUrl
         * @memberof Zko.ZkShaderUniform
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ZkShaderUniform.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Zko.ZkShaderUniform";
        };

        return ZkShaderUniform;
    })();

    Zko.ZkRefSkeleton = (function() {

        /**
         * Properties of a ZkRefSkeleton.
         * @memberof Zko
         * @interface IZkRefSkeleton
         * @property {number} refId ZkRefSkeleton refId
         * @property {boolean} isReference ZkRefSkeleton isReference
         * @property {Zko.ZkSkeleton|null} [data] ZkRefSkeleton data
         */

        /**
         * Constructs a new ZkRefSkeleton.
         * @memberof Zko
         * @classdesc Represents a ZkRefSkeleton.
         * @implements IZkRefSkeleton
         * @constructor
         * @param {Zko.IZkRefSkeleton=} [properties] Properties to set
         */
        function ZkRefSkeleton(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZkRefSkeleton refId.
         * @member {number} refId
         * @memberof Zko.ZkRefSkeleton
         * @instance
         */
        ZkRefSkeleton.prototype.refId = 0;

        /**
         * ZkRefSkeleton isReference.
         * @member {boolean} isReference
         * @memberof Zko.ZkRefSkeleton
         * @instance
         */
        ZkRefSkeleton.prototype.isReference = false;

        /**
         * ZkRefSkeleton data.
         * @member {Zko.ZkSkeleton|null|undefined} data
         * @memberof Zko.ZkRefSkeleton
         * @instance
         */
        ZkRefSkeleton.prototype.data = null;

        /**
         * Creates a new ZkRefSkeleton instance using the specified properties.
         * @function create
         * @memberof Zko.ZkRefSkeleton
         * @static
         * @param {Zko.IZkRefSkeleton=} [properties] Properties to set
         * @returns {Zko.ZkRefSkeleton} ZkRefSkeleton instance
         */
        ZkRefSkeleton.create = function create(properties) {
            return new ZkRefSkeleton(properties);
        };

        /**
         * Encodes the specified ZkRefSkeleton message. Does not implicitly {@link Zko.ZkRefSkeleton.verify|verify} messages.
         * @function encode
         * @memberof Zko.ZkRefSkeleton
         * @static
         * @param {Zko.ZkRefSkeleton} message ZkRefSkeleton message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZkRefSkeleton.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.refId);
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isReference);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                $root.Zko.ZkSkeleton.encode(message.data, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ZkRefSkeleton message from the specified reader or buffer.
         * @function decode
         * @memberof Zko.ZkRefSkeleton
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zko.ZkRefSkeleton} ZkRefSkeleton
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZkRefSkeleton.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zko.ZkRefSkeleton();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.refId = reader.int32();
                        break;
                    }
                case 2: {
                        message.isReference = reader.bool();
                        break;
                    }
                case 100: {
                        message.data = $root.Zko.ZkSkeleton.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("refId"))
                throw $util.ProtocolError("missing required 'refId'", { instance: message });
            if (!message.hasOwnProperty("isReference"))
                throw $util.ProtocolError("missing required 'isReference'", { instance: message });
            return message;
        };

        /**
         * Verifies a ZkRefSkeleton message.
         * @function verify
         * @memberof Zko.ZkRefSkeleton
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZkRefSkeleton.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.refId))
                return "refId: integer expected";
            if (typeof message.isReference !== "boolean")
                return "isReference: boolean expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                let error = $root.Zko.ZkSkeleton.verify(message.data);
                if (error)
                    return "data." + error;
            }
            return null;
        };

        /**
         * Creates a ZkRefSkeleton message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zko.ZkRefSkeleton
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zko.ZkRefSkeleton} ZkRefSkeleton
         */
        ZkRefSkeleton.fromObject = function fromObject(object) {
            if (object instanceof $root.Zko.ZkRefSkeleton)
                return object;
            let message = new $root.Zko.ZkRefSkeleton();
            if (object.refId != null)
                message.refId = object.refId | 0;
            if (object.isReference != null)
                message.isReference = Boolean(object.isReference);
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".Zko.ZkRefSkeleton.data: object expected");
                message.data = $root.Zko.ZkSkeleton.fromObject(object.data);
            }
            return message;
        };

        /**
         * Creates a plain object from a ZkRefSkeleton message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zko.ZkRefSkeleton
         * @static
         * @param {Zko.ZkRefSkeleton} message ZkRefSkeleton
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZkRefSkeleton.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.refId = 0;
                object.isReference = false;
                object.data = null;
            }
            if (message.refId != null && message.hasOwnProperty("refId"))
                object.refId = message.refId;
            if (message.isReference != null && message.hasOwnProperty("isReference"))
                object.isReference = message.isReference;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = $root.Zko.ZkSkeleton.toObject(message.data, options);
            return object;
        };

        /**
         * Converts this ZkRefSkeleton to JSON.
         * @function toJSON
         * @memberof Zko.ZkRefSkeleton
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZkRefSkeleton.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ZkRefSkeleton
         * @function getTypeUrl
         * @memberof Zko.ZkRefSkeleton
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ZkRefSkeleton.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Zko.ZkRefSkeleton";
        };

        return ZkRefSkeleton;
    })();

    Zko.ZkSkeleton = (function() {

        /**
         * Properties of a ZkSkeleton.
         * @memberof Zko
         * @interface IZkSkeleton
         * @property {number} refId ZkSkeleton refId
         * @property {boolean} isReference ZkSkeleton isReference
         * @property {string|null} [id] ZkSkeleton id
         * @property {string|null} [name] ZkSkeleton name
         * @property {Zko.ZkBone|null} [root] ZkSkeleton root
         */

        /**
         * Constructs a new ZkSkeleton.
         * @memberof Zko
         * @classdesc Represents a ZkSkeleton.
         * @implements IZkSkeleton
         * @constructor
         * @param {Zko.IZkSkeleton=} [properties] Properties to set
         */
        function ZkSkeleton(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZkSkeleton refId.
         * @member {number} refId
         * @memberof Zko.ZkSkeleton
         * @instance
         */
        ZkSkeleton.prototype.refId = 0;

        /**
         * ZkSkeleton isReference.
         * @member {boolean} isReference
         * @memberof Zko.ZkSkeleton
         * @instance
         */
        ZkSkeleton.prototype.isReference = false;

        /**
         * ZkSkeleton id.
         * @member {string} id
         * @memberof Zko.ZkSkeleton
         * @instance
         */
        ZkSkeleton.prototype.id = "";

        /**
         * ZkSkeleton name.
         * @member {string} name
         * @memberof Zko.ZkSkeleton
         * @instance
         */
        ZkSkeleton.prototype.name = "";

        /**
         * ZkSkeleton root.
         * @member {Zko.ZkBone|null|undefined} root
         * @memberof Zko.ZkSkeleton
         * @instance
         */
        ZkSkeleton.prototype.root = null;

        /**
         * Creates a new ZkSkeleton instance using the specified properties.
         * @function create
         * @memberof Zko.ZkSkeleton
         * @static
         * @param {Zko.IZkSkeleton=} [properties] Properties to set
         * @returns {Zko.ZkSkeleton} ZkSkeleton instance
         */
        ZkSkeleton.create = function create(properties) {
            return new ZkSkeleton(properties);
        };

        /**
         * Encodes the specified ZkSkeleton message. Does not implicitly {@link Zko.ZkSkeleton.verify|verify} messages.
         * @function encode
         * @memberof Zko.ZkSkeleton
         * @static
         * @param {Zko.ZkSkeleton} message ZkSkeleton message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZkSkeleton.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.refId);
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isReference);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 101, wireType 2 =*/810).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 102, wireType 2 =*/818).string(message.name);
            if (message.root != null && Object.hasOwnProperty.call(message, "root"))
                $root.Zko.ZkBone.encode(message.root, writer.uint32(/* id 104, wireType 2 =*/834).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ZkSkeleton message from the specified reader or buffer.
         * @function decode
         * @memberof Zko.ZkSkeleton
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zko.ZkSkeleton} ZkSkeleton
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZkSkeleton.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zko.ZkSkeleton();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.refId = reader.int32();
                        break;
                    }
                case 2: {
                        message.isReference = reader.bool();
                        break;
                    }
                case 101: {
                        message.id = reader.string();
                        break;
                    }
                case 102: {
                        message.name = reader.string();
                        break;
                    }
                case 104: {
                        message.root = $root.Zko.ZkBone.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("refId"))
                throw $util.ProtocolError("missing required 'refId'", { instance: message });
            if (!message.hasOwnProperty("isReference"))
                throw $util.ProtocolError("missing required 'isReference'", { instance: message });
            return message;
        };

        /**
         * Verifies a ZkSkeleton message.
         * @function verify
         * @memberof Zko.ZkSkeleton
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZkSkeleton.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.refId))
                return "refId: integer expected";
            if (typeof message.isReference !== "boolean")
                return "isReference: boolean expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.root != null && message.hasOwnProperty("root")) {
                let error = $root.Zko.ZkBone.verify(message.root);
                if (error)
                    return "root." + error;
            }
            return null;
        };

        /**
         * Creates a ZkSkeleton message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zko.ZkSkeleton
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zko.ZkSkeleton} ZkSkeleton
         */
        ZkSkeleton.fromObject = function fromObject(object) {
            if (object instanceof $root.Zko.ZkSkeleton)
                return object;
            let message = new $root.Zko.ZkSkeleton();
            if (object.refId != null)
                message.refId = object.refId | 0;
            if (object.isReference != null)
                message.isReference = Boolean(object.isReference);
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.root != null) {
                if (typeof object.root !== "object")
                    throw TypeError(".Zko.ZkSkeleton.root: object expected");
                message.root = $root.Zko.ZkBone.fromObject(object.root);
            }
            return message;
        };

        /**
         * Creates a plain object from a ZkSkeleton message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zko.ZkSkeleton
         * @static
         * @param {Zko.ZkSkeleton} message ZkSkeleton
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZkSkeleton.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.refId = 0;
                object.isReference = false;
                object.id = "";
                object.name = "";
                object.root = null;
            }
            if (message.refId != null && message.hasOwnProperty("refId"))
                object.refId = message.refId;
            if (message.isReference != null && message.hasOwnProperty("isReference"))
                object.isReference = message.isReference;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.root != null && message.hasOwnProperty("root"))
                object.root = $root.Zko.ZkBone.toObject(message.root, options);
            return object;
        };

        /**
         * Converts this ZkSkeleton to JSON.
         * @function toJSON
         * @memberof Zko.ZkSkeleton
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZkSkeleton.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ZkSkeleton
         * @function getTypeUrl
         * @memberof Zko.ZkSkeleton
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ZkSkeleton.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Zko.ZkSkeleton";
        };

        return ZkSkeleton;
    })();

    Zko.ZkBone = (function() {

        /**
         * Properties of a ZkBone.
         * @memberof Zko
         * @interface IZkBone
         * @property {string} id ZkBone id
         * @property {string} name ZkBone name
         * @property {number} idx ZkBone idx
         * @property {Zko.ZkTransform} transform ZkBone transform
         * @property {Array.<Zko.ZkBone>|null} [children] ZkBone children
         */

        /**
         * Constructs a new ZkBone.
         * @memberof Zko
         * @classdesc Represents a ZkBone.
         * @implements IZkBone
         * @constructor
         * @param {Zko.IZkBone=} [properties] Properties to set
         */
        function ZkBone(properties) {
            this.children = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZkBone id.
         * @member {string} id
         * @memberof Zko.ZkBone
         * @instance
         */
        ZkBone.prototype.id = "";

        /**
         * ZkBone name.
         * @member {string} name
         * @memberof Zko.ZkBone
         * @instance
         */
        ZkBone.prototype.name = "";

        /**
         * ZkBone idx.
         * @member {number} idx
         * @memberof Zko.ZkBone
         * @instance
         */
        ZkBone.prototype.idx = 0;

        /**
         * ZkBone transform.
         * @member {Zko.ZkTransform} transform
         * @memberof Zko.ZkBone
         * @instance
         */
        ZkBone.prototype.transform = null;

        /**
         * ZkBone children.
         * @member {Array.<Zko.ZkBone>} children
         * @memberof Zko.ZkBone
         * @instance
         */
        ZkBone.prototype.children = $util.emptyArray;

        /**
         * Creates a new ZkBone instance using the specified properties.
         * @function create
         * @memberof Zko.ZkBone
         * @static
         * @param {Zko.IZkBone=} [properties] Properties to set
         * @returns {Zko.ZkBone} ZkBone instance
         */
        ZkBone.create = function create(properties) {
            return new ZkBone(properties);
        };

        /**
         * Encodes the specified ZkBone message. Does not implicitly {@link Zko.ZkBone.verify|verify} messages.
         * @function encode
         * @memberof Zko.ZkBone
         * @static
         * @param {Zko.ZkBone} message ZkBone message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZkBone.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.idx);
            $root.Zko.ZkTransform.encode(message.transform, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.children != null && message.children.length)
                for (let i = 0; i < message.children.length; ++i)
                    $root.Zko.ZkBone.encode(message.children[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ZkBone message from the specified reader or buffer.
         * @function decode
         * @memberof Zko.ZkBone
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zko.ZkBone} ZkBone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZkBone.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zko.ZkBone();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.idx = reader.uint32();
                        break;
                    }
                case 4: {
                        message.transform = $root.Zko.ZkTransform.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        if (!(message.children && message.children.length))
                            message.children = [];
                        message.children.push($root.Zko.ZkBone.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("idx"))
                throw $util.ProtocolError("missing required 'idx'", { instance: message });
            if (!message.hasOwnProperty("transform"))
                throw $util.ProtocolError("missing required 'transform'", { instance: message });
            return message;
        };

        /**
         * Verifies a ZkBone message.
         * @function verify
         * @memberof Zko.ZkBone
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZkBone.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isInteger(message.idx))
                return "idx: integer expected";
            {
                let error = $root.Zko.ZkTransform.verify(message.transform);
                if (error)
                    return "transform." + error;
            }
            if (message.children != null && message.hasOwnProperty("children")) {
                if (!Array.isArray(message.children))
                    return "children: array expected";
                for (let i = 0; i < message.children.length; ++i) {
                    let error = $root.Zko.ZkBone.verify(message.children[i]);
                    if (error)
                        return "children." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ZkBone message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zko.ZkBone
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zko.ZkBone} ZkBone
         */
        ZkBone.fromObject = function fromObject(object) {
            if (object instanceof $root.Zko.ZkBone)
                return object;
            let message = new $root.Zko.ZkBone();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.idx != null)
                message.idx = object.idx >>> 0;
            if (object.transform != null) {
                if (typeof object.transform !== "object")
                    throw TypeError(".Zko.ZkBone.transform: object expected");
                message.transform = $root.Zko.ZkTransform.fromObject(object.transform);
            }
            if (object.children) {
                if (!Array.isArray(object.children))
                    throw TypeError(".Zko.ZkBone.children: array expected");
                message.children = [];
                for (let i = 0; i < object.children.length; ++i) {
                    if (typeof object.children[i] !== "object")
                        throw TypeError(".Zko.ZkBone.children: object expected");
                    message.children[i] = $root.Zko.ZkBone.fromObject(object.children[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ZkBone message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zko.ZkBone
         * @static
         * @param {Zko.ZkBone} message ZkBone
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZkBone.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.children = [];
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.idx = 0;
                object.transform = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.idx != null && message.hasOwnProperty("idx"))
                object.idx = message.idx;
            if (message.transform != null && message.hasOwnProperty("transform"))
                object.transform = $root.Zko.ZkTransform.toObject(message.transform, options);
            if (message.children && message.children.length) {
                object.children = [];
                for (let j = 0; j < message.children.length; ++j)
                    object.children[j] = $root.Zko.ZkBone.toObject(message.children[j], options);
            }
            return object;
        };

        /**
         * Converts this ZkBone to JSON.
         * @function toJSON
         * @memberof Zko.ZkBone
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZkBone.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ZkBone
         * @function getTypeUrl
         * @memberof Zko.ZkBone
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ZkBone.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Zko.ZkBone";
        };

        return ZkBone;
    })();

    Zko.ZkSkinning = (function() {

        /**
         * Properties of a ZkSkinning.
         * @memberof Zko
         * @interface IZkSkinning
         * @property {Array.<number>|null} [boneIndices] ZkSkinning boneIndices
         */

        /**
         * Constructs a new ZkSkinning.
         * @memberof Zko
         * @classdesc Represents a ZkSkinning.
         * @implements IZkSkinning
         * @constructor
         * @param {Zko.IZkSkinning=} [properties] Properties to set
         */
        function ZkSkinning(properties) {
            this.boneIndices = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZkSkinning boneIndices.
         * @member {Array.<number>} boneIndices
         * @memberof Zko.ZkSkinning
         * @instance
         */
        ZkSkinning.prototype.boneIndices = $util.emptyArray;

        /**
         * Creates a new ZkSkinning instance using the specified properties.
         * @function create
         * @memberof Zko.ZkSkinning
         * @static
         * @param {Zko.IZkSkinning=} [properties] Properties to set
         * @returns {Zko.ZkSkinning} ZkSkinning instance
         */
        ZkSkinning.create = function create(properties) {
            return new ZkSkinning(properties);
        };

        /**
         * Encodes the specified ZkSkinning message. Does not implicitly {@link Zko.ZkSkinning.verify|verify} messages.
         * @function encode
         * @memberof Zko.ZkSkinning
         * @static
         * @param {Zko.ZkSkinning} message ZkSkinning message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZkSkinning.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.boneIndices != null && message.boneIndices.length)
                for (let i = 0; i < message.boneIndices.length; ++i)
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.boneIndices[i]);
            return writer;
        };

        /**
         * Decodes a ZkSkinning message from the specified reader or buffer.
         * @function decode
         * @memberof Zko.ZkSkinning
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zko.ZkSkinning} ZkSkinning
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZkSkinning.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zko.ZkSkinning();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.boneIndices && message.boneIndices.length))
                            message.boneIndices = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.boneIndices.push(reader.uint32());
                        } else
                            message.boneIndices.push(reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Verifies a ZkSkinning message.
         * @function verify
         * @memberof Zko.ZkSkinning
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZkSkinning.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.boneIndices != null && message.hasOwnProperty("boneIndices")) {
                if (!Array.isArray(message.boneIndices))
                    return "boneIndices: array expected";
                for (let i = 0; i < message.boneIndices.length; ++i)
                    if (!$util.isInteger(message.boneIndices[i]))
                        return "boneIndices: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a ZkSkinning message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zko.ZkSkinning
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zko.ZkSkinning} ZkSkinning
         */
        ZkSkinning.fromObject = function fromObject(object) {
            if (object instanceof $root.Zko.ZkSkinning)
                return object;
            let message = new $root.Zko.ZkSkinning();
            if (object.boneIndices) {
                if (!Array.isArray(object.boneIndices))
                    throw TypeError(".Zko.ZkSkinning.boneIndices: array expected");
                message.boneIndices = [];
                for (let i = 0; i < object.boneIndices.length; ++i)
                    message.boneIndices[i] = object.boneIndices[i] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a ZkSkinning message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zko.ZkSkinning
         * @static
         * @param {Zko.ZkSkinning} message ZkSkinning
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZkSkinning.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.boneIndices = [];
            if (message.boneIndices && message.boneIndices.length) {
                object.boneIndices = [];
                for (let j = 0; j < message.boneIndices.length; ++j)
                    object.boneIndices[j] = message.boneIndices[j];
            }
            return object;
        };

        /**
         * Converts this ZkSkinning to JSON.
         * @function toJSON
         * @memberof Zko.ZkSkinning
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZkSkinning.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ZkSkinning
         * @function getTypeUrl
         * @memberof Zko.ZkSkinning
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ZkSkinning.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Zko.ZkSkinning";
        };

        return ZkSkinning;
    })();

    Zko.ZkJoint = (function() {

        /**
         * Properties of a ZkJoint.
         * @memberof Zko
         * @interface IZkJoint
         * @property {string} id ZkJoint id
         * @property {string} name ZkJoint name
         * @property {Zko.ZkTransform} transform ZkJoint transform
         * @property {Zko.ZkBone} bone ZkJoint bone
         */

        /**
         * Constructs a new ZkJoint.
         * @memberof Zko
         * @classdesc Represents a ZkJoint.
         * @implements IZkJoint
         * @constructor
         * @param {Zko.IZkJoint=} [properties] Properties to set
         */
        function ZkJoint(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZkJoint id.
         * @member {string} id
         * @memberof Zko.ZkJoint
         * @instance
         */
        ZkJoint.prototype.id = "";

        /**
         * ZkJoint name.
         * @member {string} name
         * @memberof Zko.ZkJoint
         * @instance
         */
        ZkJoint.prototype.name = "";

        /**
         * ZkJoint transform.
         * @member {Zko.ZkTransform} transform
         * @memberof Zko.ZkJoint
         * @instance
         */
        ZkJoint.prototype.transform = null;

        /**
         * ZkJoint bone.
         * @member {Zko.ZkBone} bone
         * @memberof Zko.ZkJoint
         * @instance
         */
        ZkJoint.prototype.bone = null;

        /**
         * Creates a new ZkJoint instance using the specified properties.
         * @function create
         * @memberof Zko.ZkJoint
         * @static
         * @param {Zko.IZkJoint=} [properties] Properties to set
         * @returns {Zko.ZkJoint} ZkJoint instance
         */
        ZkJoint.create = function create(properties) {
            return new ZkJoint(properties);
        };

        /**
         * Encodes the specified ZkJoint message. Does not implicitly {@link Zko.ZkJoint.verify|verify} messages.
         * @function encode
         * @memberof Zko.ZkJoint
         * @static
         * @param {Zko.ZkJoint} message ZkJoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZkJoint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            $root.Zko.ZkTransform.encode(message.transform, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            $root.Zko.ZkBone.encode(message.bone, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ZkJoint message from the specified reader or buffer.
         * @function decode
         * @memberof Zko.ZkJoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zko.ZkJoint} ZkJoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZkJoint.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zko.ZkJoint();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.transform = $root.Zko.ZkTransform.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.bone = $root.Zko.ZkBone.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("transform"))
                throw $util.ProtocolError("missing required 'transform'", { instance: message });
            if (!message.hasOwnProperty("bone"))
                throw $util.ProtocolError("missing required 'bone'", { instance: message });
            return message;
        };

        /**
         * Verifies a ZkJoint message.
         * @function verify
         * @memberof Zko.ZkJoint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZkJoint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            {
                let error = $root.Zko.ZkTransform.verify(message.transform);
                if (error)
                    return "transform." + error;
            }
            {
                let error = $root.Zko.ZkBone.verify(message.bone);
                if (error)
                    return "bone." + error;
            }
            return null;
        };

        /**
         * Creates a ZkJoint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zko.ZkJoint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zko.ZkJoint} ZkJoint
         */
        ZkJoint.fromObject = function fromObject(object) {
            if (object instanceof $root.Zko.ZkJoint)
                return object;
            let message = new $root.Zko.ZkJoint();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.transform != null) {
                if (typeof object.transform !== "object")
                    throw TypeError(".Zko.ZkJoint.transform: object expected");
                message.transform = $root.Zko.ZkTransform.fromObject(object.transform);
            }
            if (object.bone != null) {
                if (typeof object.bone !== "object")
                    throw TypeError(".Zko.ZkJoint.bone: object expected");
                message.bone = $root.Zko.ZkBone.fromObject(object.bone);
            }
            return message;
        };

        /**
         * Creates a plain object from a ZkJoint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zko.ZkJoint
         * @static
         * @param {Zko.ZkJoint} message ZkJoint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZkJoint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.transform = null;
                object.bone = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.transform != null && message.hasOwnProperty("transform"))
                object.transform = $root.Zko.ZkTransform.toObject(message.transform, options);
            if (message.bone != null && message.hasOwnProperty("bone"))
                object.bone = $root.Zko.ZkBone.toObject(message.bone, options);
            return object;
        };

        /**
         * Converts this ZkJoint to JSON.
         * @function toJSON
         * @memberof Zko.ZkJoint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZkJoint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ZkJoint
         * @function getTypeUrl
         * @memberof Zko.ZkJoint
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ZkJoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Zko.ZkJoint";
        };

        return ZkJoint;
    })();

    Zko.ZkCamera = (function() {

        /**
         * Properties of a ZkCamera.
         * @memberof Zko
         * @interface IZkCamera
         * @property {string} id ZkCamera id
         * @property {string} name ZkCamera name
         * @property {Zko.ZkTransform} transform ZkCamera transform
         * @property {Zko.ZkLens} lens ZkCamera lens
         */

        /**
         * Constructs a new ZkCamera.
         * @memberof Zko
         * @classdesc Represents a ZkCamera.
         * @implements IZkCamera
         * @constructor
         * @param {Zko.IZkCamera=} [properties] Properties to set
         */
        function ZkCamera(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZkCamera id.
         * @member {string} id
         * @memberof Zko.ZkCamera
         * @instance
         */
        ZkCamera.prototype.id = "";

        /**
         * ZkCamera name.
         * @member {string} name
         * @memberof Zko.ZkCamera
         * @instance
         */
        ZkCamera.prototype.name = "";

        /**
         * ZkCamera transform.
         * @member {Zko.ZkTransform} transform
         * @memberof Zko.ZkCamera
         * @instance
         */
        ZkCamera.prototype.transform = null;

        /**
         * ZkCamera lens.
         * @member {Zko.ZkLens} lens
         * @memberof Zko.ZkCamera
         * @instance
         */
        ZkCamera.prototype.lens = null;

        /**
         * Creates a new ZkCamera instance using the specified properties.
         * @function create
         * @memberof Zko.ZkCamera
         * @static
         * @param {Zko.IZkCamera=} [properties] Properties to set
         * @returns {Zko.ZkCamera} ZkCamera instance
         */
        ZkCamera.create = function create(properties) {
            return new ZkCamera(properties);
        };

        /**
         * Encodes the specified ZkCamera message. Does not implicitly {@link Zko.ZkCamera.verify|verify} messages.
         * @function encode
         * @memberof Zko.ZkCamera
         * @static
         * @param {Zko.ZkCamera} message ZkCamera message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZkCamera.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            $root.Zko.ZkTransform.encode(message.transform, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            $root.Zko.ZkLens.encode(message.lens, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ZkCamera message from the specified reader or buffer.
         * @function decode
         * @memberof Zko.ZkCamera
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zko.ZkCamera} ZkCamera
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZkCamera.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zko.ZkCamera();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.transform = $root.Zko.ZkTransform.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.lens = $root.Zko.ZkLens.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("transform"))
                throw $util.ProtocolError("missing required 'transform'", { instance: message });
            if (!message.hasOwnProperty("lens"))
                throw $util.ProtocolError("missing required 'lens'", { instance: message });
            return message;
        };

        /**
         * Verifies a ZkCamera message.
         * @function verify
         * @memberof Zko.ZkCamera
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZkCamera.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            {
                let error = $root.Zko.ZkTransform.verify(message.transform);
                if (error)
                    return "transform." + error;
            }
            {
                let error = $root.Zko.ZkLens.verify(message.lens);
                if (error)
                    return "lens." + error;
            }
            return null;
        };

        /**
         * Creates a ZkCamera message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zko.ZkCamera
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zko.ZkCamera} ZkCamera
         */
        ZkCamera.fromObject = function fromObject(object) {
            if (object instanceof $root.Zko.ZkCamera)
                return object;
            let message = new $root.Zko.ZkCamera();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.transform != null) {
                if (typeof object.transform !== "object")
                    throw TypeError(".Zko.ZkCamera.transform: object expected");
                message.transform = $root.Zko.ZkTransform.fromObject(object.transform);
            }
            if (object.lens != null) {
                if (typeof object.lens !== "object")
                    throw TypeError(".Zko.ZkCamera.lens: object expected");
                message.lens = $root.Zko.ZkLens.fromObject(object.lens);
            }
            return message;
        };

        /**
         * Creates a plain object from a ZkCamera message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zko.ZkCamera
         * @static
         * @param {Zko.ZkCamera} message ZkCamera
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZkCamera.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.transform = null;
                object.lens = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.transform != null && message.hasOwnProperty("transform"))
                object.transform = $root.Zko.ZkTransform.toObject(message.transform, options);
            if (message.lens != null && message.hasOwnProperty("lens"))
                object.lens = $root.Zko.ZkLens.toObject(message.lens, options);
            return object;
        };

        /**
         * Converts this ZkCamera to JSON.
         * @function toJSON
         * @memberof Zko.ZkCamera
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZkCamera.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ZkCamera
         * @function getTypeUrl
         * @memberof Zko.ZkCamera
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ZkCamera.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Zko.ZkCamera";
        };

        return ZkCamera;
    })();

    Zko.ZkLens = (function() {

        /**
         * Properties of a ZkLens.
         * @memberof Zko
         * @interface IZkLens
         * @property {number} near ZkLens near
         * @property {number} far ZkLens far
         * @property {number|null} [aspectRatio] ZkLens aspectRatio
         * @property {number|null} [fov] ZkLens fov
         */

        /**
         * Constructs a new ZkLens.
         * @memberof Zko
         * @classdesc Represents a ZkLens.
         * @implements IZkLens
         * @constructor
         * @param {Zko.IZkLens=} [properties] Properties to set
         */
        function ZkLens(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZkLens near.
         * @member {number} near
         * @memberof Zko.ZkLens
         * @instance
         */
        ZkLens.prototype.near = 0;

        /**
         * ZkLens far.
         * @member {number} far
         * @memberof Zko.ZkLens
         * @instance
         */
        ZkLens.prototype.far = 0;

        /**
         * ZkLens aspectRatio.
         * @member {number} aspectRatio
         * @memberof Zko.ZkLens
         * @instance
         */
        ZkLens.prototype.aspectRatio = 0;

        /**
         * ZkLens fov.
         * @member {number} fov
         * @memberof Zko.ZkLens
         * @instance
         */
        ZkLens.prototype.fov = 0;

        /**
         * Creates a new ZkLens instance using the specified properties.
         * @function create
         * @memberof Zko.ZkLens
         * @static
         * @param {Zko.IZkLens=} [properties] Properties to set
         * @returns {Zko.ZkLens} ZkLens instance
         */
        ZkLens.create = function create(properties) {
            return new ZkLens(properties);
        };

        /**
         * Encodes the specified ZkLens message. Does not implicitly {@link Zko.ZkLens.verify|verify} messages.
         * @function encode
         * @memberof Zko.ZkLens
         * @static
         * @param {Zko.ZkLens} message ZkLens message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZkLens.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.near);
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.far);
            if (message.aspectRatio != null && Object.hasOwnProperty.call(message, "aspectRatio"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.aspectRatio);
            if (message.fov != null && Object.hasOwnProperty.call(message, "fov"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.fov);
            return writer;
        };

        /**
         * Decodes a ZkLens message from the specified reader or buffer.
         * @function decode
         * @memberof Zko.ZkLens
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zko.ZkLens} ZkLens
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZkLens.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zko.ZkLens();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.near = reader.float();
                        break;
                    }
                case 2: {
                        message.far = reader.float();
                        break;
                    }
                case 3: {
                        message.aspectRatio = reader.float();
                        break;
                    }
                case 4: {
                        message.fov = reader.float();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("near"))
                throw $util.ProtocolError("missing required 'near'", { instance: message });
            if (!message.hasOwnProperty("far"))
                throw $util.ProtocolError("missing required 'far'", { instance: message });
            return message;
        };

        /**
         * Verifies a ZkLens message.
         * @function verify
         * @memberof Zko.ZkLens
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZkLens.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.near !== "number")
                return "near: number expected";
            if (typeof message.far !== "number")
                return "far: number expected";
            if (message.aspectRatio != null && message.hasOwnProperty("aspectRatio"))
                if (typeof message.aspectRatio !== "number")
                    return "aspectRatio: number expected";
            if (message.fov != null && message.hasOwnProperty("fov"))
                if (typeof message.fov !== "number")
                    return "fov: number expected";
            return null;
        };

        /**
         * Creates a ZkLens message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zko.ZkLens
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zko.ZkLens} ZkLens
         */
        ZkLens.fromObject = function fromObject(object) {
            if (object instanceof $root.Zko.ZkLens)
                return object;
            let message = new $root.Zko.ZkLens();
            if (object.near != null)
                message.near = Number(object.near);
            if (object.far != null)
                message.far = Number(object.far);
            if (object.aspectRatio != null)
                message.aspectRatio = Number(object.aspectRatio);
            if (object.fov != null)
                message.fov = Number(object.fov);
            return message;
        };

        /**
         * Creates a plain object from a ZkLens message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zko.ZkLens
         * @static
         * @param {Zko.ZkLens} message ZkLens
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZkLens.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.near = 0;
                object.far = 0;
                object.aspectRatio = 0;
                object.fov = 0;
            }
            if (message.near != null && message.hasOwnProperty("near"))
                object.near = options.json && !isFinite(message.near) ? String(message.near) : message.near;
            if (message.far != null && message.hasOwnProperty("far"))
                object.far = options.json && !isFinite(message.far) ? String(message.far) : message.far;
            if (message.aspectRatio != null && message.hasOwnProperty("aspectRatio"))
                object.aspectRatio = options.json && !isFinite(message.aspectRatio) ? String(message.aspectRatio) : message.aspectRatio;
            if (message.fov != null && message.hasOwnProperty("fov"))
                object.fov = options.json && !isFinite(message.fov) ? String(message.fov) : message.fov;
            return object;
        };

        /**
         * Converts this ZkLens to JSON.
         * @function toJSON
         * @memberof Zko.ZkLens
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZkLens.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ZkLens
         * @function getTypeUrl
         * @memberof Zko.ZkLens
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ZkLens.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Zko.ZkLens";
        };

        return ZkLens;
    })();

    return Zko;
})();

export const ZkRefMaterial = $root.ZkRefMaterial = (() => {

    /**
     * Properties of a ZkRefMaterial.
     * @exports IZkRefMaterial
     * @interface IZkRefMaterial
     * @property {number} refId ZkRefMaterial refId
     * @property {boolean} isReference ZkRefMaterial isReference
     * @property {ZkMaterial|null} [data] ZkRefMaterial data
     */

    /**
     * Constructs a new ZkRefMaterial.
     * @exports ZkRefMaterial
     * @classdesc Represents a ZkRefMaterial.
     * @implements IZkRefMaterial
     * @constructor
     * @param {IZkRefMaterial=} [properties] Properties to set
     */
    function ZkRefMaterial(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ZkRefMaterial refId.
     * @member {number} refId
     * @memberof ZkRefMaterial
     * @instance
     */
    ZkRefMaterial.prototype.refId = 0;

    /**
     * ZkRefMaterial isReference.
     * @member {boolean} isReference
     * @memberof ZkRefMaterial
     * @instance
     */
    ZkRefMaterial.prototype.isReference = false;

    /**
     * ZkRefMaterial data.
     * @member {ZkMaterial|null|undefined} data
     * @memberof ZkRefMaterial
     * @instance
     */
    ZkRefMaterial.prototype.data = null;

    /**
     * Creates a new ZkRefMaterial instance using the specified properties.
     * @function create
     * @memberof ZkRefMaterial
     * @static
     * @param {IZkRefMaterial=} [properties] Properties to set
     * @returns {ZkRefMaterial} ZkRefMaterial instance
     */
    ZkRefMaterial.create = function create(properties) {
        return new ZkRefMaterial(properties);
    };

    /**
     * Encodes the specified ZkRefMaterial message. Does not implicitly {@link ZkRefMaterial.verify|verify} messages.
     * @function encode
     * @memberof ZkRefMaterial
     * @static
     * @param {ZkRefMaterial} message ZkRefMaterial message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ZkRefMaterial.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.refId);
        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isReference);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            $root.ZkMaterial.encode(message.data, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
        return writer;
    };

    /**
     * Decodes a ZkRefMaterial message from the specified reader or buffer.
     * @function decode
     * @memberof ZkRefMaterial
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ZkRefMaterial} ZkRefMaterial
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ZkRefMaterial.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ZkRefMaterial();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.refId = reader.int32();
                    break;
                }
            case 2: {
                    message.isReference = reader.bool();
                    break;
                }
            case 100: {
                    message.data = $root.ZkMaterial.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("refId"))
            throw $util.ProtocolError("missing required 'refId'", { instance: message });
        if (!message.hasOwnProperty("isReference"))
            throw $util.ProtocolError("missing required 'isReference'", { instance: message });
        return message;
    };

    /**
     * Verifies a ZkRefMaterial message.
     * @function verify
     * @memberof ZkRefMaterial
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ZkRefMaterial.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.refId))
            return "refId: integer expected";
        if (typeof message.isReference !== "boolean")
            return "isReference: boolean expected";
        if (message.data != null && message.hasOwnProperty("data")) {
            let error = $root.ZkMaterial.verify(message.data);
            if (error)
                return "data." + error;
        }
        return null;
    };

    /**
     * Creates a ZkRefMaterial message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ZkRefMaterial
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ZkRefMaterial} ZkRefMaterial
     */
    ZkRefMaterial.fromObject = function fromObject(object) {
        if (object instanceof $root.ZkRefMaterial)
            return object;
        let message = new $root.ZkRefMaterial();
        if (object.refId != null)
            message.refId = object.refId | 0;
        if (object.isReference != null)
            message.isReference = Boolean(object.isReference);
        if (object.data != null) {
            if (typeof object.data !== "object")
                throw TypeError(".ZkRefMaterial.data: object expected");
            message.data = $root.ZkMaterial.fromObject(object.data);
        }
        return message;
    };

    /**
     * Creates a plain object from a ZkRefMaterial message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ZkRefMaterial
     * @static
     * @param {ZkRefMaterial} message ZkRefMaterial
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ZkRefMaterial.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.refId = 0;
            object.isReference = false;
            object.data = null;
        }
        if (message.refId != null && message.hasOwnProperty("refId"))
            object.refId = message.refId;
        if (message.isReference != null && message.hasOwnProperty("isReference"))
            object.isReference = message.isReference;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = $root.ZkMaterial.toObject(message.data, options);
        return object;
    };

    /**
     * Converts this ZkRefMaterial to JSON.
     * @function toJSON
     * @memberof ZkRefMaterial
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ZkRefMaterial.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ZkRefMaterial
     * @function getTypeUrl
     * @memberof ZkRefMaterial
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ZkRefMaterial.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ZkRefMaterial";
    };

    return ZkRefMaterial;
})();

export const ZkMaterial = $root.ZkMaterial = (() => {

    /**
     * Properties of a ZkMaterial.
     * @exports IZkMaterial
     * @interface IZkMaterial
     * @property {ZkRefTexture|null} [texture] ZkMaterial texture
     */

    /**
     * Constructs a new ZkMaterial.
     * @exports ZkMaterial
     * @classdesc Represents a ZkMaterial.
     * @implements IZkMaterial
     * @constructor
     * @param {IZkMaterial=} [properties] Properties to set
     */
    function ZkMaterial(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ZkMaterial texture.
     * @member {ZkRefTexture|null|undefined} texture
     * @memberof ZkMaterial
     * @instance
     */
    ZkMaterial.prototype.texture = null;

    /**
     * Creates a new ZkMaterial instance using the specified properties.
     * @function create
     * @memberof ZkMaterial
     * @static
     * @param {IZkMaterial=} [properties] Properties to set
     * @returns {ZkMaterial} ZkMaterial instance
     */
    ZkMaterial.create = function create(properties) {
        return new ZkMaterial(properties);
    };

    /**
     * Encodes the specified ZkMaterial message. Does not implicitly {@link ZkMaterial.verify|verify} messages.
     * @function encode
     * @memberof ZkMaterial
     * @static
     * @param {ZkMaterial} message ZkMaterial message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ZkMaterial.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.texture != null && Object.hasOwnProperty.call(message, "texture"))
            $root.ZkRefTexture.encode(message.texture, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Decodes a ZkMaterial message from the specified reader or buffer.
     * @function decode
     * @memberof ZkMaterial
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ZkMaterial} ZkMaterial
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ZkMaterial.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ZkMaterial();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.texture = $root.ZkRefTexture.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Verifies a ZkMaterial message.
     * @function verify
     * @memberof ZkMaterial
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ZkMaterial.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.texture != null && message.hasOwnProperty("texture")) {
            let error = $root.ZkRefTexture.verify(message.texture);
            if (error)
                return "texture." + error;
        }
        return null;
    };

    /**
     * Creates a ZkMaterial message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ZkMaterial
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ZkMaterial} ZkMaterial
     */
    ZkMaterial.fromObject = function fromObject(object) {
        if (object instanceof $root.ZkMaterial)
            return object;
        let message = new $root.ZkMaterial();
        if (object.texture != null) {
            if (typeof object.texture !== "object")
                throw TypeError(".ZkMaterial.texture: object expected");
            message.texture = $root.ZkRefTexture.fromObject(object.texture);
        }
        return message;
    };

    /**
     * Creates a plain object from a ZkMaterial message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ZkMaterial
     * @static
     * @param {ZkMaterial} message ZkMaterial
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ZkMaterial.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.texture = null;
        if (message.texture != null && message.hasOwnProperty("texture"))
            object.texture = $root.ZkRefTexture.toObject(message.texture, options);
        return object;
    };

    /**
     * Converts this ZkMaterial to JSON.
     * @function toJSON
     * @memberof ZkMaterial
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ZkMaterial.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ZkMaterial
     * @function getTypeUrl
     * @memberof ZkMaterial
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ZkMaterial.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ZkMaterial";
    };

    return ZkMaterial;
})();

export const ZkRefTexture = $root.ZkRefTexture = (() => {

    /**
     * Properties of a ZkRefTexture.
     * @exports IZkRefTexture
     * @interface IZkRefTexture
     * @property {number} refId ZkRefTexture refId
     * @property {boolean} isReference ZkRefTexture isReference
     * @property {ZkTexture|null} [data] ZkRefTexture data
     */

    /**
     * Constructs a new ZkRefTexture.
     * @exports ZkRefTexture
     * @classdesc Represents a ZkRefTexture.
     * @implements IZkRefTexture
     * @constructor
     * @param {IZkRefTexture=} [properties] Properties to set
     */
    function ZkRefTexture(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ZkRefTexture refId.
     * @member {number} refId
     * @memberof ZkRefTexture
     * @instance
     */
    ZkRefTexture.prototype.refId = 0;

    /**
     * ZkRefTexture isReference.
     * @member {boolean} isReference
     * @memberof ZkRefTexture
     * @instance
     */
    ZkRefTexture.prototype.isReference = false;

    /**
     * ZkRefTexture data.
     * @member {ZkTexture|null|undefined} data
     * @memberof ZkRefTexture
     * @instance
     */
    ZkRefTexture.prototype.data = null;

    /**
     * Creates a new ZkRefTexture instance using the specified properties.
     * @function create
     * @memberof ZkRefTexture
     * @static
     * @param {IZkRefTexture=} [properties] Properties to set
     * @returns {ZkRefTexture} ZkRefTexture instance
     */
    ZkRefTexture.create = function create(properties) {
        return new ZkRefTexture(properties);
    };

    /**
     * Encodes the specified ZkRefTexture message. Does not implicitly {@link ZkRefTexture.verify|verify} messages.
     * @function encode
     * @memberof ZkRefTexture
     * @static
     * @param {ZkRefTexture} message ZkRefTexture message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ZkRefTexture.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.refId);
        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isReference);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            $root.ZkTexture.encode(message.data, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
        return writer;
    };

    /**
     * Decodes a ZkRefTexture message from the specified reader or buffer.
     * @function decode
     * @memberof ZkRefTexture
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ZkRefTexture} ZkRefTexture
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ZkRefTexture.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ZkRefTexture();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.refId = reader.int32();
                    break;
                }
            case 2: {
                    message.isReference = reader.bool();
                    break;
                }
            case 100: {
                    message.data = $root.ZkTexture.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("refId"))
            throw $util.ProtocolError("missing required 'refId'", { instance: message });
        if (!message.hasOwnProperty("isReference"))
            throw $util.ProtocolError("missing required 'isReference'", { instance: message });
        return message;
    };

    /**
     * Verifies a ZkRefTexture message.
     * @function verify
     * @memberof ZkRefTexture
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ZkRefTexture.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.refId))
            return "refId: integer expected";
        if (typeof message.isReference !== "boolean")
            return "isReference: boolean expected";
        if (message.data != null && message.hasOwnProperty("data")) {
            let error = $root.ZkTexture.verify(message.data);
            if (error)
                return "data." + error;
        }
        return null;
    };

    /**
     * Creates a ZkRefTexture message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ZkRefTexture
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ZkRefTexture} ZkRefTexture
     */
    ZkRefTexture.fromObject = function fromObject(object) {
        if (object instanceof $root.ZkRefTexture)
            return object;
        let message = new $root.ZkRefTexture();
        if (object.refId != null)
            message.refId = object.refId | 0;
        if (object.isReference != null)
            message.isReference = Boolean(object.isReference);
        if (object.data != null) {
            if (typeof object.data !== "object")
                throw TypeError(".ZkRefTexture.data: object expected");
            message.data = $root.ZkTexture.fromObject(object.data);
        }
        return message;
    };

    /**
     * Creates a plain object from a ZkRefTexture message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ZkRefTexture
     * @static
     * @param {ZkRefTexture} message ZkRefTexture
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ZkRefTexture.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.refId = 0;
            object.isReference = false;
            object.data = null;
        }
        if (message.refId != null && message.hasOwnProperty("refId"))
            object.refId = message.refId;
        if (message.isReference != null && message.hasOwnProperty("isReference"))
            object.isReference = message.isReference;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = $root.ZkTexture.toObject(message.data, options);
        return object;
    };

    /**
     * Converts this ZkRefTexture to JSON.
     * @function toJSON
     * @memberof ZkRefTexture
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ZkRefTexture.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ZkRefTexture
     * @function getTypeUrl
     * @memberof ZkRefTexture
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ZkRefTexture.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ZkRefTexture";
    };

    return ZkRefTexture;
})();

export const ZkTexture = $root.ZkTexture = (() => {

    /**
     * Properties of a ZkTexture.
     * @exports IZkTexture
     * @interface IZkTexture
     * @property {string|null} [id] ZkTexture id
     * @property {number|null} [width] ZkTexture width
     * @property {number|null} [height] ZkTexture height
     * @property {Uint8Array|null} [dataArray] ZkTexture dataArray
     */

    /**
     * Constructs a new ZkTexture.
     * @exports ZkTexture
     * @classdesc Represents a ZkTexture.
     * @implements IZkTexture
     * @constructor
     * @param {IZkTexture=} [properties] Properties to set
     */
    function ZkTexture(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ZkTexture id.
     * @member {string} id
     * @memberof ZkTexture
     * @instance
     */
    ZkTexture.prototype.id = "";

    /**
     * ZkTexture width.
     * @member {number} width
     * @memberof ZkTexture
     * @instance
     */
    ZkTexture.prototype.width = 0;

    /**
     * ZkTexture height.
     * @member {number} height
     * @memberof ZkTexture
     * @instance
     */
    ZkTexture.prototype.height = 0;

    /**
     * ZkTexture dataArray.
     * @member {Uint8Array} dataArray
     * @memberof ZkTexture
     * @instance
     */
    ZkTexture.prototype.dataArray = $util.newBuffer([]);

    /**
     * Creates a new ZkTexture instance using the specified properties.
     * @function create
     * @memberof ZkTexture
     * @static
     * @param {IZkTexture=} [properties] Properties to set
     * @returns {ZkTexture} ZkTexture instance
     */
    ZkTexture.create = function create(properties) {
        return new ZkTexture(properties);
    };

    /**
     * Encodes the specified ZkTexture message. Does not implicitly {@link ZkTexture.verify|verify} messages.
     * @function encode
     * @memberof ZkTexture
     * @static
     * @param {ZkTexture} message ZkTexture message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ZkTexture.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.width != null && Object.hasOwnProperty.call(message, "width"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.width);
        if (message.height != null && Object.hasOwnProperty.call(message, "height"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.height);
        if (message.dataArray != null && Object.hasOwnProperty.call(message, "dataArray"))
            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.dataArray);
        return writer;
    };

    /**
     * Decodes a ZkTexture message from the specified reader or buffer.
     * @function decode
     * @memberof ZkTexture
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ZkTexture} ZkTexture
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ZkTexture.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ZkTexture();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.width = reader.int32();
                    break;
                }
            case 3: {
                    message.height = reader.int32();
                    break;
                }
            case 4: {
                    message.dataArray = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Verifies a ZkTexture message.
     * @function verify
     * @memberof ZkTexture
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ZkTexture.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.width != null && message.hasOwnProperty("width"))
            if (!$util.isInteger(message.width))
                return "width: integer expected";
        if (message.height != null && message.hasOwnProperty("height"))
            if (!$util.isInteger(message.height))
                return "height: integer expected";
        if (message.dataArray != null && message.hasOwnProperty("dataArray"))
            if (!(message.dataArray && typeof message.dataArray.length === "number" || $util.isString(message.dataArray)))
                return "dataArray: buffer expected";
        return null;
    };

    /**
     * Creates a ZkTexture message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ZkTexture
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ZkTexture} ZkTexture
     */
    ZkTexture.fromObject = function fromObject(object) {
        if (object instanceof $root.ZkTexture)
            return object;
        let message = new $root.ZkTexture();
        if (object.id != null)
            message.id = String(object.id);
        if (object.width != null)
            message.width = object.width | 0;
        if (object.height != null)
            message.height = object.height | 0;
        if (object.dataArray != null)
            if (typeof object.dataArray === "string")
                $util.base64.decode(object.dataArray, message.dataArray = $util.newBuffer($util.base64.length(object.dataArray)), 0);
            else if (object.dataArray.length >= 0)
                message.dataArray = object.dataArray;
        return message;
    };

    /**
     * Creates a plain object from a ZkTexture message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ZkTexture
     * @static
     * @param {ZkTexture} message ZkTexture
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ZkTexture.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.id = "";
            object.width = 0;
            object.height = 0;
            if (options.bytes === String)
                object.dataArray = "";
            else {
                object.dataArray = [];
                if (options.bytes !== Array)
                    object.dataArray = $util.newBuffer(object.dataArray);
            }
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.width != null && message.hasOwnProperty("width"))
            object.width = message.width;
        if (message.height != null && message.hasOwnProperty("height"))
            object.height = message.height;
        if (message.dataArray != null && message.hasOwnProperty("dataArray"))
            object.dataArray = options.bytes === String ? $util.base64.encode(message.dataArray, 0, message.dataArray.length) : options.bytes === Array ? Array.prototype.slice.call(message.dataArray) : message.dataArray;
        return object;
    };

    /**
     * Converts this ZkTexture to JSON.
     * @function toJSON
     * @memberof ZkTexture
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ZkTexture.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ZkTexture
     * @function getTypeUrl
     * @memberof ZkTexture
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ZkTexture.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ZkTexture";
    };

    return ZkTexture;
})();

export { $root as default };
