<template>

  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/accueil">
      <img :src="logoSrc" alt="Logo de-boissieu.fr" class="header-logo"/>
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse"
      data-target=".navbar-collapse">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto header-link text-center">
        <li class="nav-item">
          <router-link class="nav-link" to="/marie">
            Marie
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/thibault">
            Thibault
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">
            Contact
          </router-link>
        </li>
      </ul>
    </div>
  </nav>

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
    width: 40px;
    opacity: 1;
  }
  .header-logo:hover {
    opacity: 0.8;
  }
  .header-link {
    font-size: 1.2em;
  }
</style>
