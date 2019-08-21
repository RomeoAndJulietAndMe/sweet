<template>
<div class="catagory">
    <h6>分类</h6>
    <div class="want">
        <span>TA想去</span>
        <div class="img">
        <img src="/images/home/want_to.png" alt="">
            
        </div>
    </div>

    <p>
        这里有时下最火的小店推荐，快看看你喜欢哪一个<br>
        生活的真谛就是懂得享受生活
    </p>
</div>
</template>

<script>
export default {
    name:'catagory'
}
</script>

<style lang="scss" scoped>
.catagory{
    width:100%;
    // height: 7.733333rem;
    position:relative;
    margin-top: .293333rem;
    box-shadow:0px 0px .666667rem .053333rem rgba(55,55,55,0.19);
    border-radius: .533333rem;
    padding: .48rem .4rem;
    box-sizing: border-box;
    p{
        // background: yellow;
        margin-top: .693333rem;
        font-size: .266667rem;
        color:#999;
        text-align: center;
    }
    .want{
        // background:red;
        position:absolute;
         right:.4rem;
        top: .4rem;
        display: flex;
        flex-direction: column;
        span{
            font-size: .32rem;
            color: #999;
        }
        .img{
            margin-top: .24rem;
            width:1.733333rem;
            height: .666667rem;
            img{
                width:100%;
            }
        }
    }
    h6{
        font-size: .426667rem;
        color: #333;
    }
}
</style>


<style>

</style>
