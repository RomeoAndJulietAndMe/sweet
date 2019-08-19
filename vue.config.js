 
module.exports = {
    devServer:{
        proxy:{
            '/api':{
                target:"http://azbk23.natappfree.cc",
                changeOrigin:true,
            },
            '/myapi':{
                target:'http://localhost:9000',
                changeOrigin:true,
            }
        }
    }
}