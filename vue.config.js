const { defineConfig } = require('@vue/cli-service');
const path = require("path");

module.exports = defineConfig({
  outputDir: path.resolve(__dirname, "./public/dist"),
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
