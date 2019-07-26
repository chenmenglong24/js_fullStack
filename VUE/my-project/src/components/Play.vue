<template>
  <div class="play-box">
    <span @click="back"><mt-cell class="back" icon="back"></mt-cell></span>
    {{msg}}
    <div class="play-bar">
    播放页面的footbar
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '我是播放页面'
    }
  },
  methods: {
    back () {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
/* .play-box{
  
} */
.play-bar{
  width: 100%;
  height: 50px;
  background-color: #999999;
  bottom: 0;
  left: 0;
  position: fixed;
  opacity: 0.8;
}
</style>