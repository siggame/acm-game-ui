<template>
  <div id="open-source-links">
    <h2>We are Open Source!</h2>
    <table>
      <tr>
        <th>Game</th>
        <th>Github Repo</th>
      </tr>
      <tr>
        <th>Example</th>
        <th>
          <a
            href="https://www.google.com"
            target="_blank"
          >githubrepo/link</a>
        </th>
      </tr>
      <tr>
        <th>Example</th>
        <th>
          <a
            href="https://www.google.com"
            target="_blank"
          >githubrepo/link</a>
        </th>
      </tr>
      <tr>
        <th>Example</th>
        <th>
          <a
            href="https://www.google.com"
            target="_blank"
          >githubrepo/link</a>
        </th>
      </tr>
    </table>
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
