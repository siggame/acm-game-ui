<template>
  <div class="recent-news">
    <h1>Recent News</h1>
    <div class="news-body">
      <div class="left-side">
        <img
          src="image"
          alt="IMAGE GOES HERE"
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
        background-color: lightblue;
    }
    .right-side {
        flex: 75%;
        text-align: left;
    }
</style>
