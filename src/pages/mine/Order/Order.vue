<template>
<div class="order">
     <app-header isLeft="true" class="edit-head" title="我的订单" >       
    </app-header>

    <div v-if="orderList.length<1" class="no-order">        
            <h5><img src="/images/mine/mine-order.png" alt="请稍等"></h5>
             <h6>你还没有任何订单哦！</h6>        
    </div>

    

</div>
</template>

<script>
import AppHeader from '../../../components/app-header'
import { mapState } from 'vuex'
export default {
    components:{
        [AppHeader.name]:AppHeader,
    },
    computed:{
        ...mapState({
            orderList:state=>state.orders.orderList,
        })
    }

}
</script>

<style lang='scss' scoped>
.order{
         position: absolute;
        background: #fff;
        left: 0;top:0;right: 0;
        bottom:0;
        z-index: 2;
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
