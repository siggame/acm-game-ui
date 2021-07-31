<template>
  <div class="about">
    <GenericJumbotron
      image="games.gif"
      attachment="fixed"
      style="height: 500px; width: 100%;"
    >
      <div class="about-header">
        <div class="header-container">
          <h1>
            WHO WE ARE
          </h1>
        </div>
      </div>
    </GenericJumbotron>
    <MMAIInfo />
    <h3>Information on Teams</h3>

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
import GenericJumbotron from '@/components/GenericJumbotron.vue';
import OpenSourceLinks from '@/components/AboutFolder/OpenSourceLinks.vue';
import DynDesignTeams from '@/components/AboutFolder/DynDesignTeams.vue';
import MMAIInfo from '@/components/AboutFolder/MMAIInfo.vue';

export default Vue.extend({
  name: 'AboutPage',
  components: {
    MMAIInfo,
    Contactinfo,
    OpenSourceLinks,
    GenericJumbotron,
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
.about-header {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.4);
}

.header-container {
  height: 100%;
  width: 100%;
}

.header-container::before {
  content: "";
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-image: url('../assets/wrench.svg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 20%;
  opacity: 25%;
}

.header-container h1 {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 64px;
  color: black;
  margin: 0;
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
