/**
 * File: f:\vue\jswei.cn\src\view\home.vue
 * Created Date: 2017-12-14 3:46:13
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2018-01-05 3:10:52
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
                    <router-link :to="'/category/id'">查看更多&gt;&gt;</router-link>
                </b-col>
            </b-row>
            <b-row> 
                <b-col md="6" lg="4" v-for="(item,index) in lastUpdate" :key="index">
                    <b-card tag="article" class="position-relative last-update-item">
                        <h1>
                            <router-link :to="'/topic/'+item.id" class="position-static">
                                {{item.title}}
                            </router-link>
                        </h1>
                        <p class="card-text">
                            {{item.descriptiom|sub_string(150,true)}}
                        </p>
                        <p class="card-text position-absolute small">
                            <small class="text-muted"><span class="line"></span>于{{item.time|time_ago}}之前发布</small>
                        </p>
                    </b-card>
                </b-col>
            </b-row>
            <hr>
            <b-row>
                <b-col class="quote">
                    <p class="quote-text text-center">
                        «本博客是使用<code>NodeJS</code>进行开发,部署在Linux系统中的,本博客系统主要是基于Express4.x和ejs模板引擎开发的.在前台数据的展示采用的是<code>Vue</code>框架进行显示的,使系统达到最优化 [...]»
                    </p>
                    <p class="quote-source text-center">
                        —<a href="https://github.com/js-wei/jswei.cn"><b>获取源码:</b>https://github.com/js-wei/jswei.cn</a>(js-wei)
                    </p>
                </b-col>
            </b-row>
            <hr>
            <b-row>
                <b-col class="text-center open-source">
                    <h1><icon name="github" class="github"></icon> Open Source</h1> 
                    <p>
                        Prometheus is 100% open source and community-driven. All components are available under the <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache 2 License</a> on <a href="https://github.com/js-wei">GitHub</a>.
                    </p> 
                    <iframe 
                        src="https://ghbtns.com/github-btn.html?user=js-wei&amp;repo=node-blog&amp;type=star&amp;count=true&amp;size=large" 
                        frameborder="0" 
                        scrolling="0" 
                        class="github-stars">
                    </iframe> 
                    <p>
                      We are a <a href="http://jswei.cn/">Cloud Native Computing Foundation</a>  member project.
                    </p>
                    <p>
                      <a href="http://jswei.cn/">
                        <img src="https://avatars1.githubusercontent.com/u/10104372?v=3&amp;s=460">
                      </a>
                    </p>
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
        data() {
            return {
                home: '首页',
                carouselList:[{
                    title:'这是一个测试的大屏滚动',
                    descriptiom:'变量存储在内存中的值。这就意味着在创建变量时会在内存中开辟一个空间。基于变量的数据类型，解释器会分配指定内存，并决定什么数据可以被存储在内存中。因此，变量可以指定不同的数据类型，这些变量可以存储整数，小数或字符。'
                    ,time:1515124236,
                },
                {
                    title:'这是一个测试的大屏滚动',
                    descriptiom:'变量存储在内存中的值。这就意味着在创建变量时会在内存中开辟一个空间。基于变量的数据类型，解释器会分配指定内存，并决定什么数据可以被存储在内存中。因此，变量可以指定不同的数据类型，这些变量可以存储整数，小数或字符。'
                    ,time:1515124236,
                },{
                    title:'这是一个测试的大屏滚动',
                    descriptiom:'变量存储在内存中的值。这就意味着在创建变量时会在内存中开辟一个空间。基于变量的数据类型，解释器会分配指定内存，并决定什么数据可以被存储在内存中。因此，变量可以指定不同的数据类型，这些变量可以存储整数，小数或字符。'
                    ,time:1515124236,
                }],
                lastUpdate:[{
                        id:'590bf7a35abb2c15e0d1e297',
                        title:'Python 变量类型',
                        descriptiom:'变量存储在内存中的值。这就意味着在创建变量时会在内存中开辟一个空间。基于变量的数据类型，解释器会分配指定内存，并决定什么数据可以被存储在内存中。因此，变量可以指定不同的数据类型，这些变量可以存储整数，小数或字符。'
                        ,time:1515124288,
                    },{
                        id:'590bf7605abb2c15e0d1e295',
                        title:'Python 基础语法',
                        descriptiom:'在 Python 里，标识符有字母、数字、下划线组成。在 Python 中，所有标识符可以包括英文、数字以及下划线(_)，但不能以数字开头。Python 中的标识符是区分大小写的。'
                        ,time:1515124236,
                    },{
                        id:'590bf64a5abb2c15e0d1e293',
                        title:'Python 中文编码',
                        descriptiom:'前面章节中我们已经学会了如何用 Python 输出 "Hello, World!"，英文没有问题，但是如果你输出中文字符"你好，世界"就有可能会碰到中文编码问题'
                        ,time:1515037888,
                    },
                    {
                        id:'590bf51f5abb2c15e0d1e28b',
                        title:'Python 简介',
                        descriptiom:'Python 是一个高层次的结合了解释性、编译性、互动性和面向对象的脚本语言。Python 的设计具有很强的可读性，相比其他语言经常使用英文关键字，其他语言的一些标点符号，它具有比其他语言更有特色语法结构'
                        ,time:1515113701,
                    }
                ]
            }
        },
        components: {
            vCarousel,
            vHeader,
            vFooter
        }
    }
</script>

<style lang="scss" scoped>
    @import 'static/style/base';
    .last-update{
        .last-update-title{
            height:3.5rem;
            line-height:3.5rem;
            h2{
               height:2.5rem;
               line-height:2.5rem;
               margin-top:15px;
               border-left:2px solid nth($baseColor,3);
               padding-left:10px;
               font-size:2.2rem;
            }
            a{
                font-size:1.3rem;
                margin-top:1.2rem;
                display: inline-block;
            }
        }
        .last-update-item{
            margin-top:15px;
            height:280px;
            .card-body{
                position: relative;
                h1{
                    font-size:2.5rem;
                    padding-bottom:10px;
                    border-bottom:1px solid nth($baseColor,3);
                    a{
                        &:hover{
                            text-decoration: none;
                            color:nth($baseColor,2);
                        }
                    }
                }
                .card-text{
                   text-indent:2em;
                   font-size:1.5rem;
                   line-height:2.2rem; 
                   &.small{
                       right:5.4%;
                       bottom:20px;
                   }
                }
                a{
                  position:absolute;
                  bottom:20px;
                  right:20px; 
                }
            }
        }
        .quote{
            p {
                text-align:center;
                &.quote-text{
                    margin: auto;
                    font-size:2.5rem;
                    font-style: italic;
                    color: #e6522c;
                }
                &.quote-source {
                    width: 60%;
                    font-size: 16px;
                    margin-top: 15px;
                    margin-left: 50px;
                    a{
                        color:nth($baseColor, 6)
                    }
                }
            }
        }
        .open-source{
            h1{
                height:40px;
                line-height:40px;
                position: relative;
                .github{
                    width:35px;
                    height:35px;
                    position: absolute;
                    left:40%;
                    top:5px;
                }
            }
            .github-stars {
                margin-top: 10px;
                width: 160px;
                height: 30px;
            }
        }
    }
</style>