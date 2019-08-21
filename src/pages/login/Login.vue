<template>
    <div id="login" class="page">
        <div class="content">
            <img class="logo" src="/images/login/logo.png" alt="logo">

            <div class="input-wrap">
                <label>手机号：</label>
                <input type="text" class="input phone" placeholder="请输入手机号码"
                :value="phone"
                ref="phone" v-on:change="changePhone" v-on:input="changePhone">
            </div>
            <div class="input-code-wrap">
                <label>验证码：</label>
                <input type="number" placeholder="请输入验证码" class="input code"
                :value="code"
                ref="code" v-on:change="changeCode" v-on:input="changeCode">
                <input type="button" class="send"  v-model="btnContent"  @click="loginCode"/>
            </div>
            <div class="login-btn" @click="login">
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
                phone: '',  //输入框中的手机号
                code: '',  //输入框中的验证码
                btnContent:"获取验证码", //获取验证码按钮内文字
                timingBoard: 60,  //倒计时数
                isRecede: false,  //判断正在倒计时阶段，不允许用户再点击
                timer: null,
        }
    },
    methods: {
            //获取验证码
            async loginCode() {
                if (this.isRecede) {
                    this.error('有用户在夏季八点')
                }
                console.log('start login')
                let result = await (this.phone)
                // let result = {code:1};
                console.log('验证码接口 result=', result)
                if (result.code == 1) {
                    //成功登录
                    console.log('请在手机短信查收验证码')
                    this.isRecede = true
                    //开始获取验证码倒计时
                    this.recede()
                } else {
                    //登录失败
                    console.log('获取验证码失败')
                }
            },
            //开始登录
            async login() {
                if (!this.phone) {
                    this.error('请填写手机号');
                }
                if (!this.code) {
                    this.error('请填写验证码');
                }
                if (!/^1[345789]\d{9}$/.test(this.phone)) {
                    this.error('请检查手机号是否正确');
                }
                if (!/^[0-9]{4}$/.test(this.code)) {
                    this.error('验证码不正确')
                }
                let result = await (this.phone, this.code)
                console.log(result)
                if (result.code == 1) {
                    console.log('登录成功')
                } else {
                    this.code = ''
                    console.log('登录失败')
                }
            },
            //获取验证码倒计时定时器
            recede() {
                this.timer = setInterval(() => {
                    console.log('开始定时器，', this.timingBoard)
                    this.codeText = `${this.timingBoard}s`
                    this.timingBoard--
                    if (this.timingBoard < 0) {
                        this.isRecede = false
                        this.timingBoard = 60
                        this.codeText = '获取验证码'
                        clearInterval(this.timer)
                    }
                }, 1000)
            },
            //稽查手机号输入框的长度
            changePhone() {
                if (this.$refs.phone.value.length <= 11) {
                    this.phone = this.$refs.phone.value
                } else {
                    this.$refs.phone.value = this.phone
                }
            },
            //稽查验证码输入框的长度
            changeCode() {
                if (this.$refs.code.value.length <= 4) {
                    this.code = this.$refs.code.value
                } else {
                    this.$refs.code.value = this.code
                }
            },
            error(msg) {
                throw new Error(msg)
            }
        },
        destroyed() {
            this.phone = '';
            this.timingBoard = 60;
            clearInterval(this.timer);
        }
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
            .send{
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
