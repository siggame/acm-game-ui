<template>
  <div class="design-teams">
    <div class="solid">
      <img
        :src="getImgUrl()"
        style="width: 175px; float: left; margin: 20px 12px 12px 14px;"
      >
      <h2>{{ teamname }}</h2>
      <p>{{ description }}</p>
      <ul style="margin-left=100px;">
        <li>{{ trait1 }}</li>
        <li>{{ trait2 }}</li>
        <li>{{ trait3 }}</li>
      </ul>
      <h4>{{ lead }}</h4>
    </div>
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
    trait1: {
      type: String,
      required: true,
    },
    trait2: {
      type: String,
      required: true,
    },
    trait3: {
      type: String,
      required: true,
    },
  },
  methods: {
    getImgUrl() {
      return require(`@/assets/about/${this.photo}`);
    },
  },
});
</script>

<style scoped>
div.solid {
  border-style: solid;
  width: 70%;
  height: 250px;
  background-color: pink;
  margin-left: 15%;
  margin-bottom: 5px;
}
</style>
