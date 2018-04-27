<template>
  <footer class="flex flex-align-center">
    <div class="footer-item" :class="{active:urlRouter == '/index' || urlRouter == '/'}">
      <router-link to="./index">
        <span class="footer-title">首页</span>
      </router-link>
    </div>
    <div class="footer-item">
      <router-link to="./category">
        <span class="footer-title">分类</span>
      </router-link>
    </div>
    <div class="footer-item">
      <router-link to="./cart">
        <span class="footer-title">购物车</span>
      </router-link>
    </div>
    <div class="footer-item">
      <router-link to="./member">
        <span class="footer-title">我的</span>
      </router-link>
    </div>
  </footer>
</template>

<script>
  export default {
    props: ['urlRouter']
  }
</script>

<style lang="less" scoped>
  @import '../../../static/less/vars.less';
  footer{
    bottom: 0;
    position: absolute;
    width: 100%;
    height: .8rem;
    background: @base_color;
    box-shadow: 0 -2px 9px rgba(0, 0, 0, .1);
  }
  .footer-item{
    width: 25%;
    text-align: center;
    position: relative;
    font-size: .28rem;
  }
  .footer-title{
    color: @base_textColor;
  }
  .active .footer-title{
    color: @theme_color;
  }
</style>