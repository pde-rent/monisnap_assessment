import {encode, intToBytes, LOG, NOTIFIER, sleep} from "./utils";
import {ENV, WS_SERVER_ROOT} from "src/constants";
import {Action, Resource} from "src/scripts/resources";

// we make both the resource and the action fit into a 32 bits (int) as message signature
function actionResourceToTopicBytes(action: Action, resource: Resource): Uint8Array {
    // TODO: make sure the endianness match with the server's on every platform
    return intToBytes(action + resource * 1000);
}

function topicBytesToActionResource(bytes: Uint8Array): number[] {
    const topic = new Int32Array(bytes.slice(0, 4).buffer)[0];
    const resource = Math.round(topic / 1000);
    const action = Math.round(topic - resource * 1000);
    return [action, resource];
}

type Callback = (event: unknown) => unknown;
type AsyncMessageCallback = (event: MessageEvent) => Promise<unknown>;

async function messageEventToBytes(event: MessageEvent): Promise<Uint8Array> {
    // LOG.debug("transforming event to bytes buffer");
    const blob: Blob = event.data as Blob;
    const buffer = await new Response(blob).arrayBuffer();
    return Promise.resolve(new Uint8Array(buffer));
}

export default class WsWrapper {

    private ws: WebSocket | null = null;
    public url: string;
    private protocols: string[] = [];
    // private onopen: callback | null = null;
    // private onclose: callback | null = null;
    // private onerror: callback | null = null;
    // private onmessage: callback | null = null;
    private handlersByResourceByAction: {[key: number]: {[key: number]: (messageBody: Uint8Array) => void }} = {};

    constructor(url: string = WS_SERVER_ROOT, protocols?: string[]) {
        this.url = url;
        // FIXME: does not work as constructor is sync
        // this.ensureConnected()
        //     .then(isConnected => {
        //         if (!isConnected) { throw new Error("Could not connect"); }
        //     }).catch(e => console.log(e));
        [Action.GET, Action.UPDATE].forEach(action => this.handlersByResourceByAction[action] = {});
    }

    public registerHandler(action: Action, resource: Resource, handler: (messageBody: Uint8Array) => void): void {
        if (!(action in this.handlersByResourceByAction)) { this.handlersByResourceByAction[action] = {} }
        this.handlersByResourceByAction[action][resource] = handler;
        // LOG.debug("registered raw resource handler");
    }

    public async connect(url: string = this.url, protocols: string[] = this.protocols): Promise<boolean> {
        this.url = url;
        try {
            if (!protocols || this.protocols.length < 1) {
                this.ws = new WebSocket(url);
            } else {
                // TODO: validate protocols
                this.protocols = protocols;
                this.ws = new WebSocket(url, protocols);
            }
            LOG.info("Connecting to", this.url);
            NOTIFIER.info("Connecting to", this.url);
            this.onMessage(async (e: MessageEvent) => {
                // console.log("message received");
                const message = await messageEventToBytes(e);
                const actionResource = topicBytesToActionResource(message.slice(0,4));
                if (!(actionResource[0] in this.handlersByResourceByAction)
                    || !(actionResource[1] in this.handlersByResourceByAction[actionResource[0]])) {
                    LOG.error("websocket handler missing for action | resource ", actionResource[0], actionResource[1]);
                    return;
                }
                this.handlersByResourceByAction[actionResource[0]][actionResource[1]](message.slice(4, message.length));
            });
            return Promise.resolve(true);
        } catch (e) {
            LOG.error(e);
            NOTIFIER.error("Connection to", this.url, "failed");
            return Promise.resolve(false);
        }
    }

    public onOpen(cb: Callback) {
        if (this.ws) {
            this.ws.onopen = cb;
        }
    }

    public onClose(cb: Callback) {
        if (this.ws) {
            this.ws.onclose = cb;
        }
    }

    public onError(cb: Callback) {
        if (this.ws) {
            this.ws.onerror = cb;
        }
    }

    public onMessage(cb: AsyncMessageCallback) {
        if (this.ws) {
            LOG.debug("registered ws.onmessage");
            this.ws.onmessage = cb;
        } else {
            LOG.debug("did not register ws.onmessage");
        }
    }

    public state(): number | undefined {
        return this.ws?.readyState;
    }

    public isConnected(): boolean {
        return this.state() == WebSocket.OPEN;
    }

    public isConnecting(): boolean {
        return this.state() == WebSocket.CONNECTING;
    }

    public async ensureConnected(retries = 50): Promise<boolean> {
        let connecting = this.isConnecting();
        while (!this.isConnected() && retries > 0) {
            connecting = await this.connect();
            retries--;
            while (this.isConnecting()) {
                LOG.info("connecting...");
                await sleep(500);
            }
        }
        return this.isConnected();
    }

    public async sendString(action: Action, resource: Resource, body: string): Promise<boolean> {
        return this.send(action, resource, encode(body));
    }

    public async send(action: Action, resource: Resource, body: Uint8Array): Promise<boolean> {
        if (!this.ws || !this.isConnected()) {
            // LOG.warn("websocket closed, reconnecting...");
            // NOTIFIER.warn("websocket closed");
            return Promise.resolve(false);
            // if (!(await this.connect()) || !this.ws) { return Promise.resolve(false); }
        }
        try {
            this.ws.send(new Uint8Array([...actionResourceToTopicBytes(action, resource), ...body]));
            // LOG.debug("sent message");
            return true;
        } catch (e) {
            LOG.error(e);
            return Promise.resolve(false);
        }
    }
}

export const WS_WRAPPER = new WsWrapper();
