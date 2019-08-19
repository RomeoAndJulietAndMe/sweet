<template>
<div class="myMessage">
    <app-header isLeft="true" title="我的消息" class="edit-head"></app-header>

   
        <ul class="items"
        v-for="(item,index) in myMessage[0]" :key="index">
            <li class="item border-bottom">
                <div class="item-one"><img :src="item.url" alt=""></div>
                <div class="item-two">
                    <h6>
                       <span>{{item.title.official?item.title.official:item.title.comment}}</span>
                        <span v-if="item.title.official">官方</span>
                    </h6>
                    <h5>{{item.detail.detail1?item.detail.detail1:item.detail.detail2}}</h5>
                </div>
            </li>
        </ul>
    
    
</div>
</template>

<script>
import Head from '../../../components/app-header';
import {mapState} from 'vuex';
export default {
    components:{
        [Head.name] : Head,
    },
    computed:{
        ...mapState({
            myMessage:state=>state.mine.myMessage,
        })
    },
    created(){
        console.log('requestMyMessageData开始请求')
        this.$store.dispatch('mine/requestMyMessageData');
        console.log(this.$store.state.mine.myMessage);
    }
}
</script>

<style lang="scss" scoped>
.myMessage{
    position: absolute;
    background: #fff;
    left: 0;top:0;right: 0;
    bottom:0;
    z-index: 2;
    .items{
        .item{
            height: 1.493333rem;
            display: flex;
            align-items: center;
            padding-left: .666667rem;
            .item-two{

                h6{
                    font-size: .4rem;
                    color: #333;
                     
                    span:nth-of-type(2){
                         font-size: .266667rem;
                         color:#fff;
                         padding: 0 .106667rem .053333rem;
                         background: #000;
                         border-radius: .106667rem;
                         margin-left: .213333rem;
                    }
                }
                h5{
                    font-size: .266667rem;
                    color:#999;
                    margin-top: .08rem; 
                }
            }
            .item-one{
                width:.693333rem;
                height:.693333rem; 
                padding-right: .266667rem;
                img{
                    width:100%;
                }
            }
        }
        .border-bottom::before{
            color:#aaa;
        }
    }
    .edit-head{
        background:rgba(251,180,65,1);
        position: relative;
        z-index: 6;
        color:#fff;
        
    }
}

</style>


<style >

</style>
