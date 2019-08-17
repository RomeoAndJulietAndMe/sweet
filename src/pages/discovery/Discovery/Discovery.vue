<template>

<div class="discovery">
   <discovery-head></discovery-head>
   <div class="haodian">
       <discovery-Nearby></discovery-Nearby>
       <discovery-recommend></discovery-recommend>
   </div>   
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
import {mapState} from 'vuex'
export default {
    components:{
        [Header.name]: Header,
        [Nearby.name]:Nearby,
        [Recommend.name]:Recommend
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
     .haodian{
        width:100%;
        position: absolute;
        top: 1.173333rem;
        left: 0;
        bottom: 1.306667rem;
        background:#FBB441;
     }
}

</style>