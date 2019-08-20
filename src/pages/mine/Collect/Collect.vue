<template>
<div id="collect" class="page">
     
             <app-header isLeft="true" class="edit-head" title="收藏" >       
        </app-header>

        <div v-if="collectionList.length<1" class="no-order">        
                <h5><img src="/images/mine/mine-collect.png" alt="请稍等"></h5>
                <h6>你还没有任何收藏哦！</h6>        
        </div>
    <h1>flsaf</h1>
    <h1>flsaf</h1>
    <h1>flsaf</h1>
    <h1>flsaf</h1>
    <h1>flsaf</h1>
    <h1>flsaf</h1>
  <!--   <h1>flsaf</h1>
    <h1>flsaf</h1>
    <h1>flsaf</h1>
    <h1>flsaf</h1>
    <h1>flsaf</h1>
    <h1>flsaf</h1>
    <h1>flsaf</h1>
    <h1>flsaf</h1>
    <h1>flsaf</h1>
    <h1>flsaf</h1>
    <h1>flsaf</h1>
    <h1>flsaf</h1>
    <h1>flsaf</h1>
    <h1>flsaf</h1>
    <h1>flsaf</h1>
    <h1>flsaf</h1>
    <h1>哈</h1> -->
        
    
</div>
</template>

<script>
import AppHeader from '../../../components/app-header'
import AppScroll from '../../../components/app-scroll' 
import { mapState } from 'vuex'
export default {
    components:{
        [AppHeader.name]:AppHeader,
        [AppScroll.name]:AppScroll,
    },
    computed:{
        ...mapState({
            collectionList:state=>state.mine.collection,
        })
    }

}
</script>

<style lang="scss" scoped>
.page{
    bottom: 0;
    overflow: hidden;
}
#collect{
         position: absolute;
        background: #fff;
        left: 0;top:0;right: 0; 
        z-index: 999;
       
     .edit-head{
        background:rgba(251,180,65,1);
        position: relative;
        z-index: 6;
        color:#fff;        
    }
    .no-order{  
       text-align: center;
       width:100%;
       height:100%;
       margin-top: 45%;   
        h5{
        margin-bottom: 1.066667rem;
        }
        h6{
            
                height:.48rem;
                font-size:.32rem;
                font-family:PingFang;
                font-weight:500;
                color:rgba(102,102,102,1);
                line-height:.48rem;
        } 
    }


}
</style>


<style>

</style>
