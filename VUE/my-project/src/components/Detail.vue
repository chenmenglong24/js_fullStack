<template>
  <div class="detail-box">
    <div class="header">
      <span @click="back"><mt-cell class="back" icon="back"></mt-cell></span>
    </div>
    <div class="details">
      <div class="details-img">
        <img :src="item.cover"/>
      </div>
      <span class="title">{{item.title}}</span>
      <div class="desc">{{item.desc}}</div>
    </div>
    <div class="options">
      <div class="option subscribe" :id="0" @click="subscribe">
        <img src="../assets/detail/unsubscribe.png" v-show="!isSubscribe"/>
        <img src="../assets/detail/subscribe.png" v-show="isSubscribe"/>
        <span class="about">订阅</span>
      </div>
      <span class="interval"></span>
      <div class="option collect" :id="1" @click="collect">
        <img src="../assets/detail/uncollection.png" v-if="!isCollect"/>
        <img src="../assets/detail/collection.png" v-if="isCollect"/>
        <span class="about">收藏</span>
      </div>
      <span class="interval"></span>
      <div class="option download" :id="2" @click="download">
        <img src="../assets/detail/undownload.png" v-if="!isDownload"/>
        <img src="../assets/detail/download.png" v-if="isDownload"/>
        <span class="about">下载</span>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  data () {
    return {
      isSubscribe: false,
      isCollect: false,
      isDownload: false,
      item: {}
    }  
  },
  methods: {
    back () {
      this.$router.go(-1);
    },
    subscribe () {
      this.isSubscribe = !this.isSubscribe;
      
    },
    collect () {
      this.isCollect = !this.isCollect;
    },
    download () {
      this.isDownload = !this.isDownload;
    }
  },
  mounted () {
    var id =  this.$route.query.id;
    console.log(id);
    var dataSource = 'https://www.easy-mock.com/mock/5ca45824c4e9a575b66b62c9/example/qingtingyingyu';
    Axios.get(dataSource).then((response) => {
      this.item = response.data.data[id];
    }).catch((error) => {
      console.log(error);
    })
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
