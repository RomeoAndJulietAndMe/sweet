<template>
    <div id="login" class="page">
        <div class="content">
            <img class="logo" src="/images/login/logo.png" alt="logo">

            <div class="input-wrap">
                <label>手机号：</label>
                <input type="text" v-model="phoneNum" class="phone-num" placeholder="请输入手机号码">
            </div>
            <div class="input-code-wrap">
                <label>验证码：</label>
                <input type="text" class="verify-num" v-model="verifyNum" placeholder="请输入验证码">
                <input type="button" class="get-code" v-on:click="sendSmsCode" v-bind="{'disabled':disabled}" v-model="btnContent"/>
            </div>
            <div class="login-btn">
                登陆
            </div>

            <div class="other-login-ways">
                <p class="title">其他登陆方式</p>
                <ul class="login-item">
                    <li  v-for="item in loginWays" :key="item.id" >
                        <img :src="item.url" alt="">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'login',
    data(){
        return{
            loginWays:[
                {id: 'weixin', name: '微信', url: '/images/login/wechat.png'},
                {id: 'qq', name: 'QQ', url: '/images/login/qq.png'},
                {id: 'weibo', name: '微博', url: '/images/login/sina.png'}
            ],
                phoneNum:"", //手机号
                verifyNum:"", //验证码
                btnContent:"获取验证码", //获取验证码按钮内文字
                time:0, //发送验证码间隔时间
                disabled:false //按钮状态
        }
    },
    

}
</script>

<style lang="scss" scoped>
#login{
    background: rgb(253,181,76);
    position: absolute;
    bottom: 0;
    left:0;
    z-index: 30;

    .content{
        margin: 243px 66px;
        width: 617px;
        height: 847px;
        background: #fff;
        border-radius: 20px;
        .logo{
            width: 177px;
            height: 104px;
            position: absolute;
            top:314px;
            left:287px;
        }
        .input-wrap{
            position: absolute;
            top:538px;
            left:113px;
            height: 30px;
            width: 543px;
            border-bottom: 1px solid #ddd;
            font-size: 24px;
            font-family: PingFang-SC-Bold;
        }
        .input-code-wrap{
            position: absolute;
            top:644px;
            left:114px;
            height: 30px;
            line-height: 30px;
            width: 543px;
            border-bottom: 1px solid #ddd;
            font-size: 24px;
            font-family: PingFang-SC-Bold;
            .get-code{
                margin-left:50px;
                border: 1px solid #ddd;
                width: 113px;
                height: 47px;
                border-radius: 6px;
                color:rgba(153,153,153,1);
            }
        }
        .login-btn{
            position: absolute;
            top:767px;
            left:147px;
            width: 457px;
            height: 74px;
            line-height: 74px;
            text-align: center;
            font-size: 30px;
            background: rgb(253,181,76);
            border-radius: 10px;
        }
        .other-login-ways{
           
            .title{
                position: absolute;
                top:900px;
                left:307px;
                width:119px;
                height:20px;
                font-size:18px;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(153,153,153,1);
                line-height:35px;
            }
            .login-item{
                display: flex;
                margin-right: 100px;
                img{
                    flex: 1;
                    width: 77px;
                    height: 77px;
                    padding-top:40px;
                    position: relative;
                    top:658px;
                    left:77px;
                    margin-left:50px;
                    
                }
            }

        }
        
    }
}
    

</style>
