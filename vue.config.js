
 
module.exports = {
    devServer:{
        proxy:{
            '/api':{
                target:"http://fmvew9.natappfree.cc",
                changeOrigin:true,
            },
            '/myapi':{
                target:'http://10.36.146.240:9000',
                changeOrigin:true,
            }
        }
    }
}