import {get} from '../../request/index'
import api from '../../request/api'
export default {
    namespaced: true,
    state:{
         navData:[]
    },
    mutations: {
          
    },
    actions:{
       async requestDiscoveryNavData(context){
           console.log('requestDiscoveryNavData...')
            let data = await get(api.DISCOVERY_NAV_URL);
            console.log(data);
        }
    }
}