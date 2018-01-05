/**
 * File: f:\vue\jswei.cn\src\store\mutation.js
 * Created Date: '2018-01-05 8:48:58
 * Author: 魏巍
 * -----
 * Last Modified: '2018-01-05 10:45:53
 * Modified By: 魏巍
 * -----
 * Copyright (c) 2018 魏巍
 * ------------------------------------
 * Javascript will save your soul!
 */


import {
    LOADING_SHOW,
    LOADING_HIDE
} from './mutation-type'

const state={
	loading:{
		show:false,
		text:'正在努力加载中...'
	}
};

const mutations={
	/*loading*/
	[LOADING_SHOW](state){
		console.log(state)
		state.loading.show=true;
	},
	[LOADING_HIDE](state){
		state.loading.show=false;
		state.loading.text='正在努力加载中...';
	}
};

const getters={
	loading(state){
		return state.loading;
	}
};

export default{
	state,
	mutations,
	getters
}