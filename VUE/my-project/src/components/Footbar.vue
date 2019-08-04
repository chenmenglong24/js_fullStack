<template>
  <div class="play-bar">
    <div class="img-box">
      <img class="current-img" src="../assets/swipe.jpg"/>
      <img ref="btn" class="switch" src="../assets/pause.png" @click="playPause" @click.stop=""/>
    </div>
    <audio id="audio" 
      src="https://audio.beingfine.cn/ListenData/267103271/609904395.mp3" 
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
  },
  methods: {
    playPause () {
      var audio = document.getElementById('audio');
      var btn = this.$refs.btn;
      if (audio.paused) {
        audio.play();
        btn.src = "/static/play.png";
      } else {
        audio.pause();
        btn.src = "/static/pause.png";
      }
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
  position: relative;
}
.current-img{
  width: 37px;
  height: 37px;
  border-radius: 50%;
}
.switch{
  width: 16px;
  height: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

