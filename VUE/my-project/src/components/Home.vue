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
          <input type="text" placeholder="搜索教材、课程">
        </router-link>
      </div>
      <div>
        <router-link tag="span" to="/my" :id="0" @click.native="select">我的</router-link>
        <router-link tag="span" to="/discover" :id="1" @click.native="select">发现</router-link>
        <router-link tag="span" to="/sort" :id="2" @click.native="select">分类</router-link>
        <router-link tag="span" to="/recommend" :id="3" @click.native="select">推荐</router-link>
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
.hide{
  position: absolute;
  background-color: #999999;
  width: 100%;
  height: 100%;
  left: 0;
  opacity: 0.5;
}
ul{
  padding: 0;

  list-style-type: none;
  display: inline;
}
</style>
