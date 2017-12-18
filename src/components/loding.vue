/**
 * File: f:\vue\jswei.cn\src\components\loding.vue
 * Created Date: 2017-12-18 3:12:45
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2017-12-18 3:26:50
 * -----
 * Copyright (c) 2017 魏巍
 * ------
 * All shall be well and all shall be well and all manner of things shall be well.
 * We're doomed!
 */

<template>
    <div class="loading">
        <vue-alert-loading 
            :visible="visible"
            :title="loading.title"
            :titleColor="loading.titleColor"
            :text="loading.text"
            :loadingDivWidth="loading.loadingDivWidth"
            :direction="loading.direction"
            :originSize="loading.originSize"
            :originWidth="loading.originWidth"
            :originHeight="loading.originHeight"
            :loadingBg="loading.loadingBg"
            :loadingMaskBg="loading.loadingMaskBg"/>
    </div>
</template>

<script>
    import VueAlertLoading from 'vue-alert-loading';
    export default {
        props: {
            visible: {
                type: Boolean,
                default:true
            },
            loading:{
                type:Object,
                default:{
                    title:'',
                    titleColor:'',
                    text:'请稍等!',
                    direction:'col',
                    loadingDivWidth:'260',
                    originSize:'6',
                    originWidth:'6',
                    originHeight:'6',
                    loadingBg:'',
                    loadingMaskBg:'',
                }
            }
        },
        components: {
            VueAlertLoading
        }
    }
</script>

<style scoped>

</style>