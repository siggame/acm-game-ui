<template>
  <div
    id="the-footer"
    class="bg-gray-100"
  >
    <div class="footer-section">
      <h2 class="gray-600">
        Navigate
      </h2>

      <router-link
        v-for="route of routes"
        :key="route.name"
        :to="route.uri"
        class="gray-500"
      >
        <p>{{ route.name }}</p>
      </router-link>
    </div>

    <div class="footer-section">
      <h2 class="gray-600">
        Social Media
      </h2>

      <a
        v-for="link of social"
        :key="link.name"
        class="gray-500"
        :href="link.url"
        target="_blank"
      >
        <p>{{ link.name }}</p>
      </a>
    </div>

    <div class="footer-section">
      <h2 class="gray-600">
        Other Sites
      </h2>

      <a
        v-for="link of other"
        :key="link.name"
        class="gray-500"
        :href="link.url"
      >
        <p>{{ link.name }}</p>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TheFooter',
  data() {
    return {
      routes: [
        { name: 'Home', uri: '/' },
        { name: 'About', uri: '/about' },
        { name: 'Sponsors', uri: '/sponsors' },
        { name: 'Blog', uri: '/blog' },
        { name: 'Hall of Fame', uri: '/hall' },
      ],
      social: [
        { name: 'Discord', url: 'https://discord.gg/QmQqudn' },
        { name: 'GitHub', url: 'https://github.com/siggame' },
        { name: 'Twitter', url: 'https://twitter.com/megaminerai' },
      ],
      other: [
        { name: 'Missouri S&T ACM Chapter', url: 'https://mstacm.org' },
      ],
    };
  },
});
</script>

<style scoped>
#the-footer {
  display: flex;
  justify-content: space-evenly;
}

.footer-section {
  width: 33%;
  text-align: left;
  padding: 20px;
}

.footer-section * {
  text-decoration: none;
  display: table;
}

p {
  margin: 5px 0;
}

a:hover {
  color: #00a1ee;
  cursor: pointer;
  transition: color .3s;
}
</style>
