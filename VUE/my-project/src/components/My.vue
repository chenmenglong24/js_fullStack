<template>
  <div class="my-box">
    <div class="my-items">
      <div class="my-item select">我的订阅</div>
      <div class="my-item">我的下载</div>
      <div class="my-item">我的收藏</div>
      <div class="my-item">阅读历史</div>
    </div>
    <div class="items-box">
      <div class="items">
        <div class="items-title">我的订阅</div>
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
            <div class="delete">x</div>
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
            <div class="delete">x</div>
          </div>
        </div>
      </div>
      <div class="items">
        <div class="items-title">我的收藏</div>
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
            <div class="delete">x</div>
          </div>
        </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '我是My组件',
    }
  }
}
</script>

<style scoped>
.my-box{
  display: flex;
}
.my-items{
  flex: 0 0 auto;
  background-color: #eeeeee;
  width: 20vw;
  height: 80vh;
  padding-top: 30px;
}
.my-item{
  padding: 10px 0;
  text-align: center;
  font-size: 14px;
  letter-spacing: 1px;
}
.select{
  background-color: #ffffff;
}
.items-box{
  flex: 1 1 auto;
  overflow-y: auto;
}
.items{
  margin: 20px 0 100px 20px;
}
.items-title{
  text-align: center;
  letter-spacing: 2px;
}
.recommend{
  margin: 10px 0 10px 5px;
  display: flex;
}
.recommend-img{
  margin: 10px 0 5px 0;
}
.recommend-img img{
  width: 60px;
  height: 60px;
  border-radius: 10px;
}
.introduce{
  flex: auto;
  margin-top: 10px;
  margin-left: 15px;
  width: 50vw;
  position: relative;
  border-bottom: solid 1px #dddddd;
}
.title{
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 14px;
}
.desc{
  letter-spacing: 0.5px;
  font-size: 11px;
  color: #666666;
  margin-top: 5px;
}
.label{
  padding-bottom: 5px;
  display: inline-block;
}
.label ul{
  margin: 0;
  padding: 0;
}
.label li{
  display: inline;
  font-size: 8px;
  margin-right: 5px;
}
.delete{
  display: inline-block;
  width: 14px;
  height: 10px;
  border: solid 2px #cccccc;
  border-radius: 6px;
  font-size: 12px;
  text-align: center;
  line-height: 8px;
  color: #bbbbbb;
  position: absolute;
  right: 5px;
  bottom: 8px;
}
</style>
