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
        isLogin:true,
        CurrentId:-1,
     },
    
    mutations:{     
       
        setUserInfoData(state,value){
            state.userInfoData[value[0]].values = value[1];
            console.log(value);            
        }
       
    },
    
    actions:{
          //保存用户信息
        // params: 用户名(userName),签名(sign),邮箱(mail),手机号(phoneNumber),id     
       async requestSaveMessage(context,{userName,sign,mail,phoneNumber,id}){
            await post(api.EDITUSER_URL,{userName,sign,mail,phoneNumber,id});
       }
    }
}