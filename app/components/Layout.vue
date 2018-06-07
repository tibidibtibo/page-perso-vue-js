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
  @import '~bulma';

  .main-container {
    padding: 10px;
  }
</style>
