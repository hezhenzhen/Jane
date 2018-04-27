<template>
  <div class="page member-page">
    <HeaderBack headertitle="用户中心"></HeaderBack>
    <div class="container">
      <div class="floor floor-one">
        <img src="../../../build/logo.png" alt="">
        <p>Open Free Share</p>
      </div>
      <div class="floor floor-item floor-two flex-align-center flex-between" @click="onInfo">
        <p>个人信息</p>
        <img src="../../../static/img/icon/arrowBack.png" alt="" />
      </div>
      <div class="floor floor-item floor-two flex-align-center flex-between" @click="onOrder">
        <p>我的订单</p>
        <img src="../../../static/img/icon/arrowBack.png" alt="" />
      </div>
      <div class="floor floor-item floor-two flex-align-center flex-between" @click="onAddress">
        <p>我的地址</p>
        <img src="../../../static/img/icon/arrowBack.png" alt="" />
      </div>
    </div>
    <Footer :urlRouter="$route.path"></Footer>
  </div>
</template>

<script>
  import HeaderBack from '../base/HeaderBack.vue'
  import Footer from '../base/Footer.vue'
  export default {
    data () {
      return {}
    },
    components: {
      HeaderBack,
      Footer
    },
    methods: {
      onInfo () {
        this.$router.push('./info')
      },
      onOrder () {
        this.$router.push('./order')
      },
      onAddress () {
        this.$router.push('./address')
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../../../static/less/vars.less';
  .member-page{
    background: rgb(245, 245, 245)
  }
  .floor-one{
    width: 100%;
    height: 4rem;
    background: @theme_background;
    position: relative;
    img{
      position: absolute;
      width: 1.8rem;
      height: 1.8rem;
      left: 0;
      right: 0;
      top: 15%;
      margin: auto;
    }
    p{
      position: absolute;
      bottom: 25%;
      left: 0;
      right: 0;
      margin: 0 auto;
      text-align: center;
      color: white;
      font-size: .26rem;
    }
  }
  .floor-two{
    padding: 0 .20rem;
    height: .80rem;
    line-height: .80rem;
    font-size: .28rem;
    background: @base_color;
    margin-bottom: .40rem;
    img{
      width: .40rem;
      height: .40rem;
    }
  }
</style>