<template>
  <div
    id="the-navigator"
    class="bg-gray-300"
  >
    <div
      v-for="route of routes"
      :key="route.name"
      class="nav-button"

      :class="{ 'bg-gray-200' : !route.hovered, 'nav-current': route.uri === $route.path }"
      @mouseover="route.hovered = true"
      @mouseout="route.hovered = false"
      @click="$router.push({ name: route.name })"
    >
      <p class="blue-500">
        {{ route.name }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

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
    };
  },
});
</script>

<style>
#the-navigator {
  height: 50px;
}

.nav-button {
  display: inline-block;
  height: 100%;
  width: 100px;
  text-decoration: none;
  cursor: pointer;
}

.nav-button p {
  line-height: 100%;
}

.nav-current {
  text-decoration: underline;
  text-underline-offset: 4px;
}
</style>
