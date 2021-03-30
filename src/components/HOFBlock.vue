<template>
  <div class="hof-block">
    <p>{{ photo }}</p>
    <p>{{ name }}</p>
    <p>{{ contribution }}</p>
    <p>{{ link }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LoadIcon',
  props: {
    photo: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    contribution: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
});
</script>
