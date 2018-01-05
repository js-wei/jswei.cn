/**
 * File: g:\vue\jswei.cn\src\App.vue
 * Created Date: 2017-12-14 7:36:20
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2018-01-05 3:39:42
 * -----
 * Copyright (c) 2017 魏巍
 * ------
 * All shall be well and all shall be well and all manner of things shall be well.
 * We're doomed!
 */

<template>
  <div id="app">
      <div class="progress-bar"></div>
      <router-view></router-view>
      <v-loding :visible="loading.show" :text="loading.text"></v-loding>
  </div>
</template>
<script>
import vLoding from './components/vue-alert-loading.vue'
import ProgressBar  from 'progressbar.js'
import {mapGetters} from 'vuex'

export default {
  name: 'app',
  metaInfo: {
      title: '技术博客|魏巍的博客|Vue版本',
      meta: [{
          name: 'keywords',
          content: '最好,博客,ThinkPHP,Nodejs,JavaScript'
      },
      {
          name: 'description',
          content: '这是使用ThinkPHP写的,用于介绍asp.net的博客,Vue版本'
      }]
  },
  computed: {
    ...mapGetters([
      'loading'
    ])
  },
  data () {
    return {
     
    }
  },
  components: {
    vLoding,
  },
  mounted(){
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
  html{font-size:62.5%;} 
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
      font-size:1.8rem;
      .nav-link{
        color:#fff;
        text-transform: uppercase;
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
    padding:0  10px;
    line-height:35px;
    height:35px;
    text-decoration: none;
    font-size:1.8rem;
    text-transform: uppercase;
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
  
  //page reset
  .page-link {
    position: relative;
    display: block;
    padding: .5rem .75rem;
    margin-left: -1px;
    color:#e6522c;
    border:none;
    background-color: #f8f8f8; 
    font-size:1.5rem;
    &:focus,&:hover{
      color:#e6522c;
      text-decoration:underline;
      background-color: #f8f8f8;
    }
  }
  .page-item.active .page-link{
    color:#fff;
    background-color:#e6522c;
    border-color:#e6522c;
    text-decoration:none;
  }
  .btn-primary:focus{
    border-color:#e6522c;
    box-shadow:none;
  }
  .btn-primary:not([disabled]):not(.disabled).active, 
  .btn-primary:not([disabled]):not(.disabled):active, 
  .show>.btn-primary.dropdown-toggle{
      color: #fff;
      background-color:#e6522c;
      border-color:#e6522c;
      box-shadow: none;
  }
  button:focus{
    box-shadow:none;
    outline:none;
  }
  .cpt-loading-mask.col .div-loading .loading-discription{
        position:relative;
        animation:myfirst 15s infinite linear;
        -moz-animation:myfirst 15s infinite linear;
        -webkit-animation:myfirst 15s infinite linear;
        -o-animation:myfirst 15s infinite linear;
        top:0px;
    }
    @keyframes myfirst {
        0%   {color:#e6522c;left:16px; bottom:30px;}
        50%  {color:pink;left:-16px;bottom:30px;}
        100% {color:#e6522c;left:16px;bottom:30px;}
    }
    .ql-toolbar.ql-snow+.ql-container.ql-snow.ql-disabled{
        background-color: #eee;
    }
</style>
