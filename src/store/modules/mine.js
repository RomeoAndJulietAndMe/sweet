import api from '../../request/api'
import {get,post} from '../../request/index'

export default {
    namespaced: true,
    state:{        
        myMessage :[],//我的消息
        collection:[],//我的收藏
        pass:[],//pass卡
    },
    mutations: {
        setMyMessageData(state,value){
            state.myMessage.push(value);
        },
        setPassData(state,value){
            state.pass=value;
        }
    },
    actions:{
        //我的消息
        async requestMyMessageData(context){
            let data = await get(api.MYMESSAGE_URL);
            console.log('requestMyMessageData......')
            let newData = data.data;
            // console.log(newData);
            context.commit('setMyMessageData',newData);
        },
        //PASS卡
        async requestPassData(context){
            let data = await get(api.PASS_URL);
            let newData = data.data;
            console.log(newData);
            context.commit('setPassData',newData);
        }
    }
}