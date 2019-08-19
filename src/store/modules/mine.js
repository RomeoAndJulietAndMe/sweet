import api from '../../request/api'
import {get,post} from '../../request/index'

export default {
    namespaced: true,
    state:{
        myMessage :[],
    },
    mutations: {
        setMyMessageData(state,value){
            state.myMessage.push(value);
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
        }
    }
}