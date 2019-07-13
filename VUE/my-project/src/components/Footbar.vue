<template>
  <div class="play-bar">
    {{msg}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '我是底部播放栏吖'
    }
  }
}
</script>

<style scoped>
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

