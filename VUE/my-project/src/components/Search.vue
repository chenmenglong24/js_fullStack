<template>
  <div>
    <span @click="back"><mt-cell class="back" icon="back"></mt-cell></span>
    <div class="search">
      <input v-model="value" :result="filterResult">
    </div>
    <!-- 搜索结果 -->
    <div class="search-result" v-if="value.length">
      <ul>
        <li v-for="(item, index) in filterResult" :key="index">{{item}}</li>
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