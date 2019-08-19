
 
module.exports = {
    devServer:{
        proxy:{
            '/api':{
                target:"http://w26jw4.natappfree.cc",
                changeOrigin:true,
            },
            '/myapi':{
                target:'http://localhost:9000',
                changeOrigin:true,
            }
        }
    }
}