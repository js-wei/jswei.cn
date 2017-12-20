/**
 * File: f:\vue\jswei.cn\src\components\list.vue
 * Created Date: 2017-12-20 9:06:41
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2017-12-20 9:58:20
 * -----
 * Copyright (c) 2017 魏巍
 * ------
 * All shall be well and all shall be well and all manner of things shall be well.
 * We're doomed!
 */

<template>
    <div class="list">
        <h2 :style="'border-left:1px solid '+bdColor+';color:'+frColor+';'">{{hdTitle}}</h2>
        <ul class="list-group">
            <li v-for="(item,index) in list" :key="index">
                <router-link :to="path+'/'+item.id" v-if="path">
                    <span v-if="item.title.length>15" 
                        v-b-tooltip 
                        :title="item.title">
                        {{item.title|sub_string(10,true)}}
                    </span>
                    <span v-if="item.title.length<15" 
                        v-b-tooltip 
                        :title="item.title">
                        {{item.title}}
                    </span>
                </router-link>
                <router-link :to="{path:'',params:{id:item.id}}" v-if="!path">
                    <span v-if="item.title.length>15" 
                        v-b-tooltip 
                        :title="item.title">
                        {{item.title|sub_string(10,true)}}
                    </span>
                    <span v-if="item.title.length<15" 
                        v-b-tooltip 
                        :title="item.title">
                        {{item.title}}
                    </span>
                </router-link>
                <span class="date">{{item.date}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            list: {
                required:true,
                type: Array,
                default: []
            },
            frColor:{
                required:false,
                type:String,
                default:'#000000'
            },
            bdColor:{
                required:false,
                type:String,
                default:'#ffffff'
            },
            hdTitle:{
                required:false,
                type:String,
                default:'标题头部'
            },
            path:{
                required:false,
                type:String,
                default:''
            }
        },
    }
</script>

<style lang="scss" scoped>
    .list{
        padding-bottom:10px;
        h2{
            padding-left:10px;
            font-size:1.5rem;
            height:1.8rem;
            line-height:1.8rem;
        }
        .list-group{
            margin-left:10px;
            margin-top:10px;
            li{
                line-height:1.4em;
                position: relative;
                a{
                    font-size:.9rem;
                }
                span.date{
                    font-size:.9rem;
                    position: absolute;
                    right:0;
                }
            }
        }
    }
</style>