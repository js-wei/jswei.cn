/**
 * File: f:\vue\jswei.cn\src\view\topic.vue
 * Created Date: 2017-12-18 10:40:41
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2018-01-05 3:19:36
 * -----
 * Copyright (c) 2017 魏巍
 * ------
 * All shall be well and all shall be well and all manner of things shall be well.
 * We're doomed!
 */

<template>
    <b-container class="topic">
        <v-header></v-header>
        <b-row>
            <b-col class="p-0">
                <b-breadcrumb :items="items"></b-breadcrumb>
            </b-col>
        </b-row>
        <b-row>
            <b-col lg="9" md="12" sm="12" class="p-0">
                <div class="article">
                    <h1>Python 变量类型</h1>
                    <div class="tools">
                        <ul class="icons">
                            <li>
                                <icon class="icon-item" name="eye"></icon>
                                <span class="icon-item-number">22</span>
                            </li>
                            <li>
                                <icon class="icon-item" name="commenting-o"></icon>
                                <span class="icon-item-number">22</span>
                            </li>
                            <li>
                                <icon class="icon-item" name="thumbs-o-up"></icon>
                                <span class="icon-item-number">22</span>
                            </li>
                            <li>
                                <icon class="icon-item" name="thumbs-o-down"></icon>
                                <span class="icon-item-number">22</span>
                            </li>
                            <li>
                                <icon class="icon-item" name="calendar-minus-o"></icon>
                                <span class="icon-item-number">2017-12-18</span>
                            </li>
                        </ul>
                        <div class="text-right">
                            分享:
                            <share :config="shareOptions"></share>
                        </div>
                    </div>
                    <div class="article-content pl-3 pr-3">
                        <p>
                            变量存储在内存中的值。这就意味着在创建变量时会在内存中开辟一个空间。基于变量的数据类型，解释器会分配指定内存，并决定什么数据可以被存储在内存中。因此，变量可以指定不同的数据类型，这些变量可以存储整数，小数或字符。
                        </p>
                        <p>
                            在 Python 里，标识符有字母、数字、下划线组成。在 Python 中，所有标识符可以包括英文、数字以及下划线(_)，但不能以数字开头。Python 中的标识符是区分大小写的。
                        </p>
                        <p>
                            在 Python 里，标识符有字母、数字、下划线组成。在 Python 中，所有标识符可以包括英文、数字以及下划线(_)，但不能以数字开头。Python 中的标识符是区分大小写的。
                        </p>
                        <p>
                            在 Python 里，标识符有字母、数字、下划线组成。在 Python 中，所有标识符可以包括英文、数字以及下划线(_)，但不能以数字开头。Python 中的标识符是区分大小写的。
                        </p>
                        <p>
                            在 Python 里，标识符有字母、数字、下划线组成。在 Python 中，所有标识符可以包括英文、数字以及下划线(_)，但不能以数字开头。Python 中的标识符是区分大小写的。
                        </p>
                        <p>
                            在 Python 里，标识符有字母、数字、下划线组成。在 Python 中，所有标识符可以包括英文、数字以及下划线(_)，但不能以数字开头。Python 中的标识符是区分大小写的。
                        </p>
                    </div>
                    <nav aria-label="Page navigation" class="pager">
                        <ul class="pagination justify-content-center">
                            <li class="page-item">
                                <b-link :href="'/'" class="page-link page-short">
                                    上一篇:Python 简介
                                </b-link>
                            </li>
                            <li>
                                <b-link :href="'/'" class="page-link page-short">
                                    下一篇:Python 中文编码
                                </b-link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <v-discuss></v-discuss>
            </b-col>
            <b-col lg="3" md="12" sm="12" class="col-right">
                <v-list :list="list" :bdColor="'#e6522c'" :hdTitle="'栏目推荐'"></v-list>
                <v-list :list="list" :bdColor="'#00ca00'" :hdTitle="'相关推荐'"></v-list>
                <v-list :list="list" :bdColor="'#f19d87'" :hdTitle="'随机推荐'"></v-list>
            </b-col>
        </b-row>
        <v-footer></v-footer>
    </b-container>
</template>

<script>
    import vHeader from '../components/header.vue'
    import vFooter from '../components/footer.vue'
    import vList from '../components/list.vue'
    import vDiscuss from '../components/discuss.vue'
    
    export default {
        data() {
            return {
                items:[{
                    text: `首页`,
                    href: '/'
                },{
                    text: 'html',
                    href: '/categoty/html'  
                },{
                    text: '详情',
                    href: ''  
                }],
                shareOptions:{
                   source:window.location.href,
                   disabled:['google', 'facebook', 'twitter','diandian','lingin'], // 禁用的站点
                },
                list:[
                    {id:'1',title:'测试的文章标题1',date:'2017-12-01'},
                    {id:'2',title:'测试的文章标题2',date:'2017-12-02'},
                    {id:'3',title:'测试的文章标题3',date:'2017-12-03'},
                    {id:'4',title:'测试的文章标题4',date:'2017-12-04'},
                    {id:'5',title:'测试的文章标题5',date:'2017-12-05'},
                ]
            }
        },
        components: {
            vHeader,
            vFooter,
            vList,
            vDiscuss
        },
        mounted(){
            document.querySelector('.wechat-qrcode').style.zIndex=3031;
        }
    }
</script>
<style lang="scss" scoped>
    @import 'static/style/base';
    .topic{
        padding-top:80px;
        .breadcrumb{
            box-shadow:2px -2px 5px rgb(248, 248, 248);
            .breadcrumb-item{
               text-transform:uppercase;
            }
        }
        .article{
            background-color: rgb(248, 248, 248);
            box-shadow:2px -2px 5px #eee;
            padding-bottom:20px;
            padding-left:10px;
            padding-right:10px;
            position: relative;
            padding-top:20px;
            h1{
                font-size:2.2rem;
                line-height:3rem;
                height:3rem;
                border-left:2px solid nth($baseColor,3);
                padding-left:5px;
                margin-left:2rem;
                color:nth($baseColor,3);
            }
            .tools{
                .icons{
                    padding:0 0 0 20px;
                    list-style:none;
                    li{
                        float: left;
                        padding:0 4px 0 4px;
                        color:#9d9d9d;
                        &:hover{
                            text-decoration:underline;
                            cursor: pointer;
                        }
                    }
                }
            }
            p{
                text-indent:2em;
                font-size:1.5rem;
                line-height:2rem;
                padding:0 5px;
                padding-bottom:15px;
                &:first-of-type{
                    margin-top:15px;
                }
            }
        }
    }
    @media screen and (max-width:990px) {
        .col-right{
            margin-top:15px;
        }
    }  
</style>