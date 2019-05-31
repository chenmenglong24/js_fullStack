<template>
  <div class="look">{{msg}}
    {{$route.params.id}}
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      msg: '及你太没'
    }
  }
}
</script>

