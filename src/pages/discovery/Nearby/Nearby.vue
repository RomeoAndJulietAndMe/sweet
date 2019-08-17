<template>
<div class="tuijian">
    <h3 class="p3">推荐</h3>
     <div class="tuijian-bar" ref="menuScroll">
         <ul class="menu-list">
             <li class="menu-item" v-for="item in tuijianData" :key="item.id">
                 <img :src="item.img" >
                 <h4 class="p4">{{item.name}}</h4>
                 <h4 class="p5">{{item.listPicUrl}}</h4>
                 <i class="p6">{{item.productPlace}}</i>
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
               {id:1,img:'tupian',name:'倾听纸张的故事',listPicUrl:'敬人敬语',productPlace:'666人想去'},
                {id:2,img:'tupian',name:'倾听纸张的故事',listPicUrl:'敬人敬语',productPlace:'666人想去'},
                 {id:3,img:'tupian',name:'倾听纸张的故事',listPicUrl:'敬人敬语',productPlace:'666人想去'},
                  {id:4,img:'tupian',name:'倾听纸张的故事',listPicUrl:'敬人敬语',productPlace:'666人想去'},
                   {id:5,img:'tupian',name:'倾听纸张的故事',listPicUrl:'敬人敬语',productPlace:'666人想去'},
                    {id:6,img:'tupian',name:'倾听纸张的故事',listPicUrl:'敬人敬语',productPlace:'666人想去'}
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
                flex:1;
                background:#fff;
                margin-right:.266667rem;
                border:.026667rem solid #fff;
                border-radius: 0 .266667rem .266667rem .266667rem
            
            }
        }
    }


}

</style>