<template>
  <div>
    <div class="hide" v-if="hide" @click="clearHide"></div>
    <v-sidebar ref="showside"></v-sidebar>
    <div class="header">
      <mt-cell class="more">
        <img slot="icon" src="../assets/more.svg" width="24" height="24" @click="showside">
      </mt-cell>
      <div class="search">
        <router-link to="/search">
          <input type="text" placeholder="搜索教材、课程">
        </router-link>
      </div>
      <div>
        <router-link to="/my">我的</router-link>
        <router-link to="/discover">发现</router-link>
        <router-link to="/sort">分类</router-link>
        <router-link to="/recommend">推荐</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Sidebar from './Sidebar'
import sidebarVue from '../../../vue-music/src/components/sidebar.vue';
export default {
  data () {
    return {
      msg: '我是首页的头部',
      hide: false
    }
  },
  components: {
    'v-sidebar': Sidebar
  },
  methods: {
    showside () {
      this.hide = true
      this.$refs.showside.showSide()
    },
    clearHide () {
      this.hide = false
      this.$refs.showside.hide = true
    }
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
</style>
