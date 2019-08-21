<template>
<div class="tuijian">
    <h3 class="p3">好店</h3>
     <div class="tuijian-bar">
         <div class="menu-item">
             
             <img src="/images/discovery/haodian.png" alt="">
             
         </div>
         <ul class="menu-list">
             <h3>甜蜜的梦想正在慢慢绽放</h3>
             <p class="dingwei">福田区 · [小跳的烘培教室]</p>
             <p class="jieshao">开一家店几乎是每个女孩的梦想。在一家温暖的小店里，做自己喜欢的事情，看着人来人往的笑容，数着点点滴滴的时光，生活是如此的浪漫，惬意，自在。但是生活中的我们纵使被各种各样的琐事所羁绊，也并不是每一个都有勇气放弃已拥有的一切.....</p>
         </ul>
     </div>
     <div class="see-more">
        <router-link to="/discovery/more">
         <div class="more">
             查看更多
         </div>
         </router-link>
     </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'discovery-goodshop',
    

}
</script>

<style lang="scss" scoped>
.tuijian{
    width:100%;
    padding:0 .266667rem;
    box-sizing:border-box; 
    .p3{
        height:1.333333rem;
         line-height: 1.333333rem;
         color:#fff;
         font-size:.533333rem
    }
    .tuijian-bar{
       .menu-item{
            display:flex;
            justify-content: center;
       }
       .menu-list{
           height:9.52rem;
           width:100%;
           box-sizing: border-box;
           background:#fff;
           border:.026667rem solid #fff;
           border-radius:.106667rem;
           margin-top:-4.826667rem;
           padding:4.826667rem 0 .293333rem .293333rem;
           h3{
               font-size:.373333rem;
           }
           .dingwei{
               font-size:.266667rem;
               margin-top:.266667rem;
               color:#CDCDCD;
           }
           .jieshao{
               width:7.733333rem;
               height:1.68rem;
               font-size:.266667rem;
               color:#8c8c8c;
               margin-top:.266667rem;
           }
       }
        
    }
    .see-more{
        width:100%;
        display: flex;
        justify-content: center;
        .more{
            width:4.453333rem;
            height:1.04rem;
            border:.026667rem solid #fff;
            border-radius: .106667rem;
            background:#fff;
            text-align: center;
            line-height:1.04rem;
            margin-top:.56rem;
        }
    }


}

</style>