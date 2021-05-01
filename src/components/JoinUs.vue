<template>
  <div class="joining">
    <h1>Interested in Joining?</h1>
    <div class="flex-container">
      <div class="left-side">
        <p style="font-size:1.3vw;">
          Beginners are welcome, ACM Game is prepared
          to teach people <br>any skills they need. <br> <br>
          Benefits: <br>
          <ul style="text-align:left; font-size:1.15vw;">
            <li>Friends</li>
            <li>Experience</li>
            <li>Experiment Learning Credit</li>
            <li>Real Working Environment</li>
            <li>Connections</li>
            <li>Great For Building Resumes!</li>
          </ul>
        </p>
      </div>
      <div class="right-side">
        <br>
        <img
          src="../assets/discordlogo.png"
          style="width: 60px; float:left; padding:7px"
        > <p style="font-size:1.4vw;">
          <a
            href="https://discord.gg/F9P2GM7b"
            target="_blank"
          >https://discord.gg/F9P2GM7b</a>
        </p>
        <img
          src="../assets/twitterlogo.png"
          style="width: 60px; float:left;padding:7px"
        > <p style="font-size:1.4vw;">
          <a
            href="https://twitter.com/acmgame"
            target="_blank"
          >https://twitter.com/acmgame</a>
        </p>
        <img
          src="../assets/twitchlogo.png"
          style="width: 60px; float:left;padding:7px"
        > <p style="font-size:1.4vw;">
          <a
            href="https://twitch.com/acm-game"
            target="_blank"
          >https://twitch.com/acm-game</a>
        </p>
      </div>
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
    .joining {
        background-color: white;
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

.flex-container {
  display: flex;

  flex-direction: row;

  padding: 0;
  margin: 0;
  list-style:none;
}

 a {
     color: #002f7f;

 }

.left-side {
    flex: 55%;
}

.right-side {
    flex: 45%;
}
</style>
