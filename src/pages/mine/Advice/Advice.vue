<template>
<div id="advice" class="page">
    <app-header isLeft="true" title="意见反馈" class="edit-head"></app-header>

    <div class="wrap">
         <div class="about">
            <textarea placeholder="您的只言片语，【小时光】随时倾听，为您而更好！"></textarea>
             
        </div>
        <input type="text" placeholder="留下您的邮箱会有惊喜哦！" >
        <h5>小时光商家客服号：xiaoshiguangapp</h5>
        <h5>小时光用户客服号：Enjoy Ourself Life</h5>
        <h4>发送</h4>
       
      
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
 
#advice{
    position: absolute;
    background: #fff;
    left: 0;top:0;right: 0;
    bottom:0;
    z-index: 2;  
    box-sizing: border-box;

    .wrap{
        padding: .4rem .533333rem;
        h4{
            color: #fff;
            background:#FBB441;
            text-align: center;
             font-size: .533333rem;
             height: 1.066667rem;
             line-height: 1.066667rem;
             border-radius: .213333rem;
             margin-top: 1.066667rem;
        }
        h5{
             font-size: .346667rem;
             height: .8rem;
             line-height: .8rem;
              color: #888;  
        }
        .about,input{
            box-shadow:0 .04rem .373333rem 0 rgba(115,115,114,0.2);
              border-radius:.213333rem;
              color: #333;
        }
        input{
            margin-bottom: .533333rem;
         
            width:100%;
            height: 1.066667rem;
            line-height:  1.066667rem;
            padding-left: .293333rem;
            padding-right: .293333rem; 
            box-sizing: border-box;
            font-size: .346667rem;
        }
          .about{
             
             width:100%;
             margin-top: .24rem;
             margin-bottom: .266667rem;             
            padding: .746667rem .666667rem  .746667rem .293333rem;
            position: relative;
            box-sizing: border-box;
            textarea{
                width:100%;
                min-height: 5.333333rem;
                border: none;
                line-height: .64rem;
                font-size: .346667rem;
                color: #333;
            }
            img{
                position: absolute;
                bottom: .773333rem;
                left: .32rem;
            }
         }
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
