/**
 * File: f:\vue\jswei.cn\src\view\home.vue
 * Created Date: 2017-12-14 3:46:13
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2017-12-14 5:28:00
 * -----
 * Copyright (c) 2017 魏巍
 * ------
 * All shall be well and all shall be well and all manner of things shall be well.
 * We're doomed!
 */

<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="dark">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand href="#">首页</b-navbar-brand>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav class="ml-auto">
                    <router-link :to="''">首页</router-link>
                </b-navbar-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="搜索" style="outline:none;"/>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">搜索</b-button>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                home: '首页'
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import 'static/style/base';
    .navbar{
        .navbar-collapse{
            .navbar-nav{
                li{
                    a{
                        font-size: $fontSize+4;
                        position: relative;
                        display: block;
                        padding: 28px 15px;
                        color:nth($baseColor,1);
                        text-transform:uppercase;
                        &:hover{
                            color:nth($baseColor,2);
                        }
                    }
                    form{
                        
                    }
                }
            }
            
        }
    }
        
</style>





