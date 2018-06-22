<template>
    <section id="app">
      <app-header></app-header>
      <div class="main-container">
        <router-view></router-view>
      </div>
      <app-footer></app-footer>
    </section>
</template>

<script>
  import AppHeader from './AppHeader.vue'
  import AppFooter from './AppFooter.vue'
  import Back from './Back.vue'

  export default {
    components: {
      'app-header': AppHeader,
      'app-footer': AppFooter,
      'back': Back
    }
  }
</script>

<style lang="scss">
  $primary: #007FFF;
  @import '~bootstrap/scss/bootstrap.scss';
  @import '~bootstrap-vue/dist/bootstrap-vue.css';

  .main-container {
    padding-top: 130px;
  }

  .deco-none {
    color: inherit;
    text-decoration: inherit;
  }

  .deco-none:link {
    color: inherit;
    text-decoration: inherit;
  }

  .deco-none:hover {
    color: inherit;
    text-decoration: inherit;
  }
</style>
