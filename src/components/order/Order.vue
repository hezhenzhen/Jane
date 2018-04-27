<template>
  <div class="order-page">
    <HeaderBack headertitle="我的订单"></HeaderBack>
    <OrderTab :urlRouter="$route.path"></OrderTab>
    <div class="container">
      <div class="order-item">
        <div v-for="itemPay in $store.state.pays">
          <div class="order-top flex-between">
            <p>订单号XXXX</p>
            <p>已支付</p>
          </div>
          <div class="order-content">
            <div class="flex">
              <div class="order-img">
                <img :src="itemPay.GoodsImage" />
              </div>
              <div class="order-text">
                <p class="goods-name text-ellipsis">{{itemPay.GoodsName}}</p>
                <p class="goods-num">×{{itemPay.GoodsNum}}</p>
                <p class="goods-price">¥{{itemPay.GoodsPrice}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import HeaderBack from '../base/HeaderBack.vue'
  import Footer from '../base/Footer.vue'
  import OrderTab from '../base/OrderTab.vue'
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {

      }
    },
    components: {
      HeaderBack,
      OrderTab,
      Footer
    },
    computed: {
      ...mapGetters([
        'this.$store.state.pays'
      ])
    }
  }
</script>

<style lang="less" scoped>
  @import '../../../static/less/vars.less';
  .container{ padding-top: 1.68rem;}
  .order-item{
    padding-bottom: .20rem;
    border-bottom: 1px solid #ccc;
    margin-bottom: .20rem;
  }
  .order-top{
    height: .80rem;
    font-size: .28rem;
    line-height: .80rem;
    padding: 0 .20rem;
    border-bottom: 1px dashede #ccc;
  }
  .order-content{
    padding-top: .20rem;
  }
</style>
