<template>
  <div class="blog-preview">
    <img
      class="blog-thumbnail"
      :alt="title"
      :src="getImg(`blogs/${photo}`)"
    >

    <div class="blog-info">
      <h2>{{ title }}</h2> <h4>{{ publishDate }}</h4>
      <p>{{ author }}</p>

      <p>{{ type }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { getImg } from '@/services/common';

export default Vue.extend({
  name: 'BlogPreview',
  props: {
    photo: {
      type: String,
      default: 'logo.png',
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      default: 'ACM Game',
    },
    type: {
      type: String,
      required: true,
    },
    publishDate: {
      type: String,
      required: true,
    },
  },
  methods: {
    getImg,
  },
});
</script>

<style scoped>
.blog-preview {
  display: flex;
  width: 100%;
  height: 100px;
}

.blog-thumbnail {
  max-width: 100px;
  max-height: 150px;
}

.blog-info {
  width: 100%;
  text-align: left;
}

.blog-info * {
  margin: 0 20px;
}
</style>
