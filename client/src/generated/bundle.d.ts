import * as $protobuf from "protobufjs";
/** Properties of a Character. */
export interface ICharacter {

    /** Character id */
    id?: (number|null);

    /** Character name */
    name?: (string|null);

    /** Character height */
    height?: (number|null);

    /** Character mass */
    mass?: (number|null);

    /** Character hairColor */
    hairColor?: (Color|null);

    /** Character skinColor */
    skinColor?: (Color|null);

    /** Character eyeColor */
    eyeColor?: (Color|null);

    /** Character birthYear */
    birthYear?: (number|null);

    /** Character gender */
    gender?: (Gender|null);

    /** Character homeworld */
    homeworld?: (IPlanet|null);

    /** Character species */
    species?: (ISpecies|null);

    /** Character mainAffiliation */
    mainAffiliation?: (Affiliation|null);
}

/** Represents a Character. */
export class Character implements ICharacter {

    /**
     * Constructs a new Character.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICharacter);

    /** Character id. */
    public id: (number);

    /** Character name. */
    public name: string;

    /** Character height. */
    public height: number;

    /** Character mass. */
    public mass: number;

    /** Character hairColor. */
    public hairColor: Color;

    /** Character skinColor. */
    public skinColor: Color;

    /** Character eyeColor. */
    public eyeColor: Color;

    /** Character birthYear. */
    public birthYear: number;

    /** Character gender. */
    public gender: Gender;

    /** Character homeworld. */
    public homeworld?: (IPlanet|null);

    /** Character species. */
    public species?: (ISpecies|null);

    /** Character mainAffiliation. */
    public mainAffiliation: Affiliation;

    /**
     * Creates a new Character instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Character instance
     */
    public static create(properties?: ICharacter): Character;

    /**
     * Encodes the specified Character message. Does not implicitly {@link Character.verify|verify} messages.
     * @param message Character message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICharacter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Character message, length delimited. Does not implicitly {@link Character.verify|verify} messages.
     * @param message Character message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICharacter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Character message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Character
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Character;

    /**
     * Decodes a Character message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Character
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Character;

    /**
     * Verifies a Character message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Character message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Character
     */
    public static fromObject(object: { [k: string]: any }): Character;

    /**
     * Creates a plain object from a Character message. Also converts values to other types if specified.
     * @param message Character
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Character, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Character to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Characters. */
export interface ICharacters {

    /** Characters values */
    values?: (ICharacter[]|null);
}

/** Represents a Characters. */
export class Characters implements ICharacters {

    /**
     * Constructs a new Characters.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICharacters);

    /** Characters values. */
    public values: ICharacter[];

    /**
     * Creates a new Characters instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Characters instance
     */
    public static create(properties?: ICharacters): Characters;

    /**
     * Encodes the specified Characters message. Does not implicitly {@link Characters.verify|verify} messages.
     * @param message Characters message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICharacters, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Characters message, length delimited. Does not implicitly {@link Characters.verify|verify} messages.
     * @param message Characters message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICharacters, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Characters message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Characters
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Characters;

    /**
     * Decodes a Characters message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Characters
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Characters;

    /**
     * Verifies a Characters message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Characters message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Characters
     */
    public static fromObject(object: { [k: string]: any }): Characters;

    /**
     * Creates a plain object from a Characters message. Also converts values to other types if specified.
     * @param message Characters
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Characters, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Characters to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Planet. */
export interface IPlanet {

    /** Planet id */
    id?: (number|null);

    /** Planet name */
    name?: (string|null);

    /** Planet daysToRotation */
    daysToRotation?: (number|null);

    /** Planet daysToOrbit */
    daysToOrbit?: (number|null);

    /** Planet diameterKm */
    diameterKm?: (number|null);

    /** Planet climate */
    climate?: (Climate|null);

    /** Planet standardGravity */
    standardGravity?: (number|null);

    /** Planet terrain */
    terrain?: (string|null);

