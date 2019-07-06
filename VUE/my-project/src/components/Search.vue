<template>
  <div>
    <div class="search">
      <input v-model="value" :result="filterResult">
    </div>
    <!-- 搜索结果 -->
    <div class="search-result" v-if="value.length">
      <ul>
        <li v-for="item in filterResult">{{item}}</li>
      </ul>
    </div>
    <!-- 热门搜索 -->
    <div class="hot-key" v-if="!value.length">
      热门搜索
    </div>
    <!-- 搜索历史 -->
    <div class="search-history" v-if="!value.length">
      搜索历史
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
  }
};
</script>

<style lang="css" scoped>
.search-result ul{
  padding: 0;
}
.search-result li{
  list-style-type: none;
}
.hot-key{
  height: 100px;
  background-color: #999999
}
</style>