<template>
<div class="order">
     <app-header isLeft="true" class="edit-head" title="我的订单" >       
    </app-header>
    <h1>dfslf</h1>
</div>
</template>

<script>
import AppHeader from '../../../components/app-header'

export default {
    components:{
        [AppHeader.name]:AppHeader,
    },
    
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
}
</style>


<style>

</style>
