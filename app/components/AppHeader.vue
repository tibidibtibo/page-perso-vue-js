<template>
  <section class="hero is-bold has-background-white-ter">
    <div class="hero-head">
      <div class="container">
        <nav class="navbar">
          <div class="navbar-brand">
            <router-link class="navbar-item" to="/accueil">
              <img :src="logoSrc" alt="Logo de-boissieu.fr" class="header-logo"/>
            </router-link>

            <div class="navbar-burger responsive-menu" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div class="navbar-menu" :class="{ 'is-active': showNav }">
            <div class="navbar-start">
              <router-link class="navbar-item" to="/marie">
                Marie
              </router-link>
              <router-link class="navbar-item" to="/thibault">
                Thibault
              </router-link>
            </div>
            <div class="navbar-end">
              <router-link class="navbar-item" to="/contact">
                Contact
              </router-link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </section>

</template>

<script>
  import Logo from '../images/logo_dB.svg'
  export default {
    data: function () {
      return {
        logoSrc: Logo,
        showNav: false
      }
    }
  }
</script>

<style lang="scss">
  .header-logo {
    width: 80px;
    max-height: none !important;
  }
  .header-logo:hover {
    opacity: 0.8;
  }
  .responsive-menu {
    height: 100px;
  }
</style>
