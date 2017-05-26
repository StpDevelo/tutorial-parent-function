import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from './Home.vue'

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home }
  ]
})

export default router