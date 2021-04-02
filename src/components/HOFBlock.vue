<template>
  <div class="hof-block">
    <div class="solid">
      <img
        :src="getImgUrl()"
        style="float: left; margin 0px 12px 12px 0px;"
      >
      <div>
        <h5>{{ name }}</h5>
        <p>{{ contribution }} </p>
        <p> {{ name }} </p>
        <a
          :href="link"
          target="_blank"
        ><p>{{ link }}</p></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LoadIcon',
  props: {
    photo: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    contribution: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  methods: {
    getImgUrl() {
      return require(`@/assets/hof/${this.photo}`);
    },
  },
});
</script>

<style scoped>
div.solid {
  border-style: solid;
  width: 70%;
  height: 220px;
  background-color: pink;
  margin-left: 15%;
}

</style>
