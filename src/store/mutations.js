import * as types from './mutation-types'
const cartArr = []
const addressArr = []

const mutations = {
  [types.SET_TABINDEX] (state, tabindex) {
    state.tabindex = tabindex
  },
  [types.SET_GOODS] (state, goods) {
    state.goods = goods
  },
  [types.SET_CARTS] (state, carts) {
    cartArr.push(carts)
    state.carts = cartArr
  },
  [types.SET_ORDERS] (state, orders) {
    state.orders = orders
  },
  /* 选择地址 */
  [types.SET_CHOOSEADDRESS] (state, chooseaddress) {
    state.chooseaddress = chooseaddress
  },
  /* 判断是否选择地址 */
  [types.SET_ISCHOOSE] (state, ischoose) {
    state.ischoose = ischoose
  },
  /* 设置新增地址 */
  [types.SET_ADDRESS] (state, address) {
    addressArr.push(address)
    state.address = addressArr
  },
  [types.SET_PAYS] (state, pays) {
    state.pays = pays
  }
}

export default mutations