    /** Planet surfaceWaterRatio */
    surfaceWaterRatio?: (number|null);

    /** Planet population */
    population?: (number|null);
}

/** Represents a Planet. */
export class Planet implements IPlanet {

    /**
     * Constructs a new Planet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlanet);

    /** Planet id. */
    public id: (number);

    /** Planet name. */
    public name: string;

    /** Planet daysToRotation. */
    public daysToRotation: number;

    /** Planet daysToOrbit. */
    public daysToOrbit: number;

    /** Planet diameterKm. */
    public diameterKm: number;

    /** Planet climate. */
    public climate: Climate;

    /** Planet standardGravity. */
    public standardGravity: number;

    /** Planet terrain. */
    public terrain: string;

    /** Planet surfaceWaterRatio. */
    public surfaceWaterRatio: number;

    /** Planet population. */
    public population: (number);

    /**
     * Creates a new Planet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Planet instance
     */
    public static create(properties?: IPlanet): Planet;

    /**
     * Encodes the specified Planet message. Does not implicitly {@link Planet.verify|verify} messages.
     * @param message Planet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlanet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Planet message, length delimited. Does not implicitly {@link Planet.verify|verify} messages.
     * @param message Planet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlanet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Planet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Planet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Planet;

    /**
     * Decodes a Planet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Planet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Planet;

    /**
     * Verifies a Planet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Planet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Planet
     */
    public static fromObject(object: { [k: string]: any }): Planet;

    /**
     * Creates a plain object from a Planet message. Also converts values to other types if specified.
     * @param message Planet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Planet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Planet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Planets. */
export interface IPlanets {

    /** Planets values */
    values?: (IPlanet[]|null);
}

/** Represents a Planets. */
export class Planets implements IPlanets {

    /**
     * Constructs a new Planets.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlanets);

    /** Planets values. */
    public values: IPlanet[];

    /**
     * Creates a new Planets instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Planets instance
     */
    public static create(properties?: IPlanets): Planets;

    /**
     * Encodes the specified Planets message. Does not implicitly {@link Planets.verify|verify} messages.
     * @param message Planets message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlanets, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Planets message, length delimited. Does not implicitly {@link Planets.verify|verify} messages.
     * @param message Planets message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlanets, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Planets message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Planets
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Planets;

    /**
     * Decodes a Planets message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Planets
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Planets;

    /**
     * Verifies a Planets message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Planets message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Planets
     */
    public static fromObject(object: { [k: string]: any }): Planets;

    /**
     * Creates a plain object from a Planets message. Also converts values to other types if specified.
     * @param message Planets
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Planets, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Planets to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Species. */
export interface ISpecies {

    /** Species id */
    id?: (number|null);

    /** Species name */
    name?: (string|null);

    /** Species speciesType */
    speciesType?: (SpeciesType|null);

    /** Species averageHeight */
    averageHeight?: (number|null);

    /** Species skinColors */
    skinColors?: (Color[]|null);

    /** Species hairColors */
    hairColors?: (Color[]|null);

    /** Species eyeColors */
    eyeColors?: (Color[]|null);

    /** Species averageLifespan */
    averageLifespan?: (number|null);

    /** Species language */
    language?: (string|null);

    /** Species homeworld */
    homeworld?: (IPlanet|null);
}

/** Represents a Species. */
export class Species implements ISpecies {

    /**
     * Constructs a new Species.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISpecies);

    /** Species id. */
    public id: (number);

    /** Species name. */
    public name: string;

    /** Species speciesType. */
    public speciesType: SpeciesType;

    /** Species averageHeight. */
    public averageHeight: number;

    /** Species skinColors. */
    public skinColors: Color[];

    /** Species hairColors. */
    public hairColors: Color[];

    /** Species eyeColors. */
    public eyeColors: Color[];

    /** Species averageLifespan. */
    public averageLifespan: number;

    /** Species language. */
    public language: string;

