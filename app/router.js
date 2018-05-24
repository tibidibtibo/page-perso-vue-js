import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from './components/NotFound.vue'
import Accueil from './components/Accueil.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
  routes: [
    { path: '/accueil', component: Accueil },
    { path: '/', redirect: '/accueil' },
    { path: '*', component: NotFound }
  ]
})

export default router
