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
    />
    <DesignTeams />
    <DesignTeams2 />
    <OpenSourceLinks />
    <Contactinfo />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Contactinfo from '@/components/AboutFolder/Contactinfo.vue';
import MMAIInfo from '@/components/AboutFolder/MMAIinfo.vue';
import OpenSourceLinks from '@/components/AboutFolder/OpenSourceLinks.vue';
import DesignTeams from '@/components/AboutFolder/DesignTeams.vue';
import DesignTeams2 from '@/components/AboutFolder/DesignTeams2.vue';
import DynDesignTeams from '@/components/AboutFolder/DynDesignTeams.vue';
import Jumbotron from '@/components/AboutFolder/Jumbotron.vue';

export default Vue.extend({
  name: 'About',
  components: {
    MMAIInfo,
    Contactinfo,
    OpenSourceLinks,
    DesignTeams,
    DesignTeams2,
    Jumbotron,
    DynDesignTeams,
  },
  data() {
    return {
      teams: [
        {
          photo: 'hello!',
          teamname: 'Web',
          description: 'This is a test',
          lead: 'Mr. Heisenberg',
        },
        {
          photo: 'yellow',
          teamname: 'Game',
          description: 'This is the game team',
          lead: 'Jesse white person',
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
</style>
