import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// 测试案例开始
import Header from '../components/MintUI/Header.vue';
import Button from '../components/MintUI/Button.vue';
import Field from '../components/MintUI/Field.vue';
import Toast from '../components/MintUI/Toast.vue'
// 测试案例结束
import Register from '../views/Register'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/header',
    component: Header
  },
  {
    path: '/button',
    component: Button
  },
  {
    path: '/field',
    component:Field
  },
  {
    path: '/toast',
    component:Toast
  }, 
  {
    path: '/register',
    component:Register
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
