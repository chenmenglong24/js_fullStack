<template>
  <transition name="fade">
    <div class="player-wrapper" @touchmove.prevent>
      <div ref="player" class="player"/>
      <i class="iconfont icon-left" @click="$router.back()"/>
    </div>
    <div class="info-wrapper">
      <ScrollView>

      </ScrollView>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Movie',
  data () {
    return {

    }
  },
  created () {
    this.getDetail()
  },
  methods:{
    // 拿到电影的id去请求数据
    getDetail () {
      const { id } = this.$route.params
      axios.get(`/api/api/movie/get_detail/${id}`).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style>

</style>
