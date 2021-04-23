<template>
  <div id="app">
    <TheNavigator />
    <LoadIcon v-if="isLoading" />
    <router-view v-else />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import TheNavigator from '@/components/TheNavigator.vue';
import LoadIcon from '@/components/LoadIcon.vue';
import TheFooter from '@/components/TheFooter.vue';
import { State } from './store/types';

export default Vue.extend({
  name: 'App',
  components: {
    TheNavigator,
    LoadIcon,
    TheFooter,
  },
  computed: {
    ...mapState<State>({
      isLoading: (state: State) => state.isLoading,
    }),
  },
});
</script>

<style>
@import './assets/styles/main.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #002f49;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
