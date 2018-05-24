import Vue from 'vue'
import AppLayout from './components/Layout.vue'
import router from './router'

const app = new Vue({
  router,
  ...AppLayout
})

export { app, router }
