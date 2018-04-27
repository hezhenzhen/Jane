import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  address: ['广东省深圳市 南山区'],
  carts: [{'CategoryId': '1', 'GoodsName': '默认商品', 'GoodsPrice': 9, 'GoodsNum': 1, 'GoodsImage': './static/img/github.png'}],
  comname: 'index',
  ordercur: 1,
  tabindex: 0
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
