import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //存储用户名
    username: '',
    //存储用户是否登录
    isLogined:false
  },
  getters: {
  },
  mutations: {
    logined(state, payload) {
      state.username = payload;
      state.isLogined = true;
    },
    logout(state) {
      state.username = '';
      state.isLogined = false;
    }
  },
  actions: {
  },
  modules: {
  }
});
