/**
 * File: f:\vue\jswei.cn\src\view\category.vue
 * Created Date: 2017-12-18 10:52:15
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2017-12-21 12:27:43
 * -----
 * Copyright (c) 2017 魏巍
 * ------
 * All shall be well and all shall be well and all manner of things shall be well.
 * We're doomed!
 */

<template>
    <b-container>
        <v-header></v-header>
        <b-row class="category">
            <b-col>
                <b-breadcrumb :items="items"></b-breadcrumb>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-media vertical-align="center">
                    <h1>
                        <router-link :to="''">
                            Media object
                        </router-link>
                    </h1>
                    <div class="icon-list">
                        <ul>
                            <li><icon name="user"></icon><button class="btn btn-link">魏巍</button></li>
                            <li><icon name="eye"></icon><button class="btn btn-link">220</button></li>
                            <li><icon name="calendar"></icon><button class="btn btn-link">2017-12-27</button></li>
                        </ul>
                    </div>
                    <div class="clearfix"></div>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                    congue felis in faucibus.</p>
                </b-media>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="pager">
                <b-pagination size="md"
                    :total-rows="100" 
                    v-model="currentPage" 
                    :per-page="10"
                    :hide-goto-end-buttons="true"
                    :hide-ellipsis="true"
                    first-text="第一页"
                    prev-text="上一页"
                    next-text="下一页"
                    last-text="最后一页">
                </b-pagination>
            </b-col>
        </b-row>
        <v-footer></v-footer>
    </b-container>
</template>

<script>
    import vHeader from '../components/header.vue'
    import vFooter from '../components/footer.vue'
    import bMedia from 'bootstrap-vue/es/components/media/media'
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
                    text: '列表',
                    href: ''  
                }],
                currentPage:1
            }
        },
        components: {
            vHeader,
            vFooter,
            bMedia
        }
    }
</script>

<style lang="scss" scoped>
    @import 'static/style/base';
    .row{
        &.category{
            margin-top:80px;
        }
        .col{
            .media{
                border-bottom:1px solid rgba(0,0,0,.1);
                padding-bottom:15px;
                height: auto;
                overflow: hidden;
                .media-body{
                    h1{
                        font-size:1.5rem;
                        line-height:2rem;
                        padding-bottom:10px;
                        a{
                            &:hover{
                                text-decoration:none;
                                color:nth($baseColor,2)
                            }
                        }
                    }
                    .icon-list{
                        ul{
                            margin-left:5px;
                            li{
                                float: left;
                                color:nth($baseColor,2);
                                button{
                                    padding:0 4px 0 4px;
                                    margin-top:-8px;
                                    color:nth($baseColor,2);
                                    cursor: pointer;
                                }
                            }
                        }
                    }
                    p{
                        font-size:1rem;
                        line-height:1.5rem;
                        text-indent:2em;
                    }
                }
            }
        }
    }
    .pager{
        margin-top:2rem;
    }
</style>