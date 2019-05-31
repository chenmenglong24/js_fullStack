<template>
  <div class="look1">{{msg}}
    <div class="go-2" @click='go2'>去Detail2</div>
  </div>
</template>

<script>
export default {
  name: 'Detail1',
  data () {
    return {
      msg: '你瞅啥'
    }
  },
  methods: {
    go2 () {
      // this.$router.push('/Detail/Detail2')
      // this.$router.push({ path: '/Detail/Detail2' })
      this.$router.push({ name: 'Detail2', params: { id: 456 } })
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log(from, to)
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log(from, to)
    next()
  }
}
</script>

