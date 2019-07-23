<template>
  <div class="sort-box">
    <div class="sort-item">
      <div class="title-box">
        <div class="title">
          <img src="../assets/sorticon/exam.png"/>
          <span>英语考试</span>
        </div>
        <div class="more">
          <img src="../assets/sorticon/more.png"/>
        </div>
      </div>
      <div class="items">
        <div class="item" v-for="(item, index) in exams" :key="index">{{item}}</div>
      </div>
    </div>
    <div class="sort-item">
      <div class="title-box">
        <div class="title">
          <img src="../assets/sorticon/pronunciation.png"/>
          <span>口语发音</span>
        </div>
        <div class="more">
          <img src="../assets/sorticon/more.png"/>
        </div>
      </div>
      <div class="items">
        <div class="item" v-for="(item, index) in pro" :key="index">{{item}}</div>
      </div>
    </div>
    <div class="sort-item">
      <div class="title-box">
        <div class="title">
          <img src="../assets/sorticon/movies.png"/>
          <span>影视音乐</span>
        </div>
        <div class="more">
          <img src="../assets/sorticon/more.png"/>
        </div>
      </div>
      <div class="items">
        <div class="item" v-for="(item, index) in movies" :key="index">{{item}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      exams: [
        '雅思', '托福', '考研',
        '专八', '专四', '六级',
        '四级', '高中', '初中',
        '小学', 'PTE', 'BEC'
      ],
      pro: [
        '音标', '旅游口音', '商务职场', '美式口语', '英式口语'
      ],
      movies: [
        '美剧', '英剧', '名人传记', '纪录片', '动画动漫', '脱口秀', '歌曲'
      ]
    }
  }
}
</script>

<style scoped>
.sort-box{
  margin: 30px 10px;
}
.sort-item{
  margin-bottom: 40px;
}
.title-box{
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: solid 1px #dddddd;
}
.title img{
  width: 22px;
  height: 22px;
}
.title span{
  margin-left: 5px;
  letter-spacing: 1px;
  position: relative;
  bottom: 5px;
  color: #28c232;
}
.more img{
  width: 15px;
  height: 15px;
}
.items{
  margin: 5px 0;
}
.item{
  display: inline-block;
  width: 25%;
  margin: 10px;
  font-size: 14px;
  letter-spacing: 1px;
}
</style>
