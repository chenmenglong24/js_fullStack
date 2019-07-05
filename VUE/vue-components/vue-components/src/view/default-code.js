const code = `<template>
    <div>
      <input v-model="message">
      {{message}}
    </div>
  </template>
  <script>
  export default {
    data () {
      return {
        message: '我是默认code'
      }
    }
  }
  </script>`

export default code