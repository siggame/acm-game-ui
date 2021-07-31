<template>
  <div class="home-header">
    <div class="slogo-container">
      <img
        class="wrench-svg"
        :src="getImg(`wrench.svg`)"
      >
      <div class="acm-text">
        <h1>ACM GAME</h1>
        <h3>WE CODE THE GAME</h3>
        <h3>YOU CODE THE PLAYER</h3>
      </div>
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
  justify-content: center;
  position: relative;
  background-image: url("../assets/games.gif");
  height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.slogo-container {
  display: flex;
  position: relative;
}
.wrench-svg {
  width: 400px;
  height: 400px;
}
.acm-text h1 {
  font-size: 500%;
}
.acm-text h3 {
  font-size: 200%;
}
</style>
