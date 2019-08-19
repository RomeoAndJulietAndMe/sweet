<template>
<div class="pass">
<app-header isLeft="true" class="edit-head" title="美好生活PASS卡" >       
</app-header>

<div class="img-one">
    <img src="/images/mine/mine-pass-banner1.png" alt="">
</div>

    <div v-for="item in passData" :key="item.id"
    class="items">
        <div>
            <img :src="item.url" alt="">
        </div>
        <div>
            <h1>{{item.text1}}</h1>
            <h2>{{item.text2}}</h2>
            <h3>{{item.text3}}</h3>
            <div>
                <img :src="item.url2" alt="">
                <span>{{item.text4}}</span>
            </div>
        </div>
    </div>

<div class="vip">
     199元开通会员 
</div>




</div>  
</template>

<script>
import AppHeader from '../../../components/app-header'
import {mapState} from 'vuex' 
export default {
     components:{
        [AppHeader.name]:AppHeader,
    },
    computed:{
        ...mapState({
            passData:state=>state.mine.pass,
        })
    },
    created(){
        console.log(this.$store.dispatch);
        this.$store.dispatch('mine/requestPassData');
    }
}
</script>

<style lang="scss" scoped>
.pass{
       position: absolute;
        background: #fff;
        left: 0;top:0;right: 0;      
        z-index: 2;
        padding-bottom: 1.066667rem;
    .vip{
        background:rgba(251,180,65,1);
        height: 1.066667rem;
        width:100%;
        line-height: 1.066667rem;
        color:#fff;
        text-align: center;
        font-size: .453333rem;
        position:fixed;
        bottom:0;
        z-index: 3;
    }
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
