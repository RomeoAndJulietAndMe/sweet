<template>
<div  id="mine" class="page">
    <app-scroll class="content">
        <mine-header></mine-header> 

    </app-scroll>
     
</div>
</template>

<script>
import Header from './children/Header' 
export default {
    components:{
        [Header.name]:Header, 
    }
}
</script>

<style lang="scss" scoped>
#mine{
    width: 100%;
   background: #fff;  
   .content{
       width:100%;
       height:100%;
       overflow: hidden;
       position: absolute;
       
   }
}
</style>
