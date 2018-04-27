<template>
  <div class="address-page">
    <Header headertitle="我的地址"></Header>
    <div class="container">
      <div class="address-item" v-for="addressItem in this.$store.state.address" @click="onChooseAddress(addressItem)">
        <p>{{addressItem}}</p>
      </div>
    </div>
    <div class="pageBottom" @click="onAddAddress">
      <span class="tabbar-label">新增地址</span>
    </div>
  </div>
</template>

<script>
  import Header from '../base/Header.vue'
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    data () {
      return {

      }
    },
    components: {
      Header
    },
    computed: {
      ...mapGetters([
        'this.$store.state.address',
        'this.$store.state.ischoose'
      ])
    },
    methods: {
      onAddAddress () {
        this.$router.push('./addaddress')
      },
      onChooseAddress (item) {
        if (this.$store.state.ischoose === 1) {
          this.setChooseaddress(item)
          this.$router.push('./orderwait')
          this.setIschoose(2)
        }
      },
      ...mapMutations({
        setChooseaddress: 'SET_CHOOSEADDRESS',
        setIschoose: 'SET_ISCHOOSE'
      })
    }
  }
</script>

<style lang="less" scoped>
  @import '../../../static/less/vars.less';
  .address-item{
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: .28rem;
    text-align: center;
    border-bottom: 1px solid #ccc;
  }
  .pageBottom{
    position: fixed;
    bottom: 0;
    background: @theme_background;
    width: 100%;
    height: .80rem;
    line-height: .80rem;
    color: @base_color;
    font-size: .28rem;
    text-align: center;
  }
</style>