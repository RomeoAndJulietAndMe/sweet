import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import  home from './modules/home'
import  mine from './modules/mine'
import  discovery from './modules/discovery'
import  handpink from './modules/handpink'

import  login from './mode/login'
import  orders from './mode/orders'

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules:{
    home,
    mine,
    discovery,
    handpink,
    
    login,
    orders,
  }
})
