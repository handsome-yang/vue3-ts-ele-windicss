import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require("path")
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src')
      }
    ]
  },
  css: {
    postcss: {
      plugins: [
        require("autoprefixer")({
          overrideBrowserslist: ["last 2 versions", "> 5%"]
        }),
        require("postcss-pxtorem")({
          rootValue: 192, // 换算的基数
          // 忽略转换正则匹配项。插件会转化所有的样式的px。比如引入了三方UI，也会被转化。目前我使用 selectorBlackList字段，来过滤
          //如果个别地方不想转化px。可以简单的使用大写的 PX 或 Px 。
          selectorBlackList: [], // 需要过滤的选择器
          propList: ["*", "!border*"],
          // exclude: /node_modules/
        })
      ]
    }
  }
})
