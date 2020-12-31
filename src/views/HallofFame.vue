<template>
  <div>
    <HelloWorld msg="Hall Of Fame Page" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
export default Vue.extend({
  name: "HallofFame",
  components: {
    HelloWorld
  }
});
</script>

<style></style>
