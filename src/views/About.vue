<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Jumbotron />
    <MMAIInfo />
    <DesignTeams />
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
import Jumbotron from "@/components/AboutFolder/Jumbotron.vue";

export default Vue.extend({
  name: "About",
  components: {
    MMAIInfo,
    Contactinfo,
    OpenSourceLinks,
    DesignTeams,
    Jumbotron
  }
});
</script>

<style></style>
