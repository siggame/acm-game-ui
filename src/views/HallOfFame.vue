<template>
  <div class="HallOfFame">
    <HOFBlock
      v-for="(person, index) of people"
      :key="index"
      :photo="person.photo"
      :name="person.name"
      :contribution="person.contribution"
      :link="person.link"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HOFBlock from '@/components/HOFBlock.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    HOFBlock,
  },
  data() {
    return {
      people: [
        {
          name: 'Jacob Fischer',
          photo: 'realnick.png',
          contribution: 'Creer',
          link: 'google.com',
        },
        {
          name: 'Blakob Fisher',
          photo: 'realnick.png',
          contribution: 'Creer2',
          link: 'https://www.google.com',
        },
      ],
    };
  },
});
</script>
