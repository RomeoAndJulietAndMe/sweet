<template>
<div class="headerUp">
    <ul>
        <li class="border-bottom"><img src="/images/mine/mine-headUp.png" alt=""></li>
        <li><span>拍照</span></li>
        <li class="border-top"><span>相册</span></li>
        <li class="border-top"><span @click="cancleAction">取消</span></li>
    </ul>
</div>
</template>

<script>
export default {
    methods:{
        cancleAction(){
            // console.log(this.$router.history);
            this.$router.go(-1);
        }
    }
}
</script>


<style lang="scss" scoped>
.headerUp{
    background: rgba(0, 0, 0, .5);
    position: absolute;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    z-index: 7;
    display: flex;
    justify-content: center;
    align-items: center;
    ul{
        background: #fff;
        text-align: center;
        text-align: center;
        
         width:6.666667rem;
        .border-bottom::before{
            border-bottom-style: dashed;
        }
         li:nth-of-type(1){
             height: 2.72rem;
             position: relative; 
             img{
                 position: absolute;
                left: -.613333rem;
                top: -.106667rem;
             }  
         }  
         li{

             span{
                font-size: .4rem; 
                color: #333;
                height: 1.6rem;
                line-height: 1.6rem;
             }
         }
     }
}
</style>

<style>

</style>
