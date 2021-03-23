<template>
  <div class="the-jumbotron">
    <img
      class="jumbotron-gif"
      :src="getJumbotronUrl()"
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TheJumbotron',
  methods: {
    getJumbotronUrl() {
      return require('@/assets/games.gif');
    },
  },
});
</script>

<style scoped>
    .jumbotron-gif {
        height: 100%;
        width: 100%;
    }
</style>
