<template>
  <div>
    <div class="swipe-box">
      <mt-swipe :auto="3000">
        <mt-swipe-item><img src="@/assets/swipe.jpg"/></mt-swipe-item>
        <mt-swipe-item><img src="@/assets/swipe.jpg"/></mt-swipe-item>
        <mt-swipe-item><img src="@/assets/swipe.jpg"/></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="icon-box">
      <div class="icon"><img src="@/assets/iconbar/recommend.png"/><span>推荐</span></div>
      <div class="icon"><img src="@/assets/iconbar/hotkey.png"/><span>热门</span></div>
      <div class="icon"><img src="@/assets/iconbar/special.png"/><span>专题</span></div>
      <div class="icon"><img src="@/assets/iconbar/detail.png"/><span>精讲</span></div>
    </div>
    <div class="update-box">
      <span>— 今日更新 —</span>
      <div class="update">

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '我是Discover组件',
    }
  }
}
</script>

<style scoped>
.mint-swipe{
  height: 180px;
  margin: 15px 10px;
  border-radius: 15px;
}
.mint-swipe-item{
  height: 180px;
}
.mint-swipe-item img{
  width: 100%;
  height: 180px;
}
.icon-box{
  margin: 20px 30px;
  display: flex;
  justify-content: space-between;
}
.icon{
  display: inline-block;
}
.icon img{
  width: 25px;
  height: 25px;
}
.icon span{
  display: block;
  font-size: 12px;
  letter-spacing: 1px;
  color: #222222;
}
.update-box{
  padding-top: 10px;
  height: 150px;
  background-color: rgba(127, 255, 127, 0.1);
  text-align: center;
}
.update-box span{
  margin: 5px 0;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1px;
}
</style>
