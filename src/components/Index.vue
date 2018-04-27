<template>
  <div class="page">
    <Header headertitle='Jane的零食商店'></Header>
    <div class="container">
      <!-- swiper [[ -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="bannerItem in bannerList">
            <img :src="bannerItem.img" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <!-- swiper ]]-->
      <!-- content [[ -->
      <div class="content">
        <div v-for="(goodItem, goodIndex) in goodList" class="floor-item">
          <div class="floor-tit flex flex-align-center" @click="onCategory(goodIndex)">
            <p class="tit-text">{{goodIndex + 1}}F  {{goodItem.Category.TopText}}</p>
            <img src="../../static/img/icon/arrowRight.png" class="arrowImg" />
          </div>
          <div class="floor-con">
            <div class="product-box flex">
              <div class="product-item" v-for="goods in goodItem.products">
                <div class="item-box" @click="onDetail(goods)">
                  <div>
                    <img :src="goods.GoodsImage" alt="" class="itemImg">
                    <p class="goods-name text-ellipsis">{{goods.GoodsName}}</p>
                  </div>
                  <div>
                    <p><span class="goods-price">¥ {{goods.GoodsPrice}}</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- content ]] -->
    </div>
    <Footer :urlRouter="$route.path"></Footer>
  </div>
</template>

<script>
  import Header from './base/Header.vue'
  import Footer from './base/Footer.vue'
  import '../../static/css/swiper.min.css'
  import Swiper from '../../static/js/swiper.min'
  import { mapMutations } from 'vuex'
  export default {
    data () {
      return {
        bannerList: [],
        goodList: []
      }
    },
    components: {
      Header,
      Footer
    },
    mounted () {
      setTimeout(() => {
        const swiper = new Swiper('.swiper-container', {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          spaceBetween: 30,
          autoplay: 3000,
          effect: 'fade'
        })
        return swiper
      }, 200)
      this.getBannerList()
      this.getGoodList()
    },
    methods: {
      getBannerList () {
        const that = this
        this.$http.get('/api/bannerdata').then(function (res) {
          that.bannerList = res.data.data
        })
      },
      getGoodList () {
        const that = this
        this.$http.get('/api/homedata').then(function (res) {
          that.goodList = res.data.data
        })
      },
      onDetail (goodItem) {
        this.$router.push('/detail')
        this.setGoods(goodItem)
      },
      onCategory (index) {
        this.setTabindex(index)
        this.$router.push('/category')
      },
      ...mapMutations({
        setGoods: 'SET_GOODS',
        setTabindex: 'SET_TABINDEX'
      })
    }
  }
</script>

<style lang="less" scoped>
  .swiper-slide img{
    width: 100%;
  }
  .floor-tit{
    padding: 0 .2rem;
    height: .6rem;
    line-height: .6rem;
    border-bottom: 1px solid #e3e3e3;
    border-top: 1px solid #e3e3e3;
    margin-bottom: .2rem;
  }
  .tit-text{
    font-size: .28rem;
    width: 100%;
    text-align: left;
    margin-right: .20rem;
  }
  .product-item{
    width: 3.8rem;
    box-sizing: border-box;
    margin-bottom: .2rem;
    padding: 0 .2rem;
    flex: 1;
    &:nth-child(2n+1){
      border-right: 1px solid #ccc;
    }
  }
  .itemImg{
    width: 100%;
  }
</style>