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
    bottom: 30%;
  }
  .carousel-indicators{
    li{
      cursor: pointer;
    }
  }
</style>
