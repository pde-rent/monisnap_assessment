<style lang="scss" src="./MainLayout.scss" />
<script lang="ts" src="./MainLayout.ts" />

<template lang="pug">

.main-layout.full-size.font-title.flex-vertical.g-4.z0

  // starfield background with warp
  canvas#starfield.abs.z1(:class="{ blur: starfield.warp }")

  // top menu >> tabs (empty, here just used for state management)
  q-tabs.menu.font-primary.bg-dark.full-width.fixed.top.z3(v-model="tabName"
    inline-label active-color="primary" indicator-color="primary")
    q-tab(v-for="tab in Object.values(appTabs)" :key="tab.name"
      style="font-size: 1.5rem"
      :name="tab.name" :label="tab.name" :icon="tab.icon" :click="tab.onclick()")

  // game tabs: clash of planets and characters
  template(v-if="[Resource.PLANET, Resource.CHARACTER].includes(appTabs[tabName].resource)")
    .clash.full-size.flex-vertical.g-6.z2(:class="{ transiting: transiting }")
      // clash resources available >> start
      template(v-if="appTabs[tabName].entities && appTabs[tabName].entities.length > 1")
        .inner.flex-horizontal.g-6
          .entity-card.flex-vertical.g-5(
            v-for="(e, i) in appTabs[tabName].entities"
            @click="selectEntity(i)"
            @mouseenter="activeEntity = i"
            @mouseleave="activeEntity = -1"
            :class="{ active: i === activeEntity, selected: transiting && i === selectedEntity }")
            .name.font-primary.font-title.font-2rem.flex-vertical \#{{ e.id }} {{ e.name }}
            .pics
              img.primary.full-size(:src="appTabs[tabName].images[i]"
                :class="{ planet: appTabs[tabName].resource === Resource.PLANET }")
              template(v-if="appTabs[tabName].resource === Resource.CHARACTER")
                .affiliation(v-if="'mainAffiliation' in appTabs[tabName].entities[i] && appTabs[tabName].entities[i].mainAffiliation !== Affiliation.UNAFFILIATED")
                  q-tooltip(content-class="font-2rem") Member of the {{ Affiliation[appTabs[tabName].entities[i].mainAffiliation] }}
                  img.full-size(:src="getResourceImage(Resource.AFFILIATION, Affiliation[appTabs[tabName].entities[i].mainAffiliation])")
                .homeworld(v-if="'homeworld' in appTabs[tabName].entities[i] && appTabs[tabName].entities[i].homeworld.name !== 'Unknown'")
                  q-tooltip(content-class="font-2rem") From {{ appTabs[tabName].entities[i].homeworld.name }}
                  img.full-size(:src="getResourceImage(Resource.PLANET, appTabs[tabName].entities[i].homeworld.name)")
        .details.flex-horizontal.font-light.font-monospace.font-1p5rem.g-4.q-px-md
          div(v-html="renderHeaders(appTabs[tabName].resource)")
          template(v-for="(e, i) in appTabs[tabName].entities")
            .entity.font-primary(v-html="renderEntity(appTabs[tabName].resource, e)"
              :class="{ active: i === activeEntity }")
          div(v-html="renderUnits(appTabs[tabName].resource)")
        .font-title.font-grey.font-1p2rem.q-mx-lg.align-center Select your favorite {{ Resource[appTabs[tabName].resource] }}, OR REROLL :)

      // clash resources unavailable >> click to start
      template(v-else)
        .start.flex-vertical.g-4.full-width
          q-btn.pulse(round padding="xs" text-color="primary" size="5rem" icon="play_arrow"
            @click="roll(appTabs[tabName])")
          .message.font-title.font-primary.font-2p25rem.align-center Press start to play with {{ Resource[appTabs[tabName].resource] }}S

  // score tab: scoreboards
  template(v-else-if="appTabs[tabName].resource === Resource.SCOREBOARD")
    // top menu >> tabs (empty, here just used for state management)
    q-tabs.scores-menu.font-grey.bg-black.fixed.top.z3.full-width(v-model="scoreTabName"
      inline-label active-color="positive" indicator-color="positive")
      q-tab(v-for="tab in Object.values(scoreTabs)" :key="tab.name"
        style="font-size: 1.5rem"
        :name="tab.name" :label="tab.name" :icon="tab.icon")
    template(v-if="scoreTabName in scoreTabs")
      .scores.full-size.flex-vertical.g-6.z2.font-light
        q-table.absolute-scores.font-monospace.font-light.transparent(
          title="Individual likes" dark color="primary" class="sticky-th" align="left"
          :rows="renderTabAbsoluteScores(scoreTabs[scoreTabName])"
          row-key="name")
        q-table.cross-scores.font-monospace.font-light.transparent(
          title="Cross likes" dark color="primary" class="sticky-th" align="left"
          :rows="renderTabCrossScores(scoreTabs[scoreTabName])"
          row-key="name")

  // bottom controls
  .controls.flex-horizontal.full-width.fixed.bot.font-title.z3
    q-btn(style="font-size: 1.5rem" color="dark" text-color="primary"
      label="Warp"
      :icon="starfield.warp ? 'stop' : 'play_arrow'"
      @click="starfield.toggleWarp()")
    q-btn.q-ml-md(v-if="[Resource.PLANET, Resource.CHARACTER].includes(appTabs[tabName].resource)"
      style="font-size: 1.5rem" color="dark" text-color="primary"
      :label="appTabs[tabName].entities && appTabs[tabName].entities.length ? 'Roll' : 'Start'"
      :icon="appTabs[tabName].entities && appTabs[tabName].entities.length ? 'casino' : 'play_arrow'"
      @click="roll(appTabs[tabName])")

</template>
