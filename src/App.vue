<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
  html {
    font-size: 62.5%;
  }
  *:focus {
    outline: none;
  }
  .carousel-caption{
    bottom: 25%;
  }
  .carousel-indicators{
    li{
      cursor: pointer;
    }
  }
</style>
