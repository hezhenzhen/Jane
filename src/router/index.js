import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Category from '@/components/category/Category'
import Detail from '@/components/detail/Detail'
import Cart from '@/components/cart/Cart'
import OrderWait from '@/components/order/OrderWait'
import Address from '@/components/address/Address'
import AddAddress from '@/components/address/AddAddress'
import Order from '@/components/order/Order'
import Member from '@/components/member/Member'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/orderwait',
      name: 'OrderWait',
      component: OrderWait
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    },
    {
      path: '/addaddress',
      name: 'AddAddress',
      component: AddAddress
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/member',
      name: 'Member',
      component: Member
    }
  ]
})
