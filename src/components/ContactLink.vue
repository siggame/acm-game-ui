<template>
  <div class="contact-link">
    <!-- Make this have real image of face,
    then have email and other links use icons (github, email, linkedin) -->
    <img :src="getImg('wrench.svg')">
    <div>
      <h3>{{ contact.name }}</h3>
      <p>{{ contact.role }}</p>
      <p>{{ contact.email }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { getImg } from '@/services/common';

export default Vue.extend({
  name: 'ContactLead',
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
.contact-link {
  height: 175px;
  width: 425px;
  background-color: whitesmoke;
  display: flex;
}

.contact-link div {
  width: 100%;
  text-align: center;
}
</style>
