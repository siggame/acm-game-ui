<template>
  <div class="home">
    <HomeHeader />
    <RecentNews />
    <AboutUs />
    <JoinUs />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { getImg } from '@/services/common';
import TheJumbotron from '@/components/TheJumbotron.vue'; // @ is an alias to /src
import RecentNews from '@/components/RecentNews.vue';
import AboutUs from '@/components/AboutUs.vue';
import JoinUs from '@/components/JoinUs.vue';
import HomeHeader from '@/components/HomeHeader.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    TheJumbotron,
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

</style>
