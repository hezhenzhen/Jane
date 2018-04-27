<template>
  <header id="headerTab" class="flex flex-align-center">
    <img src="../../../static/img/icon/arrowBack.png" @click="onBack" alt="">
    <p>{{headertitle}}</p>
    <img src="../../../static/img/icon/cart_white.png" alt="" @click="toCart">
  </header>
</template>

<script>
  export default {
    props: ['headertitle'],
    data () {
      return {
        isBack: true
      }
    },
    methods: {
      toCart () {
        this.$router.push('./cart')
      },
      onBack () {
        if (this.isBack) {
          this.$router.back()
        } else {
          this.$router.push('./member')
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../../../static/less/base.less';
  header {
    height: .8rem;
    text-align: center;
    background: @theme_background;
    color: @base_color;
    font-size: .26rem;
    line-height: .8rem;
    width: 100%;
    z-index: 10;
    position: absolute;
    top: 0;
  }
  img{
    width: .48rem;
    height: .48rem;
    margin-right: .20rem
  }
  p{
    text-align: center;
    width: 100%;
    margin-left: .2rem;
  }
</style>