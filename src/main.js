import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import axios from 'axios'
import VueAxios from 'vue-axios'

import Filters from './filters/index'
//vue-router
import VueRouter from 'vue-router'
import routes from './router.config.js'

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(VueRouter)

Object.keys(Filters).forEach(key =>{
  Vue.filter(key, Filters[key])
})

let router = new VueRouter({
  mode:'history',
  scrollBehavior:()=>({x:0}),
  routes,
  linkExactActiveClass:'active'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
