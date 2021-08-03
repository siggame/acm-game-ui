<template>
  <div class="team-block bg-blue-600">
    <div class="logo-block">
      <img :src="getImg(team.image)">
    </div>

    <div class="about-block">
      <h1>{{ team.name }}</h1>

      <p>{{ team.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { getImg } from '@/services/common';
import Vue from 'vue';

export default Vue.extend({
  name: 'TeamBlock',
  props: {
    team: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getImg,
  },
});
</script>

<style scoped>
.team-block {
  margin: auto;
  display: flex;
}

.logo-block {
  height: 100%;
}

.logo-block img {
  height: 90%;
  padding: 20px;
}

.about-block {
  width: 100%;
}
</style>
