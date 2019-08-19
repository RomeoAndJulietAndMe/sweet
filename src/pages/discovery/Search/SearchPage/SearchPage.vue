<template>
     <div class="Searchpage">
          <div class="jieshao">
               <i class="iconfont icon-star"></i> <span>附近热门小店</span>
          </div>
          <div class="navlist">
               <li class="navlist-item" v-for="item in navData" :key="item.id">{{item.name}}</li>
          </div>
     </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
   name:'Searchpage',
   computed:{
        ...mapState({
             navData:state=>state.discovery.navData
        })
   }
}
</script>

<style lang="scss" scoped>
.Searchpage{
        width:100%;
        position: absolute;
        top: 1.173333rem;
        left: 0;
        background:#999999;
        .jieshao{
             height:.8rem;
             padding:0 .266667rem; 
             line-height:.8rem;
             i{
                  display: inline-block;
                  font-size:0.56667rem;
             }
             span{
                font-size:.48rem;
                margin-left:.266667rem;
             }   
        }
        .navlist{
              padding:0 .266667rem; 
              display: flex;
              flex-wrap: wrap;
              .navlist-item{
                   margin-right:1.066667rem;
                   margin-bottom:.266667rem;

                   list-style: none;
                   height:.666667rem;
                   border:.026667rem solid #fff;
                   border-radius: .266667rem;
                   line-height:.666667rem;
                   text-align: center;
                   background:#fff;
                   
              }
        }
}

</style>