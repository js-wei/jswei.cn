<template>
  <div id="app">
      <div class="progress-bar"></div>
      <router-view></router-view>
      <v-loding :visible="visible" :loading="loading"></v-loding>
  </div>
</template>
<script>
import Bus from './store/bus'
import vLoding from './components/loding.vue'
import ProgressBar  from 'progressbar.js'

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
    var bar = new ProgressBar.Line('.progress-bar',{
      strokeWidth:1,
      easing: 'easeInOut',
      color: '#FFEA82',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '100%'},
      from: {color: '#FFEA82'},
      to: {color: '#e6522c'},
      step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
      }
    });
    bar.animate(1,()=>{
     document.querySelector('.progress-bar').style.display='none';
    }); 
  }
}
</script>
<style lang="scss"> 
  html {
    font-size: 62.5%;
  }
  #app{
    .progress-bar{
      position: absolute;
      top:0;
      z-index: 1500;
      width: 100%;
      height:1.5px;
    }
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
     background-color:#212529;
     &:focus,&:hover{
        color:#fff;
        background-color:#212529;
     }
  }
  .breadcrumb{
    background-color: rgb(248, 248, 248);
  }
  .dropdown-item {
    color:#fff;
    padding:0 0 0 10px;
    line-height:35px;
    height:35px;
    text-decoration: none;
    //border-bottom:1px solid #f7f5f5;
    &:focus,&:hover{
      color:#fff;
      background-color:#212529;
      opacity:.5;
    }
    &.active,&:active{
      background-color:#212529;
      opacity:.5;
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
    background-color:rgb(248, 248, 248); 
    border:none;
    &:focus,&:hover{
      color:#e6522c;
      opacity:.5;
      text-decoration:underline;
      background-color: rgb(248, 248, 248);
    }
}
</style>
