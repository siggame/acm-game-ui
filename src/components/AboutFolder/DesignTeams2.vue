<template>
  <div class="card-deck" style="padding:20px">
    <div class="card border-warning mb-4" style="max-width: 22rem;">
      <img src="../../assets/publicity.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">PR Team</h5>
        <p class="card-text">
          This group is repsonsible for making sure people know about ACM-Game.
          They also work with sponsors, create advertisments, and more. This
          group gets expirence in:
        </p>
        <ul>
          <li>[thing]</li>
          <li>[thing]</li>
          <li>[thing]</li>
        </ul>
      </div>
      <div class="card-footer">
        <small class="text-muted">Lead by: [name]</small>
      </div>
    </div>
    <div class="card border-info mb-4" style="max-width: 22rem;">
      <img src="../../assets/visualizer.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Visualizer</h5>
        <p class="card-text">
          This group is responsible for making the actual engine for the game
          (the thing that the player would see). Making the art for the game as
          well as the engine work are normally their tasks. This group gets
          expirence in:
        </p>
        <ul>
          <li>[thing]</li>
          <li>[thing]</li>
          <li>[thing]</li>
        </ul>
      </div>
      <div class="card-footer">
        <small class="text-muted">Lead by: [name]</small>
      </div>
    </div>
    <div class="card border-dark mb-4" style="max-width: 22rem;">
      <img src="../../assets/ai.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Administrative</h5>
        <p class="card-text">
          This group is what makes the kogs turn in the machine every year. They
          make sure everything is schuduled, every team is doing their job, etc.
          This group gets expirence in:
        </p>
        <ul>
          <li>[thing]</li>
          <li>[thing]</li>
          <li>[thing]</li>
        </ul>
      </div>
      <div class="card-footer">
        <small class="text-muted">Lead by: [name]</small>
      </div>
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DesignTeams2"
});
</script>

<style scoped>
ul {
  text-align: left;
}
</style>
