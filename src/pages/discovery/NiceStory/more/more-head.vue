<template>
<div class="Di-head">
    <div class="head-bar">
         <router-link class="Di-right" to="/discovery">
       <div class="left-ss">
           <i class="iconfont icon-fanhui"></i>
       </div>
       </router-link>
       <div class="Di-left">
           <h2 class="Di-bar">附近好店</h2>
       </div>
      
       </div>
</div>
</template>

<script>

export default {
       name:'more-head'  
}
</script>

<style lang="scss" scoped>
  .Di-head{
      width:100%;
      .head-bar{
           height:1.173333rem;
           width:100%;
           display: flex;
           padding:.266667rem;
           position:absolute;
           left:0;
           top:0;
           background:#FBB441;
           box-sizing:border-box; 
           align-items: center;
           justify-content: center;
           color:#fff;
           .Di-right{
               position:absolute;
               left:.266667rem;
               i{
                    font-size:0.56667rem;
               }
           }
      }  
  }
</style>