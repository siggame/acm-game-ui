<template>
  <div id="open-source-links">
    <h2 style="font-size:1.65vw;">
      We are Open Source!
    </h2>
    <hr>
    <p style="font-size:1.15vw;">
      In addition to developing novel games for MegaMinerAI, the ACM-Game Development team develops
      <br>
      and maintains a framework to host MegaMinerAI and other programming competitions. Though
      game <br>
      details are kept secret until competition day, our framework is opensource and available on
      GitHub. <br><br>
      As our competition attendance has grown to record levels, the ACM-Game Developers have begun a
      redesign of the<br>
      competition framework is open source and available on GitHub. <br><br>

      Our GitHub is: <a
        href="https://github.com/siggame"
        target="_blank"
      >https://github.com/siggame</a>
    </p>
    <hr>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'OpenSourceLinks',
});
</script>

<style scoped>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
th,
td {
  padding: 15px;
}
th {
  text-align: left;
}
table {
  border-spacing: 5px;
}
table tr:nth-child(even) {
  background-color: #eeeeee;
}
table tr:nth-child(odd) {
  background-color: #ffffff;
}
</style>
