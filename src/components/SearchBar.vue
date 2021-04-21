<template>
  <div class="search-bar">
    <input
      :value="searchText"
      type="text"
      placeholder="Search..."
      @input="handleInput"
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SearchBar',
  data() {
    return {
      searchText: '',
    };
  },
  methods: {
    handleInput(event: Event) {
      if (event.target) {
        this.searchText = (event.target as HTMLInputElement).value;
        this.$emit('input', this.searchText.toLowerCase());
      }
    },
  },
});
</script>

<style scoped>
</style>
