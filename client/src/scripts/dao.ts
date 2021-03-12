import WsWrapper, {WS_WRAPPER} from "src/scripts/ws-wrapper";
import {LOG, NOTIFIER} from "src/scripts/utils";
import {
    Action,
    BASE_RESOURCES, CROSS_SCORE_BY_RESOURCE,
    CrossScore, CRUD_ACTIONS,
    NamedResourceEntity,
    Resource, RESOURCE_BY_SCORE,
    ResourceEntity,
    ScoreBoard
} from "src/scripts/resources";
import {
    CharacterAbsoluteScores,
    CharacterCrossScores,
    Characters,
    ICharacterAbsoluteScore,
    ICharacterCrossScore,
    IPlanetAbsoluteScore,
    IPlanetCrossScore,
    PlanetAbsoluteScores,
    PlanetCrossScores,
    Planets,
    SpeciesList
} from "src/generated/bundle";
import {randomKo} from "src/constants";


export const DESERIALIZER_BY_RESOURCE: { [key: number]: (body: Uint8Array) => ResourceEntity[] } = {
    [Resource.CHARACTER]: (e) => Characters.decode(e).values,
    [Resource.PLANET]: (e) => Planets.decode(e).values,
    [Resource.SPECIES]: (e) => SpeciesList.decode(e).values,
    [Resource.PLANET_ABSOLUTE_SCORE]: (e) => PlanetAbsoluteScores.decode(e).values,
    [Resource.PLANET_CROSS_SCORE]: (e) => PlanetCrossScores.decode(e).values,
    [Resource.CHARACTER_ABSOLUTE_SCORE]: (e) => CharacterAbsoluteScores.decode(e).values,
    [Resource.CHARACTER_CROSS_SCORE]: (e) => CharacterCrossScores.decode(e).values,
    // [Resource.AFFILIATION]: Affiliation
};

export const DEPENDENCIES_BY_RESOURCE: { [key: number]: Resource[] } = {

    [Resource.PLANET]: [],
    [Resource.CHARACTER]: [
        Resource.PLANET,
        Resource.SPECIES],
    [Resource.PLANET_ABSOLUTE_SCORE]: [],
    [Resource.PLANET_CROSS_SCORE]: [],
    [Resource.CHARACTER_ABSOLUTE_SCORE]: [],
    [Resource.CHARACTER_CROSS_SCORE]: [],
    [Resource.SCOREBOARD]: [
        Resource.CHARACTER,
        Resource.PLANET,
        Resource.PLANET_ABSOLUTE_SCORE,
        Resource.PLANET_CROSS_SCORE,
        Resource.CHARACTER_ABSOLUTE_SCORE,
        Resource.CHARACTER_CROSS_SCORE],
};

export default class Dao {

    private ws: WsWrapper = WS_WRAPPER;
    private handlersByResourceByAction: { [key: number]: { [key: number]: (resources: ResourceEntity[], updated: ResourceEntity[]) => void } } = {};

    private cacheExpirySeconds: number;
    public cache: { [resource: number]: ResourceEntity[] } = {};
    public cacheById: { [resource: number]: {[key: number]: ResourceEntity} } = {};
    public ageByCache: { [resource: number]: Date } = {};

    // TODO: implement cache size limitation and flush mechanism (i.e. by date / resource)
    // and other expiry methods?
    constructor(cacheExpirySeconds = 10) {

        this.cacheExpirySeconds = cacheExpirySeconds;

        // init handlers and caches maps for further use
        CRUD_ACTIONS.forEach(action => this.handlersByResourceByAction[action] = {});
        BASE_RESOURCES.forEach(r => { this.cache[r] = []; this.cacheById[r] = {}; });

        // create basic handlers on the underlying websocket to call our own higher level handlers
        // FIXME: we here override the WS_WRAPPER with each new dao we create, preventing the previous instance
        // to work as expected, 2 solutions: use a single DAO instance (singleton), or use a new WsWrapper for each
        BASE_RESOURCES.forEach(resource => {
            this.ws.registerHandler(Action.GET, resource, (body) => {
                const entities = DESERIALIZER_BY_RESOURCE[resource](body);
                // override the existing cache
                this.cache[resource] = entities;
                // cleanup the existing cache by id
                this.cacheById[resource] = {};
                // TODO: genericize updates + fetch code
                for (let i = 0; i < entities.length; i++) {
                    this.cacheById[resource][entities[i].id as number] = entities[i];
                }
                this.ageByCache[resource] = new Date();
                if (resource in this.handlersByResourceByAction[Action.GET]) {
                    this.handlersByResourceByAction[Action.GET][resource](this.cache[resource], this.cache[resource]);
                }
                // NOTIFIER.info("Fetched " + this.cache[resource].length.toString() + " " + Resource[resource]);
            });
            this.ws.registerHandler(Action.UPDATE, resource, (body) => {
                const updatedEntities = DESERIALIZER_BY_RESOURCE[resource](body);
                const updatedIds = updatedEntities.map(r => r.id as number);
                this.cache[resource] = this.cache[resource].filter(r => !updatedIds.includes(r.id as number));
                // push the updated resources to the cache
                this.cache[resource].push(...updatedEntities);
                for (let i = 0; i < updatedEntities.length; i++) {
                    this.cacheById[resource][updatedEntities[i].id as number] = updatedEntities[i];
                }
                if (resource in this.handlersByResourceByAction[Action.UPDATE]) {
                    this.handlersByResourceByAction[Action.UPDATE][resource](this.cache[resource], updatedEntities);
                }
                // NOTIFIER.info("Updated " + this.cache[resource].length.toString() + " " + Resource[resource]);
            });
        });

        // register default callbacks for score updates >> fired each time a user likes a resource
        [Resource.CHARACTER_CROSS_SCORE, Resource.PLANET_CROSS_SCORE].forEach(resource => {
            this.registerHandler(Action.UPDATE, resource, (resources, updated) => {
                updated.forEach(
                    u => {
                        const cScoreUpdate = u as CrossScore;
                        const ref = this.cacheById[RESOURCE_BY_SCORE[resource]][cScoreUpdate.ref] as NamedResourceEntity;
                        const cmp = this.cacheById[RESOURCE_BY_SCORE[resource]][cScoreUpdate.cmp] as NamedResourceEntity;
                        // FIXME: this is not the previous score as it was already updated from the handler
                        // find a way to know who won (send from back? propagate from handler? easier option)
                        // const prevCScore = this.cacheById[CROSS_SCORE_BY_RESOURCE[resource]][cScoreUpdate.id] as CrossScore;
                        // if (!prevCScore) { return; }
                        // let winner: NamedResourceEntity, loser: NamedResourceEntity;
                        // if (cScoreUpdate.refLikes > prevCScore.refLikes) {
                        const winner = ref;
                        const loser = cmp;
                        // } else {
                        //     winner = cmp;
                        //     loser = ref;
                        // }
                        NOTIFIER.info(
                            winner?.name ? winner.name : "?", randomKo(), loser?.name ? loser.name : "?"
                        )
                    }
                )
            });
        });
    }

