<template>
  <div
    class="hall-block"
    :class="{ 'odd-block': index % 2 !== 0 }"
  >
    <img :src="getImg(`people/${person.photo}`)">
    <div>
      <h2>{{ person.name }}</h2>
      <p>{{ person.about }}</p>
      <SocialLinks
        :socials="person.socials"
        :count="10"
      />
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
    index: {
      type: Number,
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
  width: 1000px;
  height: 220px;
  display: flex;
  margin: auto;
  background-color: rosybrown;
  box-sizing: border-box;
  border: 2px solid brown;
}

.odd-block {
  flex-direction: row-reverse;
}

img {
  height: 100%;
  width: 30%;
}

.hall-block div {
  width: 70%;
}
</style>
