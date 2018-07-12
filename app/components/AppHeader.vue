<template>

  <b-navbar toggleable="md" type="light" variant="light" fixed="top">

    <b-navbar-toggle target="headerCollapse"></b-navbar-toggle>

    <b-navbar-brand to="/accueil">
      <img :src="logoSrc" alt="Logo de-boissieu.fr" class="header-logo"/>
    </b-navbar-brand>

    <b-collapse is-nav id="headerCollapse">

      <b-navbar-nav>
        <b-nav-item class="header-link" to="/marie">
          Marie
        </b-nav-item>
        <b-nav-item class="header-link" to="/thibault">
          Thibault
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item class="header-link" to="/contact">
          Contact
        </b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

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

<style lang="scss">
  .header-logo {
    width: 40px;
    opacity: 1;
  }
  .header-logo:hover {
    opacity: 0.8;
  }
  .header-link {
    text-decoration: none;
    font-size: 1.2em;
    color: #444;
  }
  .header-link:hover {
    text-decoration: none;
  }
</style>
