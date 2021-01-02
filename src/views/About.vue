<template>
  <div class="about">
    <Jumbotron />
    <MMAIInfo />
    <h3>Information on Teams</h3>
    <DesignTeams />
    <DesignTeams2 />
    <OpenSourceLinks />
    <Contactinfo />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Contactinfo from "@/components/AboutFolder/Contactinfo.vue";
import MMAIInfo from "@/components/AboutFolder/MMAIinfo.vue";
import OpenSourceLinks from "@/components/AboutFolder/OpenSourceLinks.vue";
import DesignTeams from "@/components/AboutFolder/DesignTeams.vue";
import DesignTeams2 from "@/components/AboutFolder/DesignTeams2.vue";
import Jumbotron from "@/components/AboutFolder/Jumbotron.vue";

export default Vue.extend({
  name: "About",
  components: {
    MMAIInfo,
    Contactinfo,
    OpenSourceLinks,
    DesignTeams,
    DesignTeams2,
    Jumbotron
  }
});
</script>

<style>
h2 {
  text-align: left;
}
</style>
