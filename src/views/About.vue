<template>
  <div class="about">
    <Jumbotron />
    <MMAIInfo />
    <h3>Information on Teams</h3>

    <testcolumn />
    <DynDesignTeams
      v-for="(team, index) of teams"
      :key="index"
      :photo="team.photo"
      :teamname="team.teamname"
      :description="team.description"
      :lead="team.lead"
      :trait1="team.trait1"
      :trait2="team.trait2"
      :trait3="team.trait3"
    />
    <div class="flex-container">
      <OpenSourceLinks />
    </div>
    <ul class="flex-container">
      <li class="flex-item">
        <Contactinfo />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Contactinfo from '@/components/AboutFolder/Contactinfo.vue';

import OpenSourceLinks from '@/components/AboutFolder/OpenSourceLinks.vue';
import DynDesignTeams from '@/components/AboutFolder/DynDesignTeams.vue';
import Jumbotron from '@/components/AboutFolder/Jumbotron.vue';
import MMAIInfo from '@/components/AboutFolder/MMAIInfo.vue';

export default Vue.extend({
  name: 'About',
  components: {
    MMAIInfo,
    Contactinfo,
    OpenSourceLinks,
    Jumbotron,
    DynDesignTeams,
  },
  data() {
    return {
      teams: [
        {
          photo: 'web.png',
          teamname: 'Web',
          description: 'This group runs the main website (like the one you are on now) as well as the MMAI one. They are responsible for designing the website, programming it, upkeeping the website, etc. This team gets experience in:',
          lead: 'Nick Latinette',
          trait1: 'thing',
          trait2: 'thing2',
          trait3: 'thing3',
        },
        {
          photo: 'server.png',
          teamname: 'Game',
          description: 'This group makes the actual game to be played. They are responsible for designing the game, programming it, and making the rules/documentation for the game. This team gets experience in:',
          lead: 'Matt Barbon',
          trait1: 'thing',
          trait2: 'thing2',
          trait3: 'thing3',
        },
        {
          photo: 'arena.png',
          teamname: 'Arena',
          description: 'This group is how MMAI happens. It is responsible for holding the actual competition and putting competitors against each other. This team gets experience in: ',
          lead: 'Jonathan Henderson',
          trait1: 'thing',
          trait2: 'thing2',
          trait3: 'thing3',
        },
        {
          photo: 'publicity.png',
          teamname: 'Public Relations',
          description: 'This group is responsible for making sure people know about ACM-Game. They also work with sponsors, create advertisements, and more. This group gets experience in: ',
          lead: 'Bryce Foster',
          trait1: 'thing',
          trait2: 'thing2',
          trait3: 'thing3',
        },
        {
          photo: 'visualizer.png',
          teamname: 'Visualizer',
          description: 'This group is responsible for making the actual engine for the game (the thing that the player would see). Making the art for the game as well as the engine work are normally their tasks. This group gets experience in: ',
          lead: 'Leo Flaker & Anthony Truong',
          trait1: 'thing',
          trait2: 'thing2',
          trait3: 'thing3',
        },
      ],
    };
  },
});
</script>

<style scoped>
h2 {
  text-align: left;
}
li {
  list-style: none;
}
.flex-container {
  display: flex;

  flex-flow: row wrap;
  justify-content: center;

  padding: 0;
  margin: 0;
}
</style>
