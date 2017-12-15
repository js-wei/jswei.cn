/**
 * File: f:\vue\jswei.cn\src\view\home.vue
 * Created Date: 2017-12-14 3:46:13
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2017-12-15 11:43:08
 * -----
 * Copyright (c) 2017 魏巍
 * ------
 * All shall be well and all shall be well and all manner of things shall be well.
 * We're doomed!
 */
<template>
    <div>
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
                <b-navbar-nav >
                    <b-nav-form action="javascript:;">
                        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="搜索"/>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">搜索</b-button>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <v-carousel :carouselList="carouselList"></v-carousel>
    </div>
</template>

<script>
    import vCarousel from '../components/carousel.vue'
    
    export default {
        data() {
            return {
                home: '首页',
                carouselList:[{
                    title:'这是一个测试的大屏滚动',
                    descriptiom:'变量存储在内存中的值。这就意味着在创建变量时会在内存中开辟一个空间。基于变量的数据类型，解释器会分配指定内存，并决定什么数据可以被存储在内存中。因此，变量可以指定不同的数据类型，这些变量可以存储整数，小数或字符。'
                },{
                    title:'这是一个测试的大屏滚动',
                    descriptiom:'变量存储在内存中的值。这就意味着在创建变量时会在内存中开辟一个空间。基于变量的数据类型，解释器会分配指定内存，并决定什么数据可以被存储在内存中。因此，变量可以指定不同的数据类型，这些变量可以存储整数，小数或字符。'
                },{
                    title:'这是一个测试的大屏滚动',
                    descriptiom:'变量存储在内存中的值。这就意味着在创建变量时会在内存中开辟一个空间。基于变量的数据类型，解释器会分配指定内存，并决定什么数据可以被存储在内存中。因此，变量可以指定不同的数据类型，这些变量可以存储整数，小数或字符。'
                }]
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
    }
        
</style>





