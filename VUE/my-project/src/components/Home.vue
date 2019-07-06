<template>
  <div>
    <div class="header">
      <div class="search">
        <router-link to="/search">
          <input type="text">
        </router-link>
      </div>
      <router-link to="/my">我的</router-link>
      <router-link to="/discover">发现</router-link>
      <router-link to="/sort">分类</router-link>
      <router-link to="/recommend">推荐</router-link>
    </div>
    <transition>
      <router-view/>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '我是首页的头部',
      value: ''
    }
  }
}
</script>

<style scoped>
.v-enter-active, .v-leave-active { transition: all 1s; }
.v-enter, .v-leave-to { transform: translateX(-40%); }
</style>
