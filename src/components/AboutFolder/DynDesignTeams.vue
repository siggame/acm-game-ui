<template>
  <div class="design-teams">
    <p>{{ photo }}</p>
    <p>{{ teamname }}</p>
    <p>{{ description }}</p>
    <p>{{ lead }}</p>
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
    teamname: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    lead: {
      type: String,
      required: true,
    },
  },
});
</script>
