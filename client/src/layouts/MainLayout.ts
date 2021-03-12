
// import Link from 'components/Link.vue'
import {defineComponent, onMounted, ref, watch} from "vue";
import {Platform, Loading, QSpinnerOrbit} from "quasar";
import Starfield from "src/scripts/starfield";
import {
    CharacterScoreBoard,
    NamedResourceEntity,
    PlanetScoreBoard,
    Resource,
    ResourceEntity, ScoreBoard
} from "src/scripts/resources";
import {DAO} from "src/scripts/dao";
import {
    getResourceImage, renderEntity, renderHeaders, renderUnits,
    renderTabAbsoluteScores, renderTabCrossScores, autoFlexClass
} from "src/scripts/renderers";
import {Climate, ICharacter, IPlanet, Affiliation} from "src/generated/bundle";
import {ASPECT_RATIO, getAspectRatio, isVertical, NOTIFIER, sleep, waitImagesLoaded} from "src/scripts/utils";
import {ACTION_EMITTER} from "src/scripts/actions";
import {STYLE} from "src/constants";
import router from "src/router/index";

export interface AppTab {
    name: string,
    resource: Resource,
    entities: ResourceEntity[],
    images: string[],
    caption: string,
    icon: string,
    onclick: () => Promise<void>
}

export interface ScoreTab {
    name: string,
    resource: Resource,
    icon: string,
    board: ScoreBoard | null,
    onclick: () => Promise<void>
}

const _starfield: Starfield = new Starfield();

// TODO: use enums / strict naming for both app tabs and routes
// for safer / easier usage
const _appTabs: { [key: string]: AppTab } = {

    'Planets': {
        name: 'Planets',
        resource: Resource.PLANET,
        entities: [],
        images: [],
        caption: 'Clash of the extended universe planets',
        icon: 'language',
        onclick: async () => {
            await router().push('planets');
            Loading.show({ spinner: QSpinnerOrbit, spinnerColor: STYLE.active });
            await DAO.get([Resource.PLANET]).then(ok => { Loading.hide() });
        }
    }, 'Characters': {
        name: 'Characters',
        resource: Resource.CHARACTER,
        entities: [],
        images: [],
        caption: 'Clash of the main saga characters',
        icon: 'face',
        onclick: async () => {
            await router().push('characters');
            Loading.show({ spinner: QSpinnerOrbit, spinnerColor: STYLE.active });
            await DAO.get([Resource.CHARACTER]).then(ok => { Loading.hide() });
        }
    }, 'Scores': {
        name: 'Scores',
        resource: Resource.SCOREBOARD,
        entities: [],
        images: [],
        caption: 'Scoreboards',
        icon: 'emoji_events',
        onclick: async () => {
            await router().push('scores/characters');
            Loading.show({ spinner: QSpinnerOrbit, spinnerColor: STYLE.active });
            const scoreBoards = await DAO.getScoreBoards();
            if (scoreBoards && scoreBoards.length > 1) {
                _scoreTabs['Top Planets'].board = scoreBoards[0] as PlanetScoreBoard;
                _scoreTabs['Top Characters'].board = scoreBoards[1] as CharacterScoreBoard;
                console.log(_scoreTabs);
            } else {
                NOTIFIER.error("Could not load Scoreboard");
            }
            Loading.hide();
        }
    }
};

const _scoreTabs: { [key: string]: ScoreTab } = {
    "Top Planets": {
        name: 'Top Planets',
        resource: Resource.PLANET,
        icon: 'language',
        board: null,
        onclick: async () => { await router().push('scores/planets'); }
    },
    "Top Characters": {
        name: 'Top Characters',
        resource: Resource.CHARACTER,
        icon: 'face',
        board: null,
        onclick: async () => { await router().push('scores/characters'); }
    }
};

