<template>
  <nav class="nav has-shadow">
    <div class="container">
      <router-link to="/">
        <img src="http://bit.ly/vue-img"
          alt="Vue SPA" />
      </router-link>
      <router-link class="nav-item is-tab" to="/" exact>
        Accueil
      </router-link>
      <router-link class="nav-item is-tab" to="/login">
        Connexion
      </router-link>
    </div>
  </nav>
</template>