    /** Species homeworld. */
    public homeworld?: (IPlanet|null);

    /**
     * Creates a new Species instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Species instance
     */
    public static create(properties?: ISpecies): Species;

    /**
     * Encodes the specified Species message. Does not implicitly {@link Species.verify|verify} messages.
     * @param message Species message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISpecies, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Species message, length delimited. Does not implicitly {@link Species.verify|verify} messages.
     * @param message Species message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISpecies, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Species message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Species
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Species;

    /**
     * Decodes a Species message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Species
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Species;

    /**
     * Verifies a Species message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Species message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Species
     */
    public static fromObject(object: { [k: string]: any }): Species;

    /**
     * Creates a plain object from a Species message. Also converts values to other types if specified.
     * @param message Species
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Species, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Species to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SpeciesList. */
export interface ISpeciesList {

    /** SpeciesList values */
    values?: (ISpecies[]|null);
}

/** Represents a SpeciesList. */
export class SpeciesList implements ISpeciesList {

    /**
     * Constructs a new SpeciesList.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISpeciesList);

    /** SpeciesList values. */
    public values: ISpecies[];

    /**
     * Creates a new SpeciesList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SpeciesList instance
     */
    public static create(properties?: ISpeciesList): SpeciesList;

    /**
     * Encodes the specified SpeciesList message. Does not implicitly {@link SpeciesList.verify|verify} messages.
     * @param message SpeciesList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISpeciesList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SpeciesList message, length delimited. Does not implicitly {@link SpeciesList.verify|verify} messages.
     * @param message SpeciesList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISpeciesList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SpeciesList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SpeciesList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SpeciesList;

    /**
     * Decodes a SpeciesList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SpeciesList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SpeciesList;

    /**
     * Verifies a SpeciesList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SpeciesList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SpeciesList
     */
    public static fromObject(object: { [k: string]: any }): SpeciesList;

    /**
     * Creates a plain object from a SpeciesList message. Also converts values to other types if specified.
     * @param message SpeciesList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SpeciesList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SpeciesList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CharacterAbsoluteScore. */
export interface ICharacterAbsoluteScore {

    /** CharacterAbsoluteScore id */
    id?: (number|null);

    /** CharacterAbsoluteScore ref */
    ref?: (number|null);

    /** CharacterAbsoluteScore likes */
    likes?: (number|null);

    /** CharacterAbsoluteScore dislikes */
    dislikes?: (number|null);
}

/** Represents a CharacterAbsoluteScore. */
export class CharacterAbsoluteScore implements ICharacterAbsoluteScore {

    /**
     * Constructs a new CharacterAbsoluteScore.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICharacterAbsoluteScore);

    /** CharacterAbsoluteScore id. */
    public id: (number);

    /** CharacterAbsoluteScore ref. */
    public ref: (number);

    /** CharacterAbsoluteScore likes. */
    public likes: number;

    /** CharacterAbsoluteScore dislikes. */
    public dislikes: number;

    /**
     * Creates a new CharacterAbsoluteScore instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CharacterAbsoluteScore instance
     */
    public static create(properties?: ICharacterAbsoluteScore): CharacterAbsoluteScore;

    /**
     * Encodes the specified CharacterAbsoluteScore message. Does not implicitly {@link CharacterAbsoluteScore.verify|verify} messages.
     * @param message CharacterAbsoluteScore message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICharacterAbsoluteScore, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CharacterAbsoluteScore message, length delimited. Does not implicitly {@link CharacterAbsoluteScore.verify|verify} messages.
     * @param message CharacterAbsoluteScore message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICharacterAbsoluteScore, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CharacterAbsoluteScore message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CharacterAbsoluteScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CharacterAbsoluteScore;

    /**
     * Decodes a CharacterAbsoluteScore message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CharacterAbsoluteScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CharacterAbsoluteScore;

    /**
     * Verifies a CharacterAbsoluteScore message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CharacterAbsoluteScore message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CharacterAbsoluteScore
     */
    public static fromObject(object: { [k: string]: any }): CharacterAbsoluteScore;

