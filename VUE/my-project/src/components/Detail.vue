<template>
  <div class="detail-box">
    <div class="header">
      <span @click="back"><mt-cell class="back" icon="back"></mt-cell></span>
    </div>
    <div class="details">
      <div class="details-img">
        <img src="../assets/swipe.jpg"/>
      </div>
      <span class="title">美国国家公园</span>
      <div class="desc">简介简介简介</div>
    </div>
    <div class="options">
      <div class="option subscribe">
        <img src="../assets/detail/unsubscribe.png"/>
        <span class="about">订阅</span>
      </div>
      <span class="interval"></span>
      <div class="option collection">
        <img src="../assets/detail/uncollection.png"/>
        <span class="about">收藏</span>
      </div>
      <span class="interval"></span>
      <div class="option download">
        <img src="../assets/detail/undownload.png"/>
        <span class="about">下载</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '我是detail组件'
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
.header{
  border-bottom: 1.5px solid rgba(99, 99, 99, 0.1);
}
.details{
  margin: 15px;
}
.details-img{
  display: inline-block;
}
.details-img img{
  width: 80px;
  height: 80px;
  border-radius: 8px;
}
.title{
  position: relative;
  bottom: 60px;
  margin-left: 10px;
  letter-spacing: 1px;
}
.desc{
  margin: 15px 0;
  color: #999999;
  font-size: 13px;
  letter-spacing: 1px;
}
.options{
  display: flex;
  margin: 20px 0;
  padding: 15px 0;
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
}
.option{
  flex: auto;
  text-align: center;
}
.option img{
  width: 20px;
  height: 20px;
}
.about{
  display: block;
  font-size: 13px;
  color: #999999;
  letter-spacing: 1px;
}
.interval{
  width: 1px;
  height: 25px;
  background-color: #999999;
  position: relative;
  top: 6px;
}
</style>