const getRandomResources = (tab: AppTab, n = 2): boolean => {
    tab.entities = [];
    tab.images = [];
    // TODO: make sure not to display unknown / mock data
    // get unique random indices up to the available length
    const rndSet: Set<number> = new Set();
    if (DAO.getCacheSize(tab.resource) == 0) {
        return false;
    }
    while (rndSet.size < n && rndSet.size < DAO.getCacheSize(tab.resource)) {
        const n = Math.round(Math.random() * (DAO.getCacheSize(tab.resource) - 1));
        if ((DAO.cache[tab.resource][n] as NamedResourceEntity).name === "Unknown") { continue; }
        rndSet.add(n);
    }
    const rnd = Array.from(rndSet.values());
    for (let i = 0; i < n; i++) {
        const r = DAO.cache[tab.resource][rnd[i]] as NamedResourceEntity;
        if (!r) {
            continue;
        }
        tab.entities.push(r);
        tab.images.push(getResourceImage(tab.resource, r.name as string))
    }
    return true;
};

const resizeStarfield = () => {
    if (_starfield.canvas) {
        _starfield.canvas.style.height = "0px";
        _starfield.canvas.style.width = "0px";
        _starfield.canvas.style.height = document.documentElement.scrollHeight.toString() + "px";
        _starfield.canvas.style.width = document.documentElement.scrollWidth.toString() + "px";
        _starfield.resize();
    }
};

window.addEventListener('resize', () => resizeStarfield());

// console.log(DAO, getRandomResources);

export default defineComponent({
    name: 'MainLayout',
    // components: {Link},
    props: {},
    setup() {
        // TODO: switch ref to reactive, better suited here
        const tabName = ref("Planets");
        const scoreTabName = ref("Top Planets");
        const appTabs = ref(_appTabs);
        const scoreTabs = ref(_scoreTabs);
        const activeEntity = ref(-1);
        const selectedEntity = ref(-1);
        const transiting = ref(false);
        const starfield = ref(_starfield);

        console.log(DAO, getRandomResources);

        const roll = async (tab: AppTab, n = 2) => {

            if (!tab.entities || !tab.entities.length) { await tab.onclick(); }
            transiting.value = true;
            Loading.show({ spinner: QSpinnerOrbit, spinnerColor: STYLE.active });
            await sleep(400);
            const namedResources = getRandomResources(tab, n);
            if (!namedResources) {
                NOTIFIER.error(Resource[tab.resource], "resource unavailable");
            }
            resizeStarfield();

            activeEntity.value = -1;
            selectedEntity.value = -1;
            // await waitImagesLoaded(); // does not seem to work
            await sleep(100);
            transiting.value = false;
            Loading.hide();
        };

        // watch(selectedEntity, async () => {
        const selectEntity = async (i: number) => {
            // console.log(Platform);
            if (Platform.is.desktop || (Platform.is.mobile && selectedEntity.value == i)) {
                const resource = _appTabs[tabName.value].resource;
                const panel = _appTabs[tabName.value].entities;
                const entity = panel[i];
                await ACTION_EMITTER.likeMulti(resource, entity, panel);
                selectedEntity.value = i;
                await roll(_appTabs[tabName.value]);
            } else {
                selectedEntity.value = i;
                activeEntity.value = i;
            }
        };

        onMounted(async () => {
            const canvasEl = document.querySelector("canvas#starfield") as HTMLCanvasElement;
            starfield.value.attach(canvasEl);
            resizeStarfield();
            await DAO.connect();
            // _starfield.warpFor(2000);
            return DAO.get([_appTabs[tabName.value].resource]);
        });

        return {
            tabName,
            scoreTabName,
            scoreTabs,
            appTabs,
            DAO,
            starfield,
            activeEntity,
            selectedEntity,
            transiting,
            Resource,
            Climate,
            Affiliation,
            renderEntity,
            renderUnits,
            renderHeaders,
            getResourceImage,
            selectEntity,
            roll,
            renderTabAbsoluteScores,
            renderTabCrossScores,
            ACTION_EMITTER,
            ASPECT_RATIO,
            autoFlexClass
        }
    },

});
