 
module.exports = {
    devServer:{
        proxy:{
            '/api':{
                target:"http://azbk23.natappfree.cc",
                changeOrigin:true,
            },
            '/myapi':{
                target:'http://10.36.146.1:9000',
                changeOrigin:true,
            }
        }
    }
}