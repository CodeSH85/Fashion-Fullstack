const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
<<<<<<< HEAD
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:3000/',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // }
=======
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
>>>>>>> ed0714ed322c074154b67777f4bd9e7d2f64d3ca
})