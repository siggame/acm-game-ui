<template>
  <div
    class="jumbotron"
    :style="{ 'background-image': `url(images/${image})` }"
  >
    <slot />
  </div>
</template>

<script>
import { getImg } from '@/services/common';

export default {
  name: 'GenericJumbotron',
  props: {
    image: {
      type: String,
      required: true,
    },
  },
  methods: {
    getImg,
  },
};
</script>

<style>
.jumbotron {
  height: 100px;
  width: 100px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
