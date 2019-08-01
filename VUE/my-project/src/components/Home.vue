<template>
  <div>
    <div class="hide" v-if="hide" @click="clearHide"></div>
    <v-sidebar ref="showside"></v-sidebar>
    <div class="header">
      <mt-cell class="more">
        <img slot="icon" src="../assets/more.svg" width="24" height="24" @click="showside">
      </mt-cell>
      <div class="search">
        <router-link tag="span" to="/search">
          <span>搜索教材、课程、资料. . .</span>
        </router-link>
      </div>
    </div>
    <div class="navigation-box">
      <div class="navigation-bar">
        <router-link tag="span" class="navigate" :id="0" :class="{select:0==current}" @click.native="select" to="/my" >我的</router-link>
        <router-link tag="span" class="navigate" :id="1" :class="{select:1==current}" @click.native="select" to="/discover">发现</router-link>
        <router-link tag="span" class="navigate" :id="2" :class="{select:2==current}" @click.native="select" to="/sort">分类</router-link>
        <router-link tag="span" class="navigate" :id="3" :class="{select:3==current}" @click.native="select" to="/recommend">精品</router-link>
      </div>
    </div>
    <router-view/>
    
  </div>
</template>
<script>
import Sidebar from './Sidebar'

export default {
  data () {
    return {
      msg: '我是首页的头部',
      hide: false,
      current: '1'
    }
  },
  components: {
    'v-sidebar': Sidebar,
    
  },
  methods: {
    showside () {
      this.hide = true
      this.$refs.showside.showSide()
    },
    clearHide () {
      this.hide = false
      this.$refs.showside.hide = true
    },
    select (e) {
      // console.log(e.target.id);
      this.current = e.target.id;
      localStorage.setItem('current', this.current);
    }
  },
  mounted () {
    var id = localStorage.getItem('current');
    this.current = id;
  }
}
</script>

<style scoped>
.more{
  display: inline-block;
  position: static;
  overflow: visible;
}
.search{
  display: inline-block;
}
.search span{
  color: #999999;
}
.hide{
  position: absolute;
  background-color: #999999;
  width: 100%;
  height: 100%;
  left: 0;
  opacity: 0.5;
  z-index: 99;
}
.navigation-box{
  border-bottom: 1.5px solid rgba(99, 99, 99, 0.1);
}
.navigation-bar{
  display: flex;
  margin: 10px 20px;
  justify-content: space-between;
}
.navigate{
  color: #666666;
  font-size: 20px;
  font-weight: 550;
  letter-spacing: 3px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.select{
  color: #000000;
}
.select:after {
  content: "";
  display: block;
  position: relative;
  top: 5px;
  left: 6px;
  width: 30px;
  height: 4px;
  background-color: #1afa29;
  border-radius: 6px;
}
</style>
