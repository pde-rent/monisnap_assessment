import {Affiliation, Character, Climate, Color, Gender, Planet, Species} from "src/generated/bundle";
import {BLACK_HEART, BLUE_HEART, GREEN_HEART, RED_HEART, SERVER_IMAGES_ROOT} from "src/constants";
import {AbsoluteScore, CrossScore, Resource, ResourceEntity, ScoreResourceEntity} from "src/scripts/resources";
import {LOG, round} from "src/scripts/utils";
import {DAO} from "src/scripts/dao";
import {ScoreTab} from "layouts/MainLayout";


const EXTENSION_BY_RESOURCE: { [key: number]: string } = {
    [Resource.CHARACTER]: ".jfif",
    [Resource.PLANET]: ".jfif",
    [Resource.SPECIES]: ".jfif",
    [Resource.AFFILIATION]: ".png"
};

const FOLDER_BY_RESOURCE: { [key: number]: string } = {
    [Resource.CHARACTER]: "characters",
    [Resource.PLANET]: "planets",
    [Resource.SPECIES]: "species",
    [Resource.AFFILIATION]: "affiliations"
};

function formatName(name: string): string {
    return name.toLowerCase()
        .replace(/[_ ]/g, "-")
        .replace(/[']/g, "");
}

function characterRenderer(c: Character): string[] {

    const birthSign = c.birthYear > 0 ? "ABY" : "BBY";
    return [
        (c.name ? c.name : "?"),
        (c.height ? c.height.toString() : "?"),
        (c.mass ? c.mass.toString(): "?"),
        (c.hairColor !== Color.NONE ? Color[c.hairColor] : "?"),
        (c.skinColor !== Color.NONE ? Color[c.skinColor] : "?"),
        (c.eyeColor !== Color.NONE ? Color[c.eyeColor] : "?"),
        (c.birthYear ? Math.abs(c.birthYear).toString() + birthSign : "?"),
        Gender[c.gender],
        (c.homeworld && c.homeworld.name != "Unknown" ? c.homeworld.name as string : "?"),
        (c.species && c.species.name != "Unknown" ? c.species.name as string : "?"),
        Affiliation[c.mainAffiliation],
    ];
}

function planetRenderer(p: Planet): string[] {

    return [
        (p.name ? p.name : "?"),
        (p.daysToRotation ? p.daysToRotation.toString() : "?"),
        (p.daysToOrbit ? p.daysToOrbit.toString() : "?"),
        (p.diameterKm ? p.diameterKm.toString() : "?"),
        (p.climate !== Climate.UNKNOWN ? Climate[p.climate] : "?"),
        (p.standardGravity ? p.standardGravity.toString() : "?"),
        (p.terrain ? p.terrain : "?"),
        (p.surfaceWaterRatio ? p.surfaceWaterRatio.toString() : "?"),
        (p.population ? (p.population / 1000000).toString() : "?"),
    ];
}

const PLANET_DETAILS_HEADERS = [
    "Full Name",
    "Rotation",
    "Orbit",
    "Diameter",
    "Climate",
    "Gravity",
    "Terrain",
    "Water/Land",
    "Population"
];

const PLANET_DETAILS_UNITS = [
    "<br/>",
    "T days",
    "T days",
    "km",
    "<br/>",
    "std G",
    "<br/>",
    "%",
    "M"
];

const CHARACTER_DETAILS_HEADERS = [
    "Full Name",
    "Height",
    "Mass",
    "Hair Color",
    "Skin Color",
    "Eye Color",
    "Birth Year",
    "Gender",
    "Homeworld",
    "Species",
    "Affiliation"
];

const CHARACTER_DETAILS_UNITS = [
    "<br/>",
    "cm",
    "kg",
    "<br/>",
    "<br/>",
    "<br/>",
    "<br/>",
    "<br/>",
    "<br/>"
];

export const PLANET_DETAILS_HEADERS_TEMPLATE = "<div>" + PLANET_DETAILS_HEADERS.join("</div><div>") + "</div>";
export const CHARACTER_DETAILS_HEADERS_TEMPLATE = "<div>" + CHARACTER_DETAILS_HEADERS.join("</div><div>") + "</div>";

export const PLANET_DETAILS_UNITS_TEMPLATE = "<div>" + PLANET_DETAILS_UNITS.join("</div><div>") + "</div>";
export const CHARACTER_DETAILS_UNITS_TEMPLATE = "<div>" + CHARACTER_DETAILS_UNITS.join("</div><div>") + "</div>";

export function renderEntity(resource: Resource, r: ResourceEntity): string {
    let data: string[] = [];
    switch (resource) {
        case Resource.PLANET: data = planetRenderer(r as Planet); break;
        case Resource.CHARACTER: data = characterRenderer(r as Character); break;
        case Resource.CHARACTER_ABSOLUTE_SCORE:
        case Resource.CHARACTER_CROSS_SCORE:
        case Resource.PLANET_ABSOLUTE_SCORE:
        case Resource.PLANET_CROSS_SCORE:
        default: LOG.error("Not implemented");
    }
    return "<div>" + data.join("</div><div>") + "</div>";
}

export function renderHeaders(resource: Resource): string {
    const data: string[] = [];
    switch (resource) {
        case Resource.PLANET: return PLANET_DETAILS_HEADERS_TEMPLATE;
        case Resource.CHARACTER: return CHARACTER_DETAILS_HEADERS_TEMPLATE;
        case Resource.CHARACTER_ABSOLUTE_SCORE:
        case Resource.CHARACTER_CROSS_SCORE:
        case Resource.PLANET_ABSOLUTE_SCORE:
        case Resource.PLANET_CROSS_SCORE:
        default: LOG.error("Not implemented");
    }
    return "";
}

export function renderUnits(resource: Resource): string {
    switch (resource) {
        case Resource.PLANET: return PLANET_DETAILS_UNITS_TEMPLATE;
        case Resource.CHARACTER: return CHARACTER_DETAILS_UNITS_TEMPLATE;
        case Resource.CHARACTER_ABSOLUTE_SCORE:
        case Resource.CHARACTER_CROSS_SCORE:
        case Resource.PLANET_ABSOLUTE_SCORE:
        case Resource.PLANET_CROSS_SCORE:
        default: LOG.error("Not implemented");
    }
    return "";
}

export function getResourceImage(resource: Resource, name: string): string {
    return SERVER_IMAGES_ROOT + "/"
        + FOLDER_BY_RESOURCE[resource] + "/"
        + formatName(name) + EXTENSION_BY_RESOURCE[resource];
}

function individualLikeRatioToEmoji(r: number): string {
    const likes = Math.round(r*4);
    return RED_HEART.repeat(likes) + BLACK_HEART.repeat(4 - likes);
}

function crossLikeRatioToEmoji(r: number): string {
    const refLikes = Math.round(r*4);
    return GREEN_HEART.repeat(refLikes) + BLUE_HEART.repeat(4 - refLikes);
}

// sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
// format: val => `${val}`,
// field: row => row.name,
export function renderAScore(resource: Resource, s: AbsoluteScore): unknown {
    const likeRatio = s.likes / (s.dislikes + s.likes);
    return {
        "Name": DAO.getNameFromId(resource, s.id),
        "Score": individualLikeRatioToEmoji(likeRatio),
        "Likes": s.likes.toString(),
        // Dislikes: s.dislikes,
        "Ratio (%)": round(likeRatio * 100, 1),
    };
}

export function renderCScore(resource: Resource, s: CrossScore): unknown {
    const likeRatio = s.refLikes / (s.refLikes + s.cmpLikes);
    return {
        "Name 1": DAO.getNameFromId(resource, s.ref),
        "Name 2": DAO.getNameFromId(resource, s.cmp),
        "Score": crossLikeRatioToEmoji(likeRatio),
        "Likes 1": s.refLikes,
        "Likes 2": s.cmpLikes,
        "Ratio (%)": round(likeRatio * 100, 1),
    };
}

export function renderTabAbsoluteScores(tab: ScoreTab): unknown[] {
    if (!tab.board?.absolute || !tab.board.absolute.length) { return []; }
    return Array.from(tab.board.absolute.map(s => renderAScore(tab.resource, s as AbsoluteScore)));
}

export function renderTabCrossScores(tab: ScoreTab): unknown[] {
    if (!tab.board?.absolute || !tab.board.cross.length) { return []; }
    return Array.from(tab.board.cross.map(s => renderCScore(tab.resource, s as CrossScore)));
}

// export const SCORE_COLUMN_RENDERERS: {[key: number]: unknown} = {
//     [Resource.PLANET_ABSOLUTE_SCORE]: aScoreRenderer(Resource.PLANET),
//     [Resource.PLANET_CROSS_SCORE]: cScoreRenderer(Resource.PLANET),
//     [Resource.CHARACTER_ABSOLUTE_SCORE]: aScoreRenderer(Resource.CHARACTER),
//     [Resource.CHARACTER_CROSS_SCORE]: cScoreRenderer(Resource.CHARACTER),
// };
//
// export const ABSOLUTE_SCORE_COLUMN_RENDERERS: {[key: number]: unknown} = {
//     [Resource.PLANET]: aScoreRenderer(Resource.PLANET),
//     [Resource.CHARACTER]: aScoreRenderer(Resource.CHARACTER),
// };
//
// export const CROSS_SCORE_COLUMN_RENDERERS: {[key: number]: unknown} = {
//     [Resource.PLANET]: cScoreRenderer(Resource.PLANET),
//     [Resource.CHARACTER]: cScoreRenderer(Resource.CHARACTER),
// };
