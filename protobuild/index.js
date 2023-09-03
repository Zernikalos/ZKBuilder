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

    /**
     * ZDataType enum.
     * @name Zko.ZDataType
     * @enum {number}
     * @property {number} BYTE=0 BYTE value
     * @property {number} UBYTE=1 UBYTE value
     * @property {number} SHORT=2 SHORT value
     * @property {number} USHORT=3 USHORT value
     * @property {number} INT=4 INT value
     * @property {number} UINT=5 UINT value
     * @property {number} FLOAT=6 FLOAT value
     * @property {number} DOUBLE=7 DOUBLE value
     * @property {number} VEC2F=8 VEC2F value
     * @property {number} VEC3F=9 VEC3F value
     * @property {number} VEC4F=10 VEC4F value
     * @property {number} MAT2F=11 MAT2F value
     * @property {number} MAT3F=12 MAT3F value
     * @property {number} MAT4F=13 MAT4F value
     * @property {number} TEXTURE=14 TEXTURE value
     */
    Zko.ZDataType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "BYTE"] = 0;
        values[valuesById[1] = "UBYTE"] = 1;
        values[valuesById[2] = "SHORT"] = 2;
        values[valuesById[3] = "USHORT"] = 3;
        values[valuesById[4] = "INT"] = 4;
        values[valuesById[5] = "UINT"] = 5;
        values[valuesById[6] = "FLOAT"] = 6;
        values[valuesById[7] = "DOUBLE"] = 7;
        values[valuesById[8] = "VEC2F"] = 8;
        values[valuesById[9] = "VEC3F"] = 9;
        values[valuesById[10] = "VEC4F"] = 10;
        values[valuesById[11] = "MAT2F"] = 11;
        values[valuesById[12] = "MAT3F"] = 12;
        values[valuesById[13] = "MAT4F"] = 13;
        values[valuesById[14] = "TEXTURE"] = 14;
        return values;
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

    Zko.ZkModel = (function() {

        /**
         * Properties of a ZkModel.
         * @memberof Zko
         * @interface IZkModel
         * @property {string} id ZkModel id
         * @property {string} name ZkModel name
         * @property {Zko.ZkTransform} transform ZkModel transform
         * @property {Zko.ZkShaderProgram} shaderProgram ZkModel shaderProgram
         * @property {Zko.ZkMesh} mesh ZkModel mesh
         * @property {ZkMaterial|null} [material] ZkModel material
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
         * ZkModel shaderProgram.
         * @member {Zko.ZkShaderProgram} shaderProgram
         * @memberof Zko.ZkModel
         * @instance
         */
        ZkModel.prototype.shaderProgram = null;

        /**
         * ZkModel mesh.
         * @member {Zko.ZkMesh} mesh
         * @memberof Zko.ZkModel
         * @instance
         */
        ZkModel.prototype.mesh = null;

        /**
         * ZkModel material.
         * @member {ZkMaterial|null|undefined} material
         * @memberof Zko.ZkModel
         * @instance
         */
        ZkModel.prototype.material = null;

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
            $root.Zko.ZkShaderProgram.encode(message.shaderProgram, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            $root.Zko.ZkMesh.encode(message.mesh, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.material != null && Object.hasOwnProperty.call(message, "material"))
                $root.ZkMaterial.encode(message.material, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
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
                        message.shaderProgram = $root.Zko.ZkShaderProgram.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.mesh = $root.Zko.ZkMesh.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.material = $root.ZkMaterial.decode(reader, reader.uint32());
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
            if (!message.hasOwnProperty("shaderProgram"))
                throw $util.ProtocolError("missing required 'shaderProgram'", { instance: message });
            if (!message.hasOwnProperty("mesh"))
                throw $util.ProtocolError("missing required 'mesh'", { instance: message });
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
                let error = $root.Zko.ZkShaderProgram.verify(message.shaderProgram);
                if (error)
                    return "shaderProgram." + error;
            }
            {
                let error = $root.Zko.ZkMesh.verify(message.mesh);
                if (error)
                    return "mesh." + error;
            }
            if (message.material != null && message.hasOwnProperty("material")) {
                let error = $root.ZkMaterial.verify(message.material);
                if (error)
                    return "material." + error;
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
            if (object.shaderProgram != null) {
                if (typeof object.shaderProgram !== "object")
                    throw TypeError(".Zko.ZkModel.shaderProgram: object expected");
                message.shaderProgram = $root.Zko.ZkShaderProgram.fromObject(object.shaderProgram);
            }
            if (object.mesh != null) {
                if (typeof object.mesh !== "object")
                    throw TypeError(".Zko.ZkModel.mesh: object expected");
                message.mesh = $root.Zko.ZkMesh.fromObject(object.mesh);
            }
            if (object.material != null) {
                if (typeof object.material !== "object")
                    throw TypeError(".Zko.ZkModel.material: object expected");
                message.material = $root.ZkMaterial.fromObject(object.material);
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
                object.shaderProgram = null;
                object.mesh = null;
                object.material = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.transform != null && message.hasOwnProperty("transform"))
                object.transform = $root.Zko.ZkTransform.toObject(message.transform, options);
            if (message.shaderProgram != null && message.hasOwnProperty("shaderProgram"))
                object.shaderProgram = $root.Zko.ZkShaderProgram.toObject(message.shaderProgram, options);
            if (message.mesh != null && message.hasOwnProperty("mesh"))
                object.mesh = $root.Zko.ZkMesh.toObject(message.mesh, options);
            if (message.material != null && message.hasOwnProperty("material"))
                object.material = $root.ZkMaterial.toObject(message.material, options);
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
         * @property {Object.<string,Zko.ZkBufferKey>|null} [bufferKeys] ZkMesh bufferKeys
         * @property {Object.<string,Zko.ZkBuffer>|null} [buffers] ZkMesh buffers
         */

        /**
         * Constructs a new ZkMesh.
         * @memberof Zko
         * @classdesc Represents a ZkMesh.
         * @implements IZkMesh
         * @constructor
         * @param {Zko.IZkMesh=} [properties] Properties to set
         */
        function ZkMesh(properties) {
            this.bufferKeys = {};
            this.buffers = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZkMesh bufferKeys.
         * @member {Object.<string,Zko.ZkBufferKey>} bufferKeys
         * @memberof Zko.ZkMesh
         * @instance
         */
        ZkMesh.prototype.bufferKeys = $util.emptyObject;

        /**
         * ZkMesh buffers.
         * @member {Object.<string,Zko.ZkBuffer>} buffers
         * @memberof Zko.ZkMesh
         * @instance
         */
        ZkMesh.prototype.buffers = $util.emptyObject;

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
            if (message.bufferKeys != null && Object.hasOwnProperty.call(message, "bufferKeys"))
                for (let keys = Object.keys(message.bufferKeys), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.Zko.ZkBufferKey.encode(message.bufferKeys[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.buffers != null && Object.hasOwnProperty.call(message, "buffers"))
                for (let keys = Object.keys(message.buffers), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.Zko.ZkBuffer.encode(message.buffers[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
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
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zko.ZkMesh(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.bufferKeys === $util.emptyObject)
                            message.bufferKeys = {};
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
                                value = $root.Zko.ZkBufferKey.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.bufferKeys[key] = value;
                        break;
                    }
                case 2: {
                        if (message.buffers === $util.emptyObject)
                            message.buffers = {};
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
                                value = $root.Zko.ZkBuffer.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.buffers[key] = value;
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
            if (message.bufferKeys != null && message.hasOwnProperty("bufferKeys")) {
                if (!$util.isObject(message.bufferKeys))
                    return "bufferKeys: object expected";
                let key = Object.keys(message.bufferKeys);
                for (let i = 0; i < key.length; ++i) {
                    let error = $root.Zko.ZkBufferKey.verify(message.bufferKeys[key[i]]);
                    if (error)
                        return "bufferKeys." + error;
                }
            }
            if (message.buffers != null && message.hasOwnProperty("buffers")) {
                if (!$util.isObject(message.buffers))
                    return "buffers: object expected";
                let key = Object.keys(message.buffers);
                for (let i = 0; i < key.length; ++i) {
                    let error = $root.Zko.ZkBuffer.verify(message.buffers[key[i]]);
                    if (error)
                        return "buffers." + error;
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
            if (object.bufferKeys) {
                if (typeof object.bufferKeys !== "object")
                    throw TypeError(".Zko.ZkMesh.bufferKeys: object expected");
                message.bufferKeys = {};
                for (let keys = Object.keys(object.bufferKeys), i = 0; i < keys.length; ++i) {
                    if (typeof object.bufferKeys[keys[i]] !== "object")
                        throw TypeError(".Zko.ZkMesh.bufferKeys: object expected");
                    message.bufferKeys[keys[i]] = $root.Zko.ZkBufferKey.fromObject(object.bufferKeys[keys[i]]);
                }
            }
            if (object.buffers) {
                if (typeof object.buffers !== "object")
                    throw TypeError(".Zko.ZkMesh.buffers: object expected");
                message.buffers = {};
                for (let keys = Object.keys(object.buffers), i = 0; i < keys.length; ++i) {
                    if (typeof object.buffers[keys[i]] !== "object")
                        throw TypeError(".Zko.ZkMesh.buffers: object expected");
                    message.buffers[keys[i]] = $root.Zko.ZkBuffer.fromObject(object.buffers[keys[i]]);
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
            if (options.objects || options.defaults) {
                object.bufferKeys = {};
                object.buffers = {};
            }
            let keys2;
            if (message.bufferKeys && (keys2 = Object.keys(message.bufferKeys)).length) {
                object.bufferKeys = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.bufferKeys[keys2[j]] = $root.Zko.ZkBufferKey.toObject(message.bufferKeys[keys2[j]], options);
            }
            if (message.buffers && (keys2 = Object.keys(message.buffers)).length) {
                object.buffers = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.buffers[keys2[j]] = $root.Zko.ZkBuffer.toObject(message.buffers[keys2[j]], options);
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
         * @property {number} id ZkBufferKey id
         * @property {Zko.ZDataType} dataType ZkBufferKey dataType
         * @property {number} size ZkBufferKey size
         * @property {number} count ZkBufferKey count
         * @property {boolean} normalized ZkBufferKey normalized
         * @property {number} offset ZkBufferKey offset
         * @property {number} stride ZkBufferKey stride
         * @property {boolean} isIndexBuffer ZkBufferKey isIndexBuffer
         * @property {number} bufferId ZkBufferKey bufferId
         */

        /**
         * Constructs a new ZkBufferKey.
         * @memberof Zko
         * @classdesc Represents a ZkBufferKey.
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
         * ZkBufferKey id.
         * @member {number} id
         * @memberof Zko.ZkBufferKey
         * @instance
         */
        ZkBufferKey.prototype.id = 0;

        /**
         * ZkBufferKey dataType.
         * @member {Zko.ZDataType} dataType
         * @memberof Zko.ZkBufferKey
         * @instance
         */
        ZkBufferKey.prototype.dataType = 0;

        /**
         * ZkBufferKey size.
         * @member {number} size
         * @memberof Zko.ZkBufferKey
         * @instance
         */
        ZkBufferKey.prototype.size = 0;

        /**
         * ZkBufferKey count.
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
         * ZkBufferKey stride.
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
         * ZkBufferKey bufferId.
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
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.dataType);
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.size);
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.count);
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.normalized);
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.offset);
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.stride);
            writer.uint32(/* id 8, wireType 0 =*/64).bool(message.isIndexBuffer);
            writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.bufferId);
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
                        message.dataType = reader.int32();
                        break;
                    }
                case 3: {
                        message.size = reader.uint32();
                        break;
                    }
                case 4: {
                        message.count = reader.uint32();
                        break;
                    }
                case 5: {
                        message.normalized = reader.bool();
                        break;
                    }
                case 6: {
                        message.offset = reader.uint32();
                        break;
                    }
                case 7: {
                        message.stride = reader.uint32();
                        break;
                    }
                case 8: {
                        message.isIndexBuffer = reader.bool();
                        break;
                    }
                case 9: {
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
            switch (message.dataType) {
            default:
                return "dataType: enum value expected";
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
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
                break;
            }
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
            switch (object.dataType) {
            default:
                if (typeof object.dataType === "number") {
                    message.dataType = object.dataType;
                    break;
                }
                break;
            case "BYTE":
            case 0:
                message.dataType = 0;
                break;
            case "UBYTE":
            case 1:
                message.dataType = 1;
                break;
            case "SHORT":
            case 2:
                message.dataType = 2;
                break;
            case "USHORT":
            case 3:
                message.dataType = 3;
                break;
            case "INT":
            case 4:
                message.dataType = 4;
                break;
            case "UINT":
            case 5:
                message.dataType = 5;
                break;
            case "FLOAT":
            case 6:
                message.dataType = 6;
                break;
            case "DOUBLE":
            case 7:
                message.dataType = 7;
                break;
            case "VEC2F":
            case 8:
                message.dataType = 8;
                break;
            case "VEC3F":
            case 9:
                message.dataType = 9;
                break;
            case "VEC4F":
            case 10:
                message.dataType = 10;
                break;
            case "MAT2F":
            case 11:
                message.dataType = 11;
                break;
            case "MAT3F":
            case 12:
                message.dataType = 12;
                break;
            case "MAT4F":
            case 13:
                message.dataType = 13;
                break;
            case "TEXTURE":
            case 14:
                message.dataType = 14;
                break;
            }
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
                object.dataType = options.enums === String ? "BYTE" : 0;
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
                object.dataType = options.enums === String ? $root.Zko.ZDataType[message.dataType] === undefined ? message.dataType : $root.Zko.ZDataType[message.dataType] : message.dataType;
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

    Zko.ZkBuffer = (function() {

        /**
         * Properties of a ZkBuffer.
         * @memberof Zko
         * @interface IZkBuffer
         * @property {number} id ZkBuffer id
         * @property {Uint8Array} dataArray ZkBuffer dataArray
         */

        /**
         * Constructs a new ZkBuffer.
         * @memberof Zko
         * @classdesc Represents a ZkBuffer.
         * @implements IZkBuffer
         * @constructor
         * @param {Zko.IZkBuffer=} [properties] Properties to set
         */
        function ZkBuffer(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZkBuffer id.
         * @member {number} id
         * @memberof Zko.ZkBuffer
         * @instance
         */
        ZkBuffer.prototype.id = 0;

        /**
         * ZkBuffer dataArray.
         * @member {Uint8Array} dataArray
         * @memberof Zko.ZkBuffer
         * @instance
         */
        ZkBuffer.prototype.dataArray = $util.newBuffer([]);

        /**
         * Creates a new ZkBuffer instance using the specified properties.
         * @function create
         * @memberof Zko.ZkBuffer
         * @static
         * @param {Zko.IZkBuffer=} [properties] Properties to set
         * @returns {Zko.ZkBuffer} ZkBuffer instance
         */
        ZkBuffer.create = function create(properties) {
            return new ZkBuffer(properties);
        };

        /**
         * Encodes the specified ZkBuffer message. Does not implicitly {@link Zko.ZkBuffer.verify|verify} messages.
         * @function encode
         * @memberof Zko.ZkBuffer
         * @static
         * @param {Zko.ZkBuffer} message ZkBuffer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZkBuffer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.dataArray);
            return writer;
        };

        /**
         * Decodes a ZkBuffer message from the specified reader or buffer.
         * @function decode
         * @memberof Zko.ZkBuffer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zko.ZkBuffer} ZkBuffer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZkBuffer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zko.ZkBuffer();
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
         * Verifies a ZkBuffer message.
         * @function verify
         * @memberof Zko.ZkBuffer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZkBuffer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!(message.dataArray && typeof message.dataArray.length === "number" || $util.isString(message.dataArray)))
                return "dataArray: buffer expected";
            return null;
        };

        /**
         * Creates a ZkBuffer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zko.ZkBuffer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zko.ZkBuffer} ZkBuffer
         */
        ZkBuffer.fromObject = function fromObject(object) {
            if (object instanceof $root.Zko.ZkBuffer)
                return object;
            let message = new $root.Zko.ZkBuffer();
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
         * Creates a plain object from a ZkBuffer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zko.ZkBuffer
         * @static
         * @param {Zko.ZkBuffer} message ZkBuffer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZkBuffer.toObject = function toObject(message, options) {
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
         * Converts this ZkBuffer to JSON.
         * @function toJSON
         * @memberof Zko.ZkBuffer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZkBuffer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ZkBuffer
         * @function getTypeUrl
         * @memberof Zko.ZkBuffer
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ZkBuffer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Zko.ZkBuffer";
        };

        return ZkBuffer;
    })();

    Zko.ZkShaderProgram = (function() {

        /**
         * Properties of a ZkShaderProgram.
         * @memberof Zko
         * @interface IZkShaderProgram
         * @property {Zko.ZkShader} vertexShader ZkShaderProgram vertexShader
         * @property {Zko.ZkShader} fragmentShader ZkShaderProgram fragmentShader
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
         * ZkShaderProgram vertexShader.
         * @member {Zko.ZkShader} vertexShader
         * @memberof Zko.ZkShaderProgram
         * @instance
         */
        ZkShaderProgram.prototype.vertexShader = null;

        /**
         * ZkShaderProgram fragmentShader.
         * @member {Zko.ZkShader} fragmentShader
         * @memberof Zko.ZkShaderProgram
         * @instance
         */
        ZkShaderProgram.prototype.fragmentShader = null;

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
            $root.Zko.ZkShader.encode(message.vertexShader, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            $root.Zko.ZkShader.encode(message.fragmentShader, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                case 1: {
                        message.vertexShader = $root.Zko.ZkShader.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.fragmentShader = $root.Zko.ZkShader.decode(reader, reader.uint32());
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
            if (!message.hasOwnProperty("vertexShader"))
                throw $util.ProtocolError("missing required 'vertexShader'", { instance: message });
            if (!message.hasOwnProperty("fragmentShader"))
                throw $util.ProtocolError("missing required 'fragmentShader'", { instance: message });
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
            {
                let error = $root.Zko.ZkShader.verify(message.vertexShader);
                if (error)
                    return "vertexShader." + error;
            }
            {
                let error = $root.Zko.ZkShader.verify(message.fragmentShader);
                if (error)
                    return "fragmentShader." + error;
            }
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
            if (object.vertexShader != null) {
                if (typeof object.vertexShader !== "object")
                    throw TypeError(".Zko.ZkShaderProgram.vertexShader: object expected");
                message.vertexShader = $root.Zko.ZkShader.fromObject(object.vertexShader);
            }
            if (object.fragmentShader != null) {
                if (typeof object.fragmentShader !== "object")
                    throw TypeError(".Zko.ZkShaderProgram.fragmentShader: object expected");
                message.fragmentShader = $root.Zko.ZkShader.fromObject(object.fragmentShader);
            }
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
            if (options.defaults) {
                object.vertexShader = null;
                object.fragmentShader = null;
            }
            if (message.vertexShader != null && message.hasOwnProperty("vertexShader"))
                object.vertexShader = $root.Zko.ZkShader.toObject(message.vertexShader, options);
            if (message.fragmentShader != null && message.hasOwnProperty("fragmentShader"))
                object.fragmentShader = $root.Zko.ZkShader.toObject(message.fragmentShader, options);
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

    Zko.ZkShader = (function() {

        /**
         * Properties of a ZkShader.
         * @memberof Zko
         * @interface IZkShader
         * @property {string} type ZkShader type
         * @property {string} source ZkShader source
         */

        /**
         * Constructs a new ZkShader.
         * @memberof Zko
         * @classdesc Represents a ZkShader.
         * @implements IZkShader
         * @constructor
         * @param {Zko.IZkShader=} [properties] Properties to set
         */
        function ZkShader(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZkShader type.
         * @member {string} type
         * @memberof Zko.ZkShader
         * @instance
         */
        ZkShader.prototype.type = "";

        /**
         * ZkShader source.
         * @member {string} source
         * @memberof Zko.ZkShader
         * @instance
         */
        ZkShader.prototype.source = "";

        /**
         * Creates a new ZkShader instance using the specified properties.
         * @function create
         * @memberof Zko.ZkShader
         * @static
         * @param {Zko.IZkShader=} [properties] Properties to set
         * @returns {Zko.ZkShader} ZkShader instance
         */
        ZkShader.create = function create(properties) {
            return new ZkShader(properties);
        };

        /**
         * Encodes the specified ZkShader message. Does not implicitly {@link Zko.ZkShader.verify|verify} messages.
         * @function encode
         * @memberof Zko.ZkShader
         * @static
         * @param {Zko.ZkShader} message ZkShader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZkShader.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.source);
            return writer;
        };

        /**
         * Decodes a ZkShader message from the specified reader or buffer.
         * @function decode
         * @memberof Zko.ZkShader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zko.ZkShader} ZkShader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZkShader.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zko.ZkShader();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.string();
                        break;
                    }
                case 2: {
                        message.source = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("source"))
                throw $util.ProtocolError("missing required 'source'", { instance: message });
            return message;
        };

        /**
         * Verifies a ZkShader message.
         * @function verify
         * @memberof Zko.ZkShader
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZkShader.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.type))
                return "type: string expected";
            if (!$util.isString(message.source))
                return "source: string expected";
            return null;
        };

        /**
         * Creates a ZkShader message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zko.ZkShader
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zko.ZkShader} ZkShader
         */
        ZkShader.fromObject = function fromObject(object) {
            if (object instanceof $root.Zko.ZkShader)
                return object;
            let message = new $root.Zko.ZkShader();
            if (object.type != null)
                message.type = String(object.type);
            if (object.source != null)
                message.source = String(object.source);
            return message;
        };

        /**
         * Creates a plain object from a ZkShader message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zko.ZkShader
         * @static
         * @param {Zko.ZkShader} message ZkShader
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZkShader.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.type = "";
                object.source = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.source != null && message.hasOwnProperty("source"))
                object.source = message.source;
            return object;
        };

        /**
         * Converts this ZkShader to JSON.
         * @function toJSON
         * @memberof Zko.ZkShader
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZkShader.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ZkShader
         * @function getTypeUrl
         * @memberof Zko.ZkShader
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ZkShader.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Zko.ZkShader";
        };

        return ZkShader;
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
         * @property {Zko.ZDataType} dataType ZkShaderUniform dataType
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
         * @member {Zko.ZDataType} dataType
         * @memberof Zko.ZkShaderUniform
         * @instance
         */
        ZkShaderUniform.prototype.dataType = 0;

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
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.dataType);
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
                        message.dataType = reader.int32();
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
            switch (message.dataType) {
            default:
                return "dataType: enum value expected";
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
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
                break;
            }
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
            switch (object.dataType) {
            default:
                if (typeof object.dataType === "number") {
                    message.dataType = object.dataType;
                    break;
                }
                break;
            case "BYTE":
            case 0:
                message.dataType = 0;
                break;
            case "UBYTE":
            case 1:
                message.dataType = 1;
                break;
            case "SHORT":
            case 2:
                message.dataType = 2;
                break;
            case "USHORT":
            case 3:
                message.dataType = 3;
                break;
            case "INT":
            case 4:
                message.dataType = 4;
                break;
            case "UINT":
            case 5:
                message.dataType = 5;
                break;
            case "FLOAT":
            case 6:
                message.dataType = 6;
                break;
            case "DOUBLE":
            case 7:
                message.dataType = 7;
                break;
            case "VEC2F":
            case 8:
                message.dataType = 8;
                break;
            case "VEC3F":
            case 9:
                message.dataType = 9;
                break;
            case "VEC4F":
            case 10:
                message.dataType = 10;
                break;
            case "MAT2F":
            case 11:
                message.dataType = 11;
                break;
            case "MAT3F":
            case 12:
                message.dataType = 12;
                break;
            case "MAT4F":
            case 13:
                message.dataType = 13;
                break;
            case "TEXTURE":
            case 14:
                message.dataType = 14;
                break;
            }
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
                object.dataType = options.enums === String ? "BYTE" : 0;
            }
            if (message.uniformName != null && message.hasOwnProperty("uniformName"))
                object.uniformName = message.uniformName;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            if (message.dataType != null && message.hasOwnProperty("dataType"))
                object.dataType = options.enums === String ? $root.Zko.ZDataType[message.dataType] === undefined ? message.dataType : $root.Zko.ZDataType[message.dataType] : message.dataType;
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

export const ZkMaterial = $root.ZkMaterial = (() => {

    /**
     * Properties of a ZkMaterial.
     * @exports IZkMaterial
     * @interface IZkMaterial
     * @property {ZkTexture|null} [texture] ZkMaterial texture
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
     * @member {ZkTexture|null|undefined} texture
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
            $root.ZkTexture.encode(message.texture, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                    message.texture = $root.ZkTexture.decode(reader, reader.uint32());
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
            let error = $root.ZkTexture.verify(message.texture);
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
            message.texture = $root.ZkTexture.fromObject(object.texture);
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
            object.texture = $root.ZkTexture.toObject(message.texture, options);
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

export const ZkTexture = $root.ZkTexture = (() => {

    /**
     * Properties of a ZkTexture.
     * @exports IZkTexture
     * @interface IZkTexture
     * @property {string} id ZkTexture id
     * @property {Uint8Array} dataArray ZkTexture dataArray
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
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.dataArray);
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
        if (!$util.isString(message.id))
            return "id: string expected";
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
