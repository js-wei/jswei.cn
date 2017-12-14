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
  input{
    outline:none;
    box-shadow:none;
    
  }
  input:focus{
    outline:none;
    box-shadow:none;
  }
</style>
