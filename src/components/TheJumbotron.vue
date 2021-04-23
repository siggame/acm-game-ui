<template>
  <div class="the-jumbotron">
    <img
      class="jumbotron-gif"
      :src="getImg(`games.gif`)"
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { getImg } from '@/services/common';

export default Vue.extend({
  name: 'TheJumbotron',
  methods: {
    getImg,
  },
});
</script>

<style scoped>
    .jumbotron-gif {
        height: 300px;
        width: 100%;
    }
</style>
