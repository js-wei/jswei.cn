/**
 * File: f:\vue\jswei.cn\src\view\home.vue
 * Created Date: 2017-12-14 3:46:13
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2017-12-21 3:42:15
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
        <b-container class="last-update">
            <b-row>
                <b-col class="last-update-title">
                    <h2>最后更新</h2>
                </b-col>
                <b-col class="text-right last-update-title">
                    <router-link :to="'/category/id'">查看更多 &gt;&gt;</router-link>
                </b-col>
            </b-row>
            <b-row> 
                <b-col cols="4" v-for="(item,index) in lastUpdate" :key="index">
                    <b-card :title="item.title"
                            tag="article"
                            class="last-update-item">
                        <p class="card-text">
                            {{item.descriptiom|sub_string(150,true)}}
                        </p>
                        <b-button :href="'/topic/'+item.id">查看详情</b-button>
                    </b-card>
                </b-col>
            </b-row>
            <v-footer></v-footer>
        </b-container>
    </div>
</template>

<script>
    import vHeader from '../components/header.vue'
    import vFooter from '../components/footer.vue'
    import vCarousel from '../components/carousel.vue'
    export default {
        metaInfo: {
            title: '技术博客|魏巍的博客|Vue版本', // set a title
            meta: [{                 // set meta
                name: 'keywords',
                content: '最好,博客,ThinkPHP,Nodejs,JavaScript'
            },{                 // set meta
                name: 'description',
                content: '这是使用ThinkPHP写的,用于介绍asp.net的博客,Vue版本'
            }]
        },
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
                }],
                lastUpdate:[{
                        id:'590bf7a35abb2c15e0d1e297',
                        title:'Python 变量类型',
                        descriptiom:'变量存储在内存中的值。这就意味着在创建变量时会在内存中开辟一个空间。基于变量的数据类型，解释器会分配指定内存，并决定什么数据可以被存储在内存中。因此，变量可以指定不同的数据类型，这些变量可以存储整数，小数或字符。'
                    },{
                        id:'590bf7605abb2c15e0d1e295',
                        title:'Python 基础语法',
                        descriptiom:'在 Python 里，标识符有字母、数字、下划线组成。在 Python 中，所有标识符可以包括英文、数字以及下划线(_)，但不能以数字开头。Python 中的标识符是区分大小写的。'
                    },{
                        id:'590bf64a5abb2c15e0d1e293',
                        title:'Python 中文编码',
                        descriptiom:'前面章节中我们已经学会了如何用 Python 输出 "Hello, World!"，英文没有问题，但是如果你输出中文字符"你好，世界"就有可能会碰到中文编码问题'
                    },
                    {
                        id:'590bf51f5abb2c15e0d1e28b',
                        title:'Python 简介',
                        descriptiom:'Python 是一个高层次的结合了解释性、编译性、互动性和面向对象的脚本语言。Python 的设计具有很强的可读性，相比其他语言经常使用英文关键字，其他语言的一些标点符号，它具有比其他语言更有特色语法结构'
                    }
                ]
            }
        },
        components: {
            vCarousel,
            vHeader,
            vFooter
        },
        methods: {
            getComList() {
               return this.axios.post("/api/com", {}); 
            }
        },
        created(){
            // this.axios.all([
            //     this.getComList()
            // ]).then(this.axios.spread(function(comList){
                
            // }));
        }
    }
</script>

<style lang="scss" scoped>
    @import 'static/style/base';
    .last-update{
        .last-update-title{
            height:50px;
            line-height:50px;
            h2{
               height:2rem;
               line-height:2rem;
               margin-top:15px;
               border-left:2px solid nth($baseColor,3);
               padding-left:10px;
               font-size:1.5rem;
            }
        }
        .last-update-item{
            margin-top:10px;
            height:280px;
            .card-body{
                position: relative;
                h4{
                    font-size:1.5rem;
                    padding-bottom:10px;
                    border-bottom:1px solid nth($baseColor,3);
                }
                .card-text{
                   text-indent:2em;
                   font-size:.9rem;
                   line-height:1.5rem; 
                }
                a{
                  position: absolute;
                  bottom:20px;
                  right:30px; 
                }
            }
        }
    }
</style>