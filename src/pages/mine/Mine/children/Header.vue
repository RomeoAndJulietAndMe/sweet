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
       class="list-item">
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
    height: 353px;
    background:rgba(251,180,65,1);
    position:relative;
    
    .ding{
        
        margin-left: 680px;
        margin-top: 59px;
        width:50px;
        height:50px;
    }
    .h_bg{
        width:100%;
        height: 289px;
        position: relative;
        margin-top: 93px; 
        .edit{ 
           position: absolute;
           top: -45px;
            left: 290px;
            
            text-align: center;
            .img_head{             
                 width:166px;height: 166px;
            }
            p{
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
        img{
            height: 100%;
        }
    }
}
</style>
 
