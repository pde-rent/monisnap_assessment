// import { ENV as WEBPACK_ENV } from "../quasar.conf";
// export const ENV = WEBPACK_ENV as Env;

export interface Env {

    STATIC_PROTOCOL: "http" | "https",
    WS_PROTOCOL: "ws" | "wss",
    USE_SSL: boolean,
    STATIC_ROOT: string,
    WS_ROOT: string,
    STATIC_PREFIX: string,
    WS_VERSION: number,
}

export const DEV_MODE = process.env.NODE_ENV === 'development';
// export const DEV_MODE = Vue.config.devtools;

export const ENV: Env = {

    STATIC_PROTOCOL: "http", // https if ssl is on
    WS_PROTOCOL: "ws", // wss if ssl is on
    USE_SSL: false,
    STATIC_ROOT: DEV_MODE ? 'localhost:8081/star-wars-clash' : "drift.capital/star-wars-clash",
    WS_ROOT: DEV_MODE ? 'localhost:8081/star-wars-clash/ws' : "drift.capital/star-wars-clash/ws",
    STATIC_PREFIX: "",
    WS_VERSION: 1,
};

export const STATIC_SERVER_ROOT = ENV.STATIC_PROTOCOL + "://" + ENV.STATIC_ROOT + ENV.STATIC_PREFIX;
export const WS_SERVER_ROOT = ENV.WS_PROTOCOL + "://" + ENV.WS_ROOT + "/v" + ENV.WS_VERSION.toString();

export const STYLE = {

    fontTitle: "Distant Galaxy",
    fontBody: "Righteous",

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

// TODO: make sure the file encoding does not break the unicode representation of these guys
export const ICONS = {
    clash: ["💣", "☠", "🔥", "💥"],
    redHeart: "❤️",
    greenHeart: "💚",
    blueHeart: "💙",
    orangeHeart: "🧡",
    yellowHeart: "💛",
    blackHeart: "🖤"
};

export const randomKo = () => ICONS.clash[(Math.round(Math.random() * (ICONS.clash.length - 1)))];
