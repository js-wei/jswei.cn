/**
 * File: g:\vue\jswei.cn\src\components\public\marquee.vue
 * Created Date: 2017-12-02 11:07:52
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2017-12-02 11:53:30
 * -----
 * Copyright (c) 2017 魏巍
 * ------
 * All shall be well and all shall be well and all manner of things shall be well.
 * We're doomed!
 */

<template>
    <div class="marquee">
        <v-marquee :duration="marquee.duration" 
            :interval="marquee.interval" 
            :direction="marquee.direction" style="150px">
            <item v-for="(item,index) in marquee.content" :item="item" :key="index"></item>
        </v-marquee>
    </div>
</template>

<script>
import vMarquee from 'vue-marquee'
    export default {
        props: {
            marquee:Object,
        },
        components:{
            vMarquee,
            item:{
                // 声明 props
                props: ['item'],
                template:`<li>{{item.title}}<span>{{item.date}}</span></li>`
            }
        },
        created () {
          
        }
    }
</script>

<style lang="scss" scoped>
    .marquee{
        ul{
            li{
               float:none; 
            }
        }
    }
</style>