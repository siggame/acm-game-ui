<template>
  <div class="about-us">
    <h1>What We Do</h1>
    <p>{{ message }}</p>
    <p>{{ slogan }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AboutUs',
  data() {
    return {
      message: 'ACM Game is an organization all about making games! Each year we host the MMAI hackathon where students can battle each other in a race to see who can make the best AI possible for cash prizes!',
      slogan: 'Here at ACM Game, we code the game, you code the player.',
    };
  },
});
</script>

<style scoped>

    .about-us {
        background-color: lightgrey;
    }
    h1 {
        text-align: left;
        padding: 25px;
        margin: 0px;
    }

    p {
        text-align: left;
        padding: 25px;
        margin: 0px;
    }
</style>
