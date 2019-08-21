<template>
<div id="home" class="page">
   <home-head></home-head>
    <app-scroll class="content">
        <span class="bottom"></span>
         <hot class="hot"></hot>
         <catagory></catagory>
         <guess></guess>
         

    </app-scroll>


    <keep-alive>
      <router-view></router-view>
    </keep-alive>
</div> 
</template>

<script>
import AppScroll from '../../../components/app-scroll' 
import Head from './children/Head' 
import Guess from './children/Guess' 
import Catagory from './children/Catagory'  
import Hot from './children/Hot'  

export default {
  components:{
    [AppScroll.name]:AppScroll,
    [Head.name]:Head,
    [Guess.name]:Guess,
    [Hot.name]:Hot,
    [Catagory.name]:Catagory,
  }
}
</script>

<style lang='scss' scoped>
#home{
  background: #fff;
   position: relative;
   height: 100%;
    .content{
      width:100%;  
      height: 100%;
      box-sizing: border-box;
      padding-left: .4rem;
      padding-right: .4rem;
      position: absolute;
      top:  1.2rem;//40
      .hot{      
        margin-top: .8rem;
        background: #fff;
       
      }
    }
}
</style>


<style>

</style>
