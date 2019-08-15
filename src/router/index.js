 import Vue from 'vue'
 import Router from 'vue-router'

 import home from './homeRouter'
 import handpink from './handPinkRouter'
 import discovery from './discoveryRouter'
 import mine from './mineRouter'
 import guide from './guideRouter'

 Vue.use(Router);

 const routes = [
      home,
      handpink,
      discovery,
      mine,
      guide,
      {
          path: '/',
          redirect: '/guide'
      }, 
      //为了方便看， /home 看首页;  首页应该放在引导页里面，  /guide/home
      {
        path: '/home',
        component: ()=>import('../pages/login/Login')
      },
      {
          path: '/login',
          component: ()=>import('../pages/login/Login')
      },
      {
          path: '/404',
          component: ()=>import('../pages/common/NotFind/NotFind')
      },
      {
          path: '**',
          redirect: '/404'
      }
     
 ];

 export default new Router({
     mode: 'history',
     routes
 })