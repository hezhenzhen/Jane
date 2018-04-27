<template>
  <div class="page">
    <Header headertitle='分类'></Header>
    <Footers :urlRouter="$route.path"></Footers>
    <div class="container flex">
      <div class="leftbar">
        <div class="barItem" v-for="(menuItem, menuIndex) in menuList">
           <p :class="{active:menuIndex == $store.state.tabindex}" class="menu-text" @click="onBar(menuIndex)">{{menuItem.cat_name}}</p>
        </div>
      </div>
      <div class="rightContent">
        <div class="rightItem" v-for="categoryItem in categoryContent.cart" @click="onDetail(categoryItem)">
          <div class="category-item flex">
            <div class="item flex detail-item">
              <div class="goods-img">
                <img :src="categoryItem.GoodsImage" alt="">
              </div>
              <div class="goods-textBox">
                <p class="goods-name">{{categoryItem.GoodsName}}</p>
                <p class="goods-coach">¥{{categoryItem.GoodsPrice}}</p>
                <div class="goods-cartBox">
                  <img src="../../../static/img/icon/shop_addCart.png"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../base/HeaderBack.vue'
  import Footers from '../base/Footer.vue'
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    data () {
      return {
        menuList: [],
        categoryList: [],
        categoryContent: []
      }
    },
    components: {
      Header,
      Footers
    },
    computed: {
      ...mapGetters([
        'this.$store.state.tabindex'
      ])
    },
    mounted () {
      if (this.$store.state.tabindex === undefined) {
        this.setTabindex(0)
      }
      this.getMenuList()
      this.getCategoryList()
    },
    methods: {
      getCategoryList: function () {
        const that = this
        this.$http.post('/api/categorydata', {}).then(function (res) {
          that.categoryList = res.data.data
          that.categoryContent = that.categoryList[that.$store.state.tabindex]
        })
        .catch(function (error) {
          console.log(error)
        })
      },
      getMenuList: function () {
        const that = this
        this.$http.get('/api/menudata', {}).then(function (res) {
          that.menuList = res.data.data
        })
        .catch(function (error) {
          console.log(error)
        })
      },
      onBar (index) {
        const that = this
        this.setTabindex(index)
        that.categoryContent = that.categoryList[that.$store.state.tabindex]
      },
      onDetail (item) {
        this.$router.push('/detail')
        this.setGoods(item)
      },
      ...mapMutations({
        setTabindex: 'SET_TABINDEX',
        setGoods: 'SET_GOODS'
      })
    }
  }
</script>

<style lang="less" scoped>
  @import '../../../static/less/vars.less';
  .leftbar{
    position: absolute;
    left: 0;
    width: 1.8rem;
    height: 88%;
    border-right: 1px solid #ccc;
  }
  .barItem {
    height: .8rem;
    line-height: .8rem;
    border-bottom: 1px solid #ccc;
    font-size: .28rem;
    text-align: center;
  }
  .barItem .active{
    background: @theme_background;
    color: @base_color;
  }
  .rightContent{
    flex: 1;
    margin-left: 1.8rem;
  }
  .category-item {
    padding: .2rem 0;
    border-bottom: 1px solid #ccc;
  }
  .detail-item {
    width: 100%;
  }
  .goods-img {
    margin-right: .2rem;
    width: 4rem;
    height: 2rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .goods-textBox {
    width: 100%;
  }
  .goods-coach {
    font-size: .26rem;
    color: red;
    margin: .2rem 0;
  }
  .goods-cartBox {
    margin-right: .4rem;
    width: .4rem;
    height: .4rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
