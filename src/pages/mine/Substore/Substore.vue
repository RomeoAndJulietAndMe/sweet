<template>
<div id="substore" class="page">
    <app-header isLeft="true" title="发布小店" class="edit-head"></app-header>
  <div class="wrap">
        <ul>
        <li class="border-bottom">
            <span>店铺名称</span>
             <input type="text" />
        </li>
        <li class="border-bottom">
            <span>店铺地址</span>
            <input type="text" placeholder="点击输入地址">
        </li>
        <li>
            <span>营业时间</span>
            <input type="text" placeholder="如周一-周日 上午8:00-晚上20:00">          
        </li>
    </ul>

    <div class="about">
        <textarea placeholder="写下关于小店的完美介绍，一定要配上优质的图片哦～ （至少50个字）"></textarea>
        <img src="/images/mine/camera.png" alt="">
    </div>

    <ol>
        <li class="border-bottom">
            <span>店主名字</span>
            <input type="text">
        </li>
        <li class="border-bottom">
            <span>联系电话</span>
            <input type="text" placeholder="常用手机或固话">
        </li>
        <li>
            <span>店主名字</span>
            <input type="text" placeholder="必填">
        </li>
    </ol>
  </div>

    <div class="submit">
        <span>确认提交</span>
    </div>
</div>
</template>

<script>
import AppHeader from '../../../components/app-header'
export default {
  components:{
        [AppHeader.name]:AppHeader,
        
    },
}
</script>

 
<style lang="scss" scoped>
#substore{
    position: absolute;
    background: #fff;
    left: 0;top:0;right: 0;
    bottom:0;
    z-index: 2;  
    box-sizing: border-box;
    .submit{
        width: 100%;
        text-align: center;
        margin-top: .266667rem;
        span{
            font-size: .346667rem;
            line-height: .64rem;
            background: #FBB441;
            display: inline-block;
            width: 5.066667rem;
            height: .72rem;
            text-align: center;
            color:#fff;
            border-radius: .213333rem;
        }
    }
   .wrap{
         padding: .16rem .4rem;
         .about{
            //  background: lightpink;
             width:100%;
             margin-top: .24rem;
             margin-bottom: .266667rem;             
            padding: .746667rem .666667rem 1.306667rem .293333rem;
            position: relative;
            box-sizing: border-box;
            textarea{
                width:100%;
                min-height:3.013333rem;
                border: none;
                line-height: .64rem;
                font-size: .346667rem;
            }
            img{
                position: absolute;
                bottom: .773333rem;
                left: .32rem;
            }
         }
   }
    ul li,ol li{
        padding: 0 .266667rem;
        height: 1.573333rem;
        display: flex;
        align-items: center;   
        box-sizing: border-box;
        justify-content: flex-start;
        span{            
            font-size: .4rem; line-height: .853333rem;
            color: #333;            
            width:2.933333rem;
        }
        input{   
            width:100%;
            color:#999;
            font-size:  .346667rem;
            line-height: .853333rem;
        }
    }
    ul,ol,.about{
        box-shadow:0 .04rem .373333rem 0 rgba(115,115,114,0.2);
        border-radius:.213333rem;
       
    }
   

    .edit-head{
        background:rgba(251,180,65,1);
        position: relative;
        z-index: 6;
        color:#fff;
        
    }
}
</style>


<style>

</style>
