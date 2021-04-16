
namespace Server {

    // raw
    export const DEV_MODE = process.env.NODE_ENV === 'development';
    // export const DEV_MODE = Vue.config.devtools;
    export const STATIC_PORT = process.env.PORT || 8080;
    export const REST_PORT = STATIC_PORT;
    export const WS_PORT = STATIC_PORT;
    export const STATIC_PROTOCOL = "https"; // https if ssl is on
    export const REST_PROTOCOL = "https";
    export const WS_PROTOCOL = "ws"; // wss if ssl is on
    export const STATIC_DOMAIN = DEV_MODE ? `localhost:${STATIC_PORT}/` : "xxx.com/";
    export const REST_DOMAIN = DEV_MODE ? `localhost:${REST_PORT}/api/` : "xxx.com/api/";
    export const WS_DOMAIN = DEV_MODE ? `localhost:${WS_PORT}/` : "xxx.com/ws";
    export const STATIC_PREFIX = "";
    export const REST_VERSION = 1;
    export const WS_VERSION = 1;
    // computed
    export const STATIC_ROOT = STATIC_PROTOCOL + "://" + STATIC_DOMAIN + STATIC_PREFIX;
    export const REST_ROOT = REST_PROTOCOL + "://" + REST_DOMAIN + "/v" + REST_VERSION.toString();
    export const WS_ROOT = WS_PROTOCOL + "://" + WS_DOMAIN + "/v" + WS_VERSION.toString();

}

// make sure these variables match their constants.scss counterparts
export const STYLE = {

    fontTitle: "Space Grotesk",
    fontBody: "Nunito",

    black: "rgb(0,0,0)",
    white: "rgb(254,254,254)",
    dark: "rgb(29,29,29)",
    darkerGrey: "rgb(42,42,42)",
    darkGrey: "rgb(80,80,80)",
    grey: "rgb(136,136,136)",
    lightGrey: "#c9c9c9", //"rgb(190,190,190)",
    lighterGrey: "#ECECEC", //"rgb(190,190,190)",
    light: "rgb(248,248,248)",
    lighter: "rgb(253,253,253)",

    active: "#ffbb00",
    primary: "#ffbb00",
    secondary: "#00bfff",
    accent: "#ffbb00",
    positive: "#21BA45",
    negative: "#eb1e1e",
    info: "#00bfff",
    warning: "#f77205"
};

// TODO: make sure the file encoding does not break the unicode representation of these
export const UNICODE_ICONS = {};
