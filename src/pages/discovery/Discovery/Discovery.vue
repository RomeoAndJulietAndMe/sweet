<template>
<div class="discovery">
     <discovery-head></discovery-head>
     <app-scroll class="content" >
        <div class="haodian">
                    <discovery-Nearby></discovery-Nearby>
                    <discovery-recommend></discovery-recommend>
                    <discovery-goodshop></discovery-goodshop>
              
        </div>   
  </app-scroll>
<keep-alive>
   <router-view></router-view>
</keep-alive>    
</div>
</template>

<script>
import axios from 'axios'
import Header from './header'
import Nearby from '../Nearby/Nearby'
import Recommend from '../NiceStory/NiceStory'
import GoodShop from '../goodshop/goodshop'
import {mapState} from 'vuex'

import appScroll from '../../../components/app-scroll'
import appSwiper from '../../../components/app-swiper'
import appSswiperItem from '../../../components/app-swiper-item'
export default {
    components:{
        [Header.name]: Header,
        [Nearby.name]:Nearby,
        [Recommend.name]:Recommend,
        [GoodShop.name]:GoodShop ,
        [appScroll.name] :appScroll,
        [appSwiper.name] :appSwiper,
        [appSswiperItem.name] :appSswiperItem,
        
    },
    methods:{
          getdiscoverydata(){
                 this.$store.dispatch('discovery/requestDiscoveryNavData')
          }
    },
    created(){
         this.getdiscoverydata();
    }

}
</script>

<style lang="scss" scoped>
.discovery{

     .content{
        width:100%;
        position: absolute;
        top: 1.173333rem;
        left:0;
        bottom: 1.306667rem;
        background:#FBB441;
        overflow: hidden;
     }
}

</style>