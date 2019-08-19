<template>
   
    <div class="week">
        <h3 class="title">趣周末</h3>
        <p class="week-content">把疲惫打败，让轻松的翅膀越飞越硬，把束缚搞走，让自由的心火越烧越骚，让我们一起周末愉快吧！</p>
        <img src="/images/handpink/heytea.jpg" alt="">
    </div>
   
</template>

<script>
export default {
    name:'hand-week'
}
</script>

<style lang="scss" scoped>
.week{
    width: 710px;
    height: 266px;
    background: #FBB441;
    position: absolute;
    left: 20px;
    top: 156px;
    margin-top: 29px;
    border-radius: 20px;
    .title{
        font-size: 30px;
        color: #ffffff;
        padding-left:50px;
        padding-top:37px; 
        font-family: PingFang-SC-Regular;
        box-sizing: border-box; 
    }
    .week-content{
        width: 329px;
        height: 86px;
        color: #fff;
        font-family: PingFang-SC-Regular;
        padding-left:50px;
        padding-top:20px;
    }
    img{
        width: 180px;
        height: 180px;
        position:absolute;
        left:472px;
        top:35px;
    }
}

</style>