import WsWrapper, {WS_WRAPPER} from "src/scripts/ws-wrapper";
import {NOTIFIER} from "src/scripts/utils";
import {Action, BASE_RESOURCES, Resource, ResourceEntity} from "src/scripts/resources";
import {
    CharacterAbsoluteScores, CharacterCrossScores,
    Characters,
    PlanetAbsoluteScores,
    PlanetCrossScores,
    Planets,
    SpeciesList
} from "src/generated/bundle";


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
    private handlersByResource: { [key: number]: (resources: ResourceEntity[]) => void } = {};

    private cacheExpirySeconds: number;
    public cache: { [resource: number]: ResourceEntity[] } = {};
    public ageByCache: { [resource: number]: Date } = {};

    // TODO: implement cache size limitation and flush mechanism (i.e. by date / resource)
    // and other expiry methods?
    constructor(cacheExpirySeconds = 10) {

        this.cacheExpirySeconds = cacheExpirySeconds;

        BASE_RESOURCES.forEach(
            resource => {
                this.ws.registerHandler(Action.GET, resource, (body) => {
                    this.cache[resource] = DESERIALIZER_BY_RESOURCE[resource](body);
                    this.ageByCache[resource] = new Date();
                    if (resource in this.handlersByResource) {
                        this.handlersByResource[resource](this.cache[resource]);
                    }
                    // NOTIFIER.info("Fetched " + this.cache[resource].length.toString() + " " + Resource[resource]);
                });
                this.ws.registerHandler(Action.UPDATE, resource, (body) => {
                    const updatedResource = DESERIALIZER_BY_RESOURCE[resource](body);
                    const updatedIds = updatedResource.map(r => r.id as number);
                    if (resource in this.cache) {
                        // remove resources to be updated
                        this.cache[resource] = this.cache[resource].filter(r => !updatedIds.includes(r.id as number));
                    }
                    // push the updated resources to the cache
                    this.cache[resource].push(...updatedResource);
                    if (resource in this.handlersByResource) {
                        this.handlersByResource[resource](this.cache[resource]);
                    }
                    // NOTIFIER.info("Updated " + this.cache[resource].length.toString() + " " + Resource[resource]);
                });
            });

    }

    public registerHandler(resource: Resource, handler: ((resource: ResourceEntity[]) => void) | null): void {
        if (handler) {
            this.handlersByResource[resource] = handler;
        }
        // LOG.debug("registered resource handler");
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
            this.registerHandler(resource, callback);
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
}

// default dao
export const DAO = new Dao();
