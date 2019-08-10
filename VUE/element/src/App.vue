<template>
  <div id="app">
    <el-button type="primary" size="mini" @clickBtn="doButtonPressed" disabled>主要按钮</el-button>
    <el-button type="success" size="small" v-on:clickBtn="doButtonPressed">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import ELButtom from './components/ELButton'
export default {
  name: 'App',
  components: {
    HelloWorld,
    'el-button': ELButtom
  },
  methods: {
    doButtonPressed () {
      console.log('pressed');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
