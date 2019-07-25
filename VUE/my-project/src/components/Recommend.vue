<template>
  <div class="recommend-box">
    <div class="recommend" v-for="(item, index) in bookLists" :key="index" @click="toDetail(index)">
      <div class="recommend-img">
        <img :src="item.cover">
      </div>
      <div class="introduce">
        <div class="title">{{item.title}}</div>
        <div class="desc">{{item.desc}}</div>
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
    <!-- <div class="recommend">
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
    </div> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '我是Recommend组件',
    }
  },
  computed: {
    bookLists () {
      return this.$store.state.bookLists
    }
  },
  methods: {
    toDetail (index) {
      this.$router.push({
        path: '/detail',
        query: {
          id: index
        }
      })
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
  padding-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.desc{
  letter-spacing: 0.5px;
  font-size: 13px;
  color: #666666;
  margin-top: 5px;
  padding-right: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
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
