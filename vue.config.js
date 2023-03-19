const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "/vue-pagination-component",
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "vue-pagination-component": "dist/VuePaginationComponent.common.js",
      },
    },
  },
});
