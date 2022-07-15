const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
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
