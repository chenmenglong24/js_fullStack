<template>
  <div class="play-bar">
    <div class="img-box">
      <img class="current-img" src="../assets/swipe.jpg"/>
    </div>
    <audio id="audio" 
      src="https://audio.beingfine.cn/ListenData/267103271/609904395.mp3" 
      autoplay="" 
      preload="" 
      >
    </audio>
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
  border-radius: 7px 7px 0 0;
  background-color: #ffffff;
  box-shadow: #000000 0px 0px 10px 1px ;
  bottom: 0;
  left: 0;
  position: fixed;
}
.img-box{
  margin: 6px 15px;
  width: 37px;
  height: 37px;
}
.current-img{
  width: 37px;
  height: 37px;
  border-radius: 50%;
}
</style>

