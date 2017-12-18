/**
 * File: g:\vue\jswei.cn\src\components\public\header.vue
 * Created Date: 2017-12-07 7:42:58
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2017-12-18 3:49:28
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
                <b-navbar-nav>
                    <b-nav-item :to="'/'">首页</b-nav-item>
                    <b-nav-item-dropdown text="网站开发">
                        <b-dropdown-item href="#">HTML</b-dropdown-item>
                        <b-dropdown-item href="#">CSS</b-dropdown-item>
                        <b-dropdown-item href="#">JAVASCRIPT</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
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
    export default {
        data() {
            return {
                keywords:'',
                isShowQrcode:false,
                Options:{
                    data:'https://jswei.cn',
                    //background:'#e6522c',
                    //foreground:'#fffffff',
                    size:100,
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
                    font-size:.8rem;
                }
            }
            .navbar-collapse{
                ul.navbar-nav{
                    position: relative;
                    margin-left:5rem;
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
                       li{
                           a{
                               color:nth($baseColor,1);
                               font-size:1.2rem;
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
                        top:30px;
                        right:15px;
                    }
                }
            }
        }
    }
    
</style>