<template>
<div class="tuijian">
    <h3 class="p3">推荐</h3>
     <div class="tuijian-bar" ref="menuScroll">
         <ul class="menu-list">
             <li class="menu-item" v-for="item in tuijianData" :key="item.id">
                 <img :src="item.img">
             </li>
         </ul>
     </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'discovery-Nearby',
    data(){
        return{
           tuijianData:[
               {id:1,img:'/images/discovery/banner02.png'},
                {id:2,img:'/images/discovery/banner04.png'},
                 {id:3,img:'/images/discovery/banner05.png'},    
           ] 
        }
    },
     mounted(){
         new BScroll(this.$refs.menuScroll,{
             click:true,
             tap:true,
             scrollX:true,
             scrollY:false 
         })
    }

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
        
        box-sizing:border-box; 
        overflow: hidden;
        .menu-list{  
            display: flex;
            width:200%;
             .menu-item{
                margin-right:.266667rem;
            }
        }
    }


}

</style>