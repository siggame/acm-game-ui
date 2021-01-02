<template>
  <div>
    <HelloWorld msg="Blogs Page" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
export default Vue.extend({
  name: "Blogs",
  components: {
    HelloWorld
  }
});
</script>

<style scoped></style>
