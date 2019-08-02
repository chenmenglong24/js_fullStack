<template>
  <!-- <transition name="play-page"> -->
    <div class="play-box">
      <span @click="back"><mt-cell class="back" icon="back"></mt-cell></span>
      {{msg}}
      <div class="play-bar">
      播放页面的footbar
      </div>
    </div>
  <!-- </transition> -->
</template>

<script>
export default {
  data () {
    return {
      msg: '我是播放页面',
      see: true
    }
  },
  methods: {
    back () {
      this.$router.go(-1);
    },
    show () {
      this.see = !this.see
    }
  }
}
</script>

<style scoped>
.play-box{
  
}
.play-bar{
  width: 100%;
  height: 50px;
  background-color: #999999;
  bottom: 0;
  left: 0;
  position: fixed;
}
.red{
  height: 100px;
  background-color: red;
}
.play-page-leave-active, .play-page-enter-active{
  transition: all 3s;
}
.play-page-leave-active, .play-page-enter{
  transform: translateY(250px)
}
/* .play-page-leave, .play-page-enter-active{
  transform: translateY(500px)
} */
</style>