<template>
  <div id="HallPage">
    <h1 style="font-size:2vw;">
      Important People
    </h1>
    <p style="font-size:1.15vw;">
      Thank you so much for all of your hard work for this
      organization.<br> We wish you all the best in your professional life.
    </p>

    <hr style="height:2px;border-width:0;color:blue;background-color:blue">
    <HallBlock
      v-for="(person, index) of people"
      :key="index"
      :person="person"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HallBlock from '@/components/HallBlock.vue';

export default Vue.extend({
  name: 'HallPage',
  components: {
    HallBlock,
  },
  data() {
    return {
      people: [
        {
          name: 'Jacob Fischer',
          photo: 'jacob_fischer.png',
          contributions: ['Creer'],
          socials: {
            website: 'jacob.t.fischer@gmail.com',
            email: 'https://www.jacobfischer.me',
          },
          about: 'Jacob Fischer has created the bedrock upon which ACM Game exists today.',
        },
      ],
    };
  },
});
</script>

<style scoped>
#hall-page {

}
</style>
