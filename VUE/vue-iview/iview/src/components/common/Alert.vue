<template>
  <div class="alert">{{msg}}</div>
</template>

<script>
export default {
  name: 'Alter',
  props: ['msg'],
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .alert{
    font-size: 30px;
    text-align: center;
    width: 300px;
    height: 200px;
    border: 1px solid #aaaaaa;
    border-radius: 5px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
  }
</style>
