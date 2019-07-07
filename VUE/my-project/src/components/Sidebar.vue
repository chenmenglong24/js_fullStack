<template>
  <div>
    <div class="sidebar" :class="{hidesidebar: hide}">
      {{msg}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '我是TM的侧边栏组件',
      hide: true
    }
  },
  methods: {
    showSide () {
      this.hide = !this.hide
    }
  }
}
</script>

<style scoped>
.sidebar{
  position: absolute;
  background-color: #999999;
  height: 100%;
  width: 70%;
  z-index: 100;
  left: 0;
  transform: translateX(0);
  transition: all 0.5s ease;
  opacity: 0.5;
}
.hidesidebar{
  transform: translateX(-100%);
  transition: all 0.5s ease;
}
</style>