    public registerHandler(action: Action, resource: Resource, handler: ((resource: ResourceEntity[], updated: ResourceEntity[]) => void) | null): void {
        if (handler) { this.handlersByResourceByAction[action][resource] = handler; }
    }

    public isConnected(): boolean {
        return this.ws.isConnected();
    }

    public async connect(): Promise<boolean> {
        await this.ws.ensureConnected();
        if (!this.isConnected()) {
            NOTIFIER.error('Connection to ' + this.ws.url + ' failed');
        } else {
            NOTIFIER.info('Connected to ' + this.ws.url);
        }
        return this.isConnected();
    }

    public isCacheExpired(resource: Resource): boolean {
        if (!(resource in this.ageByCache)) {
            LOG.debug("resource " + Resource[resource] + " not in ageByCache");
            return true;
        }
        const age = (new Date().getTime() - this.ageByCache[resource].getTime()) / 1000;
        return age > this.cacheExpirySeconds;
    }

    public getCacheSize(resource: Resource): number {
        if (!(resource in this.cache)) { return 0; }
        return this.cache[resource].length;
    }

    public async getOne(resource: Resource, callback: ((resource: ResourceEntity[]) => void) | null = null): Promise<boolean> {

        if (resource in this.cache
            && this.cache[resource].length > 0
            && !this.isCacheExpired(resource)) {
            if (callback) {
                callback(this.cache[resource]);
            }
            return Promise.resolve(true);
        } else {
            this.registerHandler(Action.GET, resource, callback);
            return this.ws.sendString(Action.GET, resource, "");
        }
    }

    public async get(resources: Resource[]) {
        const dependencies: Resource[] = [];
        resources.forEach(r => {
            const deps = DEPENDENCIES_BY_RESOURCE[r];
            if (deps && deps.length > 0) { dependencies.push(...deps); }
        });
        // iterate through unique values to get all necessary resources
        const promises: Promise<boolean>[] = [];
        [...new Set([...resources, ...dependencies])].forEach(r => {
            promises.push(new Promise<boolean>(
                resolve => {
                    promises.push(this.getOne(r, () => resolve(true)));
                    setTimeout(() => resolve(false), 500);
                }
            ));
        });
        await Promise.all(promises);
        return Promise.resolve(true);
    }

    // TODO: use classes and not interfaces to avoid number type casting (no | null on implementations)
    public async getScoreBoards(): Promise<ScoreBoard[]> {
        const ok = await this.get([Resource.SCOREBOARD]);
        if (ok && Object.keys(this.cache).length) {
            return Promise.resolve([{
                id: 0,
                absolute: (this.cache[Resource.PLANET_ABSOLUTE_SCORE] as IPlanetAbsoluteScore[])
                    .sort((a, b) => {
                        return (a.likes as number) < (b.likes as number) ? 1 : -1
                    }),
                cross: (this.cache[Resource.PLANET_CROSS_SCORE] as IPlanetCrossScore[])
                    .sort((a, b) => {
                        return ((a.refLikes as number) + (a.cmpLikes as number))
                        < ((b.refLikes as number) + (b.cmpLikes as number)) ? 1 : -1
                    }),
            }, {
                id: 0,
                absolute: (this.cache[Resource.CHARACTER_ABSOLUTE_SCORE] as ICharacterAbsoluteScore[])
                    .sort((a, b) => {
                        return (a.likes as number) < (b.likes as number) ? 1 : -1
                    }),
                cross: (this.cache[Resource.CHARACTER_CROSS_SCORE] as ICharacterCrossScore[])
                    .sort((a, b) => {
                        return ((a.refLikes as number) + (a.cmpLikes as number))
                        < ((b.refLikes as number) + (b.cmpLikes as number)) ? 1 : -1
                    }),
            }] as ScoreBoard[]);
        }
        return Promise.resolve([]);
    }
    public getNameFromId(resource: Resource, id: number): string {
        let name = "?";
        if (resource in this.cacheById && id in this.cacheById[resource]) {
            const entity =  this.cacheById[resource][id] as NamedResourceEntity;
            if (entity.name) { name = entity.name; }
        }
        return name;
    }

}

// default dao
export const DAO = new Dao();
