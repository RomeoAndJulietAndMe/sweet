<template>
<div class="header">
    <div class="ding">
        <router-link  to="/mine/myMessage">
             <img src="/images/mine/mine-news-icons.png" alt="">
             <span></span>
        </router-link>
    </div>
   <div class="h_bg">
       <img src="/images/mine/mine-picture.png" alt="">
       <router-link to="/mine/edit" class="edit">
            <img class="img_head" src="/images/mine/mine-Avatar.png" alt="">
            <p>[随风漂流]</p>
            <h6>点击编辑个人信息</h6>
        </router-link> 
   </div>
   <div v-for="item in list" :key="item.text">
       <router-link :to=item.path
       class="list-item border-bottom">
           <img :src="item.img" alt="">
           <span>{{item.text}}</span>
           <img src="/images/mine/mine-Right click-icons7.png" alt="">
       </router-link>   
   </div>
 <!--   <keep-alive>
       <router-view></router-view>
   </keep-alive> -->
</div>
</template>

<script>
export default {
    name:'mine-header',
    data(){
        return {
            list:[
                {text:'美好生活PASS卡',path:'/mine/pass',img:'/images/mine/mine-icon.png'},
                {text:'发布小店',path:'/mine/myMessage',img:'/images/mine/mine-icons1.png'},
                {text:'我的订单',path:'/mine/order',img:'/images/mine/mine-icons2.png'},
                {text:'收藏',path:'/mine/collect',img:'/images/mine/mine-icons3.png'},
                {text:'意见反馈',path:'/mine/myMessage',img:'/images/mine/mine-icons5.png'},
                {text:'设置',path:'/mine/edit',img:'/images/mine/mine-icons6.png'},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.header{
    width:100%;
    height: 4.186667rem;
    background:rgba(251,180,65,1);
    position:relative;
    .ding{
    text-align: right;   
    padding-right: .4rem;
    padding-top: .4rem;
    box-sizing: border-box; 
    position: relative; 
        span{
            display: inline-block;
            width:.213333rem;
            height:.213333rem;
            background: red;
            border-radius: 50%;
            position: absolute;
            right:.48rem;
            top:.453333rem;
        } 
    }
      .list-item{
        height:1.333333rem;
        display: flex;         
        align-items: center;
        position:relative;        
        span{
            margin-left: .266667rem;
            color: #333;
            font-size: .32rem;

        }
        img:nth-of-type(1){
            margin-left:.4rem; 
            
        }
        
        img:nth-of-type(2){           
            position: absolute;
            right: .4rem;
        }
    }
    .border-bottom::before{
        border-color: #AAAAAA;
    } 
    .h_bg{
        width:100%; 
        position: relative;  
        margin-top: 1.04rem;
        .edit{ 
           position: absolute;
           top: -45px;
            left: 290px; 
            text-align: center;        p{
                font-size: 24px;
                color: #333;
                line-height: 64px;
            }
            h6{
                font-size: 20px;
                color: #999;
                line-height: 44px;
            }
        }
       
    } 
}
</style>
 
