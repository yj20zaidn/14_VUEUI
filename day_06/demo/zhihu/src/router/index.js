import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// 测试案例开始
import Header from '../components/MintUI/Header.vue';
import Button from '../components/MintUI/Button.vue';
import Field from '../components/MintUI/Field.vue';
import Toast from '../components/MintUI/Toast.vue'
import Checklist from '../components/MintUI/Checklist.vue'
import Radio from '../components/MintUI/Radio.vue'
import Switch from '../components/MintUI/Switch.vue'
import Cell from '../components/MintUI/Cell.vue';
import Cellswipe from '../components/MintUI/Cellswipe.vue'
import Messagebox from '../components/MintUI/Messagebox.vue'
import Navbar from '../components/MintUI/Navbar.vue'
import Tabcontainer from '../components/MintUI/Tabcontainer.vue'
import Lazyload from '../components/MintUI/Lazyload.vue';
import Infinite from '../components/MintUI/Infinite.vue';
import Indicator from '../components/MintUI/Indicator.vue'
import Tabbar from '../components/MintUI/Tabbar.vue';
// 测试案例结束
import Register from '../views/Register';
import Me from '../views/Me';
import About from '../views/About';
import Profile from '../views/Profile';
import Login from '../views/Login';
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
    component: Field
  },
  {
    path: '/toast',
    component: Toast
  },
  {
    path: '/checklist',
    component: Checklist
  },
  {
    path: '/radio',
    component: Radio
  },
  {
    path: '/switch',
    component: Switch
  },
  {
    path: '/cell',
    component: Cell
  },
  {
    path: '/cellswipe',
    component: Cellswipe
  },  
  {
    path: '/messagebox',
    component: Messagebox
  }, 
  {
    path: '/navbar',
    component: Navbar
  }, 
  {
    path: '/tabcontainer',
    component: Tabcontainer
  }, 
  {
    path: '/lazyload',
    component: Lazyload
  }, 
  {
    path: '/infinite',
    component: Infinite
  },
  {
    path: '/indicator',
    component: Indicator
  }, 
  {
    path: '/tabbar',
    component: Tabbar
  }, 
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  },  
  {
    path: '/me',
    component: Me
  },
  {
    path: '/about',
    component:About
  },
  {
    path: '/profile',
    component: Profile
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
