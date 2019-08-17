module.exports = {
    publicPath: './',//默认值为： /
    devServer: {
      proxy: {
          '/api': {
              target: "http://863t9n.natappfree.cc",
              changeOrigin: true
          }
      }
    }
}