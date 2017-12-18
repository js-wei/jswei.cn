<template>
  <div id="app">
      <router-view></router-view>
      <v-loding :visible="visible" :loading="loading"></v-loding>
  </div>
</template>
<script>
import Bus from './store/bus'
import vLoding from './components/loding.vue'
export default {
  name: 'app',
  data () {
    return {
     visible:false,
     loading:{
       text:'正在努力加载中'
     }
    }
  },
  components: {
    vLoding,
  },
  mounted(){
    Bus.$on('loading',result=>{
      this.visible =result;
    });
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
  .carousel-indicators{
    li{
      cursor: pointer;
    }
  }
  .carousel-caption{
    bottom: 30%;
  }
  a{
    color:#e6522c;
    &:hover{
      color:#e6522c;
    }
  }
  .navbar-dark{
    .navbar-nav{
      font-size:1.2rem;
      .nav-link{
        color:#fff;
        &:hover{
          opacity:.5;
        }
      }
    }
  }
  .dropdown-menu{
    background-color: #343a40;
  }
  .dropdown-item {
    color:#fff;
    padding:0 0 0 10px;
    line-height:35px;
    height:35px;
    text-decoration: none;
    //border-bottom:1px solid #f7f5f5;
    &:focus,&:hover{
      color:#e6522c;
      background-color:#4d4f52;
    }
    &.active,&:active{
       background-color:#4d4f52;
    }
    &:last-of-type{
      border-bottom:none;
    }
  }
  .page-link {
    position: relative;
    display: block;
    padding: .5rem .75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: #e6522c;
    background-color:#e9ecef; 
    border:none;
    &:focus,&:hover{
      color:#e6522c;
      opacity:.5;
      text-decoration:underline;
    }
}
</style>
