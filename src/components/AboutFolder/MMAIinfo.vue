<template>
  <div>
    <h2 style="padding: 5px; text-align:left;">MegaMinerAI Info</h2>
    <hr class="divide" />
    <p style="text-align: left; padding: 7px;">
      <img
        style="float: right; margin: 0px 0px 20px 20px;"
        src="../../assets/mmaiphoto.jpg"
        width="320"
      />
      MegaMinerAI is a 24-hour artificial intelligence (AI) programming
      competition hosted each semester by ACM-Game. <br />
      Competitors must use their 24-hours to develop a program to play a novel
      game developed by ACM-Game’s <br />
      development team. The details of the game are kept secret until the day of
      competition, so competitors must <br />
      demonstrate their wits and coding skills to develop the best AI! Programs
      are pitted against one another in ACM-Game’s Arena, where thousands of
      games are played in the cloud. Game results are available to users, so
      that they may further debug their <br />
      code and refine their strategy. After the competition ends, a
      triple-elimination is run to determine the winners. <br />
      The top three student teams are awarded prize money and crowned as the
      victors of MegaMinerAI.
    </p>
    <hr />
    <hr class="divide" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MMAIInfo"
});
</script>

<style scoped>
hr.divide {
  border-top: 2px solid #1b3e50;
  border-radius: 5px;
}

hr {
  border: 1px solid #fff;
}
</style>
