<template>
  <div>
    <div class="sidebar" :class="{hidesidebar: hide}">
      <div class="user">
        <img src="@/assets/sidebar/avatar.jpg"/>
        <span class="nickname">小飞侠</span>
      </div>
      <div class="side-item">
        <ul>
          <li><img src="@/assets/sidebar/message.svg"/>消息中心</li>
          <li><img src="@/assets/sidebar/friend.svg"/>我的好友</li>
          <li><img src="@/assets/sidebar/history.svg"/>历史记录</li>
          <li><img src="@/assets/sidebar/member.svg"/>会员中心</li>
          <li><img src="@/assets/sidebar/night.svg"/>夜间模式</li>
          <li><img src="@/assets/sidebar/help.svg"/>帮助</li>
          <li><img src="@/assets/sidebar/set.svg"/>设置</li>
        </ul>
      </div>
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
  background-color: #ffffff;
  height: 100%;
  width: 70%;
  z-index: 100;
  left: 0;
  transform: translateX(0);
  transition: all 0.5s ease;
  opacity: 0.9;
}
.hidesidebar{
  transform: translateX(-100%);
  transition: all 0.5s ease;
}
.user{
  height: 100px;
  padding: 25px 15px;
}
.user img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: greenyellow 0px 0px 15px 5px ;
  vertical-align: middle;
  margin-right: 10px;
}
.nickname{
  vertical-align: middle;
}
.side-item{
  border-top: solid #999999 1px;
}
ul{
  margin: 0;
  padding-left: 15px;
}
li{
  color: #333333;
  height: 45px;
  line-height: 50px;
  list-style-type: none;
}
.side-item img{
  display: inline-block;
  width: 25px;
  height: 25px;
  padding-bottom: 3px;
  padding-right: 10px;
  vertical-align: middle;
}
</style>
