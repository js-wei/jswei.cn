/**
 * File: f:\vue\jswei.cn\src\store\store.js
 * Created Date: '2018-01-05 8:56:44
 * Author: 魏巍
 * -----
 * Last Modified: '2018-01-05 10:59:46
 * Modified By: 魏巍
 * -----
 * Copyright (c) 2018 魏巍
 * ------------------------------------
 * Javascript will save your soul!
 */


import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		mutations
	},
	actions
});
