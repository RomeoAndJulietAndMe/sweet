<template>
    <div class="page" id="search">

        <searchhd></searchhd>
        <Searchpage></Searchpage>


        <router-view></router-view>
    </div>
</template>

<script>
import Searchhd from '../Search/Searchhd'
import Searchpage from '../Search/SearchPage/SearchPage'
import {mapState} from 'vuex'
export default {
    components:{
        [Searchhd.name]:Searchhd,
        [Searchpage.name]:Searchpage,
    },
    
}
</script>

<style lang="scss" scoped>
#search{
    background:#999999;
    width:100%;
    position: absolute;
    bottom:0;
    top:0;
    z-index: 11;
}
</style>
