<template>
  <div
    id="jumbo-about"
    class="jumbotron bg-cover"
    style="background-image: linear-gradient(to bottom, rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.9) 100%), url(https://placeimg.com/1000/480/nature)"
  >
    <h1 class="display-4">
      ACM-GAME
    </h1>
    <p class="lead">
      We Code the Game.
    </p>
    <hr class="my-4">
    <p>
      You Code the Player.
    </p>
    <!---<a class="btn btn-primary btn-lg" href="https://www.google.com" role="button">Learn more</a>--->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Jumbotron',
});
</script>
<style scoped></style>
