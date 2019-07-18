<template>
  <div>
    <span @click="back"><mt-cell class="back" icon="back"></mt-cell></span>
    <div class="search">
      <input v-model="value" :result="filterResult" placeholder="搜索教材、课程、资料. . ." />
      <button class="btn">搜索</button>
    </div>
    <!-- 搜索结果 -->
    <div class="search-result" v-if="value.length">
      <ul>
        <li v-for="(item, index) in filterResult" :key="index">{{item}}</li>
      </ul>
    </div>
    <!-- 热门搜索 -->
    <div class="hot-key" v-if="!value.length">
        <span class="title">热门搜索</span>
    </div>
    <!-- 搜索历史 -->
    <div class="search-history" v-if="!value.length">
      <div class="title-box">
        <span class="title">搜索历史</span>
        <span class="delete">删除记录</span>
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
      ]
    };
  },
  computed: {
    filterResult() {
      return this.defaultResult.filter(item => new RegExp(this.value, 'i').test(item));
    }
  },
  methods: {
    back () {
      this.$router.go(-1);
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
}
.search input{
  border: none;
}
.btn{
  border: none;
}
.search-result ul{
  padding: 0;
}
.search-result li{
  list-style-type: none;
}
.hot-key{
  height: 100px;
  margin: 10px;
}
.search-history{
  margin: 10px;
}
.title-box{
  display: flex;
  justify-content: space-between;
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
}   
</style>