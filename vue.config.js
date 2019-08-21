
 
module.exports = {
    devServer:{
        proxy:{
            '/api':{
                target:"http://fmvew9.natappfree.cc",
                changeOrigin:true,
            },
            '/myapi':{
                target:'http://49.234.28.181:9000',
                changeOrigin:true,
            }
        }
    }
}