/**
 * File: f:\vue\jswei.cn\src\store\actions.js
 * Created Date: '2018-01-05 8:57:41
 * Author: 魏巍
 * -----
 * Last Modified: '2018-01-05 10:43:04
 * Modified By: 魏巍
 * -----
 * Copyright (c) 2018 魏巍
 * ------------------------------------
 * Javascript will save your soul!
 */


import * as types from './mutation-type'

export default{
    //显示loading
    showLoading:({ commit })=>{
        commit(types.LOADING_SHOW);
    },
    //不显示loading
    hideLoading:({ commit })=>{
        commit(types.LOADING_HIDE);
    }
}