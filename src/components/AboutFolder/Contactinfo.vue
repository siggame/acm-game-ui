<template>
  <div
    id="contact-info"
    class="flex-container"
  >
    <div class="flex-item">
      <h2>Contact us</h2>
      <table>
        <tr>
          <th>Contact</th>
          <th>Email</th>
        </tr>
        <tr>
          <th>ACM-Game</th>
          <th><a href="mailto:siggame@gmail.com">siggame@gmail.com</a></th>
        </tr>
        <tr>
          <th>Drew Brissette - Chair</th>
          <th><a href="mailto:adb5cw@umsystem.edu">adb5cw@umsystem.edu</a></th>
        </tr>
        <tr>
          <th>Jonathan Henderson - Vice Chair</th>
          <th><a href="mailto:jkhd67@umsystem.edu">jkhd67@umsystem.edu</a></th>
        </tr>
      </table>
    </div>

    <hr>
    <div class="flex-item">
      <h2>Officers and Leads</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Email</th>
        </tr>
        <tr>
          <th>Dr. Angel Morales</th>
          <th>Faculty Advisor</th>
          <th><a href="mailto:ricardom@umsystem.edu">ricardom@umsystem.edu</a></th>
        </tr>
        <tr>
          <th>Drew Brissette</th>
          <th>Chair</th>
          <th><a href="mailto:adb5cw@umsystem.edu">adb5cw@umsystem.edu</a></th>
        </tr>
        <tr>
          <th>Jonathan Henderson</th>
          <th>Vice-Chair & Arena Lead</th>
          <th><a href="mailto:jkhd67@umsystem.edu">jkhd67@umsystem.edu</a></th>
        </tr>
        <tr>
          <th>Matt Barton</th>
          <th>Game Lead</th>
          <th>
            <a
              href="mailto:mbzzd@umsystem.edu"
            >mbzzd@umsystem.edu</a>
          </th>
        </tr>
        <tr>
          <th>Bryce Foster</th>
          <th>PR Lead</th>
          <th>
            <a
              href="mailto:bnfghq@umsystem.edu"
            >bnfghq@umsystem.edu</a>
          </th>
        </tr>
        <tr>
          <th>Jordan Styer</th>
          <th>Secretary</th>
          <th>
            <a
              href="jbsxqg@umsystem.edu"
            >jbsxqg@umsystem.edu</a>
          </th>
        </tr>
        <tr>
          <th>Leo Flaker</th>
          <th>Vis Lead 1</th>
          <th><a href="mailto:lafcz3@umsystem.edu">lafcz3@umsystem.edu</a></th>
        </tr>
        <tr>
          <th>Anthony Truong</th>
          <th>Vis Lead 2</th>
          <th><a href="mailto:atrm3@umsystem.edu">atrm3@umsystem.edu</a></th>
        </tr>
        <tr>
          <th>Nicholas Latinette</th>
          <th>Web Lead</th>
          <th><a href="mailto:nalrnw@mst.edu">nalrnw@mst.edu</a></th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

  name: 'ContactInfo',

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

.flex-container {
  display: flex;

  flex-direction: column;
  justify-content: space-around;

  padding: 0;
  margin: 0;
  list-style:none;
}

</style>
