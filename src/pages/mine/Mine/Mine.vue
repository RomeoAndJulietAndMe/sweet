<template>
<div  id="mine" class="page">
    <mine-header></mine-header>
    
     
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
   background: #fff; 
}
</style>