    /**
     * Creates a plain object from a CharacterAbsoluteScore message. Also converts values to other types if specified.
     * @param message CharacterAbsoluteScore
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CharacterAbsoluteScore, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CharacterAbsoluteScore to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CharacterAbsoluteScores. */
export interface ICharacterAbsoluteScores {

    /** CharacterAbsoluteScores values */
    values?: (ICharacterAbsoluteScore[]|null);
}

/** Represents a CharacterAbsoluteScores. */
export class CharacterAbsoluteScores implements ICharacterAbsoluteScores {

    /**
     * Constructs a new CharacterAbsoluteScores.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICharacterAbsoluteScores);

    /** CharacterAbsoluteScores values. */
    public values: ICharacterAbsoluteScore[];

    /**
     * Creates a new CharacterAbsoluteScores instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CharacterAbsoluteScores instance
     */
    public static create(properties?: ICharacterAbsoluteScores): CharacterAbsoluteScores;

    /**
     * Encodes the specified CharacterAbsoluteScores message. Does not implicitly {@link CharacterAbsoluteScores.verify|verify} messages.
     * @param message CharacterAbsoluteScores message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICharacterAbsoluteScores, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CharacterAbsoluteScores message, length delimited. Does not implicitly {@link CharacterAbsoluteScores.verify|verify} messages.
     * @param message CharacterAbsoluteScores message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICharacterAbsoluteScores, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CharacterAbsoluteScores message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CharacterAbsoluteScores
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CharacterAbsoluteScores;

    /**
     * Decodes a CharacterAbsoluteScores message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CharacterAbsoluteScores
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CharacterAbsoluteScores;

    /**
     * Verifies a CharacterAbsoluteScores message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CharacterAbsoluteScores message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CharacterAbsoluteScores
     */
    public static fromObject(object: { [k: string]: any }): CharacterAbsoluteScores;

    /**
     * Creates a plain object from a CharacterAbsoluteScores message. Also converts values to other types if specified.
     * @param message CharacterAbsoluteScores
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CharacterAbsoluteScores, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CharacterAbsoluteScores to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CharacterCrossScore. */
export interface ICharacterCrossScore {

    /** CharacterCrossScore id */
    id?: (number|null);

    /** CharacterCrossScore ref */
    ref?: (number|null);

    /** CharacterCrossScore cmp */
    cmp?: (number|null);

    /** CharacterCrossScore refLikes */
    refLikes?: (number|null);

    /** CharacterCrossScore cmpLikes */
    cmpLikes?: (number|null);
}

/** Represents a CharacterCrossScore. */
export class CharacterCrossScore implements ICharacterCrossScore {

    /**
     * Constructs a new CharacterCrossScore.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICharacterCrossScore);

    /** CharacterCrossScore id. */
    public id: (number);

    /** CharacterCrossScore ref. */
    public ref: (number);

    /** CharacterCrossScore cmp. */
    public cmp: (number);

    /** CharacterCrossScore refLikes. */
    public refLikes: number;

    /** CharacterCrossScore cmpLikes. */
    public cmpLikes: number;

    /**
     * Creates a new CharacterCrossScore instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CharacterCrossScore instance
     */
    public static create(properties?: ICharacterCrossScore): CharacterCrossScore;

    /**
     * Encodes the specified CharacterCrossScore message. Does not implicitly {@link CharacterCrossScore.verify|verify} messages.
     * @param message CharacterCrossScore message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICharacterCrossScore, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CharacterCrossScore message, length delimited. Does not implicitly {@link CharacterCrossScore.verify|verify} messages.
     * @param message CharacterCrossScore message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICharacterCrossScore, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CharacterCrossScore message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CharacterCrossScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CharacterCrossScore;

    /**
     * Decodes a CharacterCrossScore message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CharacterCrossScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CharacterCrossScore;

    /**
     * Verifies a CharacterCrossScore message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CharacterCrossScore message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CharacterCrossScore
     */
    public static fromObject(object: { [k: string]: any }): CharacterCrossScore;

