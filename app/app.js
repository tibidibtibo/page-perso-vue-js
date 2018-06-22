import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.common'
import AppLayout from './components/Layout.vue'
import router from './router'

Vue.use(BootstrapVue)

const app = new Vue({
  router,
  BootstrapVue,
  ...AppLayout
})

export { app, router }
