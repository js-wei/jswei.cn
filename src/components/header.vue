/**
 * File: g:\vue\jswei.cn\src\components\public\header.vue
 * Created Date: 2017-12-07 7:42:58
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2017-12-28 5:53:54
 * -----
 * Copyright (c) 2017 魏巍
 * ------
 * All shall be well and all shall be well and all manner of things shall be well.
 * We're doomed!
 */

<template>
    <div class="header">
        <b-navbar toggleable="md" fixed="top" type="dark" variant="dark">
            <b-navbar-brand href="/">
               <b-img src="/static/images/10104372.gif" rounded="circle" fluid alt="魏巍" />
               <span>魏巍</span>
            </b-navbar-brand>
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-collapse is-nav id="nav_collapse">
                <!-- <b-navbar-nav class="mr-auto">
                    <b-nav-item :to="'/'">首页</b-nav-item>
                    <b-nav-item-dropdown text="网站开发">
                        <b-dropdown-item href="#">HTML</b-dropdown-item>
                        <b-dropdown-item href="#">CSS</b-dropdown-item>
                        <b-dropdown-item href="#">JAVASCRIPT</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav> -->
                

<ul class="navbar-nav mr-auto"> 
 <li class="nav-item comment58dcbf738a8c4d42a673eeab">
  <a href="/" class="nav-link">html教程</a>
 </li>

 <li class="nav-item comment58dcbf888a8c4d42a673eead dropdown" id="navbarDropdown_58e0a18fbddeaa35557f834a">
  <a href="/" class="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">css教程</a>
   <div class="dropdown-menu dropdown-menu-left comment58e0a18fbddeaa35557f834a" aria-labelledby="navbarDropdown_58e0a18fbddeaa35557f834a">
              <a href="/category/_css">css</a>
        <a href="/category/css3" class="dropdown-item">css3</a></div>
</li>

 <li class="nav-item comment58dcbf9e8a8c4d42a673eeaf">
  <a href="/" class="nav-link">node.js</a>
 </li>

 <li class="nav-item comment58dcbfb78a8c4d42a673eeb1 dropdown" id="navbarDropdown_58dcbfcb8a8c4d42a673eeb3">
  <a href="/" class="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">asp.net</a>
   <div class="dropdown-menu dropdown-menu-left comment58dcbfcb8a8c4d42a673eeb3" aria-labelledby="navbarDropdown_58dcbfcb8a8c4d42a673eeb3">
              <a href="/category/aspnetform">asp.net form</a>
        <a href="/category/aspnetwebpages" class="dropdown-item">asp.net webpages</a><a href="/category/aspnetmvc" class="dropdown-item">asp.net mvc</a></div>
</li>

 <li class="nav-item comment590af67f5abb2c15e0d1e287 dropdown" id="navbarDropdown_590bf5695abb2c15e0d1e28f">
  <a href="/" class="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Python</a>
   <div class="dropdown-menu dropdown-menu-left comment590bf5695abb2c15e0d1e28f" aria-labelledby="navbarDropdown_590bf5695abb2c15e0d1e28f">
              <a href="/category/pythonJiChu">python 基础</a>
        <a href="/category/djangoKuangJia" class="dropdown-item">django 框架</a></div>
</li>
</ul>
                <b-navbar-nav>
                    <b-nav-form action="javascript:;">
                        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="搜索"/>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">搜索</b-button>
                    </b-nav-form>
                </b-navbar-nav>
                <b-navbar-nav class="navbar-icons">
                    <li>
                        <a href="https://github.com/js-wei" target="_balnk">
                            <icon name="github"></icon>
                        </a>   
                    </li>
                    <li>
                        <a href="tel://13584866592">
                            <icon name="phone"></icon>
                        </a>   
                    </li>
                    <li @mouseenter="showQrcode" @mouseleave="showQrcode">
                        <a href="javascript:;">
                            <icon name="qrcode"></icon>
                        </a>   
                    </li>
                    <v-qrcode :Options="Options" :showQrcode="isShowQrcode"></v-qrcode>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    import vQrcode from '../components/qrcode.vue'
    import $ from 'jquery'
    
    export default {
        data() {
            return {
                keywords:'',
                isShowQrcode:false,
                Options:{
                    data:'https://n.jswei.cn',
                    //background:'#e6522c',
                    //foreground:'#fffffff',
                    size:120,
                    logo:{
                        image:'/static/images/10104373.png'
                    }
                }
            }
        },
        methods:{
            showQrcode(e){
                this.isShowQrcode = !this.isShowQrcode;
            }
        },
        components: {
            vQrcode
        },
        mounted(){
            $('a[data-toggle="dropdown"]').hover(function(){
                $(this).next().show();
            },function(){
                $(this).next().hide();
            });
        }
    }
</script>

<style lang="scss" scoped>
    @import 'static/style/base';
    .header{
        .navbar{
            .navbar-brand{
                position:relative;
                width:35px;
                &:hover{
                    color:nth($baseColor,3);
                }
                span{
                    position: absolute;
                    top:1.2rem;
                    margin-left:5px;
                    font-size:1.2rem;
                }
            }
            .navbar-collapse{
                ul.navbar-nav{
                    position: relative;
                    margin-left:5rem;
                    float: left;
                    form{
                        button{
                            cursor: pointer;
                            &:hover{
                                color:nth($baseColor,3);
                            }
                        }
                    }
                    //icons
                    &.navbar-icons{
                       margin-left:.8rem;
                       text-align:right;
                       width:10%;
                       li{
                           a{
                               color:nth($baseColor,1);
                               font-size:1.5rem;
                               padding:0 5px 0 5px;
                               &:hover{
                                   opacity:.5;
                               }
                           }
                       }
                    }
                    //qrcode
                    .qrcanvas{
                        position: absolute;
                        top:40px;
                        right:15px;
                    }
                }
            }
        }
    }
</style>