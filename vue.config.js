const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/idaproject-test/',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /index.ts/,
          use: 'ts-loader',
        },
      ],
    },
  },
  css: {
    loaderOptions: {
      sass: { additionalData: '@import "@/assets/styles/_variables.scss";' },
    },
  },
})
