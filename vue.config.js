const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  outputDir: './build',
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://10.57.69.9',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
})
