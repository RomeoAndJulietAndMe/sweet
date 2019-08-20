<template>
   <div class="box">
        <div class="week">
        <h3 class="title">重庆当地游</h3>
        <p class="week-content">成都，是一座旅游城市，它的景点比赞美它的诗还多，有space club,有play house...</p>
        <img src="/images/handpink/heytea.jpg" alt="">
    </div>
   </div>
</template>

<script>
export default {
    name:'hand-hill'
}
</script>

<style lang="scss" scoped>
.week{
    width: 710px;
    height: 266px;
    background: #FFC4BF;
    position: relative;
    margin-left: 20px;
     
    margin-top: 70px;
    border-radius: 20px;
    .title{
        font-size: 30px;
        color: #ffffff;
        padding-left:50px;
        padding-top:37px;
        font-family: PingFang-SC-Regular;

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
        right: 80px;
         top: 40px;
    }
}

</style>