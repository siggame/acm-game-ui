<template>
  <div class="blog-search">
    <input
      class="bg-blue-600 gray-100"
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
  name: 'BlogSearch',
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
.blog-search {
  width: 300px;
  height: 100%;
}

input {
  display: block;
  width: 100%;
  height: 100%;
  padding-left: 10px;
  border-width: 0;
  box-sizing: border-box;
  font-size: 18px;
}
</style>
