<template>
  <div
    id="the-navigator"
    class="bg-gray-200"
  >
    <div class="nav-section nav-side">
      <router-link to="/">
        <img
          :src="getImg('wrench-light.svg')"
          class="nav-icon"
        >
        <p class="icon-text gray-600">
          ACM Game
        </p>
      </router-link>
    </div>

    <div class="nav-section">
      <router-link
        v-for="route of routes"
        :key="route.name"
        :to="route.uri"
        class="nav-button"

        :class="{ 'bg-gray-100' : route.hovered }"
        @mouseover.native="route.hovered = true"
        @mouseout.native="route.hovered = false"
      >
        <p class="gray-600 button-text">
          {{ route.name }}
        </p>
      </router-link>
    </div>

    <div
      class="nav-section nav-side"
      style="display: flex; justify-content: right;"
    >
      <router-link
        to="/"
        class="portal-side bg-blue-400"
        :class="{ 'bg-blue-500': portalHovered }"
        @mouseover.native="portalHovered = true"
        @mouseout.native="portalHovered = false"
      >
        <p class="portal-text gray-600">
          MegaMinerAI Portal
        </p>
        <img
          :src="getImg('arrow-right.svg')"
          class="portal-icon"
        >
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { getImg } from '@/services/common';

interface RouteInfo {
  name: string;
  uri: string;
  hovered: boolean;
}

export default Vue.extend({
  name: 'TheNavigator',
  data() {
    return {
      routes: [
        { name: 'Home', uri: '/', hovered: false },
        { name: 'About', uri: '/about', hovered: false },
        { name: 'Sponsors', uri: '/sponsors', hovered: false },
        { name: 'Blog', uri: '/blog', hovered: false },
        { name: 'Hall of Fame', uri: '/hall', hovered: false },
      ] as Array<RouteInfo>,
      portalHovered: false,
    };
  },
  methods: {
    getImg,
  },
});
</script>

<style>
#the-navigator {
  height: 50px;
  display: flex;
  justify-content: space-around;
  line-height: 100%;
}

#the-navigation div {
  height: 100%;
}

.nav-section {
  width: 60%;
}

.nav-side {
  width: 20%;
}

.nav-icon {
  height: 80%;
  padding: 5px;
  float: left;
}

.icon-text {
  float: left;
  margin: 0;
  padding: 17px 5px;
}

.nav-button {
  display: inline-block;
  height: 100%;
  width: 120px;
  box-sizing: border-box;
  text-decoration: none;
}

.button-text {
  margin: 0;
  padding: 17px 0;
}

.portal-side {
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  text-decoration: none;
}

.portal-text {
  margin: 0;
  padding: 17px 5px;
  display: inline-block;
}

.portal-icon {
  height: 80%;
  padding: 5px;
  float: right;
}
</style>
