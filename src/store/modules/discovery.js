import {get,post} from '../../request/index'
export default {
    namespaced: true,
    state:{
         navData:[]
    },
    mutations: {

    },
    actions:{
       async requestDiscoveryNavData(){
            let data = await post(api.DISCOVERY_NAV_URL);
            console.log(data);
        }
    }
}