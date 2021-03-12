// max 999 actions
import WsWrapper from "src/scripts/ws-wrapper";
import {
    Characters,
    Planets,
    Species,
    Affiliation,
    Character,
    Planet,
    SpeciesList,
    IPlanet,
    ISpecies,
    ICharacter,
    CharacterAbsoluteScores,
    CharacterCrossScores,
    PlanetAbsoluteScores,
    PlanetCrossScores,
    PlanetAbsoluteScore,
    CharacterAbsoluteScore,
    CharacterCrossScore,
    IPlanetAbsoluteScore,
    IPlanetCrossScore,
    ICharacterAbsoluteScore,
    ICharacterCrossScore,
    PlanetCrossScore, Climate
} from "src/generated/bundle";

export enum Action {
    GET = 0,
    LIKE = 1,
    DISLIKE = 2,
    UPDATE = 3
}

// max int.max / 1000 resources
export enum Resource {
    PLANET = 0,
    SPECIES = 1,
    CHARACTER = 2,
    PLANET_ABSOLUTE_SCORE = 3,
    PLANET_CROSS_SCORE = 4,
    CHARACTER_ABSOLUTE_SCORE = 5,
    CHARACTER_CROSS_SCORE = 6,
    SCOREBOARD = 7,
    AFFILIATION = 8
}

export interface PlanetScoreBoard {
    id: number, // useless, only just to match DAO
    absolute: IPlanetAbsoluteScore[],
    cross: IPlanetCrossScore[],
}

export interface CharacterScoreBoard {
    id: number, // useless, only just to match DAO
    absolute: ICharacterAbsoluteScore[],
    cross: ICharacterCrossScore[],
}

export type ScoreBoard = PlanetScoreBoard | CharacterScoreBoard;

export type ScoreResourceEntity
    = IPlanetAbsoluteScore | PlanetAbsoluteScore
    | IPlanetCrossScore | PlanetCrossScore
    | ICharacterAbsoluteScore | CharacterAbsoluteScore | ScoreBoard;

export type NamedResourceEntity
    = IPlanet | Planet
    | ISpecies | Species
    | ICharacter | Character;

export type ResourceEntity = ScoreResourceEntity | NamedResourceEntity;

export type AbsoluteScore = PlanetAbsoluteScore | CharacterAbsoluteScore;

export type CrossScore = PlanetCrossScore | CharacterCrossScore;

export const BASE_RESOURCES = [
    Resource.CHARACTER,
    Resource.PLANET,
    Resource.SPECIES,
    Resource.PLANET_ABSOLUTE_SCORE,
    Resource.PLANET_CROSS_SCORE,
    Resource.CHARACTER_ABSOLUTE_SCORE,
    Resource.CHARACTER_CROSS_SCORE,
    // Resource.SCOREBOARD,
    // Resource.AFFILIATION,
];

export const CRUD_ACTIONS = [
    Action.GET,
    Action.UPDATE
];

// const ENTITY_BY_RESOURCE: {[key: number]: ResourceEntity } = {
//     [Resource.CHARACTER]: Character,
//     [Resource.PLANET]: Planet,
//     [Resource.SPECIES]: Species,
//     [Resource.AFFILIATION]: Affiliation,
//     [Resource.PLANET_ABS_SCORE]: PlanetAbsoluteScore,
//     [Resource.PLANET_CROSS_SCORE]: PlanetCrossScore,
//     [Resource.CHARACTER_ABS_SCORE]: CharacterAbsoluteScore,
//     [Resource.CHARACTER_CROSS_SCORE]: CharacterCrossScore,
// };

export const RESOURCE_BY_ENTITY: {[key: string]: Resource } = {
    [Character.constructor.name]: Resource.CHARACTER,
    [Planet.constructor.name]: Resource.PLANET,
    [Species.constructor.name]: Resource.SPECIES,
    [Affiliation.constructor.name]: Resource.AFFILIATION,
    [PlanetAbsoluteScore.constructor.name]: Resource.PLANET_ABSOLUTE_SCORE,
    [PlanetCrossScore.constructor.name]: Resource.PLANET_CROSS_SCORE,
    [CharacterAbsoluteScore.constructor.name]: Resource.CHARACTER_ABSOLUTE_SCORE,
    [CharacterCrossScore.constructor.name]: Resource.CHARACTER_CROSS_SCORE,
};

export const RESOURCE_BY_SCORE: {[key: number]: Resource } = {
    [Resource.PLANET_ABSOLUTE_SCORE]: Resource.PLANET,
    [Resource.PLANET_CROSS_SCORE]: Resource.PLANET,
    [Resource.CHARACTER_ABSOLUTE_SCORE]: Resource.CHARACTER,
    [Resource.CHARACTER_CROSS_SCORE]: Resource.CHARACTER,
};

export const ABSOLUTE_SCORE_BY_RESOURCE: {[key: number]: Resource } = {
    [Resource.PLANET]: Resource.PLANET_ABSOLUTE_SCORE,
    [Resource.CHARACTER]: Resource.CHARACTER_ABSOLUTE_SCORE,
};

export const CROSS_SCORE_BY_RESOURCE: {[key: number]: Resource } = {
    [Resource.PLANET]: Resource.PLANET_CROSS_SCORE,
    [Resource.CHARACTER]: Resource.CHARACTER_CROSS_SCORE,
};
