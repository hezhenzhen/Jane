<template>
  <div class="page">
    <DetailHeader headertitle="商品详情"></DetailHeader>
    <div class="container">
      <div class="detail-content">
        <img :src="$store.state.goods.GoodsImage" class="goodsImg" />
        <p class="goods-name">{{$store.state.goods.GoodsName}}</p>
        <p class="goods-price">¥{{$store.state.goods.GoodsPrice}}</p>
      </div>
    </div>
    <div class="detail-bottom flex-align-center flex-around">
      <div class="addCart" @click="onCartModel()">
        <span>加入购物车</span>
      </div>
      <div class="addPay" @click="onBuyModel()">
        <span>立即购买</span>
      </div>
    </div>

    <!--cart page-->
    <div class="model" v-show="addCartModel">
      <div class="model-content addCart-content">
        <div class="cartModel-box flex">
          <div class="cartModel-img">
            <img :src="$store.state.goods.GoodsImage">
          </div>
          <div class="cartModel-text">
            <div class="flex-between">
              <p class="goods-name">{{$store.state.goods.GoodsName}}</p>
              <img src="../../../static/img/icon/close.png" class="cartClose" @click.stop="addCartModel=false" />
            </div>
            <p class="goods-price">¥{{$store.state.goods.GoodsPrice}}</p>
          </div>
        </div>
        <div class="cartModel-bottom flex-between">
          <p>购买数量</p>
          <div class="goodsOp flex">
            <img src="../../../static/img/icon/shop_cut.png" @click="onCutCart()" />
            <input type="text" :value="goodsNum" readonly="" />
            <img src="../../../static/img/icon/shop_add.png" @click="onAddCart()" />
          </div>
        </div>
        <div @click="onBuy">
          <p class="cartModel-addCart" v-show="!isBuy">加入购物车</p>
          <p class="cartModel-addCart" v-show="isBuy">立即购买</p>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import DetailHeader from '../base/DetailHeader.vue'
  import { mapGetters, mapMutations } from 'vuex'
  import { Toast } from 'mint-ui'
  export default {
    data () {
      return {
        goodsNum: 1,
        addCartModel: false,
        isBuy: true
      }
    },
    computed: {
      ...mapGetters([
        'this.$store.state.goods',
        'this.$store.state.carts'
      ])
    },
    components: {
      DetailHeader
    },
    methods: {
      onCartModel () {
        this.addCartModel = true
        this.isBuy = false
      },
      onBuyModel () {
        this.addCartModel = true
        this.isBuy = true
      },
      onCutCart () {
        if (this.goodsNum > 1) {
          this.goodsNum --
        }
      },
      onAddCart () {
        this.goodsNum ++
      },
      onBuy () {
        if (this.isBuy) {

        } else {
          this.$store.state.goods.GoodsNum = this.goodsNum
          this.setCarts(this.$store.state.goods)
          this.addCartModel = false
          this.isBuy = true
          Toast({
            message: '添加成功',
            position: 'bottom'
          })
        }
      },
      ...mapMutations({
        setCarts: 'SET_CARTS'
      })
    }

  }
</script>

<style lang="less" scoped>
  @import '../../../static/less/vars.less';
  .detail{}
  .goodsImg{
    width: 100%;
    height: auto;
    display: block;
  }
  .detail-content{
    padding: 0 .2rem;
  }
  .detail-bottom{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: .8rem;
    background: @theme_background;
    color: #fff;
    font-size: .28rem;
  }
  .addCart-content{
    position: absolute;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    padding-top: .20rem;
    background: #fff;
  }
  .cartModel-text{
    width: 100%;
    padding: .20rem;
  }
  .cartClose{
    width: .40rem;
    height: .40rem;
  }
  .cartModel-bottom{
    padding: .20rem;
    font-size: .24rem;
    border-top: 1px solid #ccc;
    text-align: center;
  }
  .goodsOp{
    input{
      font-size: .24rem;
      border: 0;
      width: .60rem;
      text-align: center;
    }
    img{
      width: .32rem;
      height: .32rem;
    }
  }
  .cartModel-addCart{
    background: @theme_background;
    height: .80rem;
    color: @base_color;
    line-height: .80rem;
    font-size: .28rem;
    text-align: center;
  }
</style>
