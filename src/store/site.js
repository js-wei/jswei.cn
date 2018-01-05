import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//存储状态
const state = {
    loading:{
        show:false,
        text:''
    }
}
//事件名称
const mutations = {
    LOADING (state, active) {
        state.loading.show = active
    }
}
//方法
const actions = {
    // for mobile nav
    showLoading ({ commit }) {
        commit('LOADING', true)
    },
    hidenLoading ({ commit }) {
        commit('LOADING', false)
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