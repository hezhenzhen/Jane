<template>
  <div class="wait-page">
    <Header headertitle="订单详情"></Header>
    <div class="container">
      <div class="chooseAddress" @click="onAddress()">
        <div class="flex-align-center chooseBox">
          <img src="../../../static/img/icon/item_address.png" alt="">
          <div class="flex-align-center flex-between">
            <p v-show="!this.$store.state.chooseaddress">选择送货地址</p>
            <p v-show="this.$store.state.chooseaddress">{{this.$store.state.chooseaddress}}</p>
            <img src="../../../static/img/icon/arrowRight.png" alt="">
          </div>
        </div>
      </div>
      <div class="orderItem flex" v-for="orderItem in $store.state.orders">
        <img :src="orderItem.GoodsImage" class="goodsImg">
        <div>
          <p class="goods-name">{{orderItem.GoodsName}}</p>
          <p class="goods-num">×{{orderItem.GoodsNum}}</p>
          <p class="goods-price">¥{{orderItem.GoodsPrice}}</p>
        </div>
      </div>
      <div class="orderBottom flex-between">
        <span>总金额：{{allCoach}}</span>
        <span @click="onOrder">结算</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../base/HeaderBack.vue'
  import { mapGetters, mapMutations } from 'vuex'
  export default {
    data () {
      return {
        allCoach: 0
      }
    },
    components: {
      Header
    },
    mounted () {
      const that = this
      let sums = []
      this.$store.state.orders.forEach(function (item) {
        sums.push(item.GoodsPrice)
      })
      for (var i = 0; i < sums.length; i++) {
        that.allCoach += parseInt(sums[i])
      }
    },
    computed: {
      ...mapGetters([
        'this.$store.state.orders',
        'this.$store.state.chooseaddress'
      ])
    },
    methods: {
      onAddress () {
        this.setIschoose(1)
        this.$router.push('./address')
      },
      onOrder () {
        if (this.$store.state.chooseaddress) {
          this.$router.push('./order')
          this.setPays(this.$store.state.orders)
        }
      },
      ...mapMutations({
        setIschoose: 'SET_ISCHOOSE',
        setPays: 'SET_PAYS'
      })
    }
  }
</script>

<style lang="less" scoped>
  @import '../../../static/less/vars.less';
  .chooseBox {
    margin-top: .20rem;
    margin-bottom: .20rem;
    height: 1rem;
    padding: 0 .20rem;
    font-size: .28rem;
    border: 1px dashed @theme_background;
    img{ 
      width: .40rem;
      height: .40rem;
      margin-right: .20rem;
    }
    div{
      width: 100%;
    }
    p{
      text-align: center;
    }
  }
  .orderItem {
    padding: .20rem;
    border-bottom: 1px solid #ccc;
  }
  .goodsImg{
    width: 2rem;
    height: 2rem;
  }
  .orderBottom {
    position: fixed;
    bottom: 0;
    height: .8rem;
    background: @theme_background;
    width: 100%;
    color: @base_color;
    font-size: .28rem;
    line-height: .80rem;
    padding: 0 .2rem;
    box-sizing: border-box;
  }
</style>