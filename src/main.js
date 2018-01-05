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

//tools
import Tools from './tools/index'
import MetaInfo from 'vue-meta-info'
import Share from 'vue-social-share'
//vuex
import store from './store'

Vue.use(MetaInfo)
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(Share)
//注册全局组件
Vue.component('remote',{
  render(createElement) {
      if(this.src.indexOf('.css')>-1){
          return createElement('link', { attrs: { type: 'text/css', src: this.src }});
      }else{
          return createElement('script', { attrs: { type: 'text/javascript', src: this.src }});
      }
  },
  props: {
      src: { type: String, required: true },
  }
});

//注册全局过滤器
Object.keys(Filters).forEach(key =>{
  Vue.filter(key, Filters[key])
})

//注册全局方法
Object.keys(Tools).forEach(key =>{
  Vue.prototype[key]=Tools[key];
})

axios.defaults.baseURL = 'http://www.n.jswei.cn/';
axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
 
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
  store,
  render: h => h(App)
})
