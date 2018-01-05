/**
 * File: f:\vue\jswei.cn\src\tools\tools.js
 * Created Date: '2017-12-18 11:08:55
 * Author: 魏巍
 * -----
 * Last Modified: '2018-01-05 4:26:34
 * Modified By: 魏巍
 * -----
 * Copyright (c) 2017 魏巍
 * ------------------------------------
 * Javascript will save your soul!
 */
import store from '../store'

export const remove_axios_interceptors=(axios)=>{
    
    var myInterceptor = axios.interceptors.request.use(function() {
        store.dispatch('hideLoading')
    });
    axios.interceptors.request.eject(myInterceptor)
}