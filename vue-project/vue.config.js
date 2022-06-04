const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})


const target = 'http://localhost:8080'; //proxy 요청을 보낼 서버 주소

module.exports = {
  devServer:{
    port:8000,
    procy:{
      '^/api':{
        target,
        changeOrigin:true,
      }
    }
  },
  devServer:{
    proxy:{
      '/oauth2.0':{
        target:'https://nid.naver.com'
      }
    }
  }
}
