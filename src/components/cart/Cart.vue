<template>
  <div class="cart-page">
    <Header headertitle = "购物车"></Header>
    <div class="container">
      <div class="cart-item" v-for="(cartItem, cartIndex) in $store.state.carts">
        <div class="cart-content flex-align-center">
          <div class="goods-raido" @click="onGoodsRadio(cartItem)">
            <img src="../../../static/img/icon/radio.png" alt="" v-show="!cartItem.goodsRadio">
            <img src="../../../static/img/icon/radio_select.png" v-show="cartItem.goodsRadio">
          </div>
          <div class="flex">
            <div class="goods-img">
              <img :src="cartItem.GoodsImage">
            </div>
            <div class="goods-textBox">
              <p class="goods-name">{{cartItem.GoodsName}}</p>
              <div class="goodsOp flex">
                <img src="../../../static/img/icon/shop_cut.png" @click="onCutCart(cartItem)" />
                <input type="text" :value="cartItem.GoodsNum" />
                <img src="../../../static/img/icon/shop_add.png" @click="onAddCart(cartItem)" />
              </div>
              <p class="goods-coach">￥{{cartItem.GoodsPrice}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cartBottom-detail flex-between">
      <div class="flex">
        <div class="shopRadio" @click="onSelectAll()">
          <img src="../../../static/img/icon/radio.png" alt="" class="goods-radio" v-show="!goodsRadioAll">
          <img src="../../../static/img/icon/radio_select.png" class="goods-radio" alt="" v-show="goodsRadioAll">
        </div>
        <div class="bottom-left">
          <p>合计: <span class="shopCoach">￥{{allCoach}}</span></p>
        </div>
      </div>
      <div class="submitCart" @click="onOrder()">
        <p>提交订单</p>
      </div>
    </div>
    <Footer :urlRouter="$route.path"></Footer>
  </div>
</template>

<script>
  import Header from '../base/HeaderBack.vue'
  import Footer from '../base/Footer.vue'
  import { mapGetters, mapMutations } from 'vuex'
  export default {
    props: ['headertitle'],
    data () {
      return {
        goodsRadioAll: false,
        radioArr: [],
        allCoach: 0
      }
    },
    components: {
      Header,
      Footer
    },
    computed: {
      ...mapGetters([
        'this.$store.state.cart'
      ])
    },
    mounted () {
      const that = this
      that.$store.state.carts.forEach(function (item) {
        if (typeof item.goodsRadio === 'undefined') {
          that.$set(item, 'goodsRadio', false)
          console.log(item.goodsRadio)
        }
      })
    },
    methods: {
      onGoodsRadio (item) {
        // 单选
        const that = this
        that.radioArr = []
        item.goodsRadio = !item.goodsRadio
        that.$store.state.carts.forEach(function (itemGoods) {
          that.radioArr.push(itemGoods.goodsRadio)
        })
        if (that.radioArr.indexOf(false) === -1) {
          that.goodsRadioAll = true
        } else {
          that.goodsRadioAll = false
        }
        that.onCalAllCoach()
      },
      onCalAllCoach () {
        // 计算总价
        const that = this
        that.allCoach = 0
        that.$store.state.carts.forEach(function (item) {
          if (item.goodsRadio) {
            that.allCoach += item.GoodsNum * item.GoodsPrice
          }
        })
      },
      onCutCart (item) {
        // 减少单个产品数量
        if (item.GoodsNum > 1) {
          item.GoodsNum --
          this.onCalAllCoach()
        }
      },
      onAddCart (item) {
        // 增加单个产品数量
        item.GoodsNum ++
        this.onCalAllCoach()
      },
      onSelectAll () {
        // 全选
        var that = this
        that.goodsRadioAll = !that.goodsRadioAll
        that.$store.state.carts.forEach(function (cartItem) {
          cartItem.goodsRadio = that.goodsRadioAll
        })
        this.onCalAllCoach()
      },
      onOrder () {
        let orderArr = []
        this.$store.state.carts.forEach(function (item) {
          if (item.goodsRadio) {
            orderArr.push(item)
          }
        })
        if (orderArr.length) {
          this.$router.push('orderwait')
          this.setOrders(orderArr)
        }
      },
      ...mapMutations({
        setOrders: 'SET_ORDERS'
      })
    }
  }
</script>

<style lang="less" scoped>
  @import '../../../static/less/vars.less';
  .cart-item{
    border-bottom: 1px solid #ccc;
    padding-top: .20rem;
    height: 2.40rem;
    transition: all .3s linear;
    position: relative;
  }
  .cart-content{ width: 100%; }
  .goods-raido{ 
    margin: 0 .2rem;
    width: .34rem;
    height: .34rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .goods-img{
    margin-right: .2rem;
    width: 2rem;
    height: 2rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .goods-name{
    font-size: .28rem;
  }
  .goods-coach{
    font-size: .24rem;
    color: #c00;
    align-self: flex-end;
  }
  .goodsOp{
    margin: .40rem 0;
    img{
      width: .34rem;
      height: .34rem;
    }
    input{
      border: 0;
      font-size: .28rem;
      text-align: center;
      width: .6rem;
    }
  }
  .cartBottom-detail{
    height: .80rem;
    line-height: .80rem;
    font-size: .28rem;
    width: 100%;
    position:absolute;
    bottom: .80rem;
    color: @base_color;
    background: @theme_background;
    img{
      vertical-align: middle;
      margin: 0 .20rem;
      width: .3rem;
      height: .30rem;
    }
  }
  .submitCart{
    padding-right: .20rem;
  }
</style>