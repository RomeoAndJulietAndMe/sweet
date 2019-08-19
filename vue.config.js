import {api} from './request/api'
module.exports = {
    devServer:{
        proxy:{
            '/api':{
                target:api.HOST,
                changeOrigin:true,
                wg:true
            }
        }
    }
}