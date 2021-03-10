/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Character = (function() {

    /**
     * Properties of a Character.
     * @exports ICharacter
     * @interface ICharacter
     * @property {number|null} [id] Character id
     * @property {string|null} [name] Character name
     * @property {number|null} [height] Character height
     * @property {number|null} [mass] Character mass
     * @property {Color|null} [hairColor] Character hairColor
     * @property {Color|null} [skinColor] Character skinColor
     * @property {Color|null} [eyeColor] Character eyeColor
     * @property {number|null} [birthYear] Character birthYear
     * @property {Gender|null} [gender] Character gender
     * @property {IPlanet|null} [homeworld] Character homeworld
     * @property {ISpecies|null} [species] Character species
     * @property {Affiliation|null} [mainAffiliation] Character mainAffiliation
     */

    /**
     * Constructs a new Character.
     * @exports Character
     * @classdesc Represents a Character.
     * @implements ICharacter
     * @constructor
     * @param {ICharacter=} [properties] Properties to set
     */
    function Character(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Character id.
     * @member {number} id
     * @memberof Character
     * @instance
     */
    Character.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Character name.
     * @member {string} name
     * @memberof Character
     * @instance
     */
    Character.prototype.name = "";

    /**
     * Character height.
     * @member {number} height
     * @memberof Character
     * @instance
     */
    Character.prototype.height = 0;

    /**
     * Character mass.
     * @member {number} mass
     * @memberof Character
     * @instance
     */
    Character.prototype.mass = 0;

    /**
     * Character hairColor.
     * @member {Color} hairColor
     * @memberof Character
     * @instance
     */
    Character.prototype.hairColor = 0;

    /**
     * Character skinColor.
     * @member {Color} skinColor
     * @memberof Character
     * @instance
     */
    Character.prototype.skinColor = 0;

    /**
     * Character eyeColor.
     * @member {Color} eyeColor
     * @memberof Character
     * @instance
     */
    Character.prototype.eyeColor = 0;

    /**
     * Character birthYear.
     * @member {number} birthYear
     * @memberof Character
     * @instance
     */
    Character.prototype.birthYear = 0;

    /**
     * Character gender.
     * @member {Gender} gender
     * @memberof Character
     * @instance
     */
    Character.prototype.gender = 0;

    /**
     * Character homeworld.
     * @member {IPlanet|null|undefined} homeworld
     * @memberof Character
     * @instance
     */
    Character.prototype.homeworld = null;

    /**
     * Character species.
     * @member {ISpecies|null|undefined} species
     * @memberof Character
     * @instance
     */
    Character.prototype.species = null;

    /**
     * Character mainAffiliation.
     * @member {Affiliation} mainAffiliation
     * @memberof Character
     * @instance
     */
    Character.prototype.mainAffiliation = 0;

    /**
     * Creates a new Character instance using the specified properties.
     * @function create
     * @memberof Character
     * @static
     * @param {ICharacter=} [properties] Properties to set
     * @returns {Character} Character instance
     */
    Character.create = function create(properties) {
        return new Character(properties);
    };

    /**
     * Encodes the specified Character message. Does not implicitly {@link Character.verify|verify} messages.
     * @function encode
     * @memberof Character
     * @static
     * @param {ICharacter} message Character message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Character.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.height != null && Object.hasOwnProperty.call(message, "height"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.height);
        if (message.mass != null && Object.hasOwnProperty.call(message, "mass"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.mass);
        if (message.hairColor != null && Object.hasOwnProperty.call(message, "hairColor"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.hairColor);
        if (message.skinColor != null && Object.hasOwnProperty.call(message, "skinColor"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.skinColor);
        if (message.eyeColor != null && Object.hasOwnProperty.call(message, "eyeColor"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.eyeColor);
        if (message.birthYear != null && Object.hasOwnProperty.call(message, "birthYear"))
            writer.uint32(/* id 8, wireType 5 =*/69).float(message.birthYear);
        if (message.gender != null && Object.hasOwnProperty.call(message, "gender"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.gender);
        if (message.homeworld != null && Object.hasOwnProperty.call(message, "homeworld"))
            $root.Planet.encode(message.homeworld, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.species != null && Object.hasOwnProperty.call(message, "species"))
            $root.Species.encode(message.species, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.mainAffiliation != null && Object.hasOwnProperty.call(message, "mainAffiliation"))
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.mainAffiliation);
        return writer;
    };

    /**
     * Encodes the specified Character message, length delimited. Does not implicitly {@link Character.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Character
     * @static
     * @param {ICharacter} message Character message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Character.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Character message from the specified reader or buffer.
     * @function decode
     * @memberof Character
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Character} Character
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Character.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Character();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.uint64();
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.height = reader.int32();
                break;
            case 4:
                message.mass = reader.int32();
                break;
            case 5:
                message.hairColor = reader.int32();
                break;
            case 6:
                message.skinColor = reader.int32();
                break;
            case 7:
                message.eyeColor = reader.int32();
                break;
            case 8:
                message.birthYear = reader.float();
                break;
            case 9:
                message.gender = reader.int32();
                break;
            case 10:
                message.homeworld = $root.Planet.decode(reader, reader.uint32());
                break;
            case 11:
                message.species = $root.Species.decode(reader, reader.uint32());
                break;
            case 12:
                message.mainAffiliation = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Character message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Character
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Character} Character
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Character.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Character message.
     * @function verify
     * @memberof Character
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Character.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.height != null && message.hasOwnProperty("height"))
            if (!$util.isInteger(message.height))
                return "height: integer expected";
        if (message.mass != null && message.hasOwnProperty("mass"))
            if (!$util.isInteger(message.mass))
                return "mass: integer expected";
        if (message.hairColor != null && message.hasOwnProperty("hairColor"))
            switch (message.hairColor) {
            default:
                return "hairColor: enum value expected";
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
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
                break;
            }
        if (message.skinColor != null && message.hasOwnProperty("skinColor"))
            switch (message.skinColor) {
            default:
                return "skinColor: enum value expected";
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
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
                break;
            }
        if (message.eyeColor != null && message.hasOwnProperty("eyeColor"))
            switch (message.eyeColor) {
            default:
                return "eyeColor: enum value expected";
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
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
                break;
            }
        if (message.birthYear != null && message.hasOwnProperty("birthYear"))
            if (typeof message.birthYear !== "number")
                return "birthYear: number expected";
        if (message.gender != null && message.hasOwnProperty("gender"))
            switch (message.gender) {
            default:
                return "gender: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
        if (message.homeworld != null && message.hasOwnProperty("homeworld")) {
            var error = $root.Planet.verify(message.homeworld);
            if (error)
                return "homeworld." + error;
        }
        if (message.species != null && message.hasOwnProperty("species")) {
            var error = $root.Species.verify(message.species);
            if (error)
                return "species." + error;
        }
        if (message.mainAffiliation != null && message.hasOwnProperty("mainAffiliation"))
            switch (message.mainAffiliation) {
            default:
                return "mainAffiliation: enum value expected";
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
                break;
            }
        return null;
    };

    /**
     * Creates a Character message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Character
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Character} Character
     */
    Character.fromObject = function fromObject(object) {
        if (object instanceof $root.Character)
            return object;
        var message = new $root.Character();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = true;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
        if (object.name != null)
            message.name = String(object.name);
        if (object.height != null)
            message.height = object.height | 0;
        if (object.mass != null)
            message.mass = object.mass | 0;
        switch (object.hairColor) {
        case "BLACK":
        case 0:
            message.hairColor = 0;
            break;
        case "BLOND":
        case 1:
            message.hairColor = 1;
            break;
        case "BLUE":
        case 2:
            message.hairColor = 2;
            break;
        case "BLUE_GRAY":
        case 3:
            message.hairColor = 3;
            break;
        case "BROWN":
        case 4:
            message.hairColor = 4;
            break;
        case "DARK":
        case 5:
            message.hairColor = 5;
            break;
        case "FAIR":
        case 6:
            message.hairColor = 6;
            break;
        case "GOLD":
        case 7:
            message.hairColor = 7;
            break;
        case "GREEN":
        case 8:
            message.hairColor = 8;
            break;
        case "GREY":
        case 9:
            message.hairColor = 9;
            break;
        case "HAZEL":
        case 10:
            message.hairColor = 10;
            break;
        case "LIGHT":
        case 11:
            message.hairColor = 11;
            break;
        case "METAL":
        case 12:
            message.hairColor = 12;
            break;
        case "NONE":
        case 13:
            message.hairColor = 13;
            break;
        case "ORANGE":
        case 14:
            message.hairColor = 14;
            break;
        case "PALE":
        case 15:
            message.hairColor = 15;
            break;
        case "PINK":
        case 16:
            message.hairColor = 16;
            break;
        case "RED":
        case 17:
            message.hairColor = 17;
            break;
        case "SILVER":
        case 18:
            message.hairColor = 18;
            break;
        case "TAN":
        case 19:
            message.hairColor = 19;
            break;
        case "WHITE":
        case 20:
            message.hairColor = 20;
            break;
        case "YELLOW":
        case 21:
            message.hairColor = 21;
            break;
        }
        switch (object.skinColor) {
        case "BLACK":
        case 0:
            message.skinColor = 0;
            break;
        case "BLOND":
        case 1:
            message.skinColor = 1;
            break;
        case "BLUE":
        case 2:
            message.skinColor = 2;
            break;
        case "BLUE_GRAY":
        case 3:
            message.skinColor = 3;
            break;
        case "BROWN":
        case 4:
            message.skinColor = 4;
            break;
        case "DARK":
        case 5:
            message.skinColor = 5;
            break;
        case "FAIR":
        case 6:
            message.skinColor = 6;
            break;
        case "GOLD":
        case 7:
            message.skinColor = 7;
            break;
        case "GREEN":
        case 8:
            message.skinColor = 8;
            break;
        case "GREY":
        case 9:
            message.skinColor = 9;
            break;
        case "HAZEL":
        case 10:
            message.skinColor = 10;
            break;
        case "LIGHT":
        case 11:
            message.skinColor = 11;
            break;
        case "METAL":
        case 12:
            message.skinColor = 12;
            break;
        case "NONE":
        case 13:
            message.skinColor = 13;
            break;
        case "ORANGE":
        case 14:
            message.skinColor = 14;
            break;
        case "PALE":
        case 15:
            message.skinColor = 15;
            break;
        case "PINK":
        case 16:
            message.skinColor = 16;
            break;
        case "RED":
        case 17:
            message.skinColor = 17;
            break;
        case "SILVER":
        case 18:
            message.skinColor = 18;
            break;
        case "TAN":
        case 19:
            message.skinColor = 19;
            break;
        case "WHITE":
        case 20:
            message.skinColor = 20;
            break;
        case "YELLOW":
        case 21:
            message.skinColor = 21;
            break;
        }
        switch (object.eyeColor) {
        case "BLACK":
        case 0:
            message.eyeColor = 0;
            break;
        case "BLOND":
        case 1:
            message.eyeColor = 1;
            break;
        case "BLUE":
        case 2:
            message.eyeColor = 2;
            break;
        case "BLUE_GRAY":
        case 3:
            message.eyeColor = 3;
            break;
        case "BROWN":
        case 4:
            message.eyeColor = 4;
            break;
        case "DARK":
        case 5:
            message.eyeColor = 5;
            break;
        case "FAIR":
        case 6:
            message.eyeColor = 6;
            break;
        case "GOLD":
        case 7:
            message.eyeColor = 7;
            break;
        case "GREEN":
        case 8:
            message.eyeColor = 8;
            break;
        case "GREY":
        case 9:
            message.eyeColor = 9;
            break;
        case "HAZEL":
        case 10:
            message.eyeColor = 10;
            break;
        case "LIGHT":
        case 11:
            message.eyeColor = 11;
            break;
        case "METAL":
        case 12:
            message.eyeColor = 12;
            break;
        case "NONE":
        case 13:
            message.eyeColor = 13;
            break;
        case "ORANGE":
        case 14:
            message.eyeColor = 14;
            break;
        case "PALE":
        case 15:
            message.eyeColor = 15;
            break;
        case "PINK":
        case 16:
            message.eyeColor = 16;
            break;
        case "RED":
        case 17:
            message.eyeColor = 17;
            break;
        case "SILVER":
        case 18:
            message.eyeColor = 18;
            break;
        case "TAN":
        case 19:
            message.eyeColor = 19;
            break;
        case "WHITE":
        case 20:
            message.eyeColor = 20;
            break;
        case "YELLOW":
        case 21:
            message.eyeColor = 21;
            break;
        }
        if (object.birthYear != null)
            message.birthYear = Number(object.birthYear);
        switch (object.gender) {
        case "MALE":
        case 0:
            message.gender = 0;
            break;
        case "FEMALE":
        case 1:
            message.gender = 1;
            break;
        case "HERMAPHRODITE":
        case 2:
            message.gender = 2;
            break;
        case "NA":
        case 3:
            message.gender = 3;
            break;
        }
        if (object.homeworld != null) {
            if (typeof object.homeworld !== "object")
                throw TypeError(".Character.homeworld: object expected");
            message.homeworld = $root.Planet.fromObject(object.homeworld);
        }
        if (object.species != null) {
            if (typeof object.species !== "object")
                throw TypeError(".Character.species: object expected");
            message.species = $root.Species.fromObject(object.species);
        }
        switch (object.mainAffiliation) {
        case "JEDI_ORDER":
        case 0:
            message.mainAffiliation = 0;
            break;
        case "SITH_ORDER":
        case 1:
            message.mainAffiliation = 1;
            break;
        case "GALACTIC_REPUBLIC":
        case 2:
            message.mainAffiliation = 2;
            break;
        case "REBEL_ALLIANCE":
        case 3:
            message.mainAffiliation = 3;
            break;
        case "GALACTIC_EMPIRE":
        case 4:
            message.mainAffiliation = 4;
            break;
        case "RESISTANCE":
        case 5:
            message.mainAffiliation = 5;
            break;
        case "NEW_REPUBLIC":
        case 6:
            message.mainAffiliation = 6;
            break;
        case "FIRST_ORDER":
        case 7:
            message.mainAffiliation = 7;
            break;
        case "CONFEDERACY_OF_INDEPENDENT_SYSTEMS":
        case 8:
            message.mainAffiliation = 8;
            break;
        case "TRADE_FEDERATION":
        case 9:
            message.mainAffiliation = 9;
            break;
        case "BOUNTY_HUNTERS":
        case 10:
            message.mainAffiliation = 10;
            break;
        case "MERCENARIES":
        case 11:
            message.mainAffiliation = 11;
            break;
        case "CRIMINALS":
        case 12:
            message.mainAffiliation = 12;
            break;
        case "UNAFFILIATED":
        case 13:
            message.mainAffiliation = 13;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a Character message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Character
     * @static
     * @param {Character} message Character
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Character.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
            object.name = "";
            object.height = 0;
            object.mass = 0;
            object.hairColor = options.enums === String ? "BLACK" : 0;
            object.skinColor = options.enums === String ? "BLACK" : 0;
            object.eyeColor = options.enums === String ? "BLACK" : 0;
            object.birthYear = 0;
            object.gender = options.enums === String ? "MALE" : 0;
            object.homeworld = null;
            object.species = null;
            object.mainAffiliation = options.enums === String ? "JEDI_ORDER" : 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.height != null && message.hasOwnProperty("height"))
            object.height = message.height;
        if (message.mass != null && message.hasOwnProperty("mass"))
            object.mass = message.mass;
        if (message.hairColor != null && message.hasOwnProperty("hairColor"))
            object.hairColor = options.enums === String ? $root.Color[message.hairColor] : message.hairColor;
        if (message.skinColor != null && message.hasOwnProperty("skinColor"))
            object.skinColor = options.enums === String ? $root.Color[message.skinColor] : message.skinColor;
        if (message.eyeColor != null && message.hasOwnProperty("eyeColor"))
            object.eyeColor = options.enums === String ? $root.Color[message.eyeColor] : message.eyeColor;
        if (message.birthYear != null && message.hasOwnProperty("birthYear"))
            object.birthYear = options.json && !isFinite(message.birthYear) ? String(message.birthYear) : message.birthYear;
        if (message.gender != null && message.hasOwnProperty("gender"))
            object.gender = options.enums === String ? $root.Gender[message.gender] : message.gender;
        if (message.homeworld != null && message.hasOwnProperty("homeworld"))
            object.homeworld = $root.Planet.toObject(message.homeworld, options);
        if (message.species != null && message.hasOwnProperty("species"))
            object.species = $root.Species.toObject(message.species, options);
        if (message.mainAffiliation != null && message.hasOwnProperty("mainAffiliation"))
            object.mainAffiliation = options.enums === String ? $root.Affiliation[message.mainAffiliation] : message.mainAffiliation;
        return object;
    };

    /**
     * Converts this Character to JSON.
     * @function toJSON
     * @memberof Character
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Character.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Character;
})();

$root.Characters = (function() {

    /**
     * Properties of a Characters.
     * @exports ICharacters
     * @interface ICharacters
     * @property {Array.<ICharacter>|null} [values] Characters values
     */

    /**
     * Constructs a new Characters.
     * @exports Characters
     * @classdesc Represents a Characters.
     * @implements ICharacters
     * @constructor
     * @param {ICharacters=} [properties] Properties to set
     */
    function Characters(properties) {
        this.values = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Characters values.
     * @member {Array.<ICharacter>} values
     * @memberof Characters
     * @instance
     */
    Characters.prototype.values = $util.emptyArray;

    /**
     * Creates a new Characters instance using the specified properties.
     * @function create
     * @memberof Characters
     * @static
     * @param {ICharacters=} [properties] Properties to set
     * @returns {Characters} Characters instance
     */
    Characters.create = function create(properties) {
        return new Characters(properties);
    };

    /**
     * Encodes the specified Characters message. Does not implicitly {@link Characters.verify|verify} messages.
     * @function encode
     * @memberof Characters
     * @static
     * @param {ICharacters} message Characters message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Characters.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.values != null && message.values.length)
            for (var i = 0; i < message.values.length; ++i)
                $root.Character.encode(message.values[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Characters message, length delimited. Does not implicitly {@link Characters.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Characters
     * @static
     * @param {ICharacters} message Characters message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Characters.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Characters message from the specified reader or buffer.
     * @function decode
     * @memberof Characters
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Characters} Characters
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Characters.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Characters();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.values && message.values.length))
                    message.values = [];
                message.values.push($root.Character.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Characters message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Characters
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Characters} Characters
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Characters.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Characters message.
     * @function verify
     * @memberof Characters
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Characters.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.values != null && message.hasOwnProperty("values")) {
            if (!Array.isArray(message.values))
                return "values: array expected";
            for (var i = 0; i < message.values.length; ++i) {
                var error = $root.Character.verify(message.values[i]);
                if (error)
                    return "values." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Characters message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Characters
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Characters} Characters
     */
    Characters.fromObject = function fromObject(object) {
        if (object instanceof $root.Characters)
            return object;
        var message = new $root.Characters();
        if (object.values) {
            if (!Array.isArray(object.values))
                throw TypeError(".Characters.values: array expected");
            message.values = [];
            for (var i = 0; i < object.values.length; ++i) {
                if (typeof object.values[i] !== "object")
                    throw TypeError(".Characters.values: object expected");
                message.values[i] = $root.Character.fromObject(object.values[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Characters message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Characters
     * @static
     * @param {Characters} message Characters
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Characters.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.values = [];
        if (message.values && message.values.length) {
            object.values = [];
            for (var j = 0; j < message.values.length; ++j)
                object.values[j] = $root.Character.toObject(message.values[j], options);
        }
        return object;
    };

    /**
     * Converts this Characters to JSON.
     * @function toJSON
     * @memberof Characters
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Characters.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Characters;
})();

$root.Planet = (function() {

    /**
     * Properties of a Planet.
     * @exports IPlanet
     * @interface IPlanet
     * @property {number|null} [id] Planet id
     * @property {string|null} [name] Planet name
     * @property {number|null} [daysToRotation] Planet daysToRotation
     * @property {number|null} [daysToOrbit] Planet daysToOrbit
     * @property {number|null} [diameterKm] Planet diameterKm
     * @property {Climate|null} [climate] Planet climate
     * @property {number|null} [standardGravity] Planet standardGravity
     * @property {string|null} [terrain] Planet terrain
     * @property {number|null} [surfaceWaterRatio] Planet surfaceWaterRatio
     * @property {number|null} [population] Planet population
     */

    /**
     * Constructs a new Planet.
     * @exports Planet
     * @classdesc Represents a Planet.
     * @implements IPlanet
     * @constructor
     * @param {IPlanet=} [properties] Properties to set
     */
    function Planet(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Planet id.
     * @member {number} id
     * @memberof Planet
     * @instance
     */
    Planet.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Planet name.
     * @member {string} name
     * @memberof Planet
     * @instance
     */
    Planet.prototype.name = "";

    /**
     * Planet daysToRotation.
     * @member {number} daysToRotation
     * @memberof Planet
     * @instance
     */
    Planet.prototype.daysToRotation = 0;

    /**
     * Planet daysToOrbit.
     * @member {number} daysToOrbit
     * @memberof Planet
     * @instance
     */
    Planet.prototype.daysToOrbit = 0;

    /**
     * Planet diameterKm.
     * @member {number} diameterKm
     * @memberof Planet
     * @instance
     */
    Planet.prototype.diameterKm = 0;

    /**
     * Planet climate.
     * @member {Climate} climate
     * @memberof Planet
     * @instance
     */
    Planet.prototype.climate = 0;

    /**
     * Planet standardGravity.
     * @member {number} standardGravity
     * @memberof Planet
     * @instance
     */
    Planet.prototype.standardGravity = 0;

    /**
     * Planet terrain.
     * @member {string} terrain
     * @memberof Planet
     * @instance
     */
    Planet.prototype.terrain = "";

    /**
     * Planet surfaceWaterRatio.
     * @member {number} surfaceWaterRatio
     * @memberof Planet
     * @instance
     */
    Planet.prototype.surfaceWaterRatio = 0;

    /**
     * Planet population.
     * @member {number} population
     * @memberof Planet
     * @instance
     */
    Planet.prototype.population = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new Planet instance using the specified properties.
     * @function create
     * @memberof Planet
     * @static
     * @param {IPlanet=} [properties] Properties to set
     * @returns {Planet} Planet instance
     */
    Planet.create = function create(properties) {
        return new Planet(properties);
    };

    /**
     * Encodes the specified Planet message. Does not implicitly {@link Planet.verify|verify} messages.
     * @function encode
     * @memberof Planet
     * @static
     * @param {IPlanet} message Planet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Planet.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.daysToRotation != null && Object.hasOwnProperty.call(message, "daysToRotation"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.daysToRotation);
        if (message.daysToOrbit != null && Object.hasOwnProperty.call(message, "daysToOrbit"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.daysToOrbit);
        if (message.diameterKm != null && Object.hasOwnProperty.call(message, "diameterKm"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.diameterKm);
        if (message.climate != null && Object.hasOwnProperty.call(message, "climate"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.climate);
        if (message.standardGravity != null && Object.hasOwnProperty.call(message, "standardGravity"))
            writer.uint32(/* id 7, wireType 5 =*/61).float(message.standardGravity);
        if (message.terrain != null && Object.hasOwnProperty.call(message, "terrain"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.terrain);
        if (message.surfaceWaterRatio != null && Object.hasOwnProperty.call(message, "surfaceWaterRatio"))
            writer.uint32(/* id 9, wireType 5 =*/77).float(message.surfaceWaterRatio);
        if (message.population != null && Object.hasOwnProperty.call(message, "population"))
            writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.population);
        return writer;
    };

    /**
     * Encodes the specified Planet message, length delimited. Does not implicitly {@link Planet.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Planet
     * @static
     * @param {IPlanet} message Planet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Planet.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Planet message from the specified reader or buffer.
     * @function decode
     * @memberof Planet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Planet} Planet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Planet.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Planet();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.uint64();
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.daysToRotation = reader.uint32();
                break;
            case 4:
                message.daysToOrbit = reader.uint32();
                break;
            case 5:
                message.diameterKm = reader.uint32();
                break;
            case 6:
                message.climate = reader.int32();
                break;
            case 7:
                message.standardGravity = reader.float();
                break;
            case 8:
                message.terrain = reader.string();
                break;
            case 9:
                message.surfaceWaterRatio = reader.float();
                break;
            case 10:
                message.population = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Planet message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Planet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Planet} Planet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Planet.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Planet message.
     * @function verify
     * @memberof Planet
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Planet.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.daysToRotation != null && message.hasOwnProperty("daysToRotation"))
            if (!$util.isInteger(message.daysToRotation))
                return "daysToRotation: integer expected";
        if (message.daysToOrbit != null && message.hasOwnProperty("daysToOrbit"))
            if (!$util.isInteger(message.daysToOrbit))
                return "daysToOrbit: integer expected";
        if (message.diameterKm != null && message.hasOwnProperty("diameterKm"))
            if (!$util.isInteger(message.diameterKm))
                return "diameterKm: integer expected";
        if (message.climate != null && message.hasOwnProperty("climate"))
            switch (message.climate) {
            default:
                return "climate: enum value expected";
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
        if (message.standardGravity != null && message.hasOwnProperty("standardGravity"))
            if (typeof message.standardGravity !== "number")
                return "standardGravity: number expected";
        if (message.terrain != null && message.hasOwnProperty("terrain"))
            if (!$util.isString(message.terrain))
                return "terrain: string expected";
        if (message.surfaceWaterRatio != null && message.hasOwnProperty("surfaceWaterRatio"))
            if (typeof message.surfaceWaterRatio !== "number")
                return "surfaceWaterRatio: number expected";
        if (message.population != null && message.hasOwnProperty("population"))
            if (!$util.isInteger(message.population) && !(message.population && $util.isInteger(message.population.low) && $util.isInteger(message.population.high)))
                return "population: integer expected";
        return null;
    };

    /**
     * Creates a Planet message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Planet
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Planet} Planet
     */
    Planet.fromObject = function fromObject(object) {
        if (object instanceof $root.Planet)
            return object;
        var message = new $root.Planet();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = true;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
        if (object.name != null)
            message.name = String(object.name);
        if (object.daysToRotation != null)
            message.daysToRotation = object.daysToRotation >>> 0;
        if (object.daysToOrbit != null)
            message.daysToOrbit = object.daysToOrbit >>> 0;
        if (object.diameterKm != null)
            message.diameterKm = object.diameterKm >>> 0;
        switch (object.climate) {
        case "TEMPERATE":
        case 0:
            message.climate = 0;
            break;
        case "HOT":
        case 1:
            message.climate = 1;
            break;
        case "ARID":
        case 2:
            message.climate = 2;
            break;
        case "MOIST":
        case 3:
            message.climate = 3;
            break;
        case "DRY":
        case 4:
            message.climate = 4;
            break;
        case "TROPICAL":
        case 5:
            message.climate = 5;
            break;
        case "ARCTIC":
        case 6:
            message.climate = 6;
            break;
        case "SUBARCTIC":
        case 7:
            message.climate = 7;
            break;
        case "UNKNOWN":
        case 8:
            message.climate = 8;
            break;
        }
        if (object.standardGravity != null)
            message.standardGravity = Number(object.standardGravity);
        if (object.terrain != null)
            message.terrain = String(object.terrain);
        if (object.surfaceWaterRatio != null)
            message.surfaceWaterRatio = Number(object.surfaceWaterRatio);
        if (object.population != null)
            if ($util.Long)
                (message.population = $util.Long.fromValue(object.population)).unsigned = true;
            else if (typeof object.population === "string")
                message.population = parseInt(object.population, 10);
            else if (typeof object.population === "number")
                message.population = object.population;
            else if (typeof object.population === "object")
                message.population = new $util.LongBits(object.population.low >>> 0, object.population.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a Planet message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Planet
     * @static
     * @param {Planet} message Planet
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Planet.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
            object.name = "";
            object.daysToRotation = 0;
            object.daysToOrbit = 0;
            object.diameterKm = 0;
            object.climate = options.enums === String ? "TEMPERATE" : 0;
            object.standardGravity = 0;
            object.terrain = "";
            object.surfaceWaterRatio = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.population = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.population = options.longs === String ? "0" : 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.daysToRotation != null && message.hasOwnProperty("daysToRotation"))
            object.daysToRotation = message.daysToRotation;
        if (message.daysToOrbit != null && message.hasOwnProperty("daysToOrbit"))
            object.daysToOrbit = message.daysToOrbit;
        if (message.diameterKm != null && message.hasOwnProperty("diameterKm"))
            object.diameterKm = message.diameterKm;
        if (message.climate != null && message.hasOwnProperty("climate"))
            object.climate = options.enums === String ? $root.Climate[message.climate] : message.climate;
        if (message.standardGravity != null && message.hasOwnProperty("standardGravity"))
            object.standardGravity = options.json && !isFinite(message.standardGravity) ? String(message.standardGravity) : message.standardGravity;
        if (message.terrain != null && message.hasOwnProperty("terrain"))
            object.terrain = message.terrain;
        if (message.surfaceWaterRatio != null && message.hasOwnProperty("surfaceWaterRatio"))
            object.surfaceWaterRatio = options.json && !isFinite(message.surfaceWaterRatio) ? String(message.surfaceWaterRatio) : message.surfaceWaterRatio;
        if (message.population != null && message.hasOwnProperty("population"))
            if (typeof message.population === "number")
                object.population = options.longs === String ? String(message.population) : message.population;
            else
                object.population = options.longs === String ? $util.Long.prototype.toString.call(message.population) : options.longs === Number ? new $util.LongBits(message.population.low >>> 0, message.population.high >>> 0).toNumber(true) : message.population;
        return object;
    };

    /**
     * Converts this Planet to JSON.
     * @function toJSON
     * @memberof Planet
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Planet.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Planet;
})();

$root.Planets = (function() {

    /**
     * Properties of a Planets.
     * @exports IPlanets
     * @interface IPlanets
     * @property {Array.<IPlanet>|null} [values] Planets values
     */

    /**
     * Constructs a new Planets.
     * @exports Planets
     * @classdesc Represents a Planets.
     * @implements IPlanets
     * @constructor
     * @param {IPlanets=} [properties] Properties to set
     */
    function Planets(properties) {
        this.values = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Planets values.
     * @member {Array.<IPlanet>} values
     * @memberof Planets
     * @instance
     */
    Planets.prototype.values = $util.emptyArray;

    /**
     * Creates a new Planets instance using the specified properties.
     * @function create
     * @memberof Planets
     * @static
     * @param {IPlanets=} [properties] Properties to set
     * @returns {Planets} Planets instance
     */
    Planets.create = function create(properties) {
        return new Planets(properties);
    };

    /**
     * Encodes the specified Planets message. Does not implicitly {@link Planets.verify|verify} messages.
     * @function encode
     * @memberof Planets
     * @static
     * @param {IPlanets} message Planets message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Planets.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.values != null && message.values.length)
            for (var i = 0; i < message.values.length; ++i)
                $root.Planet.encode(message.values[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Planets message, length delimited. Does not implicitly {@link Planets.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Planets
     * @static
     * @param {IPlanets} message Planets message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Planets.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Planets message from the specified reader or buffer.
     * @function decode
     * @memberof Planets
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Planets} Planets
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Planets.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Planets();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.values && message.values.length))
                    message.values = [];
                message.values.push($root.Planet.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Planets message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Planets
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Planets} Planets
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Planets.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Planets message.
     * @function verify
     * @memberof Planets
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Planets.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.values != null && message.hasOwnProperty("values")) {
            if (!Array.isArray(message.values))
                return "values: array expected";
            for (var i = 0; i < message.values.length; ++i) {
                var error = $root.Planet.verify(message.values[i]);
                if (error)
                    return "values." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Planets message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Planets
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Planets} Planets
     */
    Planets.fromObject = function fromObject(object) {
        if (object instanceof $root.Planets)
            return object;
        var message = new $root.Planets();
        if (object.values) {
            if (!Array.isArray(object.values))
                throw TypeError(".Planets.values: array expected");
            message.values = [];
            for (var i = 0; i < object.values.length; ++i) {
                if (typeof object.values[i] !== "object")
                    throw TypeError(".Planets.values: object expected");
                message.values[i] = $root.Planet.fromObject(object.values[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Planets message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Planets
     * @static
     * @param {Planets} message Planets
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Planets.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.values = [];
        if (message.values && message.values.length) {
            object.values = [];
            for (var j = 0; j < message.values.length; ++j)
                object.values[j] = $root.Planet.toObject(message.values[j], options);
        }
        return object;
    };

    /**
     * Converts this Planets to JSON.
     * @function toJSON
     * @memberof Planets
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Planets.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Planets;
})();

$root.Species = (function() {

    /**
     * Properties of a Species.
     * @exports ISpecies
     * @interface ISpecies
     * @property {number|null} [id] Species id
     * @property {string|null} [name] Species name
     * @property {SpeciesType|null} [speciesType] Species speciesType
     * @property {number|null} [averageHeight] Species averageHeight
     * @property {Array.<Color>|null} [skinColors] Species skinColors
     * @property {Array.<Color>|null} [hairColors] Species hairColors
     * @property {Array.<Color>|null} [eyeColors] Species eyeColors
     * @property {number|null} [averageLifespan] Species averageLifespan
     * @property {string|null} [language] Species language
     * @property {IPlanet|null} [homeworld] Species homeworld
     */

    /**
     * Constructs a new Species.
     * @exports Species
     * @classdesc Represents a Species.
     * @implements ISpecies
     * @constructor
     * @param {ISpecies=} [properties] Properties to set
     */
    function Species(properties) {
        this.skinColors = [];
        this.hairColors = [];
        this.eyeColors = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Species id.
     * @member {number} id
     * @memberof Species
     * @instance
     */
    Species.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Species name.
     * @member {string} name
     * @memberof Species
     * @instance
     */
    Species.prototype.name = "";

    /**
     * Species speciesType.
     * @member {SpeciesType} speciesType
     * @memberof Species
     * @instance
     */
    Species.prototype.speciesType = 0;

    /**
     * Species averageHeight.
     * @member {number} averageHeight
     * @memberof Species
     * @instance
     */
    Species.prototype.averageHeight = 0;

    /**
     * Species skinColors.
     * @member {Array.<Color>} skinColors
     * @memberof Species
     * @instance
     */
    Species.prototype.skinColors = $util.emptyArray;

    /**
     * Species hairColors.
     * @member {Array.<Color>} hairColors
     * @memberof Species
     * @instance
     */
    Species.prototype.hairColors = $util.emptyArray;

    /**
     * Species eyeColors.
     * @member {Array.<Color>} eyeColors
     * @memberof Species
     * @instance
     */
    Species.prototype.eyeColors = $util.emptyArray;

    /**
     * Species averageLifespan.
     * @member {number} averageLifespan
     * @memberof Species
     * @instance
     */
    Species.prototype.averageLifespan = 0;

    /**
     * Species language.
     * @member {string} language
     * @memberof Species
     * @instance
     */
    Species.prototype.language = "";

    /**
     * Species homeworld.
     * @member {IPlanet|null|undefined} homeworld
     * @memberof Species
     * @instance
     */
    Species.prototype.homeworld = null;

    /**
     * Creates a new Species instance using the specified properties.
     * @function create
     * @memberof Species
     * @static
     * @param {ISpecies=} [properties] Properties to set
     * @returns {Species} Species instance
     */
    Species.create = function create(properties) {
        return new Species(properties);
    };

    /**
     * Encodes the specified Species message. Does not implicitly {@link Species.verify|verify} messages.
     * @function encode
     * @memberof Species
     * @static
     * @param {ISpecies} message Species message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Species.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.speciesType != null && Object.hasOwnProperty.call(message, "speciesType"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.speciesType);
        if (message.averageHeight != null && Object.hasOwnProperty.call(message, "averageHeight"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.averageHeight);
        if (message.skinColors != null && message.skinColors.length) {
            writer.uint32(/* id 5, wireType 2 =*/42).fork();
            for (var i = 0; i < message.skinColors.length; ++i)
                writer.int32(message.skinColors[i]);
            writer.ldelim();
        }
        if (message.hairColors != null && message.hairColors.length) {
            writer.uint32(/* id 6, wireType 2 =*/50).fork();
            for (var i = 0; i < message.hairColors.length; ++i)
                writer.int32(message.hairColors[i]);
            writer.ldelim();
        }
        if (message.eyeColors != null && message.eyeColors.length) {
            writer.uint32(/* id 7, wireType 2 =*/58).fork();
            for (var i = 0; i < message.eyeColors.length; ++i)
                writer.int32(message.eyeColors[i]);
            writer.ldelim();
        }
        if (message.averageLifespan != null && Object.hasOwnProperty.call(message, "averageLifespan"))
            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.averageLifespan);
        if (message.language != null && Object.hasOwnProperty.call(message, "language"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.language);
        if (message.homeworld != null && Object.hasOwnProperty.call(message, "homeworld"))
            $root.Planet.encode(message.homeworld, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Species message, length delimited. Does not implicitly {@link Species.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Species
     * @static
     * @param {ISpecies} message Species message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Species.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Species message from the specified reader or buffer.
     * @function decode
     * @memberof Species
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Species} Species
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Species.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Species();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.uint64();
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.speciesType = reader.int32();
                break;
            case 4:
                message.averageHeight = reader.uint32();
                break;
            case 5:
                if (!(message.skinColors && message.skinColors.length))
                    message.skinColors = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.skinColors.push(reader.int32());
                } else
                    message.skinColors.push(reader.int32());
                break;
            case 6:
                if (!(message.hairColors && message.hairColors.length))
                    message.hairColors = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.hairColors.push(reader.int32());
                } else
                    message.hairColors.push(reader.int32());
                break;
            case 7:
                if (!(message.eyeColors && message.eyeColors.length))
                    message.eyeColors = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.eyeColors.push(reader.int32());
                } else
                    message.eyeColors.push(reader.int32());
                break;
            case 8:
                message.averageLifespan = reader.uint32();
                break;
            case 9:
                message.language = reader.string();
                break;
            case 10:
                message.homeworld = $root.Planet.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Species message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Species
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Species} Species
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Species.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Species message.
     * @function verify
     * @memberof Species
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Species.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.speciesType != null && message.hasOwnProperty("speciesType"))
            switch (message.speciesType) {
            default:
                return "speciesType: enum value expected";
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
        if (message.averageHeight != null && message.hasOwnProperty("averageHeight"))
            if (!$util.isInteger(message.averageHeight))
                return "averageHeight: integer expected";
        if (message.skinColors != null && message.hasOwnProperty("skinColors")) {
            if (!Array.isArray(message.skinColors))
                return "skinColors: array expected";
            for (var i = 0; i < message.skinColors.length; ++i)
                switch (message.skinColors[i]) {
                default:
                    return "skinColors: enum value[] expected";
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
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                    break;
                }
        }
        if (message.hairColors != null && message.hasOwnProperty("hairColors")) {
            if (!Array.isArray(message.hairColors))
                return "hairColors: array expected";
            for (var i = 0; i < message.hairColors.length; ++i)
                switch (message.hairColors[i]) {
                default:
                    return "hairColors: enum value[] expected";
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
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                    break;
                }
        }
        if (message.eyeColors != null && message.hasOwnProperty("eyeColors")) {
            if (!Array.isArray(message.eyeColors))
                return "eyeColors: array expected";
            for (var i = 0; i < message.eyeColors.length; ++i)
                switch (message.eyeColors[i]) {
                default:
                    return "eyeColors: enum value[] expected";
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
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                    break;
                }
        }
        if (message.averageLifespan != null && message.hasOwnProperty("averageLifespan"))
            if (!$util.isInteger(message.averageLifespan))
                return "averageLifespan: integer expected";
        if (message.language != null && message.hasOwnProperty("language"))
            if (!$util.isString(message.language))
                return "language: string expected";
        if (message.homeworld != null && message.hasOwnProperty("homeworld")) {
            var error = $root.Planet.verify(message.homeworld);
            if (error)
                return "homeworld." + error;
        }
        return null;
    };

    /**
     * Creates a Species message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Species
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Species} Species
     */
    Species.fromObject = function fromObject(object) {
        if (object instanceof $root.Species)
            return object;
        var message = new $root.Species();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = true;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
        if (object.name != null)
            message.name = String(object.name);
        switch (object.speciesType) {
        case "AMPHIBIAN":
        case 0:
            message.speciesType = 0;
            break;
        case "ARTIFICIAL":
        case 1:
            message.speciesType = 1;
            break;
        case "GASTROPOD":
        case 2:
            message.speciesType = 2;
            break;
        case "INSECTOID":
        case 3:
            message.speciesType = 3;
            break;
        case "MAMMAL":
        case 4:
            message.speciesType = 4;
            break;
        case "MAMMALS":
        case 5:
            message.speciesType = 5;
            break;
        case "OTHER":
        case 6:
            message.speciesType = 6;
            break;
        case "REPTILE":
        case 7:
            message.speciesType = 7;
            break;
        case "REPTILIAN":
        case 8:
            message.speciesType = 8;
            break;
        case "UNKOWN":
        case 9:
            message.speciesType = 9;
            break;
        }
        if (object.averageHeight != null)
            message.averageHeight = object.averageHeight >>> 0;
        if (object.skinColors) {
            if (!Array.isArray(object.skinColors))
                throw TypeError(".Species.skinColors: array expected");
            message.skinColors = [];
            for (var i = 0; i < object.skinColors.length; ++i)
                switch (object.skinColors[i]) {
                default:
                case "BLACK":
                case 0:
                    message.skinColors[i] = 0;
                    break;
                case "BLOND":
                case 1:
                    message.skinColors[i] = 1;
                    break;
                case "BLUE":
                case 2:
                    message.skinColors[i] = 2;
                    break;
                case "BLUE_GRAY":
                case 3:
                    message.skinColors[i] = 3;
                    break;
                case "BROWN":
                case 4:
                    message.skinColors[i] = 4;
                    break;
                case "DARK":
                case 5:
                    message.skinColors[i] = 5;
                    break;
                case "FAIR":
                case 6:
                    message.skinColors[i] = 6;
                    break;
                case "GOLD":
                case 7:
                    message.skinColors[i] = 7;
                    break;
                case "GREEN":
                case 8:
                    message.skinColors[i] = 8;
                    break;
                case "GREY":
                case 9:
                    message.skinColors[i] = 9;
                    break;
                case "HAZEL":
                case 10:
                    message.skinColors[i] = 10;
                    break;
                case "LIGHT":
                case 11:
                    message.skinColors[i] = 11;
                    break;
                case "METAL":
                case 12:
                    message.skinColors[i] = 12;
                    break;
                case "NONE":
                case 13:
                    message.skinColors[i] = 13;
                    break;
                case "ORANGE":
                case 14:
                    message.skinColors[i] = 14;
                    break;
                case "PALE":
                case 15:
                    message.skinColors[i] = 15;
                    break;
                case "PINK":
                case 16:
                    message.skinColors[i] = 16;
                    break;
                case "RED":
                case 17:
                    message.skinColors[i] = 17;
                    break;
                case "SILVER":
                case 18:
                    message.skinColors[i] = 18;
                    break;
                case "TAN":
                case 19:
                    message.skinColors[i] = 19;
                    break;
                case "WHITE":
                case 20:
                    message.skinColors[i] = 20;
                    break;
                case "YELLOW":
                case 21:
                    message.skinColors[i] = 21;
                    break;
                }
        }
        if (object.hairColors) {
            if (!Array.isArray(object.hairColors))
                throw TypeError(".Species.hairColors: array expected");
            message.hairColors = [];
            for (var i = 0; i < object.hairColors.length; ++i)
                switch (object.hairColors[i]) {
                default:
                case "BLACK":
                case 0:
                    message.hairColors[i] = 0;
                    break;
                case "BLOND":
                case 1:
                    message.hairColors[i] = 1;
                    break;
                case "BLUE":
                case 2:
                    message.hairColors[i] = 2;
                    break;
                case "BLUE_GRAY":
                case 3:
                    message.hairColors[i] = 3;
                    break;
                case "BROWN":
                case 4:
                    message.hairColors[i] = 4;
                    break;
                case "DARK":
                case 5:
                    message.hairColors[i] = 5;
                    break;
                case "FAIR":
                case 6:
                    message.hairColors[i] = 6;
                    break;
                case "GOLD":
                case 7:
                    message.hairColors[i] = 7;
                    break;
                case "GREEN":
                case 8:
                    message.hairColors[i] = 8;
                    break;
                case "GREY":
                case 9:
                    message.hairColors[i] = 9;
                    break;
                case "HAZEL":
                case 10:
                    message.hairColors[i] = 10;
                    break;
                case "LIGHT":
                case 11:
                    message.hairColors[i] = 11;
                    break;
                case "METAL":
                case 12:
                    message.hairColors[i] = 12;
                    break;
                case "NONE":
                case 13:
                    message.hairColors[i] = 13;
                    break;
                case "ORANGE":
                case 14:
                    message.hairColors[i] = 14;
                    break;
                case "PALE":
                case 15:
                    message.hairColors[i] = 15;
                    break;
                case "PINK":
                case 16:
                    message.hairColors[i] = 16;
                    break;
                case "RED":
                case 17:
                    message.hairColors[i] = 17;
                    break;
                case "SILVER":
                case 18:
                    message.hairColors[i] = 18;
                    break;
                case "TAN":
                case 19:
                    message.hairColors[i] = 19;
                    break;
                case "WHITE":
                case 20:
                    message.hairColors[i] = 20;
                    break;
                case "YELLOW":
                case 21:
                    message.hairColors[i] = 21;
                    break;
                }
        }
        if (object.eyeColors) {
            if (!Array.isArray(object.eyeColors))
                throw TypeError(".Species.eyeColors: array expected");
            message.eyeColors = [];
            for (var i = 0; i < object.eyeColors.length; ++i)
                switch (object.eyeColors[i]) {
                default:
                case "BLACK":
                case 0:
                    message.eyeColors[i] = 0;
                    break;
                case "BLOND":
                case 1:
                    message.eyeColors[i] = 1;
                    break;
                case "BLUE":
                case 2:
                    message.eyeColors[i] = 2;
                    break;
                case "BLUE_GRAY":
                case 3:
                    message.eyeColors[i] = 3;
                    break;
                case "BROWN":
                case 4:
                    message.eyeColors[i] = 4;
                    break;
                case "DARK":
                case 5:
                    message.eyeColors[i] = 5;
                    break;
                case "FAIR":
                case 6:
                    message.eyeColors[i] = 6;
                    break;
                case "GOLD":
                case 7:
                    message.eyeColors[i] = 7;
                    break;
                case "GREEN":
                case 8:
                    message.eyeColors[i] = 8;
                    break;
                case "GREY":
                case 9:
                    message.eyeColors[i] = 9;
                    break;
                case "HAZEL":
                case 10:
                    message.eyeColors[i] = 10;
                    break;
                case "LIGHT":
                case 11:
                    message.eyeColors[i] = 11;
                    break;
                case "METAL":
                case 12:
                    message.eyeColors[i] = 12;
                    break;
                case "NONE":
                case 13:
                    message.eyeColors[i] = 13;
                    break;
                case "ORANGE":
                case 14:
                    message.eyeColors[i] = 14;
                    break;
                case "PALE":
                case 15:
                    message.eyeColors[i] = 15;
                    break;
                case "PINK":
                case 16:
                    message.eyeColors[i] = 16;
                    break;
                case "RED":
                case 17:
                    message.eyeColors[i] = 17;
                    break;
                case "SILVER":
                case 18:
                    message.eyeColors[i] = 18;
                    break;
                case "TAN":
                case 19:
                    message.eyeColors[i] = 19;
                    break;
                case "WHITE":
                case 20:
                    message.eyeColors[i] = 20;
                    break;
                case "YELLOW":
                case 21:
                    message.eyeColors[i] = 21;
                    break;
                }
        }
        if (object.averageLifespan != null)
            message.averageLifespan = object.averageLifespan >>> 0;
        if (object.language != null)
            message.language = String(object.language);
        if (object.homeworld != null) {
            if (typeof object.homeworld !== "object")
                throw TypeError(".Species.homeworld: object expected");
            message.homeworld = $root.Planet.fromObject(object.homeworld);
        }
        return message;
    };

    /**
     * Creates a plain object from a Species message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Species
     * @static
     * @param {Species} message Species
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Species.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.skinColors = [];
            object.hairColors = [];
            object.eyeColors = [];
        }
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
            object.name = "";
            object.speciesType = options.enums === String ? "AMPHIBIAN" : 0;
            object.averageHeight = 0;
            object.averageLifespan = 0;
            object.language = "";
            object.homeworld = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.speciesType != null && message.hasOwnProperty("speciesType"))
            object.speciesType = options.enums === String ? $root.SpeciesType[message.speciesType] : message.speciesType;
        if (message.averageHeight != null && message.hasOwnProperty("averageHeight"))
            object.averageHeight = message.averageHeight;
        if (message.skinColors && message.skinColors.length) {
            object.skinColors = [];
            for (var j = 0; j < message.skinColors.length; ++j)
                object.skinColors[j] = options.enums === String ? $root.Color[message.skinColors[j]] : message.skinColors[j];
        }
        if (message.hairColors && message.hairColors.length) {
            object.hairColors = [];
            for (var j = 0; j < message.hairColors.length; ++j)
                object.hairColors[j] = options.enums === String ? $root.Color[message.hairColors[j]] : message.hairColors[j];
        }
        if (message.eyeColors && message.eyeColors.length) {
            object.eyeColors = [];
            for (var j = 0; j < message.eyeColors.length; ++j)
                object.eyeColors[j] = options.enums === String ? $root.Color[message.eyeColors[j]] : message.eyeColors[j];
        }
        if (message.averageLifespan != null && message.hasOwnProperty("averageLifespan"))
            object.averageLifespan = message.averageLifespan;
        if (message.language != null && message.hasOwnProperty("language"))
            object.language = message.language;
        if (message.homeworld != null && message.hasOwnProperty("homeworld"))
            object.homeworld = $root.Planet.toObject(message.homeworld, options);
        return object;
    };

    /**
     * Converts this Species to JSON.
     * @function toJSON
     * @memberof Species
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Species.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Species;
})();

$root.SpeciesList = (function() {

    /**
     * Properties of a SpeciesList.
     * @exports ISpeciesList
     * @interface ISpeciesList
     * @property {Array.<ISpecies>|null} [values] SpeciesList values
     */

    /**
     * Constructs a new SpeciesList.
     * @exports SpeciesList
     * @classdesc Represents a SpeciesList.
     * @implements ISpeciesList
     * @constructor
     * @param {ISpeciesList=} [properties] Properties to set
     */
    function SpeciesList(properties) {
        this.values = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SpeciesList values.
     * @member {Array.<ISpecies>} values
     * @memberof SpeciesList
     * @instance
     */
    SpeciesList.prototype.values = $util.emptyArray;

    /**
     * Creates a new SpeciesList instance using the specified properties.
     * @function create
     * @memberof SpeciesList
     * @static
     * @param {ISpeciesList=} [properties] Properties to set
     * @returns {SpeciesList} SpeciesList instance
     */
    SpeciesList.create = function create(properties) {
        return new SpeciesList(properties);
    };

    /**
     * Encodes the specified SpeciesList message. Does not implicitly {@link SpeciesList.verify|verify} messages.
     * @function encode
     * @memberof SpeciesList
     * @static
     * @param {ISpeciesList} message SpeciesList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SpeciesList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.values != null && message.values.length)
            for (var i = 0; i < message.values.length; ++i)
                $root.Species.encode(message.values[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SpeciesList message, length delimited. Does not implicitly {@link SpeciesList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SpeciesList
     * @static
     * @param {ISpeciesList} message SpeciesList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SpeciesList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SpeciesList message from the specified reader or buffer.
     * @function decode
     * @memberof SpeciesList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SpeciesList} SpeciesList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SpeciesList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SpeciesList();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.values && message.values.length))
                    message.values = [];
                message.values.push($root.Species.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SpeciesList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SpeciesList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SpeciesList} SpeciesList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SpeciesList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SpeciesList message.
     * @function verify
     * @memberof SpeciesList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SpeciesList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.values != null && message.hasOwnProperty("values")) {
            if (!Array.isArray(message.values))
                return "values: array expected";
            for (var i = 0; i < message.values.length; ++i) {
                var error = $root.Species.verify(message.values[i]);
                if (error)
                    return "values." + error;
            }
        }
        return null;
    };

    /**
     * Creates a SpeciesList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SpeciesList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SpeciesList} SpeciesList
     */
    SpeciesList.fromObject = function fromObject(object) {
        if (object instanceof $root.SpeciesList)
            return object;
        var message = new $root.SpeciesList();
        if (object.values) {
            if (!Array.isArray(object.values))
                throw TypeError(".SpeciesList.values: array expected");
            message.values = [];
            for (var i = 0; i < object.values.length; ++i) {
                if (typeof object.values[i] !== "object")
                    throw TypeError(".SpeciesList.values: object expected");
                message.values[i] = $root.Species.fromObject(object.values[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a SpeciesList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SpeciesList
     * @static
     * @param {SpeciesList} message SpeciesList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SpeciesList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.values = [];
        if (message.values && message.values.length) {
            object.values = [];
            for (var j = 0; j < message.values.length; ++j)
                object.values[j] = $root.Species.toObject(message.values[j], options);
        }
        return object;
    };

    /**
     * Converts this SpeciesList to JSON.
     * @function toJSON
     * @memberof SpeciesList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SpeciesList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SpeciesList;
})();

$root.CharacterAbsoluteScore = (function() {

    /**
     * Properties of a CharacterAbsoluteScore.
     * @exports ICharacterAbsoluteScore
     * @interface ICharacterAbsoluteScore
     * @property {number|null} [id] CharacterAbsoluteScore id
     * @property {number|null} [ref] CharacterAbsoluteScore ref
     * @property {number|null} [likes] CharacterAbsoluteScore likes
     * @property {number|null} [dislikes] CharacterAbsoluteScore dislikes
     */

    /**
     * Constructs a new CharacterAbsoluteScore.
     * @exports CharacterAbsoluteScore
     * @classdesc Represents a CharacterAbsoluteScore.
     * @implements ICharacterAbsoluteScore
     * @constructor
     * @param {ICharacterAbsoluteScore=} [properties] Properties to set
     */
    function CharacterAbsoluteScore(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CharacterAbsoluteScore id.
     * @member {number} id
     * @memberof CharacterAbsoluteScore
     * @instance
     */
    CharacterAbsoluteScore.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * CharacterAbsoluteScore ref.
     * @member {number} ref
     * @memberof CharacterAbsoluteScore
     * @instance
     */
    CharacterAbsoluteScore.prototype.ref = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * CharacterAbsoluteScore likes.
     * @member {number} likes
     * @memberof CharacterAbsoluteScore
     * @instance
     */
    CharacterAbsoluteScore.prototype.likes = 0;

    /**
     * CharacterAbsoluteScore dislikes.
     * @member {number} dislikes
     * @memberof CharacterAbsoluteScore
     * @instance
     */
    CharacterAbsoluteScore.prototype.dislikes = 0;

    /**
     * Creates a new CharacterAbsoluteScore instance using the specified properties.
     * @function create
     * @memberof CharacterAbsoluteScore
     * @static
     * @param {ICharacterAbsoluteScore=} [properties] Properties to set
     * @returns {CharacterAbsoluteScore} CharacterAbsoluteScore instance
     */
    CharacterAbsoluteScore.create = function create(properties) {
        return new CharacterAbsoluteScore(properties);
    };

    /**
     * Encodes the specified CharacterAbsoluteScore message. Does not implicitly {@link CharacterAbsoluteScore.verify|verify} messages.
     * @function encode
     * @memberof CharacterAbsoluteScore
     * @static
     * @param {ICharacterAbsoluteScore} message CharacterAbsoluteScore message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CharacterAbsoluteScore.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
        if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.ref);
        if (message.likes != null && Object.hasOwnProperty.call(message, "likes"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.likes);
        if (message.dislikes != null && Object.hasOwnProperty.call(message, "dislikes"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.dislikes);
        return writer;
    };

    /**
     * Encodes the specified CharacterAbsoluteScore message, length delimited. Does not implicitly {@link CharacterAbsoluteScore.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CharacterAbsoluteScore
     * @static
     * @param {ICharacterAbsoluteScore} message CharacterAbsoluteScore message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CharacterAbsoluteScore.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CharacterAbsoluteScore message from the specified reader or buffer.
     * @function decode
     * @memberof CharacterAbsoluteScore
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CharacterAbsoluteScore} CharacterAbsoluteScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CharacterAbsoluteScore.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CharacterAbsoluteScore();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.uint64();
                break;
            case 2:
                message.ref = reader.uint64();
                break;
            case 4:
                message.likes = reader.uint32();
                break;
            case 5:
                message.dislikes = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CharacterAbsoluteScore message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CharacterAbsoluteScore
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CharacterAbsoluteScore} CharacterAbsoluteScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CharacterAbsoluteScore.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CharacterAbsoluteScore message.
     * @function verify
     * @memberof CharacterAbsoluteScore
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CharacterAbsoluteScore.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer expected";
        if (message.ref != null && message.hasOwnProperty("ref"))
            if (!$util.isInteger(message.ref) && !(message.ref && $util.isInteger(message.ref.low) && $util.isInteger(message.ref.high)))
                return "ref: integer expected";
        if (message.likes != null && message.hasOwnProperty("likes"))
            if (!$util.isInteger(message.likes))
                return "likes: integer expected";
        if (message.dislikes != null && message.hasOwnProperty("dislikes"))
            if (!$util.isInteger(message.dislikes))
                return "dislikes: integer expected";
        return null;
    };

    /**
     * Creates a CharacterAbsoluteScore message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CharacterAbsoluteScore
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CharacterAbsoluteScore} CharacterAbsoluteScore
     */
    CharacterAbsoluteScore.fromObject = function fromObject(object) {
        if (object instanceof $root.CharacterAbsoluteScore)
            return object;
        var message = new $root.CharacterAbsoluteScore();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = true;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
        if (object.ref != null)
            if ($util.Long)
                (message.ref = $util.Long.fromValue(object.ref)).unsigned = true;
            else if (typeof object.ref === "string")
                message.ref = parseInt(object.ref, 10);
            else if (typeof object.ref === "number")
                message.ref = object.ref;
            else if (typeof object.ref === "object")
                message.ref = new $util.LongBits(object.ref.low >>> 0, object.ref.high >>> 0).toNumber(true);
        if (object.likes != null)
            message.likes = object.likes >>> 0;
        if (object.dislikes != null)
            message.dislikes = object.dislikes >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a CharacterAbsoluteScore message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CharacterAbsoluteScore
     * @static
     * @param {CharacterAbsoluteScore} message CharacterAbsoluteScore
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CharacterAbsoluteScore.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.ref = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.ref = options.longs === String ? "0" : 0;
            object.likes = 0;
            object.dislikes = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
        if (message.ref != null && message.hasOwnProperty("ref"))
            if (typeof message.ref === "number")
                object.ref = options.longs === String ? String(message.ref) : message.ref;
            else
                object.ref = options.longs === String ? $util.Long.prototype.toString.call(message.ref) : options.longs === Number ? new $util.LongBits(message.ref.low >>> 0, message.ref.high >>> 0).toNumber(true) : message.ref;
        if (message.likes != null && message.hasOwnProperty("likes"))
            object.likes = message.likes;
        if (message.dislikes != null && message.hasOwnProperty("dislikes"))
            object.dislikes = message.dislikes;
        return object;
    };

    /**
     * Converts this CharacterAbsoluteScore to JSON.
     * @function toJSON
     * @memberof CharacterAbsoluteScore
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CharacterAbsoluteScore.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CharacterAbsoluteScore;
})();

$root.CharacterAbsoluteScores = (function() {

    /**
     * Properties of a CharacterAbsoluteScores.
     * @exports ICharacterAbsoluteScores
     * @interface ICharacterAbsoluteScores
     * @property {Array.<ICharacterAbsoluteScore>|null} [values] CharacterAbsoluteScores values
     */

    /**
     * Constructs a new CharacterAbsoluteScores.
     * @exports CharacterAbsoluteScores
     * @classdesc Represents a CharacterAbsoluteScores.
     * @implements ICharacterAbsoluteScores
     * @constructor
     * @param {ICharacterAbsoluteScores=} [properties] Properties to set
     */
    function CharacterAbsoluteScores(properties) {
        this.values = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CharacterAbsoluteScores values.
     * @member {Array.<ICharacterAbsoluteScore>} values
     * @memberof CharacterAbsoluteScores
     * @instance
     */
    CharacterAbsoluteScores.prototype.values = $util.emptyArray;

    /**
     * Creates a new CharacterAbsoluteScores instance using the specified properties.
     * @function create
     * @memberof CharacterAbsoluteScores
     * @static
     * @param {ICharacterAbsoluteScores=} [properties] Properties to set
     * @returns {CharacterAbsoluteScores} CharacterAbsoluteScores instance
     */
    CharacterAbsoluteScores.create = function create(properties) {
        return new CharacterAbsoluteScores(properties);
    };

    /**
     * Encodes the specified CharacterAbsoluteScores message. Does not implicitly {@link CharacterAbsoluteScores.verify|verify} messages.
     * @function encode
     * @memberof CharacterAbsoluteScores
     * @static
     * @param {ICharacterAbsoluteScores} message CharacterAbsoluteScores message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CharacterAbsoluteScores.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.values != null && message.values.length)
            for (var i = 0; i < message.values.length; ++i)
                $root.CharacterAbsoluteScore.encode(message.values[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified CharacterAbsoluteScores message, length delimited. Does not implicitly {@link CharacterAbsoluteScores.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CharacterAbsoluteScores
     * @static
     * @param {ICharacterAbsoluteScores} message CharacterAbsoluteScores message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CharacterAbsoluteScores.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CharacterAbsoluteScores message from the specified reader or buffer.
     * @function decode
     * @memberof CharacterAbsoluteScores
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CharacterAbsoluteScores} CharacterAbsoluteScores
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CharacterAbsoluteScores.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CharacterAbsoluteScores();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.values && message.values.length))
                    message.values = [];
                message.values.push($root.CharacterAbsoluteScore.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CharacterAbsoluteScores message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CharacterAbsoluteScores
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CharacterAbsoluteScores} CharacterAbsoluteScores
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CharacterAbsoluteScores.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CharacterAbsoluteScores message.
     * @function verify
     * @memberof CharacterAbsoluteScores
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CharacterAbsoluteScores.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.values != null && message.hasOwnProperty("values")) {
            if (!Array.isArray(message.values))
                return "values: array expected";
            for (var i = 0; i < message.values.length; ++i) {
                var error = $root.CharacterAbsoluteScore.verify(message.values[i]);
                if (error)
                    return "values." + error;
            }
        }
        return null;
    };

    /**
     * Creates a CharacterAbsoluteScores message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CharacterAbsoluteScores
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CharacterAbsoluteScores} CharacterAbsoluteScores
     */
    CharacterAbsoluteScores.fromObject = function fromObject(object) {
        if (object instanceof $root.CharacterAbsoluteScores)
            return object;
        var message = new $root.CharacterAbsoluteScores();
        if (object.values) {
            if (!Array.isArray(object.values))
                throw TypeError(".CharacterAbsoluteScores.values: array expected");
            message.values = [];
            for (var i = 0; i < object.values.length; ++i) {
                if (typeof object.values[i] !== "object")
                    throw TypeError(".CharacterAbsoluteScores.values: object expected");
                message.values[i] = $root.CharacterAbsoluteScore.fromObject(object.values[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a CharacterAbsoluteScores message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CharacterAbsoluteScores
     * @static
     * @param {CharacterAbsoluteScores} message CharacterAbsoluteScores
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CharacterAbsoluteScores.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.values = [];
        if (message.values && message.values.length) {
            object.values = [];
            for (var j = 0; j < message.values.length; ++j)
                object.values[j] = $root.CharacterAbsoluteScore.toObject(message.values[j], options);
        }
        return object;
    };

    /**
     * Converts this CharacterAbsoluteScores to JSON.
     * @function toJSON
     * @memberof CharacterAbsoluteScores
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CharacterAbsoluteScores.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CharacterAbsoluteScores;
})();

$root.CharacterCrossScore = (function() {

    /**
     * Properties of a CharacterCrossScore.
     * @exports ICharacterCrossScore
     * @interface ICharacterCrossScore
     * @property {number|null} [id] CharacterCrossScore id
     * @property {number|null} [ref] CharacterCrossScore ref
     * @property {number|null} [cmp] CharacterCrossScore cmp
     * @property {number|null} [refLikes] CharacterCrossScore refLikes
     * @property {number|null} [cmpLikes] CharacterCrossScore cmpLikes
     */

    /**
     * Constructs a new CharacterCrossScore.
     * @exports CharacterCrossScore
     * @classdesc Represents a CharacterCrossScore.
     * @implements ICharacterCrossScore
     * @constructor
     * @param {ICharacterCrossScore=} [properties] Properties to set
     */
    function CharacterCrossScore(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CharacterCrossScore id.
     * @member {number} id
     * @memberof CharacterCrossScore
     * @instance
     */
    CharacterCrossScore.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * CharacterCrossScore ref.
     * @member {number} ref
     * @memberof CharacterCrossScore
     * @instance
     */
    CharacterCrossScore.prototype.ref = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * CharacterCrossScore cmp.
     * @member {number} cmp
     * @memberof CharacterCrossScore
     * @instance
     */
    CharacterCrossScore.prototype.cmp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * CharacterCrossScore refLikes.
     * @member {number} refLikes
     * @memberof CharacterCrossScore
     * @instance
     */
    CharacterCrossScore.prototype.refLikes = 0;

    /**
     * CharacterCrossScore cmpLikes.
     * @member {number} cmpLikes
     * @memberof CharacterCrossScore
     * @instance
     */
    CharacterCrossScore.prototype.cmpLikes = 0;

    /**
     * Creates a new CharacterCrossScore instance using the specified properties.
     * @function create
     * @memberof CharacterCrossScore
     * @static
     * @param {ICharacterCrossScore=} [properties] Properties to set
     * @returns {CharacterCrossScore} CharacterCrossScore instance
     */
    CharacterCrossScore.create = function create(properties) {
        return new CharacterCrossScore(properties);
    };

    /**
     * Encodes the specified CharacterCrossScore message. Does not implicitly {@link CharacterCrossScore.verify|verify} messages.
     * @function encode
     * @memberof CharacterCrossScore
     * @static
     * @param {ICharacterCrossScore} message CharacterCrossScore message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CharacterCrossScore.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
        if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.ref);
        if (message.cmp != null && Object.hasOwnProperty.call(message, "cmp"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.cmp);
        if (message.refLikes != null && Object.hasOwnProperty.call(message, "refLikes"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.refLikes);
        if (message.cmpLikes != null && Object.hasOwnProperty.call(message, "cmpLikes"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.cmpLikes);
        return writer;
    };

    /**
     * Encodes the specified CharacterCrossScore message, length delimited. Does not implicitly {@link CharacterCrossScore.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CharacterCrossScore
     * @static
     * @param {ICharacterCrossScore} message CharacterCrossScore message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CharacterCrossScore.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CharacterCrossScore message from the specified reader or buffer.
     * @function decode
     * @memberof CharacterCrossScore
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CharacterCrossScore} CharacterCrossScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CharacterCrossScore.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CharacterCrossScore();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.uint64();
                break;
            case 2:
                message.ref = reader.uint64();
                break;
            case 3:
                message.cmp = reader.uint64();
                break;
            case 4:
                message.refLikes = reader.uint32();
                break;
            case 5:
                message.cmpLikes = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CharacterCrossScore message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CharacterCrossScore
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CharacterCrossScore} CharacterCrossScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CharacterCrossScore.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CharacterCrossScore message.
     * @function verify
     * @memberof CharacterCrossScore
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CharacterCrossScore.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer expected";
        if (message.ref != null && message.hasOwnProperty("ref"))
            if (!$util.isInteger(message.ref) && !(message.ref && $util.isInteger(message.ref.low) && $util.isInteger(message.ref.high)))
                return "ref: integer expected";
        if (message.cmp != null && message.hasOwnProperty("cmp"))
            if (!$util.isInteger(message.cmp) && !(message.cmp && $util.isInteger(message.cmp.low) && $util.isInteger(message.cmp.high)))
                return "cmp: integer expected";
        if (message.refLikes != null && message.hasOwnProperty("refLikes"))
            if (!$util.isInteger(message.refLikes))
                return "refLikes: integer expected";
        if (message.cmpLikes != null && message.hasOwnProperty("cmpLikes"))
            if (!$util.isInteger(message.cmpLikes))
                return "cmpLikes: integer expected";
        return null;
    };

    /**
     * Creates a CharacterCrossScore message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CharacterCrossScore
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CharacterCrossScore} CharacterCrossScore
     */
    CharacterCrossScore.fromObject = function fromObject(object) {
        if (object instanceof $root.CharacterCrossScore)
            return object;
        var message = new $root.CharacterCrossScore();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = true;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
        if (object.ref != null)
            if ($util.Long)
                (message.ref = $util.Long.fromValue(object.ref)).unsigned = true;
            else if (typeof object.ref === "string")
                message.ref = parseInt(object.ref, 10);
            else if (typeof object.ref === "number")
                message.ref = object.ref;
            else if (typeof object.ref === "object")
                message.ref = new $util.LongBits(object.ref.low >>> 0, object.ref.high >>> 0).toNumber(true);
        if (object.cmp != null)
            if ($util.Long)
                (message.cmp = $util.Long.fromValue(object.cmp)).unsigned = true;
            else if (typeof object.cmp === "string")
                message.cmp = parseInt(object.cmp, 10);
            else if (typeof object.cmp === "number")
                message.cmp = object.cmp;
            else if (typeof object.cmp === "object")
                message.cmp = new $util.LongBits(object.cmp.low >>> 0, object.cmp.high >>> 0).toNumber(true);
        if (object.refLikes != null)
            message.refLikes = object.refLikes >>> 0;
        if (object.cmpLikes != null)
            message.cmpLikes = object.cmpLikes >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a CharacterCrossScore message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CharacterCrossScore
     * @static
     * @param {CharacterCrossScore} message CharacterCrossScore
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CharacterCrossScore.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.ref = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.ref = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.cmp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.cmp = options.longs === String ? "0" : 0;
            object.refLikes = 0;
            object.cmpLikes = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
        if (message.ref != null && message.hasOwnProperty("ref"))
            if (typeof message.ref === "number")
                object.ref = options.longs === String ? String(message.ref) : message.ref;
            else
                object.ref = options.longs === String ? $util.Long.prototype.toString.call(message.ref) : options.longs === Number ? new $util.LongBits(message.ref.low >>> 0, message.ref.high >>> 0).toNumber(true) : message.ref;
        if (message.cmp != null && message.hasOwnProperty("cmp"))
            if (typeof message.cmp === "number")
                object.cmp = options.longs === String ? String(message.cmp) : message.cmp;
            else
                object.cmp = options.longs === String ? $util.Long.prototype.toString.call(message.cmp) : options.longs === Number ? new $util.LongBits(message.cmp.low >>> 0, message.cmp.high >>> 0).toNumber(true) : message.cmp;
        if (message.refLikes != null && message.hasOwnProperty("refLikes"))
            object.refLikes = message.refLikes;
        if (message.cmpLikes != null && message.hasOwnProperty("cmpLikes"))
            object.cmpLikes = message.cmpLikes;
        return object;
    };

    /**
     * Converts this CharacterCrossScore to JSON.
     * @function toJSON
     * @memberof CharacterCrossScore
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CharacterCrossScore.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CharacterCrossScore;
})();

$root.CharacterCrossScores = (function() {

    /**
     * Properties of a CharacterCrossScores.
     * @exports ICharacterCrossScores
     * @interface ICharacterCrossScores
     * @property {Array.<ICharacterCrossScore>|null} [values] CharacterCrossScores values
     */

    /**
     * Constructs a new CharacterCrossScores.
     * @exports CharacterCrossScores
     * @classdesc Represents a CharacterCrossScores.
     * @implements ICharacterCrossScores
     * @constructor
     * @param {ICharacterCrossScores=} [properties] Properties to set
     */
    function CharacterCrossScores(properties) {
        this.values = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CharacterCrossScores values.
     * @member {Array.<ICharacterCrossScore>} values
     * @memberof CharacterCrossScores
     * @instance
     */
    CharacterCrossScores.prototype.values = $util.emptyArray;

    /**
     * Creates a new CharacterCrossScores instance using the specified properties.
     * @function create
     * @memberof CharacterCrossScores
     * @static
     * @param {ICharacterCrossScores=} [properties] Properties to set
     * @returns {CharacterCrossScores} CharacterCrossScores instance
     */
    CharacterCrossScores.create = function create(properties) {
        return new CharacterCrossScores(properties);
    };

    /**
     * Encodes the specified CharacterCrossScores message. Does not implicitly {@link CharacterCrossScores.verify|verify} messages.
     * @function encode
     * @memberof CharacterCrossScores
     * @static
     * @param {ICharacterCrossScores} message CharacterCrossScores message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CharacterCrossScores.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.values != null && message.values.length)
            for (var i = 0; i < message.values.length; ++i)
                $root.CharacterCrossScore.encode(message.values[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified CharacterCrossScores message, length delimited. Does not implicitly {@link CharacterCrossScores.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CharacterCrossScores
     * @static
     * @param {ICharacterCrossScores} message CharacterCrossScores message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CharacterCrossScores.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CharacterCrossScores message from the specified reader or buffer.
     * @function decode
     * @memberof CharacterCrossScores
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CharacterCrossScores} CharacterCrossScores
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CharacterCrossScores.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CharacterCrossScores();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.values && message.values.length))
                    message.values = [];
                message.values.push($root.CharacterCrossScore.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CharacterCrossScores message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CharacterCrossScores
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CharacterCrossScores} CharacterCrossScores
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CharacterCrossScores.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CharacterCrossScores message.
     * @function verify
     * @memberof CharacterCrossScores
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CharacterCrossScores.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.values != null && message.hasOwnProperty("values")) {
            if (!Array.isArray(message.values))
                return "values: array expected";
            for (var i = 0; i < message.values.length; ++i) {
                var error = $root.CharacterCrossScore.verify(message.values[i]);
                if (error)
                    return "values." + error;
            }
        }
        return null;
    };

    /**
     * Creates a CharacterCrossScores message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CharacterCrossScores
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CharacterCrossScores} CharacterCrossScores
     */
    CharacterCrossScores.fromObject = function fromObject(object) {
        if (object instanceof $root.CharacterCrossScores)
            return object;
        var message = new $root.CharacterCrossScores();
        if (object.values) {
            if (!Array.isArray(object.values))
                throw TypeError(".CharacterCrossScores.values: array expected");
            message.values = [];
            for (var i = 0; i < object.values.length; ++i) {
                if (typeof object.values[i] !== "object")
                    throw TypeError(".CharacterCrossScores.values: object expected");
                message.values[i] = $root.CharacterCrossScore.fromObject(object.values[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a CharacterCrossScores message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CharacterCrossScores
     * @static
     * @param {CharacterCrossScores} message CharacterCrossScores
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CharacterCrossScores.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.values = [];
        if (message.values && message.values.length) {
            object.values = [];
            for (var j = 0; j < message.values.length; ++j)
                object.values[j] = $root.CharacterCrossScore.toObject(message.values[j], options);
        }
        return object;
    };

    /**
     * Converts this CharacterCrossScores to JSON.
     * @function toJSON
     * @memberof CharacterCrossScores
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CharacterCrossScores.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CharacterCrossScores;
})();

$root.PlanetAbsoluteScore = (function() {

    /**
     * Properties of a PlanetAbsoluteScore.
     * @exports IPlanetAbsoluteScore
     * @interface IPlanetAbsoluteScore
     * @property {number|null} [id] PlanetAbsoluteScore id
     * @property {number|null} [ref] PlanetAbsoluteScore ref
     * @property {number|null} [likes] PlanetAbsoluteScore likes
     * @property {number|null} [dislikes] PlanetAbsoluteScore dislikes
     */

    /**
     * Constructs a new PlanetAbsoluteScore.
     * @exports PlanetAbsoluteScore
     * @classdesc Represents a PlanetAbsoluteScore.
     * @implements IPlanetAbsoluteScore
     * @constructor
     * @param {IPlanetAbsoluteScore=} [properties] Properties to set
     */
    function PlanetAbsoluteScore(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PlanetAbsoluteScore id.
     * @member {number} id
     * @memberof PlanetAbsoluteScore
     * @instance
     */
    PlanetAbsoluteScore.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * PlanetAbsoluteScore ref.
     * @member {number} ref
     * @memberof PlanetAbsoluteScore
     * @instance
     */
    PlanetAbsoluteScore.prototype.ref = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * PlanetAbsoluteScore likes.
     * @member {number} likes
     * @memberof PlanetAbsoluteScore
     * @instance
     */
    PlanetAbsoluteScore.prototype.likes = 0;

    /**
     * PlanetAbsoluteScore dislikes.
     * @member {number} dislikes
     * @memberof PlanetAbsoluteScore
     * @instance
     */
    PlanetAbsoluteScore.prototype.dislikes = 0;

    /**
     * Creates a new PlanetAbsoluteScore instance using the specified properties.
     * @function create
     * @memberof PlanetAbsoluteScore
     * @static
     * @param {IPlanetAbsoluteScore=} [properties] Properties to set
     * @returns {PlanetAbsoluteScore} PlanetAbsoluteScore instance
     */
    PlanetAbsoluteScore.create = function create(properties) {
        return new PlanetAbsoluteScore(properties);
    };

    /**
     * Encodes the specified PlanetAbsoluteScore message. Does not implicitly {@link PlanetAbsoluteScore.verify|verify} messages.
     * @function encode
     * @memberof PlanetAbsoluteScore
     * @static
     * @param {IPlanetAbsoluteScore} message PlanetAbsoluteScore message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlanetAbsoluteScore.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
        if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.ref);
        if (message.likes != null && Object.hasOwnProperty.call(message, "likes"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.likes);
        if (message.dislikes != null && Object.hasOwnProperty.call(message, "dislikes"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.dislikes);
        return writer;
    };

    /**
     * Encodes the specified PlanetAbsoluteScore message, length delimited. Does not implicitly {@link PlanetAbsoluteScore.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PlanetAbsoluteScore
     * @static
     * @param {IPlanetAbsoluteScore} message PlanetAbsoluteScore message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlanetAbsoluteScore.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PlanetAbsoluteScore message from the specified reader or buffer.
     * @function decode
     * @memberof PlanetAbsoluteScore
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PlanetAbsoluteScore} PlanetAbsoluteScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlanetAbsoluteScore.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlanetAbsoluteScore();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.uint64();
                break;
            case 2:
                message.ref = reader.uint64();
                break;
            case 4:
                message.likes = reader.uint32();
                break;
            case 5:
                message.dislikes = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PlanetAbsoluteScore message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PlanetAbsoluteScore
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PlanetAbsoluteScore} PlanetAbsoluteScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlanetAbsoluteScore.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PlanetAbsoluteScore message.
     * @function verify
     * @memberof PlanetAbsoluteScore
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PlanetAbsoluteScore.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer expected";
        if (message.ref != null && message.hasOwnProperty("ref"))
            if (!$util.isInteger(message.ref) && !(message.ref && $util.isInteger(message.ref.low) && $util.isInteger(message.ref.high)))
                return "ref: integer expected";
        if (message.likes != null && message.hasOwnProperty("likes"))
            if (!$util.isInteger(message.likes))
                return "likes: integer expected";
        if (message.dislikes != null && message.hasOwnProperty("dislikes"))
            if (!$util.isInteger(message.dislikes))
                return "dislikes: integer expected";
        return null;
    };

    /**
     * Creates a PlanetAbsoluteScore message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PlanetAbsoluteScore
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PlanetAbsoluteScore} PlanetAbsoluteScore
     */
    PlanetAbsoluteScore.fromObject = function fromObject(object) {
        if (object instanceof $root.PlanetAbsoluteScore)
            return object;
        var message = new $root.PlanetAbsoluteScore();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = true;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
        if (object.ref != null)
            if ($util.Long)
                (message.ref = $util.Long.fromValue(object.ref)).unsigned = true;
            else if (typeof object.ref === "string")
                message.ref = parseInt(object.ref, 10);
            else if (typeof object.ref === "number")
                message.ref = object.ref;
            else if (typeof object.ref === "object")
                message.ref = new $util.LongBits(object.ref.low >>> 0, object.ref.high >>> 0).toNumber(true);
        if (object.likes != null)
            message.likes = object.likes >>> 0;
        if (object.dislikes != null)
            message.dislikes = object.dislikes >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a PlanetAbsoluteScore message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PlanetAbsoluteScore
     * @static
     * @param {PlanetAbsoluteScore} message PlanetAbsoluteScore
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PlanetAbsoluteScore.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.ref = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.ref = options.longs === String ? "0" : 0;
            object.likes = 0;
            object.dislikes = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
        if (message.ref != null && message.hasOwnProperty("ref"))
            if (typeof message.ref === "number")
                object.ref = options.longs === String ? String(message.ref) : message.ref;
            else
                object.ref = options.longs === String ? $util.Long.prototype.toString.call(message.ref) : options.longs === Number ? new $util.LongBits(message.ref.low >>> 0, message.ref.high >>> 0).toNumber(true) : message.ref;
        if (message.likes != null && message.hasOwnProperty("likes"))
            object.likes = message.likes;
        if (message.dislikes != null && message.hasOwnProperty("dislikes"))
            object.dislikes = message.dislikes;
        return object;
    };

    /**
     * Converts this PlanetAbsoluteScore to JSON.
     * @function toJSON
     * @memberof PlanetAbsoluteScore
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PlanetAbsoluteScore.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PlanetAbsoluteScore;
})();

$root.PlanetAbsoluteScores = (function() {

    /**
     * Properties of a PlanetAbsoluteScores.
     * @exports IPlanetAbsoluteScores
     * @interface IPlanetAbsoluteScores
     * @property {Array.<IPlanetAbsoluteScore>|null} [values] PlanetAbsoluteScores values
     */

    /**
     * Constructs a new PlanetAbsoluteScores.
     * @exports PlanetAbsoluteScores
     * @classdesc Represents a PlanetAbsoluteScores.
     * @implements IPlanetAbsoluteScores
     * @constructor
     * @param {IPlanetAbsoluteScores=} [properties] Properties to set
     */
    function PlanetAbsoluteScores(properties) {
        this.values = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PlanetAbsoluteScores values.
     * @member {Array.<IPlanetAbsoluteScore>} values
     * @memberof PlanetAbsoluteScores
     * @instance
     */
    PlanetAbsoluteScores.prototype.values = $util.emptyArray;

    /**
     * Creates a new PlanetAbsoluteScores instance using the specified properties.
     * @function create
     * @memberof PlanetAbsoluteScores
     * @static
     * @param {IPlanetAbsoluteScores=} [properties] Properties to set
     * @returns {PlanetAbsoluteScores} PlanetAbsoluteScores instance
     */
    PlanetAbsoluteScores.create = function create(properties) {
        return new PlanetAbsoluteScores(properties);
    };

    /**
     * Encodes the specified PlanetAbsoluteScores message. Does not implicitly {@link PlanetAbsoluteScores.verify|verify} messages.
     * @function encode
     * @memberof PlanetAbsoluteScores
     * @static
     * @param {IPlanetAbsoluteScores} message PlanetAbsoluteScores message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlanetAbsoluteScores.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.values != null && message.values.length)
            for (var i = 0; i < message.values.length; ++i)
                $root.PlanetAbsoluteScore.encode(message.values[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PlanetAbsoluteScores message, length delimited. Does not implicitly {@link PlanetAbsoluteScores.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PlanetAbsoluteScores
     * @static
     * @param {IPlanetAbsoluteScores} message PlanetAbsoluteScores message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlanetAbsoluteScores.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PlanetAbsoluteScores message from the specified reader or buffer.
     * @function decode
     * @memberof PlanetAbsoluteScores
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PlanetAbsoluteScores} PlanetAbsoluteScores
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlanetAbsoluteScores.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlanetAbsoluteScores();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.values && message.values.length))
                    message.values = [];
                message.values.push($root.PlanetAbsoluteScore.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PlanetAbsoluteScores message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PlanetAbsoluteScores
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PlanetAbsoluteScores} PlanetAbsoluteScores
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlanetAbsoluteScores.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PlanetAbsoluteScores message.
     * @function verify
     * @memberof PlanetAbsoluteScores
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PlanetAbsoluteScores.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.values != null && message.hasOwnProperty("values")) {
            if (!Array.isArray(message.values))
                return "values: array expected";
            for (var i = 0; i < message.values.length; ++i) {
                var error = $root.PlanetAbsoluteScore.verify(message.values[i]);
                if (error)
                    return "values." + error;
            }
        }
        return null;
    };

    /**
     * Creates a PlanetAbsoluteScores message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PlanetAbsoluteScores
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PlanetAbsoluteScores} PlanetAbsoluteScores
     */
    PlanetAbsoluteScores.fromObject = function fromObject(object) {
        if (object instanceof $root.PlanetAbsoluteScores)
            return object;
        var message = new $root.PlanetAbsoluteScores();
        if (object.values) {
            if (!Array.isArray(object.values))
                throw TypeError(".PlanetAbsoluteScores.values: array expected");
            message.values = [];
            for (var i = 0; i < object.values.length; ++i) {
                if (typeof object.values[i] !== "object")
                    throw TypeError(".PlanetAbsoluteScores.values: object expected");
                message.values[i] = $root.PlanetAbsoluteScore.fromObject(object.values[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a PlanetAbsoluteScores message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PlanetAbsoluteScores
     * @static
     * @param {PlanetAbsoluteScores} message PlanetAbsoluteScores
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PlanetAbsoluteScores.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.values = [];
        if (message.values && message.values.length) {
            object.values = [];
            for (var j = 0; j < message.values.length; ++j)
                object.values[j] = $root.PlanetAbsoluteScore.toObject(message.values[j], options);
        }
        return object;
    };

    /**
     * Converts this PlanetAbsoluteScores to JSON.
     * @function toJSON
     * @memberof PlanetAbsoluteScores
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PlanetAbsoluteScores.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PlanetAbsoluteScores;
})();

$root.PlanetCrossScore = (function() {

    /**
     * Properties of a PlanetCrossScore.
     * @exports IPlanetCrossScore
     * @interface IPlanetCrossScore
     * @property {number|null} [id] PlanetCrossScore id
     * @property {number|null} [ref] PlanetCrossScore ref
     * @property {number|null} [cmp] PlanetCrossScore cmp
     * @property {number|null} [refLikes] PlanetCrossScore refLikes
     * @property {number|null} [cmpLikes] PlanetCrossScore cmpLikes
     */

    /**
     * Constructs a new PlanetCrossScore.
     * @exports PlanetCrossScore
     * @classdesc Represents a PlanetCrossScore.
     * @implements IPlanetCrossScore
     * @constructor
     * @param {IPlanetCrossScore=} [properties] Properties to set
     */
    function PlanetCrossScore(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PlanetCrossScore id.
     * @member {number} id
     * @memberof PlanetCrossScore
     * @instance
     */
    PlanetCrossScore.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * PlanetCrossScore ref.
     * @member {number} ref
     * @memberof PlanetCrossScore
     * @instance
     */
    PlanetCrossScore.prototype.ref = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * PlanetCrossScore cmp.
     * @member {number} cmp
     * @memberof PlanetCrossScore
     * @instance
     */
    PlanetCrossScore.prototype.cmp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * PlanetCrossScore refLikes.
     * @member {number} refLikes
     * @memberof PlanetCrossScore
     * @instance
     */
    PlanetCrossScore.prototype.refLikes = 0;

    /**
     * PlanetCrossScore cmpLikes.
     * @member {number} cmpLikes
     * @memberof PlanetCrossScore
     * @instance
     */
    PlanetCrossScore.prototype.cmpLikes = 0;

    /**
     * Creates a new PlanetCrossScore instance using the specified properties.
     * @function create
     * @memberof PlanetCrossScore
     * @static
     * @param {IPlanetCrossScore=} [properties] Properties to set
     * @returns {PlanetCrossScore} PlanetCrossScore instance
     */
    PlanetCrossScore.create = function create(properties) {
        return new PlanetCrossScore(properties);
    };

    /**
     * Encodes the specified PlanetCrossScore message. Does not implicitly {@link PlanetCrossScore.verify|verify} messages.
     * @function encode
     * @memberof PlanetCrossScore
     * @static
     * @param {IPlanetCrossScore} message PlanetCrossScore message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlanetCrossScore.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
        if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.ref);
        if (message.cmp != null && Object.hasOwnProperty.call(message, "cmp"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.cmp);
        if (message.refLikes != null && Object.hasOwnProperty.call(message, "refLikes"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.refLikes);
        if (message.cmpLikes != null && Object.hasOwnProperty.call(message, "cmpLikes"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.cmpLikes);
        return writer;
    };

    /**
     * Encodes the specified PlanetCrossScore message, length delimited. Does not implicitly {@link PlanetCrossScore.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PlanetCrossScore
     * @static
     * @param {IPlanetCrossScore} message PlanetCrossScore message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlanetCrossScore.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PlanetCrossScore message from the specified reader or buffer.
     * @function decode
     * @memberof PlanetCrossScore
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PlanetCrossScore} PlanetCrossScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlanetCrossScore.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlanetCrossScore();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.uint64();
                break;
            case 2:
                message.ref = reader.uint64();
                break;
            case 3:
                message.cmp = reader.uint64();
                break;
            case 4:
                message.refLikes = reader.uint32();
                break;
            case 5:
                message.cmpLikes = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PlanetCrossScore message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PlanetCrossScore
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PlanetCrossScore} PlanetCrossScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlanetCrossScore.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PlanetCrossScore message.
     * @function verify
     * @memberof PlanetCrossScore
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PlanetCrossScore.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer expected";
        if (message.ref != null && message.hasOwnProperty("ref"))
            if (!$util.isInteger(message.ref) && !(message.ref && $util.isInteger(message.ref.low) && $util.isInteger(message.ref.high)))
                return "ref: integer expected";
        if (message.cmp != null && message.hasOwnProperty("cmp"))
            if (!$util.isInteger(message.cmp) && !(message.cmp && $util.isInteger(message.cmp.low) && $util.isInteger(message.cmp.high)))
                return "cmp: integer expected";
        if (message.refLikes != null && message.hasOwnProperty("refLikes"))
            if (!$util.isInteger(message.refLikes))
                return "refLikes: integer expected";
        if (message.cmpLikes != null && message.hasOwnProperty("cmpLikes"))
            if (!$util.isInteger(message.cmpLikes))
                return "cmpLikes: integer expected";
        return null;
    };

    /**
     * Creates a PlanetCrossScore message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PlanetCrossScore
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PlanetCrossScore} PlanetCrossScore
     */
    PlanetCrossScore.fromObject = function fromObject(object) {
        if (object instanceof $root.PlanetCrossScore)
            return object;
        var message = new $root.PlanetCrossScore();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = true;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
        if (object.ref != null)
            if ($util.Long)
                (message.ref = $util.Long.fromValue(object.ref)).unsigned = true;
            else if (typeof object.ref === "string")
                message.ref = parseInt(object.ref, 10);
            else if (typeof object.ref === "number")
                message.ref = object.ref;
            else if (typeof object.ref === "object")
                message.ref = new $util.LongBits(object.ref.low >>> 0, object.ref.high >>> 0).toNumber(true);
        if (object.cmp != null)
            if ($util.Long)
                (message.cmp = $util.Long.fromValue(object.cmp)).unsigned = true;
            else if (typeof object.cmp === "string")
                message.cmp = parseInt(object.cmp, 10);
            else if (typeof object.cmp === "number")
                message.cmp = object.cmp;
            else if (typeof object.cmp === "object")
                message.cmp = new $util.LongBits(object.cmp.low >>> 0, object.cmp.high >>> 0).toNumber(true);
        if (object.refLikes != null)
            message.refLikes = object.refLikes >>> 0;
        if (object.cmpLikes != null)
            message.cmpLikes = object.cmpLikes >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a PlanetCrossScore message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PlanetCrossScore
     * @static
     * @param {PlanetCrossScore} message PlanetCrossScore
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PlanetCrossScore.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.ref = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.ref = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.cmp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.cmp = options.longs === String ? "0" : 0;
            object.refLikes = 0;
            object.cmpLikes = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
        if (message.ref != null && message.hasOwnProperty("ref"))
            if (typeof message.ref === "number")
                object.ref = options.longs === String ? String(message.ref) : message.ref;
            else
                object.ref = options.longs === String ? $util.Long.prototype.toString.call(message.ref) : options.longs === Number ? new $util.LongBits(message.ref.low >>> 0, message.ref.high >>> 0).toNumber(true) : message.ref;
        if (message.cmp != null && message.hasOwnProperty("cmp"))
            if (typeof message.cmp === "number")
                object.cmp = options.longs === String ? String(message.cmp) : message.cmp;
            else
                object.cmp = options.longs === String ? $util.Long.prototype.toString.call(message.cmp) : options.longs === Number ? new $util.LongBits(message.cmp.low >>> 0, message.cmp.high >>> 0).toNumber(true) : message.cmp;
        if (message.refLikes != null && message.hasOwnProperty("refLikes"))
            object.refLikes = message.refLikes;
        if (message.cmpLikes != null && message.hasOwnProperty("cmpLikes"))
            object.cmpLikes = message.cmpLikes;
        return object;
    };

    /**
     * Converts this PlanetCrossScore to JSON.
     * @function toJSON
     * @memberof PlanetCrossScore
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PlanetCrossScore.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PlanetCrossScore;
})();

$root.PlanetCrossScores = (function() {

    /**
     * Properties of a PlanetCrossScores.
     * @exports IPlanetCrossScores
     * @interface IPlanetCrossScores
     * @property {Array.<IPlanetCrossScore>|null} [values] PlanetCrossScores values
     */

    /**
     * Constructs a new PlanetCrossScores.
     * @exports PlanetCrossScores
     * @classdesc Represents a PlanetCrossScores.
     * @implements IPlanetCrossScores
     * @constructor
     * @param {IPlanetCrossScores=} [properties] Properties to set
     */
    function PlanetCrossScores(properties) {
        this.values = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PlanetCrossScores values.
     * @member {Array.<IPlanetCrossScore>} values
     * @memberof PlanetCrossScores
     * @instance
     */
    PlanetCrossScores.prototype.values = $util.emptyArray;

    /**
     * Creates a new PlanetCrossScores instance using the specified properties.
     * @function create
     * @memberof PlanetCrossScores
     * @static
     * @param {IPlanetCrossScores=} [properties] Properties to set
     * @returns {PlanetCrossScores} PlanetCrossScores instance
     */
    PlanetCrossScores.create = function create(properties) {
        return new PlanetCrossScores(properties);
    };

    /**
     * Encodes the specified PlanetCrossScores message. Does not implicitly {@link PlanetCrossScores.verify|verify} messages.
     * @function encode
     * @memberof PlanetCrossScores
     * @static
     * @param {IPlanetCrossScores} message PlanetCrossScores message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlanetCrossScores.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.values != null && message.values.length)
            for (var i = 0; i < message.values.length; ++i)
                $root.PlanetCrossScore.encode(message.values[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PlanetCrossScores message, length delimited. Does not implicitly {@link PlanetCrossScores.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PlanetCrossScores
     * @static
     * @param {IPlanetCrossScores} message PlanetCrossScores message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlanetCrossScores.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PlanetCrossScores message from the specified reader or buffer.
     * @function decode
     * @memberof PlanetCrossScores
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PlanetCrossScores} PlanetCrossScores
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlanetCrossScores.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlanetCrossScores();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.values && message.values.length))
                    message.values = [];
                message.values.push($root.PlanetCrossScore.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PlanetCrossScores message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PlanetCrossScores
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PlanetCrossScores} PlanetCrossScores
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlanetCrossScores.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PlanetCrossScores message.
     * @function verify
     * @memberof PlanetCrossScores
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PlanetCrossScores.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.values != null && message.hasOwnProperty("values")) {
            if (!Array.isArray(message.values))
                return "values: array expected";
            for (var i = 0; i < message.values.length; ++i) {
                var error = $root.PlanetCrossScore.verify(message.values[i]);
                if (error)
                    return "values." + error;
            }
        }
        return null;
    };

    /**
     * Creates a PlanetCrossScores message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PlanetCrossScores
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PlanetCrossScores} PlanetCrossScores
     */
    PlanetCrossScores.fromObject = function fromObject(object) {
        if (object instanceof $root.PlanetCrossScores)
            return object;
        var message = new $root.PlanetCrossScores();
        if (object.values) {
            if (!Array.isArray(object.values))
                throw TypeError(".PlanetCrossScores.values: array expected");
            message.values = [];
            for (var i = 0; i < object.values.length; ++i) {
                if (typeof object.values[i] !== "object")
                    throw TypeError(".PlanetCrossScores.values: object expected");
                message.values[i] = $root.PlanetCrossScore.fromObject(object.values[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a PlanetCrossScores message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PlanetCrossScores
     * @static
     * @param {PlanetCrossScores} message PlanetCrossScores
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PlanetCrossScores.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.values = [];
        if (message.values && message.values.length) {
            object.values = [];
            for (var j = 0; j < message.values.length; ++j)
                object.values[j] = $root.PlanetCrossScore.toObject(message.values[j], options);
        }
        return object;
    };

    /**
     * Converts this PlanetCrossScores to JSON.
     * @function toJSON
     * @memberof PlanetCrossScores
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PlanetCrossScores.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PlanetCrossScores;
})();



/**
 * Climate enum.
 * @exports Climate
 * @enum {number}
 * @property {number} TEMPERATE=0 TEMPERATE value
 * @property {number} HOT=1 HOT value
 * @property {number} ARID=2 ARID value
 * @property {number} MOIST=3 MOIST value
 * @property {number} DRY=4 DRY value
 * @property {number} TROPICAL=5 TROPICAL value
 * @property {number} ARCTIC=6 ARCTIC value
 * @property {number} SUBARCTIC=7 SUBARCTIC value
 * @property {number} UNKNOWN=8 UNKNOWN value
 */
$root.Climate = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "TEMPERATE"] = 0;
    values[valuesById[1] = "HOT"] = 1;
    values[valuesById[2] = "ARID"] = 2;
    values[valuesById[3] = "MOIST"] = 3;
    values[valuesById[4] = "DRY"] = 4;
    values[valuesById[5] = "TROPICAL"] = 5;
    values[valuesById[6] = "ARCTIC"] = 6;
    values[valuesById[7] = "SUBARCTIC"] = 7;
    values[valuesById[8] = "UNKNOWN"] = 8;
    return values;
})();

/**
 * Color enum.
 * @exports Color
 * @enum {number}
 * @property {number} BLACK=0 BLACK value
 * @property {number} BLOND=1 BLOND value
 * @property {number} BLUE=2 BLUE value
 * @property {number} BLUE_GRAY=3 BLUE_GRAY value
 * @property {number} BROWN=4 BROWN value
 * @property {number} DARK=5 DARK value
 * @property {number} FAIR=6 FAIR value
 * @property {number} GOLD=7 GOLD value
 * @property {number} GREEN=8 GREEN value
 * @property {number} GREY=9 GREY value
 * @property {number} HAZEL=10 HAZEL value
 * @property {number} LIGHT=11 LIGHT value
 * @property {number} METAL=12 METAL value
 * @property {number} NONE=13 NONE value
 * @property {number} ORANGE=14 ORANGE value
 * @property {number} PALE=15 PALE value
 * @property {number} PINK=16 PINK value
 * @property {number} RED=17 RED value
 * @property {number} SILVER=18 SILVER value
 * @property {number} TAN=19 TAN value
 * @property {number} WHITE=20 WHITE value
 * @property {number} YELLOW=21 YELLOW value
 */
$root.Color = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "BLACK"] = 0;
    values[valuesById[1] = "BLOND"] = 1;
    values[valuesById[2] = "BLUE"] = 2;
    values[valuesById[3] = "BLUE_GRAY"] = 3;
    values[valuesById[4] = "BROWN"] = 4;
    values[valuesById[5] = "DARK"] = 5;
    values[valuesById[6] = "FAIR"] = 6;
    values[valuesById[7] = "GOLD"] = 7;
    values[valuesById[8] = "GREEN"] = 8;
    values[valuesById[9] = "GREY"] = 9;
    values[valuesById[10] = "HAZEL"] = 10;
    values[valuesById[11] = "LIGHT"] = 11;
    values[valuesById[12] = "METAL"] = 12;
    values[valuesById[13] = "NONE"] = 13;
    values[valuesById[14] = "ORANGE"] = 14;
    values[valuesById[15] = "PALE"] = 15;
    values[valuesById[16] = "PINK"] = 16;
    values[valuesById[17] = "RED"] = 17;
    values[valuesById[18] = "SILVER"] = 18;
    values[valuesById[19] = "TAN"] = 19;
    values[valuesById[20] = "WHITE"] = 20;
    values[valuesById[21] = "YELLOW"] = 21;
    return values;
})();

/**
 * Gender enum.
 * @exports Gender
 * @enum {number}
 * @property {number} MALE=0 MALE value
 * @property {number} FEMALE=1 FEMALE value
 * @property {number} HERMAPHRODITE=2 HERMAPHRODITE value
 * @property {number} NA=3 NA value
 */
$root.Gender = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "MALE"] = 0;
    values[valuesById[1] = "FEMALE"] = 1;
    values[valuesById[2] = "HERMAPHRODITE"] = 2;
    values[valuesById[3] = "NA"] = 3;
    return values;
})();

/**
 * SpeciesType enum.
 * @exports SpeciesType
 * @enum {number}
 * @property {number} AMPHIBIAN=0 AMPHIBIAN value
 * @property {number} ARTIFICIAL=1 ARTIFICIAL value
 * @property {number} GASTROPOD=2 GASTROPOD value
 * @property {number} INSECTOID=3 INSECTOID value
 * @property {number} MAMMAL=4 MAMMAL value
 * @property {number} MAMMALS=5 MAMMALS value
 * @property {number} OTHER=6 OTHER value
 * @property {number} REPTILE=7 REPTILE value
 * @property {number} REPTILIAN=8 REPTILIAN value
 * @property {number} UNKOWN=9 UNKOWN value
 */
$root.SpeciesType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "AMPHIBIAN"] = 0;
    values[valuesById[1] = "ARTIFICIAL"] = 1;
    values[valuesById[2] = "GASTROPOD"] = 2;
    values[valuesById[3] = "INSECTOID"] = 3;
    values[valuesById[4] = "MAMMAL"] = 4;
    values[valuesById[5] = "MAMMALS"] = 5;
    values[valuesById[6] = "OTHER"] = 6;
    values[valuesById[7] = "REPTILE"] = 7;
    values[valuesById[8] = "REPTILIAN"] = 8;
    values[valuesById[9] = "UNKOWN"] = 9;
    return values;
})();

/**
 * Affiliation enum.
 * @exports Affiliation
 * @enum {number}
 * @property {number} JEDI_ORDER=0 JEDI_ORDER value
 * @property {number} SITH_ORDER=1 SITH_ORDER value
 * @property {number} GALACTIC_REPUBLIC=2 GALACTIC_REPUBLIC value
 * @property {number} REBEL_ALLIANCE=3 REBEL_ALLIANCE value
 * @property {number} GALACTIC_EMPIRE=4 GALACTIC_EMPIRE value
 * @property {number} RESISTANCE=5 RESISTANCE value
 * @property {number} NEW_REPUBLIC=6 NEW_REPUBLIC value
 * @property {number} FIRST_ORDER=7 FIRST_ORDER value
 * @property {number} CONFEDERACY_OF_INDEPENDENT_SYSTEMS=8 CONFEDERACY_OF_INDEPENDENT_SYSTEMS value
 * @property {number} TRADE_FEDERATION=9 TRADE_FEDERATION value
 * @property {number} BOUNTY_HUNTERS=10 BOUNTY_HUNTERS value
 * @property {number} MERCENARIES=11 MERCENARIES value
 * @property {number} CRIMINALS=12 CRIMINALS value
 * @property {number} UNAFFILIATED=13 UNAFFILIATED value
 */
$root.Affiliation = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "JEDI_ORDER"] = 0;
    values[valuesById[1] = "SITH_ORDER"] = 1;
    values[valuesById[2] = "GALACTIC_REPUBLIC"] = 2;
    values[valuesById[3] = "REBEL_ALLIANCE"] = 3;
    values[valuesById[4] = "GALACTIC_EMPIRE"] = 4;
    values[valuesById[5] = "RESISTANCE"] = 5;
    values[valuesById[6] = "NEW_REPUBLIC"] = 6;
    values[valuesById[7] = "FIRST_ORDER"] = 7;
    values[valuesById[8] = "CONFEDERACY_OF_INDEPENDENT_SYSTEMS"] = 8;
    values[valuesById[9] = "TRADE_FEDERATION"] = 9;
    values[valuesById[10] = "BOUNTY_HUNTERS"] = 10;
    values[valuesById[11] = "MERCENARIES"] = 11;
    values[valuesById[12] = "CRIMINALS"] = 12;
    values[valuesById[13] = "UNAFFILIATED"] = 13;
    return values;
})();

module.exports = $root;
