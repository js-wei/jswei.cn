/**
 * File: g:\vue\jswei.cn\src\components\public\header.vue
 * Created Date: 2017-12-07 7:42:58
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2017-12-17 1:27:59
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
                <b-navbar-nav class="ml-auto">
                    <b-nav-item :to="'/'">首页</b-nav-item>
                </b-navbar-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav>
                    <b-nav-form action="javascript:;">
                        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="搜索"/>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">搜索</b-button>
                    </b-nav-form>
                </b-navbar-nav>
                <b-navbar-nav>
                    <ul class="icons">
                        <li>
                            <icon name="github"></icon>   
                        </li>
                        <li>
                            <icon name="phone"></icon>   
                        </li>
                        <li @mouseenter="showQrcode" @mouseleave="showQrcode">
                            <icon name="qrcode"></icon>   
                        </li>
                    </ul>
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
                    foreground:'#000000',
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
    nav.navbar{
        .navbar-brand{
            position:relative;
            width:35px;
            &:hover{
                color:nth($baseColor,3);
            }
            span{
                position: absolute;
                top:.9rem;
                margin-left:5px;
                font-size:1.2rem;
            }
        }
        ul.navbar-nav{
            li.nav-item{
                a.nav-link{
                    font-size: 1.8rem;
                    display: block;
                    color:nth($baseColor,1);
                    text-transform:uppercase;
                    &:hover{
                        color:nth($baseColor,3);
                    }
                }
            }
            form.form-inline{
                button{
                    cursor: pointer;
                    &:hover{
                        color:nth($baseColor,3);
                    }
                }
            }
            
        }
        .navbar-collapse{
            .navbar-nav{
                position: relative;
                ul.icons{
                   padding-left:0;
                   li{
                       float: left;
                       margin-left:10px;
                       .fa-icon{
                            display: inline-block;
                            color:nth($baseColor,1);
                            margin-left:10px;
                            cursor: pointer;
                        }
                   }
                }
                .qrcanvas{
                    position: absolute;
                    top:30px;
                    right:15px;
                }
            }
        }
    }
</style>