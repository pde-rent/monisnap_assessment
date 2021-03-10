<template lang="pug">

.main-layout.full-size.font-title.flex-vertical.g-4

  // starfield background with warp
  canvas#starfield.abs.z-1

  // top menu >> tabs (empty, here just used for state management)
  q-tabs.font-primary.bg-dark.full-width.fixed.top.z1(v-model='selectedTabName'
    inline-label active-color='primary' indicator-color='primary')
    q-tab(v-for='tab in Object.values(tabs)' :key='tab.name'
      style='font-size: 1.5rem'
      :name='tab.name' :label='tab.name' :icon='tab.icon' :click='tab.onclick()')

  // clash of planets and characters
  .clash.full-size.flex-vertical.g-6(v-if="[Resource.PLANET, Resource.CHARACTER].includes(tabs[selectedTabName].resource)")
    template(v-if='tabs[selectedTabName].entities && tabs[selectedTabName].entities.length > 1')
      .inner.flex-horizontal.g-6
        .entity-card.flex-vertical.g-5(
          v-for='(e, i) in tabs[selectedTabName].entities'
          @click='ACTION_EMITTER.likeMulti(tabs[selectedTabName].resource, e, tabs[selectedTabName].entities)'
          @mouseover='activeEntity = i'
          :class='{ active: i === activeEntity }'
        )
          .name.font-primary.font-title.font-2rem.flex-vertical \#{{ e.id }} {{ e.name }}
          .pics
            img.primary.full-size(:src='tabs[selectedTabName].images[i]'
              :class='{ planet: tabs[selectedTabName].resource === Resource.PLANET }')
            .affiliation(v-if='tabs[selectedTabName].resource === Resource.CHARACTER')
              q-tooltip(content-class="font-2rem") {{ Affiliation[tabs[selectedTabName].entities[i].mainAffiliation] }}
              img.secondary.full-size(v-if='tabs[selectedTabName].resource === Resource.CHARACTER'
                :src='getResourceImage(Resource.AFFILIATION, Affiliation[tabs[selectedTabName].entities[i].mainAffiliation])')
      .details.flex-horizontal.font-light.font-monospace.font-1p5rem.g-4.q-px-md
        div(v-html='renderHeaders(tabs[selectedTabName].resource)')
        template(v-for='(e, i) in tabs[selectedTabName].entities')
          .entity.font-primary(v-html='renderEntity(tabs[selectedTabName].resource, e)'
            :class='{ active: i === activeEntity }')
        div(v-html='renderUnits(tabs[selectedTabName].resource)')
      .font-title.font-grey.font-1p2rem.q-mx-lg.align-center Select your favorite {{ Resource[tabs[selectedTabName].resource] }}, OR REROLL :)
    template(v-else)
      .start.font-title.font-grey.font-1p2rem.align-center Press start to play with {{ Resource[tabs[selectedTabName].resource] }}S
      q-btn(padding="xs" text-color="primary" size="5rem" round color="dark" icon="play_arrow"
        @click='roll(tabs[selectedTabName])')

    .controls.flex-horizontal.fixed.bot
      q-btn(style='font-size: 1.5rem' color='dark' text-color='primary'
        label='Warp'
        :icon='starfield.warp ? "stop" : "play_arrow"'
        @click='starfield.toggleWarp()')
      q-btn.q-ml-md(style='font-size: 1.5rem' color='dark' text-color='primary'
        :label='tabs[selectedTabName].entities && tabs[selectedTabName].entities.length ? "Roll" : "Start"'
        :icon='tabs[selectedTabName].entities && tabs[selectedTabName].entities.length ? "casino" : "play_arrow"'
        @click='roll(tabs[selectedTabName])')

  // scoreboards
  .scores(v-else-if="tab == 'Scores'")
    h4 scores

</template>

