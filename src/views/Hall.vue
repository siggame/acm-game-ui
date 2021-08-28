<template>
  <div id="HallPage">
    <h1>
      Important People
    </h1>
    <p>
      Thank you so much for all of your hard work for this organization.
      <br>
      We wish you all the best in your professional lives.
    </p>

    <div class="celebrity-list">
      <HallBlock
        v-for="(person, index) of people"
        :key="index"
        :person="person"
        :index="index"
      />
    </div>
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
          socials: {
            email: 'jacob.t.fischer@gmail.com',
            github: 'JacobFischer',
            website: 'https://resume.jacobfischer.me/',
          },
          about: "Jacob Fischer is the architect of the majority of ACM Game's modern framework.",
        },
        {
          name: 'Jacob Fischer',
          photo: 'jacob_fischer.png',
          socials: {
            email: 'jacob.t.fischer@gmail.com',
            github: 'JacobFischer',
            website: 'https://resume.jacobfischer.me/',
          },
          about: "Jacob Fischer is the architect of the majority of ACM Game's modern framework.",
        },
      ],
    };
  },
});
</script>

<style scoped>
#hall-page {

}

.celebrity-list div {
  margin: 20px auto;
}
</style>
