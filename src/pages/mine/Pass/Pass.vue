<template>
<div class="pass">
<app-header isLeft="true" class="edit-head" title="美好生活PASS卡" >       
</app-header>

<div class="img-one">
    <img src="/images/mine/mine-pass-banner1.png" alt="">
</div>

    <div v-for="item in passData" :key="item.id"
     >
        <div class="item">
            <div class="item-img">
                <img :src="item.url" alt="">
            </div>
            <div class="item-text">
                <h1>{{item.text1}}</h1>
                <h2>{{item.text2}}</h2>
                <h3>{{item.text3}}</h3>
                <div class="item-text-img">
                    <img :src="item.url2" alt="">
                    <span>{{item.text4}}</span>
                </div>
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
    .item{
      display: flex;
      justify-content: flex-start;
       align-items: center;
        padding-left: .4rem;
        padding-right: .4rem;
        margin-top: .426667rem;
        width:100%;
        height:2.986667rem;
        box-sizing: border-box;
        .item-img{
            
            width:3.546667rem;
            height:100%;
            margin-right: .266667rem;
            img{
                width:100%;
            }
        }
        .item-text{ 
            width:5.653333rem;         
             
           
            h1{
                font-size: .32rem;
                color:#666;
                margin-bottom: .293333rem;
            }
            h2,h3,.item-text-img span{
                font-size: .266667rem;
                color:#999;
                
            }
             h2,h3,.item-text-img{
                 margin-bottom: .266667rem;
             }
            .item-text-img{
                 display: flex;
                 align-items: center;
                span{
                    margin-left: .133333rem;
                }
                img{
                    width:.32rem;
                }
            }
        }
    }
    
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
        z-index: 7;
        color:#fff;        
    }
}
</style>


<style>

</style>
