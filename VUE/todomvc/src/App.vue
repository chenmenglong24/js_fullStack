<template>
  <div>
    <!-- <counter :count="count" v-on:increment="incrementCount"/> -->
    <!-- <counter-brother :count="count"/> -->
    <counter />
  </div>
</template>

<script>
// 两个兄弟组件，
// count 不应该属于Counter组件私有， data(){}, props
import Counter from './components/Counter';
// import CounterBrother from './components/CounterBrother'
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    // incrementCount () {
    //   this.count++;
    // }
  },
  components: {
    'counter': Counter,
    // 'counter-brother': CounterBrother
  }
}
</script>

<style>

</style>
