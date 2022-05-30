const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})


const target = 'http://127.0.0.1:3000'; //proxy 요청을 보낼 서버 주소

module.ecports = {
  devServer:{
    port:8000,
    procy:{
      '^/api':{
        target,
        changeOrigin:true,
      }
    }
  }
}