/**
 * File: f:\vue\jswei.cn\src\components\footer
 * Created Date: 2017-12-18 4:09:41
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2018-01-05 2:43:19
 * -----
 * Copyright (c) 2017 魏巍
 * ------
 * All shall be well and all shall be well and all manner of things shall be well.
 * We're doomed!
 */

<template>
    <div class="footer">
        <hr>
        <div class="copyright">
            <address>
                江苏省苏州市姑苏区<br>
                三元二村47幢<br>
                <abbr title="手机">M:</abbr> 13584866592<br/>
                <abbr title="邮编">C:</abbr> 250000<br/>
                <abbr title="版权所有">©:</abbr> 2017-03-21 魏巍
            </address>
        </div>
       <v-scroll></v-scroll>
    </div>
</template>

<script>
    import vScroll from './scroll.vue'
    export default {
        data(){
            return {}
        },
        components:{
            vScroll
        }
    }
</script>

<style lang="scss" scoped>
    @import "static/style/base";
    .footer{
        height:120px;
        .copyright{
            text-align:right;
            line-height:1.5rem;
            font-size:1rem;
            color:lighten(nth($baseColor,4),50%);
        }
    }
</style>