/**
 * File: g:\vue\jswei.cn\src\components\public\qrcode.vue
 * Created Date: 2017-12-02 9:59:20
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2017-12-04 8:38:38
 * -----
 * Copyright (c) 2017 魏巍
 * ------
 * All shall be well and all shall be well and all manner of things shall be well.
 * We're doomed!
 */

<template>
    <div class="qrcanvas">
        <qrcanvas :options="options" ref="myQrcode"></qrcanvas>
    </div>
</template>

<script>
    import Qrcanvas from 'qrcanvas-vue'
    export default {
        props: {
            options:Object
        },
        computed:{
           
        },
        components:{
            Qrcanvas
        },
        created(){
          
        }
    }
</script>

<style scoped>

</style>




