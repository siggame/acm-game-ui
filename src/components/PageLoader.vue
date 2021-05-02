<template>
  <div
    id="page-loader"
    class="bg-gray-100"
  >
    <div class="icon-container">
      <img
        class="load-icon"
        :src="getImg('wrench.svg')"
        alt="Loading..."
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { getImg } from '@/services/common';

export default Vue.extend({
  name: 'LoadIcon',
  methods: {
    getImg,
  },
});
</script>

<style scoped>
#page-loader {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 11, 34, 0.7);
}

.icon-container {
  position: relative;
  transform: translateY(-50%);
  top: 50%;
  animation: bounce 0.8s infinite linear;
}

.load-icon {
  height: 10vw;
  width: 10vw;
  animation: rotate 2s infinite linear;
}

@keyframes bounce {
  0% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(-75px);
  }
  50% {
    transform: translateY(-100px);
  }
  75% {
    transform: translateY(-75px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
