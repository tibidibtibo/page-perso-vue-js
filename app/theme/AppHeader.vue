<template>
  <nav class="nav has-shadow">
    <div class="container">
      <router-link to="/">
        <img :src="logoSrc" alt="Logo de-boissieu.fr" />
      </router-link>
      <router-link class="nav-item is-tab" to="/accueil">
        Accueil
      </router-link>
    </div>
  </nav>
</template>

<script>
import Logo from '../images/dB.svg'
export default {
  data: function () {
    console.log('HELLO ! ' + Logo)
    return {
      logoSrc: Logo
    }
  },
  computed: {

  }
}
</script>
