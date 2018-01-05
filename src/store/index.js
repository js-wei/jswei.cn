/**
 * File: f:\vue\jswei.cn\src\store\store.js
 * Created Date: '2018-01-05 8:56:44
 * Author: 魏巍
 * -----
 * Last Modified: '2018-01-05 4:06:12
 * Modified By: 魏巍
 * -----
 * Copyright (c) 2018 魏巍
 * ------------------------------------
 * Javascript will save your soul!
 */


import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//存储状态
const state = {
    loading:{
        show:false,
        text:''
    },
}
//事件名称
const mutations = {
    LOADING (state, p) {
		state.loading.show = p.show
		state.loading.text = p.text
    }
}
//方法
const actions = {
    // for mobile nav
    showLoading ({ commit },params={show:true,text:'正在努力加载中...'}) {
		console.log(params)
        commit('LOADING',params)
    },
    hideLoading ({ commit },params={show:false,text:'正在努力加载中...'}) {
        commit('LOADING', params)
    }
}

const getters = {
    loading: state => state.loading
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store