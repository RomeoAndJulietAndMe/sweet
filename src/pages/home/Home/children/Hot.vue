<template>
<div class="hot">
    <!-- <div class="bottom"> -->
    <!-- </div> -->
             <h5>推荐热门城市</h5>
            <ul class="example">
                <li>
                    <img src="/images/home/beijing.png" alt="">
                    <span>北京</span>
                </li>
                <li>
                    <img src="/images/home/chongqing.png" alt="">
                    <span>重庆</span>
                </li>
                <li>
                    <img src="/images/home/chengdu.png" alt="">
                    <span>成都</span>
                </li>
            </ul>
            <h4>小时光带你一起发现周边美好小店~</h4>
            <p>
                这里有最热门的城市无论你想去哪，我们都陪着，提供你所 需要的完美攻略,带你一起体验美好生活
            </p>
            <div class="more">
                <span> 查看更多</span>
            </div>
 
   
</div>
</template>

<script>
export default {
    name:'hot',
}
</script>

<style lang="scss" scoped>
.hot{
    padding: .4rem .4rem .906667rem; 
    box-shadow:0px .106667rem .16rem 1px rgba(55,55,55,0.09);
    border-radius:20px;
    /* .bottom{
        height:4.506667rem;
         background: #FBB441;
         width:100%;
         padding-left: .4rem;
         padding-right: .4rem;
         box-sizing: border-box;
    } */
    background:yellow;
    .more{
        width:100%;
        text-align: center;
        margin-top: .666667rem;
        
        
        span{
            display: inline-block;
            background: #FBB441;
            border-radius: .106667rem;
           padding: .186667rem 2.293333rem;
            font-size: .32rem;
            color: #FFFFFF;
            line-height: .48rem;
            
        }
    }
    p{ 
        font-size: .293333rem;
        color:#999;
        line-height: .48rem;
        margin-top: .533333rem;
        text-align: center;
        padding-left: .56rem;
        padding-right: .56rem;
    }
    h4{
        font-size: .346667rem;
        color:#666;
        text-align: center;
        margin-top: .8rem;
    }
    .example{
        display: flex;
        justify-content: space-around;
        li{
            display: flex;
             flex-direction: column;  
             text-align: center;
             span{
                 margin-top: .426667rem;
                 font-size: .373333rem;
                 color: #333;
             }
            img{
                width: 1.146667rem;
            }
        }
    }
    h5{
        font-size: .426667rem;
        color:#333333;
        font-family: 'PingFang-SC-Medium';
        margin-bottom: .8rem;
    }
}

</style>


<style>

</style>
