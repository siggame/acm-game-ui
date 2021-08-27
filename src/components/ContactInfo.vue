<template>
  <div class="contact-info">
    <img :src="getImg('wrench.svg')">
    <div class="info-content">
      <h3>{{ contact.name }}</h3>
      <p>{{ contact.role }}</p>
      <SocialLinks
        :socials="contact.socials"
        :count="5"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { getImg } from '@/services/common';
import SocialLinks from '@/components/SocialLinks.vue';

export default Vue.extend({
  name: 'ContactInfo',
  components: {
    SocialLinks,
  },
  props: {
    contact: {
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
.contact-info {
  height: 175px;
  width: 425px;
  background-color: whitesmoke;
  display: flex;
}

.info-content {
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
}

.info-content h3,
.info-content p {
  margin: 0;
}
</style>
