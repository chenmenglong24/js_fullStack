<template>
  <div>
    <div class="hide" v-if="hide" @click="clearHide"></div>
    <v-sidebar ref="showside"></v-sidebar>
    <div class="header">
      <mt-cell class="more">
        <img slot="icon" src="../assets/more.svg" width="24" height="24" @click="showside">
      </mt-cell>
      <div class="search">
        <router-link tag="span" to="/search">
          <span>搜索教材、课程、资料. . .</span>
        </router-link>
      </div>
    </div>
    <div class="navigation-box">
      <div class="navigation-bar">
        <router-link tag="span" class="navigate" to="/my" :id="0" @click.native="select">我的</router-link>
        <router-link tag="span" class="navigate" to="/discover" :id="1" @click.native="select">发现</router-link>
        <router-link tag="span" class="navigate" to="/sort" :id="2" @click.native="select">分类</router-link>
        <router-link tag="span" class="navigate" to="/recommend" :id="3" @click.native="select">精品</router-link>
      </div>
    </div>
    <router-view/>
    <router-link tag="span" to="/play">
      <v-footbar></v-footbar>
    </router-link>
  </div>
</template>
<script>
import Sidebar from './Sidebar'
import Footbar from './Footbar'
export default {
  data () {
    return {
      msg: '我是首页的头部',
      hide: false
    }
  },
  components: {
    'v-sidebar': Sidebar,
    'v-footbar': Footbar
  },
  methods: {
    showside () {
      this.hide = true
      this.$refs.showside.showSide()
    },
    clearHide () {
      this.hide = false
      this.$refs.showside.hide = true
    },
    select (e) {
      // console.log(e)
      return e.target.id
    }
  },
  mounted () {
    
  }
}
</script>

<style scoped>
.more{
  display: inline-block;
  position: static;
  overflow: visible;
}
.search{
  display: inline-block;
}
.search span{
  color: #999999;
}
.hide{
  position: absolute;
  background-color: #999999;
  width: 100%;
  height: 100%;
  left: 0;
  opacity: 0.5;
  z-index: 99;
}
.navigation-box{
  border-bottom: 1.5px solid rgba(99, 99, 99, 0.1);
}
.navigation-bar{
  display: flex;
  margin: 10px 20px;
  justify-content: space-between;
}
.navigate{
  font-size: 20px;
  font-weight: 550;
  letter-spacing: 3px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