    /**
     * Creates a plain object from a CharacterCrossScore message. Also converts values to other types if specified.
     * @param message CharacterCrossScore
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CharacterCrossScore, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CharacterCrossScore to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CharacterCrossScores. */
export interface ICharacterCrossScores {

    /** CharacterCrossScores values */
    values?: (ICharacterCrossScore[]|null);
}

/** Represents a CharacterCrossScores. */
export class CharacterCrossScores implements ICharacterCrossScores {

    /**
     * Constructs a new CharacterCrossScores.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICharacterCrossScores);

    /** CharacterCrossScores values. */
    public values: ICharacterCrossScore[];

    /**
     * Creates a new CharacterCrossScores instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CharacterCrossScores instance
     */
    public static create(properties?: ICharacterCrossScores): CharacterCrossScores;

    /**
     * Encodes the specified CharacterCrossScores message. Does not implicitly {@link CharacterCrossScores.verify|verify} messages.
     * @param message CharacterCrossScores message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICharacterCrossScores, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CharacterCrossScores message, length delimited. Does not implicitly {@link CharacterCrossScores.verify|verify} messages.
     * @param message CharacterCrossScores message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICharacterCrossScores, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CharacterCrossScores message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CharacterCrossScores
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CharacterCrossScores;

    /**
     * Decodes a CharacterCrossScores message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CharacterCrossScores
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CharacterCrossScores;

    /**
     * Verifies a CharacterCrossScores message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CharacterCrossScores message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CharacterCrossScores
     */
    public static fromObject(object: { [k: string]: any }): CharacterCrossScores;

    /**
     * Creates a plain object from a CharacterCrossScores message. Also converts values to other types if specified.
     * @param message CharacterCrossScores
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CharacterCrossScores, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CharacterCrossScores to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PlanetAbsoluteScore. */
export interface IPlanetAbsoluteScore {

    /** PlanetAbsoluteScore id */
    id?: (number|null);

    /** PlanetAbsoluteScore ref */
    ref?: (number|null);

    /** PlanetAbsoluteScore likes */
    likes?: (number|null);

    /** PlanetAbsoluteScore dislikes */
    dislikes?: (number|null);
}

/** Represents a PlanetAbsoluteScore. */
export class PlanetAbsoluteScore implements IPlanetAbsoluteScore {

    /**
     * Constructs a new PlanetAbsoluteScore.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlanetAbsoluteScore);

    /** PlanetAbsoluteScore id. */
    public id: (number);

    /** PlanetAbsoluteScore ref. */
    public ref: (number);

    /** PlanetAbsoluteScore likes. */
    public likes: number;

    /** PlanetAbsoluteScore dislikes. */
    public dislikes: number;

    /**
     * Creates a new PlanetAbsoluteScore instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlanetAbsoluteScore instance
     */
    public static create(properties?: IPlanetAbsoluteScore): PlanetAbsoluteScore;

    /**
     * Encodes the specified PlanetAbsoluteScore message. Does not implicitly {@link PlanetAbsoluteScore.verify|verify} messages.
     * @param message PlanetAbsoluteScore message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlanetAbsoluteScore, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlanetAbsoluteScore message, length delimited. Does not implicitly {@link PlanetAbsoluteScore.verify|verify} messages.
     * @param message PlanetAbsoluteScore message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlanetAbsoluteScore, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlanetAbsoluteScore message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlanetAbsoluteScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlanetAbsoluteScore;

    /**
     * Decodes a PlanetAbsoluteScore message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlanetAbsoluteScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlanetAbsoluteScore;

    /**
     * Verifies a PlanetAbsoluteScore message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlanetAbsoluteScore message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlanetAbsoluteScore
     */
    public static fromObject(object: { [k: string]: any }): PlanetAbsoluteScore;

