import {get} from '../../request/index'
import api from '../../request/api'
export default {
    namespaced: true,
    state:{
         navData:[]
    },
    mutations: {
        setDiscoveryNavData(state, params){
            state.navData = params;
        },
    },
    actions:{
       async requestDiscoveryNavData(context){ 
           
            let data = await get(api.DISCOVERY_NAV_URL);
            let newData = data.data.map(({id,name,}) =>({id,name}));
            console.log(newData);
            context.commit('setDiscoveryNavData',newData);
        }
    }
}