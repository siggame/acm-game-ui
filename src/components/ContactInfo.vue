<template>
  <div class="contact-info">
    <img :src="getImg('wrench.svg')">
    <div class="info-content">
      <h3>{{ contact.name }}</h3>
      <p>{{ contact.role }}</p>
      <div class="contact-icons">
        <a
          v-for="(link, site) of contact.socials"
          :key="site"
          :href="transformSocialLink(site, link)"
          target="_blank"
        >
          <img :src="getImg(`social/${site}.svg`)">
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { getImg, transformSocialLink } from '@/services/common';

export default Vue.extend({
  name: 'ContactInfo',
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getImg,
    transformSocialLink,
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

.contact-icons {
  display: flex;
  justify-content: flex-start;
}

.contact-icons a {
  height: 30px;
  width: 30px;
  margin: 0 10px;
}
</style>