    /**
     * Creates a plain object from a PlanetAbsoluteScore message. Also converts values to other types if specified.
     * @param message PlanetAbsoluteScore
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlanetAbsoluteScore, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlanetAbsoluteScore to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PlanetAbsoluteScores. */
export interface IPlanetAbsoluteScores {

    /** PlanetAbsoluteScores values */
    values?: (IPlanetAbsoluteScore[]|null);
}

/** Represents a PlanetAbsoluteScores. */
export class PlanetAbsoluteScores implements IPlanetAbsoluteScores {

    /**
     * Constructs a new PlanetAbsoluteScores.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlanetAbsoluteScores);

    /** PlanetAbsoluteScores values. */
    public values: IPlanetAbsoluteScore[];

    /**
     * Creates a new PlanetAbsoluteScores instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlanetAbsoluteScores instance
     */
    public static create(properties?: IPlanetAbsoluteScores): PlanetAbsoluteScores;

    /**
     * Encodes the specified PlanetAbsoluteScores message. Does not implicitly {@link PlanetAbsoluteScores.verify|verify} messages.
     * @param message PlanetAbsoluteScores message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlanetAbsoluteScores, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlanetAbsoluteScores message, length delimited. Does not implicitly {@link PlanetAbsoluteScores.verify|verify} messages.
     * @param message PlanetAbsoluteScores message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlanetAbsoluteScores, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlanetAbsoluteScores message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlanetAbsoluteScores
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlanetAbsoluteScores;

    /**
     * Decodes a PlanetAbsoluteScores message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlanetAbsoluteScores
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlanetAbsoluteScores;

    /**
     * Verifies a PlanetAbsoluteScores message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlanetAbsoluteScores message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlanetAbsoluteScores
     */
    public static fromObject(object: { [k: string]: any }): PlanetAbsoluteScores;

    /**
     * Creates a plain object from a PlanetAbsoluteScores message. Also converts values to other types if specified.
     * @param message PlanetAbsoluteScores
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlanetAbsoluteScores, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlanetAbsoluteScores to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PlanetCrossScore. */
export interface IPlanetCrossScore {

    /** PlanetCrossScore id */
    id?: (number|null);

    /** PlanetCrossScore ref */
    ref?: (number|null);

    /** PlanetCrossScore cmp */
    cmp?: (number|null);

    /** PlanetCrossScore refLikes */
    refLikes?: (number|null);

    /** PlanetCrossScore cmpLikes */
    cmpLikes?: (number|null);
}

/** Represents a PlanetCrossScore. */
export class PlanetCrossScore implements IPlanetCrossScore {

    /**
     * Constructs a new PlanetCrossScore.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlanetCrossScore);

    /** PlanetCrossScore id. */
    public id: (number);

    /** PlanetCrossScore ref. */
    public ref: (number);

    /** PlanetCrossScore cmp. */
    public cmp: (number);

    /** PlanetCrossScore refLikes. */
    public refLikes: number;

    /** PlanetCrossScore cmpLikes. */
    public cmpLikes: number;

    /**
     * Creates a new PlanetCrossScore instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlanetCrossScore instance
     */
    public static create(properties?: IPlanetCrossScore): PlanetCrossScore;

    /**
     * Encodes the specified PlanetCrossScore message. Does not implicitly {@link PlanetCrossScore.verify|verify} messages.
     * @param message PlanetCrossScore message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlanetCrossScore, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlanetCrossScore message, length delimited. Does not implicitly {@link PlanetCrossScore.verify|verify} messages.
     * @param message PlanetCrossScore message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlanetCrossScore, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlanetCrossScore message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlanetCrossScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlanetCrossScore;

    /**
     * Decodes a PlanetCrossScore message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlanetCrossScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlanetCrossScore;

    /**
     * Verifies a PlanetCrossScore message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlanetCrossScore message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlanetCrossScore
     */
    public static fromObject(object: { [k: string]: any }): PlanetCrossScore;

