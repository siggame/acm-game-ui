<template>
  <div class="hall-block">
    <div class="solid">
      <img
        :src="getImg(`people/${person.photo}`)"
        style="float: left; margin 0px 12px 12px 0px; width: 280px; height: 213px; padding: 5px"
      >
      <div style="padding: 20px;">
        <h2>{{ person.name }}</h2>
        <p>{{ person.about }}</p>
        <SocialLinks
          :socials="person.socials"
          :count="10"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { getImg } from '@/services/common';
import SocialLinks from '@/components/SocialLinks.vue';

export default Vue.extend({
  name: 'HallBlock',
  components: {
    SocialLinks,
  },
  props: {
    person: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getImg,
  },
});
</script>

<style scoped>
.hall-block {

}

.solid {
  border-style: solid;
  width: 70%;
  height: 220px;
  background-color: pink;
  margin-left: 15%;
  margin-bottom: 5px;
}
</style>
