<template>
  <div class="contact-icons">
    <a
      v-for="site of orderedSocials"
      :key="site"
      :href="transformSocialLink(site, socials[site])"
      target="_blank"
    >
      <img :src="getImg(`social_logos/${site}.svg`)">
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { getImg, transformSocialLink, VALID_SOCIALS } from '@/services/common';

export default Vue.extend({
  name: 'SocialLinks',
  props: {
    socials: {
      type: Object,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
  computed: {
    orderedSocials() {
      return Object.keys(this.socials)
        .sort()
        .filter((site: string) => VALID_SOCIALS.indexOf(site) > -1)
        .slice(0, this.count);
    },
  },
  methods: {
    getImg,
    transformSocialLink,
  },
});
</script>

<style>
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
