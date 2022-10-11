const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      filename: 'test1.js',
    },
    optimization: {
      splitChunks: false
    },
  },
  filenameHashing: false
})
