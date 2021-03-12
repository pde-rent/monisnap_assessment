import {Action, ResourceEntity, RESOURCE_BY_ENTITY, NamedResourceEntity, Resource} from "src/scripts/resources";
import WsWrapper, {WS_WRAPPER} from "src/scripts/ws-wrapper";
import {intToUint64Bytes} from "src/scripts/utils";

export default class ActionEmitter {

    private ws: WsWrapper = WS_WRAPPER;

    // constructor() {}

    public async likeMulti(resource: Resource, liked: NamedResourceEntity, panel: NamedResourceEntity[]): Promise<boolean> {

        // reflexion not required as we are now using the Resource hard type
        // const resource: Resource = RESOURCE_BY_ENTITY[liked.constructor.name];

        // remove selected from selection panel
        panel = panel.filter(r => r.id !== liked.id);
        let ok = false;
        for (let i = 0; i < panel.length; i++) {
            // the ref element always has the smallest id:
            if ((liked.id as number) < (panel[i].id as number)) {
                ok = await this.likeCross(resource, liked, panel[i], liked) && ok;
            } else {
                ok = await this.likeCross(resource, panel[i], liked, liked) && ok;
            }
        }
        return Promise.resolve(ok);
    }

    public async likeCross(resource: Resource, ref: NamedResourceEntity, cmp: NamedResourceEntity, liked: NamedResourceEntity): Promise<boolean> {

        const connected = await this.ws.ensureConnected();
        if (!connected) { return Promise.resolve(false); }

        // TODO: use BigUint64Array to match with UUID 64 bits representations (> ES2020)
        const refBytes = intToUint64Bytes(ref.id as number);
        const cmpBytes = intToUint64Bytes(cmp.id as number);
        const likedIdBytes = intToUint64Bytes(liked.id as number);
        return WS_WRAPPER.send(Action.LIKE, resource, new Uint8Array([...refBytes, ...cmpBytes, ...likedIdBytes]));
    }
}

// default emitter
export const ACTION_EMITTER = new ActionEmitter();
