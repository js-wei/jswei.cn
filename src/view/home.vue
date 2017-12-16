/**
 * File: f:\vue\jswei.cn\src\view\home.vue
 * Created Date: 2017-12-14 3:46:13
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2017-12-16 10:55:35
 * -----
 * Copyright (c) 2017 魏巍
 * ------
 * All shall be well and all shall be well and all manner of things shall be well.
 * We're doomed!
 */
<template>
    <div>
        <v-header></v-header>
        <v-carousel :carouselList="carouselList"></v-carousel>
    </div>
</template>

<script>
    import vHeader from '../components/header.vue'
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
            vHeader
        },
    }
</script>

<style lang="scss" scoped>
    
</style>





