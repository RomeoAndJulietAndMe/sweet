<template>
    <div class="page" id="search">
       
            <router-link to="/discovery/Search/SearchPage">
            这是搜索选项
            </router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

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
