<template>
  <div>
    <div class="swipe-box">
      <mt-swipe :auto="3000">
        <mt-swipe-item v-for="(item, index) in dataSrc" :key="index" v-if="index<5" @click.native="toDetail(index)"><img :src="item.cover"/></mt-swipe-item>
        <!-- <mt-swipe-item><img src="@/assets/swipe.jpg"/></mt-swipe-item>
        <mt-swipe-item><img src="@/assets/swipe.jpg"/></mt-swipe-item> -->
      </mt-swipe>
    </div>
    <div class="icon-box">
      <div class="icon"><img src="@/assets/iconbar/recommend.png"/><span>推荐</span></div>
      <div class="icon"><img src="@/assets/iconbar/hotkey.png"/><span>热门</span></div>
      <div class="icon"><img src="@/assets/iconbar/special.png"/><span>专题</span></div>
      <div class="icon"><img src="@/assets/iconbar/detail.png"/><span>精讲</span></div>
    </div>
    <div class="update-box">
      <div class="today-update">— 今日更新 —</div>
      <div class="update">
        <div class="update-item" v-for="(item, index) in dataSrc" :key="index" @click="toDetail(index)">
          <img :src="item.cover"/>
          <span>{{item.title}}</span>
        </div>
        <!-- <div class="update-item">
          <img src="@/assets/swipe.jpg"/>
          <span>标</span>
        </div>
        <div class="update-item">
          <img src="@/assets/swipe.jpg"/>
          <span>标题</span>
        </div>
        <div class="update-item">
          <img src="@/assets/swipe.jpg"/>
          <span>标题标</span>
        </div>
        <div class="update-item">
          <img src="@/assets/swipe.jpg"/>
          <span>标题标题</span>
        </div>
        <div class="update-item">
          <img src="@/assets/swipe.jpg"/>
          <span>标题标题标题</span>
        </div>
        <div class="update-item">
          <img src="@/assets/swipe.jpg"/>
          <span>标题标题标题标题标题标题标题标题标题标题</span>
        </div>
        <div class="update-item">
          <img src="@/assets/swipe.jpg"/>
          <span>标题标题标题标题标题标题标题标题标题标题</span>
        </div>
        <div class="update-item">
          <img src="@/assets/swipe.jpg"/>
          <span>标题标题标题标题标题标题标题标题标题标题</span>
        </div>
        <div class="update-item">
          <img src="@/assets/swipe.jpg"/>
          <span>标题标题标题标题标题标题标题标题标题标题</span>
        </div> -->
        <div class="update-item">
          <div class="update-more">更多</div>
        </div>
      </div>
    </div>
    <div class="sorts-box">
      <div class="title-box">
        <span class="title">新进教材</span>
        <span class="more">更多</span>
      </div>
      <div class="items">
        <!-- <router-link to='/detail' tag="span" > -->
          <div class="item" v-for="(item, index) in dataSrc" :key="index" v-if="index<3" @click="toDetail(index)">
            <img :src="item.cover" />
            <span>{{item.title}}</span>
          </div>
        <!-- </router-link> -->
        <!-- <div class="item">
          <img src="@/assets/swipe.jpg" />
          <span>标题</span>
        </div>
        <div class="item">
          <img src="@/assets/swipe.jpg" />
          <span>标题标题标题标题标题标题标题标题</span>
        </div> -->
      </div>
    </div>
    <div class="sorts-box">
      <div class="title-box">
        <span class="title">六级考试</span>
        <span class="more">更多</span>
      </div>
      <div class="items">
        <div class="item" v-for="(item, index) in dataSrc" :key="index" v-if="index>dataSrc.length-1-3" @click="toDetail(index)">
          <img :src="item.cover" />
          <span>{{item.title}}</span>
        </div>
        <!-- <div class="item">
          <img src="@/assets/swipe.jpg" />
          <span>标题标</span>
        </div>
        <div class="item">
          <img src="@/assets/swipe.jpg" />
          <span>标题标题标题标题</span>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import Axios from 'axios';
export default {
  data () {
    return {
      bookLists: []
    }
  },
  computed: {
    dataSrc () {      
      return this.$store.state.bookLists;
    }
  },
  methods: {
    // getDate () {
    //   var dataSource = 'https://www.easy-mock.com/mock/5ca45824c4e9a575b66b62c9/example/qingtingyingyu';
    //   Axios.get(dataSource).then((response) => {
    //     // console.log(response);
    //     this.swipeList = response.data.data;
    //   }).catch((error) => {
    //     console.log(error);
    //   })
    // },
    toDetail (index) {
      this.$router.push({
        path: '/detail',
        query: {
          id: index
        }
      })
    }
  },
  mounted () {
    // this.getDate();
    // this.bookLists = this.$store.state.bookLists[0];
    // console.log(1);
    // console.log(this.bookLists);
    // console.log(this.$store.state.bookLists);
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
  color: #555555;
}
.update-box{
  padding-top: 10px;
  height: 145px;
  background-color: rgba(131, 255, 127, 0.1);
}
.today-update{
  text-align: center;
  margin: 5px 0;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1px;
}
.update{
  display: flex;
  margin-top: 20px;
  overflow-x: scroll;
  flex-wrap: nowrap;
}
.update::-webkit-scrollbar {
  width: 0;
}
.update-item{
  display: inline-block;
  margin-left: 11px;
  text-align: center;
}
.update-item img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.update-item span{
  width: 65px;
  display: block;
  margin-top: 10px;
  font-size: 10px;
  letter-spacing: 1px;
  line-height: 15px;
  font-family: monospace;
  color: #666666;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.update-more{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #cccccc;
  vertical-align: middle;
  font-size: 10px;
  line-height: 50px;
}
.sorts-box{
  margin: 25px 10px 50px 10px;
}
.title-box{
  display: flex;
  justify-content: space-between;
}
.title{
  font-size: 14px;
  letter-spacing: 1px;
  font-family: cursive;
  font-weight: bold;
}
.title:before {   
  content: "";   
  display: inline-block;
  position: relative;
  top: 3px;
  width: 8px;
  height: 15px;
  border-radius: 5px;
  margin-right: 5px;
  background-color: #1afa29;
}   
.more{
  font-size: 12px;
  letter-spacing: 1px;
  color: #666666;
}
.items{
  margin: 10px 8px;
  display: flex;
  justify-content: space-between;
}
.item{
  width: 110px;
  text-align: center;
}
.item img{
  width: 100px;
  height: 105px;
  border-radius: 10px;
}
.item span{
  display: block;
  width: 90px;
  position: relative;
  left: 10px;
  font-size: 13px;
  letter-spacing: 1px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