<style lang="scss">
  @import "../css/constants";
  @import "../css/typo";
  @import "../css/layout";
  @import "../css/effects";

  .main-layout {
    justify-content: flex-start;
  }

  .clash {
    padding-top: 3rem;
    padding-bottom: 5rem;
    .start {
      padding-top: 30vh;
    }
    .entity-card {
      padding: 3rem;
      max-width: 45vw;
      width: 30rem;

      .name {
        min-height: 4rem;
        text-align: center;
      }

      transition: transform .3s ease-out;

      .pics {
        position: relative;
        width: 15rem;
        height: 15rem;
        border-radius: 50%;
        .primary {
          box-sizing: border-box;
          object-fit: cover;
          border-radius: 50%;
          border-style: solid;
          border-width: 0.2rem;
          border-color: $primary;
          &.planet {
            animation: spin 50s linear infinite;
            padding: 1.5rem;
          }
        }
        .affiliation {
          bottom: -0.5rem;
          right: -0.5rem;
          width: 6rem;
          height: 6rem;
          position: absolute;
          .secondary {
            box-sizing: border-box;
            object-fit: contain;
            padding: 0.5rem;
            border-radius: 50%;
            /*filter: invert(1);*/
            background-color: $primary;
          }
        }
      }
      &.active {
        .name { color: $positive; }
        .pics {
          .primary {
            border-width: 1rem;
            border-color: $positive;
            padding: 0;
          }
          .secondary {
            background-color: $positive;
          }
        }
      }
      &:hover {
        /*transform: scale(1.1);*/
        cursor: pointer;
      }
    }
    .details {
      white-space: pre-wrap;
      align-items: flex-start;
      max-width: 100%;
      overflow: hidden;
      color: $grey;
      .entity {
        max-width: 40vw;
        overflow: hidden;
      }
      .active {
        color: $positive;
        font-weight: 600;
      }
    }
    .controls {
    }
  }
  // mobile / vertical mq
  @media (max-aspect-ratio: 3/4) {
    .clash {
      /*padding-top: 0;*/
      gap: 1rem;
      .inner {
        flex-direction: column;
        gap: 1rem;
        .entity-card {
          padding: 0.5rem;
          max-width: 90vw;
          gap: 1rem;
          .pics {
            width: 12rem;
            height: 12rem;
            max-width: 90vw;
            max-height: 90vw;
            .primary {

            }
          }
        }
      }
      .details {
        font-size: 1.2rem;
        :not(.active).entity {
          display: none;
        }
      }
    }
  }
</style>

<script lang="ts">
    // import Link from 'components/Link.vue'
    import {defineComponent, onMounted, ref} from "vue";
    import {Loading, QSpinnerOrbit} from "quasar";
    import Starfield from "src/scripts/starfield";
    import {NamedResourceEntity, Resource, ResourceEntity} from "src/scripts/resources";
    import {DAO} from "src/scripts/dao";
    import {getResourceImage, renderEntity, renderHeaders, renderUnits} from "src/scripts/renderers";
    import {Climate, ICharacter, IPlanet, Affiliation} from "src/generated/bundle";
    import {NOTIFIER} from "src/scripts/utils";
    import {ACTION_EMITTER} from "src/scripts/actions";
    import {$primary} from "src/constants";

    const _starfield: Starfield = new Starfield();
    DAO.connect().then().catch();

    interface Tab {
        name: string,
        resource: Resource,
        entities: ResourceEntity[],
        images: string[],
        caption: string,
        icon: string,
        onclick: () => {}
    }

    const _tabByName: { [key: string]: Tab } = {

        'Planets': {
            name: 'Planets',
            resource: Resource.PLANET,
            entities: [],
            images: [],
            caption: 'Clash of the extended universe planets',
            icon: 'language',
            onclick: async () => {
                Loading.show({ spinner: QSpinnerOrbit, spinnerColor: $primary });
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
                _starfield.startWarping();
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
                _starfield.startWarping();
                await DAO.get([Resource.SCOREBOARD]).then(ok => { Loading.hide() });
            }
        }
    };

    const getRandomResources = (tab: Tab, n = 2): boolean => {
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

    console.log(DAO, getRandomResources);

    export default defineComponent({
        name: 'MainLayout',
        // components: {Link},
        props: {},
        setup() {
            // TODO: switch ref to reactive, better suited here
            const selectedTabName = ref("Planets");
            const activeEntity = ref(-1);
            const dao = ref(DAO);
            const tabs = ref(_tabByName);
            const starfield = ref(_starfield);

            console.log(DAO, getRandomResources);
            const resizeStarfield = () => {
                console.log("resize");
                if (_starfield.canvas) {
                    _starfield.canvas.style.height = "0px";
                    _starfield.canvas.style.width = "0px";
                    _starfield.canvas.style.height = document.documentElement.scrollHeight.toString() + "px";
                    _starfield.canvas.style.width = document.documentElement.scrollWidth.toString() + "px";
                    _starfield.resize();
                }
            };
            window.onresize = () => { resizeStarfield(); };

            const roll = async (tab: Tab, n = 2) => {

                if (!tab.entities || !tab.entities.length) { await tab.onclick(); }
                const namedResources = getRandomResources(tab, n);
                activeEntity.value = -1;
                if (!namedResources) {
                      NOTIFIER.error(Resource[tab.resource], "unavailable");
                }
                resizeStarfield();
            };

            onMounted(() => {
                const canvasEl = document.querySelector("canvas#starfield") as HTMLCanvasElement;
                starfield.value.attach(canvasEl);
                resizeStarfield();
                _starfield.warpFor(2000);
                DAO.get([_tabByName[selectedTabName.value].resource]);
            });

            return {
                selectedTabName,
                tabs,
                dao,
                starfield,
                activeEntity,
                Resource,
                Climate,
                Affiliation,
                renderEntity,
                renderUnits,
                renderHeaders,
                getResourceImage,
                ACTION_EMITTER,
                roll
            }
        },

    });
</script>
