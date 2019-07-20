<template>
  <div class="recommend-box">
    <div class="recommend">
      <div class="recommend-img">
        <img src="../assets/swipe.jpg">
      </div>
      <div class="introduce">
        <div class="title">意趣英语</div>
        <div class="desc">深度美剧讲解，自然法口语学习</div>
        <div class="label">
          <ul>
            <li>· 美剧</li>
            <li>· 口语</li>
            <li>· 商务英语</li>
            <li>· 发音</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="recommend">
      <div class="recommend-img">
        <img src="../assets/swipe.jpg">
      </div>
      <div class="introduce">
        <div class="title">意趣英语</div>
        <div class="desc">深度美剧讲解，自然法口语学习</div>
        <div class="label">
          <ul>
            <li>· 美剧</li>
            <li>· 口语</li>
            <li>· 商务英语</li>
            <li>· 发音</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '我是Recommend组件',
    }
  }
}
</script>

<style scoped>
.recommend-box{
  margin: 10px 0 10px 10px;
}
.recommend{
  margin: 10px 0 10px 5px;
  display: flex;
}
.recommend-img{
  margin: 10px 0;
}
.recommend-img img{
  width: 85px;
  height: 85px;
  border-radius: 10px;
}
.introduce{
  flex: auto;
  margin-top: 10px;
  margin-left: 15px;
  width: 60vw;
  position: relative;
  border-bottom: solid 1px #dddddd;
}
.title{
  letter-spacing: 1px;
  font-weight: bold;
}
.desc{
  letter-spacing: 0.5px;
  font-size: 13px;
  color: #666666;
  margin-top: 5px;
}
.label{
  position: absolute;
  bottom: 10px;
}
.label ul{
  margin: 0;
  padding: 0;
}
.label li{
  display: inline;
  font-size: 10px;
  margin-right: 5px;
}
</style>
