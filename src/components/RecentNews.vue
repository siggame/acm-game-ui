<template>
  <div class="recent-news">
    <h1>Recent News</h1>
    <div class="news-body">
      <div class="left-side">
        <img
          :src="getImg(picture)"
          :alt="getImg(`wrench.svg`)"
        >
      </div>
      <div class="right-side">
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { getImg } from '@/services/common';

export default Vue.extend({
  name: 'RecentNews',
  data() {
    return {
      picture: 'wrench.svg',
      title: 'Join ACM GAME',
      text: 'Join ACM Game this semester in the creation of Megaminer AI 26! We need help all levels of developers, artists, and business minded individuals. We offer experiential learning credits for computer science students which is necessary to graduate. If you are interested in game development, networking, buisness management, you can learn these skills plus much more here at ACM Game!',
    };
  },
  methods: {
    getImg,
  },
});
</script>

<style scoped>
    .recent-news {
        background-color: white;
        height: 500px;
        width: 100%;
    }

    .recent-news h1 {
        text-align-last: left;
        padding: 25px;
        margin: 0px;
    }

    .news-body {
        display: flex;
    }

    .left-side {
        flex: 25%;
    }

    .left-side img {
        height: 200px;
        width: 200px;
        background-color: white;
    }
    .right-side {
        flex: 75%;
        text-align: left;
    }
</style>
