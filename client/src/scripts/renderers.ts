import {Affiliation, Character, Climate, Color, Gender, Planet, Species} from "src/generated/bundle";
import {SERVER_IMAGES_ROOT} from "src/constants";
import {Resource, ResourceEntity} from "src/scripts/resources";
import {LOG} from "src/scripts/utils";


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

function characterDetails(c: Character): string[] {

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

function planetDetails(p: Planet): string[] {

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
        case Resource.PLANET: data = planetDetails(r as Planet); break;
        case Resource.CHARACTER: data = characterDetails(r as Character); break;
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
