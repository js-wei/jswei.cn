/**
 * File: f:\vue\jswei.cn\src\view\home.vue
 * Created Date: 2017-12-14 3:46:13
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2017-12-15 12:18:02
 * -----
 * Copyright (c) 2017 魏巍
 * ------
 * All shall be well and all shall be well and all manner of things shall be well.
 * We're doomed!
 */
<template>
    <div>
        <b-navbar toggleable="md" fixed="top" type="dark" variant="dark">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand href="/">
               <b-img src="/static/images/10104372.gif" rounded="circle" fluid alt="魏巍" />
               <span>魏巍</span>
            </b-navbar-brand>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav class="ml-auto">
                    <b-nav-item :to="'/'">首页</b-nav-item>
                </b-navbar-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="">
                    <b-nav-form action="javascript:;">
                        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="搜索"/>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">搜索</b-button>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <v-carousel></v-carousel>
    </div>
</template>

<script>
    import vCarousel from '../components/carousel.vue'
    
    export default {
        data() {
            return {
                home: '首页'
            }
        },
        components: {
            vCarousel,
        },
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
                font-size:.8rem;
            }
        }
        ul.navbar-nav{
            li.nav-item{
                a.nav-link{
                    font-size: 1.2rem;
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
    }
        
</style>





