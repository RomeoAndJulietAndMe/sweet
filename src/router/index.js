 import Vue from 'vue'
 import Router from 'vue-router'

 import home from './homeRouter'
 import handpink from './handPinkRouter'
 import discovery from './discoveryRouter'
 import mine from './mineRouter'

 Vue.use(Router);

 const routes = [
     home,
      handpink,
      discovery,
      mine,
      {
          path: '/',
          redirect: '/home'
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