<template>
  <GenericJumbotron
    image="games.gif"
    style="width: 100%; height: calc(100vh - 50px)"
    attachment="fixed"
  >
    <div class="home-header">
      <div class="slogo-container">
        <div class="acm-slogo">
          <img :src="getImg(`wrench.svg`)">
          <div>
            <h1>ACM GAME</h1>
            <h3>WE CODE THE GAME</h3>
            <h3>YOU CODE THE PLAYER</h3>
          </div>
        </div>
      </div>
    </div>
  </GenericJumbotron>
</template>

<script>
import Vue from 'vue';
import { getImg } from '@/services/common';

import GenericJumbotron from '@/components/GenericJumbotron.vue';

export default Vue.extend({
  name: 'HomeHeader',
  components: {
    GenericJumbotron,
  },
  methods: {
    getImg,
  },
});
</script>

<style scoped>
.home-header {
  height: 100%;
  width: 100%;
}

.slogo-container {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
}

.acm-slogo {
  display: inline-flex;
}

.acm-slogo img {
  width: 400px;
  height: 400px;
}

.acm-slogo h1 {
  font-size: 500%;
}

.acm-slogo h3 {
  font-size: 200%;
}
</style>
