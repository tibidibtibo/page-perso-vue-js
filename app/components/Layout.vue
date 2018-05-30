<template>
    <section id="app">
      <app-header></app-header>
      <div class="container">
        <router-view></router-view>
      </div>
      <app-footer></app-footer>
    </section>
</template>

<script>
  import AppHeader from './AppHeader.vue'
  import AppFooter from './AppFooter.vue'
  export default {
    components: {
      'app-header': AppHeader,
      'app-footer': AppFooter
    }
  }
</script>

<style lang="scss">
  $primary: #007FFF;
  @import '~bulma';
</style>
