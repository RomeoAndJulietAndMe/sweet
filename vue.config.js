// import {api} from './request/api'
module.exports = {
    devServer:{
        proxy:{
            '/api':{
                target:'http://azbk23.natappfree.cc',
                changeOrigin:true,
                wg:true
            }
        }
    }
}