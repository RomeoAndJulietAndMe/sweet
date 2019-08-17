<template>
<div class="header">
     <img class="ding" src="/images/mine/mine-news-icons.png" alt="">
   <div class="h_bg">
       <img src="/images/mine/mine-picture.png" alt="">
       <router-link to="/mine/edit" class="edit">
            <img class="img_head" src="/images/mine/mine-Avatar.png" alt="">
            <p>[随风漂流]</p>
            <h6>点击编辑个人信息</h6>
        </router-link> 
   </div>
   <div v-for="item in list" :key="item.text">
       <router-link to="item.path"
       class="list-item border-bottom">
            <img :src="item.img" alt="">
           <span>{{item.text}}</span>
           <img src="/images/mine/mine-Right click-icons7.png" alt="">
       </router-link>   
   </div>
</div>
</template>

<script>
export default {
    name:'mine-header',
    data(){
        return {
            list:[
                {text:'美好生活PASS卡',path:'/mine/pass',img:'/images/mine/mine-icon.png'},
                {text:'发布小店',path:'/mine/substore',img:'/images/mine/mine-icons1.png'},
                {text:'我的订单',path:'/mine/order',img:'/images/mine/mine-icons2.png'},
                {text:'收藏',path:'/mine/collect',img:'/images/mine/mine-icons3.png'},
                {text:'意见反馈',path:'/mine/advice',img:'/images/mine/mine-icons5.png'},
                {text:'设置',path:'/mine/edit',img:'/images/mine/mine-icons6.png'},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.header{
    width:100%;
    height: 9.413333rem;
    background:rgba(251,180,65,1);
    position:relative;
    .list-item{
        height:2.533333rem;
        display: flex;         
        align-items: center;
         position:relative;        
        span{
            margin-left: .8rem;
        }
        img:nth-of-type(1){
            margin-left:.8rem; 
            width:1.173333rem;
        }
        
        img:nth-of-type(2){           
            position: absolute;
            right:.8rem;
            width:.48rem;
        }
    }
    .border-bottom::before{
        border-color: #AAAAAA;
    }
    .ding{
         
        width:1.333333rem;
        height:1.333333rem;
    }
    .h_bg{
        width:100%;
        height: 7.706667rem;
        position: relative;
        margin-top: 2.48rem;
        .edit{ 
           position: absolute;
           top: -1.2rem;
            left: 7.733333rem;
            
            text-align: center;
            .img_head{             
                 width:4.426667rem;height: 4.426667rem;
            }
            p{
                font-size: .64rem;
                color: #333;
                line-height: 1.706667rem;
            }
            h6{
                font-size: .533333rem;
                color: #999;
                line-height: 1.173333rem;
            }
        }
        img:nth-of-type(1){
            width:100%;
        }
    }
}
</style>
 
