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

import 'vue-awesome-for-toolbar/icons'
import Icon from 'vue-awesome-for-toolbar/components/Icon.vue'

// globally (in your main .js file)
Vue.component('icon', Icon)

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
