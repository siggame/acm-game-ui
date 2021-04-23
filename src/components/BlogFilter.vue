<template>
  <div class="blog-filter">
    <div
      v-for="type of types"
      :key="type"
      class="type-option"
      @click="select(type)"
    >
      <p class="gray-600">
        {{ type }}
      </p>
      <hr :class="[ type === selected ? 'selected' : 'unselected' ]">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BlogFilter',
  data() {
    return {
      types: ['all', 'tutorial', 'announcement', 'experience'],
      selected: 'all',
    };
  },
  methods: {
    select(type: string) {
      this.selected = type;
      this.$emit('select', type);
    },
  },
});
</script>

<style scoped>
.blog-filter {
  display: flex;
}

.type-option {
  display: inline-block;
  margin: 0 40px 0 40px;
  cursor: pointer;
  height: 100%;
}

.type-option p {
  margin: 0;
}

.selected {
  border: 2px solid orangered;
  border-radius: 5px;
  margin: 0 0 10px 0;
}

.unselected {
  display: none;
}
</style>
