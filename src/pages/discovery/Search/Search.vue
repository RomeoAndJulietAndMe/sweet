<template>
    <div class="page" id="search">

        <searchhd></searchhd>
            <!-- <router-link to="/discovery/Search/SearchPage">
            </router-link> -->
        <router-view></router-view>
    </div>
</template>

<script>
import Searchhd from '../Search/Searchhd'
import {mapState} from 'vuex'
export default {
    components:{
        [Searchhd.name]:Searchhd,
    },
    
}
</script>

<style>
#search{
    background:#666;
    width:100%;
    position: absolute;
    bottom:0;
    top:0;
    z-index: 11;
}
</style>