    /**
     * Creates a plain object from a PlanetCrossScore message. Also converts values to other types if specified.
     * @param message PlanetCrossScore
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlanetCrossScore, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlanetCrossScore to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PlanetCrossScores. */
export interface IPlanetCrossScores {

    /** PlanetCrossScores values */
    values?: (IPlanetCrossScore[]|null);
}

/** Represents a PlanetCrossScores. */
export class PlanetCrossScores implements IPlanetCrossScores {

    /**
     * Constructs a new PlanetCrossScores.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlanetCrossScores);

    /** PlanetCrossScores values. */
    public values: IPlanetCrossScore[];

    /**
     * Creates a new PlanetCrossScores instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlanetCrossScores instance
     */
    public static create(properties?: IPlanetCrossScores): PlanetCrossScores;

    /**
     * Encodes the specified PlanetCrossScores message. Does not implicitly {@link PlanetCrossScores.verify|verify} messages.
     * @param message PlanetCrossScores message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlanetCrossScores, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlanetCrossScores message, length delimited. Does not implicitly {@link PlanetCrossScores.verify|verify} messages.
     * @param message PlanetCrossScores message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlanetCrossScores, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlanetCrossScores message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlanetCrossScores
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlanetCrossScores;

    /**
     * Decodes a PlanetCrossScores message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlanetCrossScores
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlanetCrossScores;

    /**
     * Verifies a PlanetCrossScores message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlanetCrossScores message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlanetCrossScores
     */
    public static fromObject(object: { [k: string]: any }): PlanetCrossScores;

    /**
     * Creates a plain object from a PlanetCrossScores message. Also converts values to other types if specified.
     * @param message PlanetCrossScores
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlanetCrossScores, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlanetCrossScores to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Climate enum. */
export enum Climate {
    TEMPERATE = 0,
    HOT = 1,
    ARID = 2,
    MOIST = 3,
    DRY = 4,
    TROPICAL = 5,
    ARCTIC = 6,
    SUBARCTIC = 7,
    UNKNOWN = 8
}

/** Color enum. */
export enum Color {
    BLACK = 0,
    BLOND = 1,
    BLUE = 2,
    BLUE_GRAY = 3,
    BROWN = 4,
    DARK = 5,
    FAIR = 6,
    GOLD = 7,
    GREEN = 8,
    GREY = 9,
    HAZEL = 10,
    LIGHT = 11,
    METAL = 12,
    NONE = 13,
    ORANGE = 14,
    PALE = 15,
    PINK = 16,
    RED = 17,
    SILVER = 18,
    TAN = 19,
    WHITE = 20,
    YELLOW = 21
}

/** Gender enum. */
export enum Gender {
    MALE = 0,
    FEMALE = 1,
    HERMAPHRODITE = 2,
    NA = 3
}

/** SpeciesType enum. */
export enum SpeciesType {
    AMPHIBIAN = 0,
    ARTIFICIAL = 1,
    GASTROPOD = 2,
    INSECTOID = 3,
    MAMMAL = 4,
    MAMMALS = 5,
    OTHER = 6,
    REPTILE = 7,
    REPTILIAN = 8,
    UNKOWN = 9
}

/** Affiliation enum. */
export enum Affiliation {
    JEDI_ORDER = 0,
    SITH_ORDER = 1,
    GALACTIC_REPUBLIC = 2,
    REBEL_ALLIANCE = 3,
    GALACTIC_EMPIRE = 4,
    RESISTANCE = 5,
    NEW_REPUBLIC = 6,
    FIRST_ORDER = 7,
    CONFEDERACY_OF_INDEPENDENT_SYSTEMS = 8,
    TRADE_FEDERATION = 9,
    BOUNTY_HUNTERS = 10,
    MERCENARIES = 11,
    CRIMINALS = 12,
    UNAFFILIATED = 13
}
