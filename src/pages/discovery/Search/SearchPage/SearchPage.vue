<template>
     <div class="Searchpage">
          <div class="jieshao">
               <i class="iconfont icon-star"></i> <span>附近热门小店</span>
          </div>
          <div class="navlist">
               <li></li>
          </div>
     </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
   name:'Searchpage'
}
</script>

<style lang="scss" scoped>
.Searchpage{
        width:100%;
        position: absolute;
        top: 1.173333rem;
        left: 0;
        background:#FBB441;
        .jieshao{
             height:.8rem;
             padding-left:.266667rem; 
             i{
                  display: inline-block;
                  font-size:0.56667rem;
             }
             span{
                font-size:.48rem;
             }   
        }
}

</style>