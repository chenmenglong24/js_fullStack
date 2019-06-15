<template>
  <div>
    <!-- Clicked: {{count}} times, count is -->
    Clicked: {{$store.state.count}} times, count is
    <button @click="increment">+</button>
  </div>
</template>

<script>
// 让store里的改变状态的方法，mapActions
import {mapActions} from 'vuex';
export default {
  props: ['count'],
    // methods: {
    //  increment () {
    //    this.$emit('increment');
    //   //  修改store状态？
    //  }
    // }
    methods: mapActions([
      'increment'
    ])
}
</script>

<style>

</style>
