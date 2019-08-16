<template>
   <div class="nearby">
       <h3 class="nearbyH3">附近</h3>
       <div class="nearby-list">
           <div class="shangceng">
          <h4 class="jieshao">三公里特色小店</h4><span class="gengduo">更多</span>
          </div>
          <div class="rearby-warp">
              <ul class="rearby-menu">
                  <li class="rearby-item" v-for="item in recData" :key="item.id">
                      <img :src="item.img" alt="">
                      <i>{{item.name}}</i>
                  </li>
              </ul>
          </div>
       </div>
   </div>
</template>

<script>
export default {
    name:'discovery-recommend',
    data(){
        return{
            recData:[
                {id:1,img:"jindd",name:"街边安静的绿房子"},
                {id:2,img:"jindd",name:"街边安静的绿房子"}
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
.nearby{
     width:100%;
     padding:0 .266667rem;
     box-sizing:border-box;
     .nearbyH3{
         height:1.333333rem;
         line-height: 1.333333rem;
         color:#fff;
         font-size:0.586667rem;
     }
     .nearby-list{
         background:#fff;
         padding: .266667rem .533333rem;
         .shangceng{
             height:.533333rem;
             display: flex;
             justify-content: space-between;
             color:#8c8c8c;
         }
         .rearby-warp{
             margin-top:.266667rem;
         }
     }
 }

</style>