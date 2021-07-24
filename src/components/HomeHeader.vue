<template>
  <div
    class="home-header"
  >
    <div class="wrench-picture">
      <img
        class="wrench-svg"
        :src="getImg(`wrench.svg`)"
      >
    </div>
    <div class="acm-text">
      <h1>ACM GAME</h1>
      <p>we code the game, you code the player</p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { getImg } from '@/services/common';

export default Vue.extend({
  name: 'HomeHeader',
  methods: {
    getImg,
  },
});

</script>

<style scoped>
    .home-header {
        background-image: url("../assets/games.gif");
        width: 100%;
        height: 800px;
    }
    .wrench-picture {
        width: 40 px;
        height: 40 px;
    }
    .wrench-svg {
        width: 40 px;
        height: 40 px;
    }
</style>
