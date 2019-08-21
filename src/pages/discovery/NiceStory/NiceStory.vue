<template>
   <div class="nearby">
       <h3 class="nearbyH3">附近</h3>
       <div class="nearby-list">
           <div class="shangceng">
          <h4 class="jieshao">三公里特色小店</h4>
          <router-link to="/discovery/more">
          <span class="gengduo">更多</span>
          </router-link>
          </div>
          <div class="rearby-warp">
              <ul class="rearby-menu">
                  <li class="rearby-item" v-for="item in recData" :key="item.id">
                      <router-link to="/discovery/more">
                      <img :src="item.img" alt="" >
                      <p>{{item.name}}</p>
                      </router-link>
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
                {id:1,name:"在水塔上造一个...",img:'/images/discovery/fujin1.png'},
                {id:2,name:"街边安静的绿房子",img:'/images/discovery/fujin2.png'}
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
         border:.026667rem solid #fff;
         border-radius: .266667rem;
         .shangceng{
             height:.533333rem;
             display: flex;
             justify-content: space-between;
             color:#8c8c8c;
             font-size:.426667rem;
         }
         .rearby-warp{
             margin-top:.266667rem;
             .rearby-menu{
                 display: flex;
                 justify-content: space-between;
                 .rearby-item{
                    p{
                        margin-top:.266667rem;
                        margin-left:.533333rem;
                        font-size:.346667rem;
                    }    
                 }
             }
         }
     }
 }

</style>