import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import axios from 'axios'
import VueAxios from 'vue-axios'
import "animate.css/animate.min.css"
import Filters from './filters/index'
//vue-router
import VueRouter from 'vue-router'
import routes from './router.config.js'
import _ from 'lodash'
//font-icon
import 'vue-awesome-for-toolbar/icons'
import Icon from 'vue-awesome-for-toolbar/components/Icon.vue'
Vue.component('icon', Icon)
//store
import Bus from './store/bus'
//tools
import Tools from './tools/index'
import MetaInfo from 'vue-meta-info'

Vue.use(MetaInfo)
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(VueRouter)

//注册全局过滤器
Object.keys(Filters).forEach(key =>{
  Vue.filter(key, Filters[key])
})

//注册全局方法
Object.keys(Tools).forEach(key =>{
  Vue.prototype[key]=Tools[key];
})

axios.defaults.baseURL = 'http://www.n.jswei.cn/';
//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  Bus.$emit('loading',true);
  return config;
}, function (error) {
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) { //配置请求回来的信息
  Bus.$emit('loading',false);
  return response;
}, function (error) {
  return Promise.reject(error);
});

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
