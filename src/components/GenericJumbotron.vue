<template>
  <div
    class="jumbotron"
    :style="{ 'background-image': `url(images/${image})`, 'background-attachment': attachment }"
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
    attachment: {
      type: String,
      default: 'scroll',
      validator(value) {
        // The value must match one of these strings
        return ['fixed', 'scroll'].indexOf(value) !== -1;
      },
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
}
</style>
