import { Notify } from 'quasar'
import {Component} from "app/node_modules/vue";
import {LooseDictionary} from "app/node_modules/quasar/dist/types/ts-helpers";

const UTF8_DECODER = new TextDecoder("utf-8");
const UTF8_ENCODER = new TextEncoder();

export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export function encode(str: string): Uint8Array {
    return UTF8_ENCODER.encode(str);
}

export function decode(bytes: Uint8Array): string {
    return UTF8_DECODER.decode(bytes);
}

export enum LogLevel {
    INFO = "INFO",
    WARNING = "WARNING",
    DEBUG = "DEBUG",
    ERROR = "ERROR"
}

const ICON_BY_LOG_LEVEL: {[key: string]: string} = {
    INFO: "info",
    WARNING: "warning",
    DEBUG: "bug_report",
    ERROR: "error"
};

type Stringifiable = { toString: () => string; }

export class Logger {

    public defaultLevel: LogLevel;
    public defaultDescriptor: {
        info: (...args: unknown[]) => void,
        warn: (...args: unknown[]) => void,
        debug: (...args: unknown[]) => void,
        error: (...args: unknown[]) => void};

    constructor(defaultLevel= LogLevel.INFO, defaultDescriptor = console) {
        this.defaultLevel = defaultLevel;
        this.defaultDescriptor = defaultDescriptor;
    }

    public log(level = this.defaultLevel, message: string, descriptor = this.defaultDescriptor): void {
        switch (level) {
            case LogLevel.INFO: descriptor.info(LogLevel[level] + ": " + message); break;
            case LogLevel.WARNING: descriptor.warn(LogLevel[level] + ": " + message); break;
            case LogLevel.DEBUG: descriptor.debug(LogLevel[level] + ": " + message); break;
            case LogLevel.ERROR: descriptor.error(LogLevel[level] + ": " + message); break;
        }
    }

    public info(...args: Stringifiable[]): void { this.log(LogLevel.INFO, args.map(a => a.toString()).join(" ")); }
    public warn(...args: Stringifiable[]): void { this.log(LogLevel.WARNING, args.map(a => a.toString()).join(" ")); }
    public debug(...args: Stringifiable[]): void { this.log(LogLevel.DEBUG, args.map(a => a.toString()).join(" ")); }
    public error(...args: Stringifiable[]): void { this.log(LogLevel.ERROR, args.map(a => a.toString()).join(" ")); }
}

export const LOG = new Logger();

// mirroring QNotify.create(opt)
interface NotificationOptions {
    type? : string;
    color? : string;
    textColor? : string;
    message? : string;
    caption? : string;
    html? : boolean;
    icon? : string;
    spinner? : boolean | Component;
    position? : 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top' | 'bottom' | 'left' | 'right' | 'center';
    group? : boolean | string | number;
    badgeColor? : string;
    badgeTextColor? : string;
    badgePosition? : 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    badgeStyle? : any[] | string | LooseDictionary;
    badgeClass? : any[] | string | LooseDictionary;
    progress? : boolean;
    progressClass? : any[] | string | LooseDictionary;
    classes? : string;
    attrs? : LooseDictionary;
    timeout? : number;
    actions? : any[];
    onDismiss? : (args: unknown) => unknown;
    closeBtn? : boolean | string;
    multiLine? : boolean;
    ignoreDefaults? : boolean;
}

function qNotificationSpawn(opt: NotificationOptions | string): void {
    Notify.create(opt);
}

export class Notifier {

    public defaultLevel: LogLevel;
    public defaultSpawn: (opt: NotificationOptions) => void;

    constructor(defaultLevel= LogLevel.INFO, defaultSpawn: (opt: NotificationOptions) => void = qNotificationSpawn) {
        this.defaultLevel = defaultLevel;
        this.defaultSpawn = defaultSpawn;
    }

    public notify(level = this.defaultLevel, message: string, spawn: (opt: NotificationOptions) => void = this.defaultSpawn): void {
        spawn({
            message,
            icon: ICON_BY_LOG_LEVEL[level],
            color: 'dark',
            textColor: 'primary'
        } as NotificationOptions);
    }
    public info(...args: Stringifiable[]): void { this.notify(LogLevel.INFO, args.map(a => a.toString()).join(" ")); }
    public warn(...args: Stringifiable[]): void { this.notify(LogLevel.WARNING, args.map(a => a.toString()).join(" ")); }
    public debug(...args: Stringifiable[]): void { this.notify(LogLevel.DEBUG, args.map(a => a.toString()).join(" ")); }
    public error(...args: Stringifiable[]): void { this.notify(LogLevel.ERROR, args.map(a => a.toString()).join(" ")); }

}

export const NOTIFIER = new Notifier();

export function intToBytes(n: number): Uint8Array {
    return new Uint8Array(new Int32Array([n]).buffer);
}

export function intToUint64Bytes(n: number): Uint8Array {
    return new Uint8Array(new BigUint64Array([BigInt(n)]).buffer);
}
