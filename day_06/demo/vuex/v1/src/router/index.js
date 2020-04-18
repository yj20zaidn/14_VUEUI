import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Access1 from '../views/Access1'
import Access2 from '../views/Access2'
import Changeage from '../views/Changeage.vue';
import Add from '../views/Add.vue'
import Ajax from '../views/Ajax.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/ajax',
    component:Ajax
  },
  {
    path: '/add',
    component:Add
  },
  {
    path: '/changeage',
    component:Changeage
  },
  {
    path: '/access1',
    component:Access1
  },
  {
    path: '/access2',
    component:Access2
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
