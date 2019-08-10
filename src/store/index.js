import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import  home from './modules/home'
import  mine from './modules/mine'
import  discovery from './modules/discovery'
import  handpink from './modules/handpink'

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
    handpink
  }
})
