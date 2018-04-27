// entry.client.js 
import Vue from 'vue'
import { createApp } from './app'

const { app, router } = createApp()

router.onReady(() => {
  // 将Vue实例挂载到dom中，完成浏览器端应用启动
  app.$mount('#app')
})
