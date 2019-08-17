<template>
<div class="Di-head">
    <div class="head-bar">
       <div class="Di-left">
           <h2 class="Di-bar">探店-深圳</h2>
       </div>
       <router-link class="Di-right" to="/discovery/Search">
       <i class="left-ss" >放大镜</i>
       </router-link>
       </div>
</div>
</template>

<script>

export default {
    name:'discovery-head',
    
    
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
               right:.266667rem;

           }
      }  
  }
</style>
