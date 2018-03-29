// app.js
import Vue from 'vue'
import App from './App.vue' // 根组件
import {createRouter} from './router/index' 

// createApp工厂方法
export function createApp (ssrContext) {
  let router = createRouter() // 创建全新router实例
  // 创建Vue应用
  const app = new Vue({
    router,
    ssrContext,
    render: h => h(App)
  })
  return {app, router}
}