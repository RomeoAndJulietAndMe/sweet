<template>
<div>
    <div  id="mine" class="page">
    

    <app-scroll class="content">
        <mine-header></mine-header> 
  
    </app-scroll>

</div>

<transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
    <router-view></router-view>
  </transition>

<!-- <keep-alive>
         <router-view></router-view>
</keep-alive> -->
</div>
</template>

<script>
import Header from './children/Header' 
import AppScroll from '../../../components/app-scroll' 
import {mapState} from 'vuex'
export default {
    components:{
        [Header.name]:Header, 
        [AppScroll.name]:AppScroll, 
    },
    // computed:{
    //     ...mapState({
    //         MoreData:state=>state.discovery.MoreData,
    //     })
    // },
    // updated(){
    //     console.log(this.MoreData);
    // }

}
</script>

<style lang="scss" scoped>
#mine{
    width: 100%;
   background: #fff;  
   .content{
       width:100%;
       height:100%;
       overflow: hidden;
       position: absolute;

   }
}
</style>
