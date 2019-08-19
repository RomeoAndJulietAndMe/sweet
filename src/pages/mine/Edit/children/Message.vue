<template>
<div class="message">
<h6>基本信息</h6>
    <ul class="items">
        <li v-for="(item,index) in userInfoData" :key="index" class="item border-bottom">
            <span>{{item.context}}</span>
           <i >{{item.values}}</i>
        </li>
    </ul>
<h6>更多</h6>    
    <div v-for="(item,index) in more" :key="index" >
       <router-link to="item.path" class="item border-bottom">
           <span>{{item.context}}</span>
           <div>
               <i v-if='item.others'>{{item.others}}</i>
                <span class="iconfont icon-qianjin"></span>
           </div>
           
       </router-link>
    </div>
  <div class="login_out">退出登录</div>  
</div>    
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'message',
    data(){
       return { 
          more:[
            {context:'关于我们',path:'/'},              
            {context:'清除缓存',path:'/',others:"113.80MB"},             
          ]
       } 
    },
    computed:{
        ...mapState({
            userInfoData:state=>state.login.userInfoData,
        })
    },
    methods:{
        editAction(value){
            console.log(value)
        }
    }
}
</script>

<style lang="scss" scoped>
.message{
    background: #fff;
    width:100%;
    .login_out{
        text-align: center;
        color: #DF4343;
        font-size: .32rem;
        margin-top: .8rem;
    }
    h6{
        font-size: .293333rem;
       margin-top: .426667rem;
        color:#666;
        padding-left: .4rem;
    }
    .item{ 
        width:100%;
        height: 1.333333rem;
        padding-left: .4rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between; 
        span:first-child{
            font-size: .4rem;
            color:#333;
        }
         i{
            font-size: .32rem;
            color:#999;
             padding-right: .4rem;
        }
        span:last-child{ 
            
            font-size: .426667rem;
             color:#999;
             padding-right: .4rem;
        }
    }
    
}
</style>


<style>

</style>
