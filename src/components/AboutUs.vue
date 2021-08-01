<template>
  <div class="about-us">
    <div class="left-side">
      <h1>What We Do</h1>
      <p>
        ACM Game is an organization all about making games! <br>
        Each year we host the MMAI hackathon where students can <br>
        battle each other in a race to see who can make the best <br>
        AI possible for cash prizes!
      </p>
      <p>Here at ACM Game, we code the game.<br> <strong>You</strong> code the player.</p>
    </div>
    <div class="right-side">
      <img
        src="../assets/homeMMAI.jpg"
        style="width:450px; padding: 5px"
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AboutUs',
});
</script>

<style scoped>

    .about-us {
        background-color: white;
        display:flex;

    }
    .right-side{
      flex:33%
    }
    .left-side{
      flex:66%
    }
    h1 {
        text-align: left;
        padding: 25px;
        margin: 0px;
        font-size: 2vw
    }

    p {
        text-align: left;
        padding: 25px;
        font-size: 1.15vw;
        margin: 0px;

    }
</style>
