import api from '../../request/api'
import {get,post} from '../../request'

export default {
    namespaced:true,
    state:{
       
       /*  userInfo:{
            userName:'请登录',
            sign:'添加个性签名',
            mail:'添加邮箱',
            phoneNumber:'绑定手机号', 
        }, */
         //登录的用户信息
        userInfoData:[
            {context:'用户名',values:'请登录'},
            {context:'签名',values:'添加个性签名'},
            {context:'邮箱',values:'添加邮箱'},
            {context:'手机号',values:'绑定手机号'},
        ],
        isLogin:false,
     },
    
    mutations:{
    
    },
    
    actions:{
        
    }
}