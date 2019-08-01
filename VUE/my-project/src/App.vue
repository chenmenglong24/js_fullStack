<template>
  <div id="app">
    <router-view/>
    <router-link tag="span" to="/play" v-if="$route.name !== 'Play'">
      <v-footbar></v-footbar>
    </router-link>
  </div>
</template>

<script>
import Footbar from '@/components/Footbar'
export default {
  name: 'App',
  components: {
    'v-footbar': Footbar
  }
}
</script>

<style>

</style>
