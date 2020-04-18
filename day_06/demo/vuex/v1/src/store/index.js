import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: 'WEBTN1912',
    age: 15,
    sex: true, //true表示男,false表示女
    salary: 9765.33,
    extends: {
      education: '本科',
      isMarry:true//true表示已婚,false表示未婚
    },
    products: [
      {
        productName: '纽曼（Newman）V98 全网通老人手机',
        salePrice:256
      },
      {
        productName: '荣耀20青春版 AMOLED屏幕',
        salePrice:1199
      },
      {
        productName: 'Apple iPhone 11 (A2223) 128GB 黑色 ',
        salePrice:5999
      },
      {
        productName: '荣耀9X 麒麟810 4000mAh续航',
        salePrice:1299
      }
    ]
  },
  getters: {
    //获取商品的总数
    getNums(state) {
      return state.products.length;
    }
  },
  mutations: {
    //增加年龄(想像成进货员)
    sIncrement(state) {
      state.age++;
    },
    //减少年龄(想像成出货员)
    sDecrement(state) {
      state.age--;
    },
    //商品进货员(payload在要本案例中代表商品对象)
    sAdd(state,payload) {
      state.products.push(payload);
    },
    //将库存的货物全部更新
    sSetData(state, payload) {
      state.products = payload;
    }
  },
  actions: {
    //拉货人员从外面拉进行相关的货物
    sGetData(context) {
      axios.get('http://127.0.0.1:4000/vuex').then(res => {
        //商品进货员将库存的货物全部更新
        context.commit('sSetData', res.data.results);
      });
    }
  },
  modules: {
  }
})
