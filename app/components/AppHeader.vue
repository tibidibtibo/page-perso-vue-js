<template>
  <nav class="nav has-shadow">
    <div class="container">
      <router-link to="/accueil">
        <figure class="image is-64x64">
          <img :src="logoSrc" alt="Logo de-boissieu.fr" />
        </figure>
      </router-link>
      <router-link class="nav-item is-tab" to="/marie">
        Marie
      </router-link>
      <router-link class="nav-item is-tab" to="/thibault">
        Thibault
      </router-link>
      <router-link class="nav-item is-tab" to="/contact">
        Contact
      </router-link>
    </div>
  </nav>
</template>

<script>
  import Logo from '../images/logo_dB.svg'
  export default {
    data: function () {
      return {
        logoSrc: Logo
      }
    }
  }
</script>
