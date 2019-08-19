<template>
<div class="guide">
    <h1>引导页</h1>
    <router-link to="/guide/jump" class="jump">跳过</router-link>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.guide{
    position: relative;
    .jump{
        position: absolute;
        right: .4rem;
        top:.4rem;
        font-size: .426667rem;
        color: #333;
    }
}
</style>


<style>

</style>
