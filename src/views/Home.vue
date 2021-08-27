<template>
  <div id="home-page">
    <HomeHeader />
    <RecentNews />
    <AboutUs />
    <JoinUs />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { getImg } from '@/services/common';
import RecentNews from '@/components/RecentNews.vue';
import AboutUs from '@/components/AboutUs.vue';
import JoinUs from '@/components/JoinUs.vue';
import HomeHeader from '@/components/HomeHeader.vue';

export default Vue.extend({
  name: 'HomePage',
  components: {
    RecentNews,
    AboutUs,
    JoinUs,
    HomeHeader,
  },

  methods: {
    getImg,
  },
});
</script>

<style scoped>
#home-page {

}
</style>
