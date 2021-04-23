<template>
  <div class="HallOfFame">
    <h1>Important People</h1>
    <hr style="height:2px;border-width:0;color:blue;background-color:blue">
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
  name: 'Hall',
  components: {
    HOFBlock,
  },
  data() {
    return {
      people: [
        {
          name: 'Jacob Fischer',
          photo: 'fisheranimal.jpg',
          contribution: 'Creer',
          link: 'google.com',
        },
        {
          name: 'Blakob Fisher',
          photo: 'fisheranimal2.jpg',
          contribution: 'Creer2',
          link: 'https://www.google.com',
        },
      ],
    };
  },
});
</script>
