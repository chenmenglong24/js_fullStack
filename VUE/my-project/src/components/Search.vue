<template>
  <div>
    <span @click="back"><mt-cell class="back" icon="back"></mt-cell></span>
    <div class="search">
      <input v-model="value" :result="filterResult" placeholder="搜索教材、课程、资料. . ." />
      <button class="btn" :class="{ifCLick: ifClick}" ref="btn" @touchstart="handleStart" @touchend="handleEnd" @click="search">搜索</button>
    </div>
    <!-- 搜索结果 -->
    <div class="search-result" v-if="value.length">
      <ul>
        <li v-for="(item, index) in filterResult" :key="index">{{item}}</li>
      </ul>
    </div>
    <!-- 热门搜索 -->
    <div class="hot-key-box" v-if="!value.length">
        <span class="title">热门搜索</span>
        <div class="hot-keys">
          <div class="hot-key" v-for="(item, index) in hotKeys" :key="index">{{item}}</div>
        </div>
    </div>
    <!-- 搜索历史 -->
    <div class="search-history-box" v-if="!value.length">
      <div class="title-box">
        <span class="title">搜索历史</span>
        <span class="delete" @click="deleteAllHistory">删除记录</span>
        <div class="null" v-if="!searchHistory.length">暂无搜索记录</div>
        <div class="search-histories">
          <div class="search-history" v-for="(item, index) in searchHistory" :key="index">
            <img class="search-img" src="../assets/search-history.png"/>
            {{item}}
            <img class="delete-img" src="../assets/delete-history.png" @click="deleteHistory(index)"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-search',
  data() {
    return {
      value: '',
      ifClick: false,
      defaultResult: [
        'Apple',
        'Banana',
        'Orange',
        'Durian',
        'Lemon',
        'Peach',
        'Cherry',
        'Berry',
        'Core',
        'Fig',
        'Haw',
        'Melon',
        'Plum',
        'Pear',
        'Peanut',
        'Other'
      ],
      hotKeys: [
        '雅思', '出国', '沪教牛津版英语', 'BBC', '演讲', '心理健康', '语法', '音乐', 'The Big Bang Theory', '教学'
      ],
      // searchHistory: [
      //   '四六级', 'kobe', 'jay'
      // ]
    };
  },
  computed: {
    filterResult() {
      return this.defaultResult.filter(item => new RegExp(this.value, 'i').test(item));
    },
    searchHistory () {
      let history = [];
      history.push(...this.$store.state.searchHistory);
      return history.reverse();
    }
    
  },
  methods: {
    back () {
      this.$router.go(-1);
    },
    handleStart () {
      this.ifClick = true;
    },
    handleEnd () {
      this.ifClick = false;
    },
    search () {
      // console.log(1);
      if (this.value.replace(/(^\s*)|(\s*$)/g, "") =="") {
        console.log('toast: 请输入内容')
        } else {          
          let searchKey = this.value
          this.$store.dispatch('saveHistory', searchKey)
      }
    },
    deleteHistory (index) {
      // console.log(1);
      this.$store.dispatch('deleteHistory', index)
    },
    deleteAllHistory () {
      this.$store.dispatch('deleteAllHistory');
    }
  }
};
</script>

<style lang="css" scoped>
.back{
  display: inline-block;
  position: static;
  overflow: visible;
}
.search{
  display: inline-block;
  margin-left: 5px;
}
.search input{
  border: none;
  outline: none;
  height: 48px;
  width: 65vw;
  font-size: 16px;
}
.btn{
  margin-left: 10px;
  border: none;
  outline: none;
  color: #ffffff;
  background-color: #cccccc;
  height: 30px;
  width: 50px;
  padding: 5px;
  letter-spacing: 2px;
  font-size: 15px;
  border-radius: 5px;
}
.ifCLick{
  background-color: #999999;
}
.search-result ul{
  padding: 0;
}
.search-result li{
  list-style-type: none;
}
.hot-key-box{
  height: 200px;
  margin: 10px;
}
.hot-keys{
  margin: 10px 0;
}
.hot-key{
  display: inline-block;
  margin: 8px 10px;
  padding: 5px 10px;
  font-size: 15px;
  color: #ffffff;
  background-color: #62d3a6;
  border-radius: 15px;
}
.search-history-box{
  margin: 10px;
}
.title{
  font-size: 13px;
  letter-spacing: 1px;
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
.delete{
  font-size: 12px;
  letter-spacing: 1px;
  color: #666666;
  position: absolute;
  right: 20px;
}   
.null{
  margin: 15px 10px;
  font-size: 12px;
  letter-spacing: 1px;
  text-align: center;
  color: #999999;
  padding: 2px;
  border-bottom: solid 1px #dddddd;
}
.search-history{
  margin: 15px 10px;
  font-size: 14px;
  color: #333333;
  padding: 2px;
  border-bottom: solid 1px #dddddd;
}
.search-img{
  display: inline-block;
  width: 16px;
  height: 16px;
}
.delete-img{
  display: inline-block;
  width: 16px;
  height: 16px;
  /* vertical-align: middle; */
  position: absolute;
  right: 20px;
}

</style>