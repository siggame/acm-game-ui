<template>
  <div class="home">
    <div class="home-header">
      <div class="left-side">
        <div class="wrench-picture">
          <img
            class="wrench-svg"
            :src="getImg(`wrench.svg`)"
          >
        </div>
        <div class="acm-text">
          <h1>ACM Game</h1>
          <p>We code the game</p>
          <p>You code the player</p>
        </div>
      </div>
      <div class="right-side">
        <TheJumbotron />
      </div>
    </div>
    <RecentNews />
    <AboutUs />
    <JoinUs />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { getImg } from '@/services/common';
import TheJumbotron from '@/components/TheJumbotron.vue'; // @ is an alias to /src
import RecentNews from '@/components/RecentNews.vue';
import AboutUs from '@/components/AboutUs.vue';
import JoinUs from '@/components/JoinUs.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    TheJumbotron,
    RecentNews,
    AboutUs,
    JoinUs,
  },

  methods: {
    getImg,
  },
});
</script>

<style scoped>
  .home {
    width: 100%;
  }

  .home-header {
    background-color: gray;
    height: 300px;
    width: 100%;
    display: flex;
  }

  .left-side {
    flex: 66%;
  }

  .right-side {
    flex: 34%;
  }

  .wrench-picture {
    height: 100px;
    width: 100px;
    align-content: left;
  }

  img {
    height: 100px;
    width: 100px;
    padding: 100px;
  }

  .acm-text {
    top: 75px;
    align-content: left;
  }

</style>
