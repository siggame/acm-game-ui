<template>
  <div class="card-deck">
    <div class="card border-primary mb-4" style="max-width: 22rem;">
      <img
        src="../../assets/web.png"
        class="card-img-top"
        alt="..."
        style="width:100"
      />
      <div class="card-body">
        <h5 class="card-title">Web Team</h5>
        <p class="card-text">
          This group runs the main website (like the one you are on now) as well
          as the MMAI one. They are responsible for designing the website,
          programming it, upkeeping the website, etc. This team gets expirence
          in:
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
    <div class="card border-danger mb-4" style="max-width: 22rem;">
      <img
        src="../../assets/server.png"
        class="card-img-top"
        alt="..."
        style="width:100"
      />
      <div class="card-body">
        <h5 class="card-title">Game Team</h5>
        <p class="card-text">
          This group makes the actual game to be played. They are responsible
          for designing the game, programming it, and making the
          rules/documentation for the game. This team gets expierence in:
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
    <div class="card border-success mb-4" style="max-width: 22rem;">
      <img
        src="../../assets/arena.png"
        class="card-img-top"
        alt="..."
        style="width:100"
      />
      <div class="card-body">
        <h5 class="card-title">Arena</h5>
        <p class="card-text">
          This group is how MMAI happens. It is responsible for holding the
          actual competition and putting competitors against each other. This
          team gets expierence in:
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
  name: "DesignTeams"
});
</script>

<style>
ul {
  text-align: left;
}
</style>
