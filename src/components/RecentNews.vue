<template>
  <div class="recent-news">
    <h1>Recent News</h1>
    <div class="news-body">
      <div class="left-side">
        <img
          src="image"
          alt=""
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

export default Vue.extend({
  name: 'RecentNews',
  data() {
    return {
      image: 'logo.png',
      title: 'Test tile',
      text: 'test text lul',
    };
  },
});
</script>

<style scoped>
    .recent-news {
        background-color: darkgray;
        height: 500px;
        width: 100%;
    }

    .recent-news h1 {
        text-align-last: left;
        padding: 25px;
    }

    .news-body {
        display: flex;
    }

    .left-side {
        flex: 25%;
    }

    .right-side {
        flex: 75%;
        text-align: left;
    }
</style>
