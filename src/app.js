// app.js
import Vue from 'vue'
import AppPc from './AppPc.vue' // pc根组件
import AppMobile from './AppMobile.vue' // 手机根组件
import { createRouter } from './router/index' 

export function createApp (ssrContext) {
  const isMobile = !!ssrContext.mobile;
  const router = createRouter(isMobile) // 创建全新router实例
  // 创建Vue应用
  const app = new Vue({
    router,
    ssrContext,
    render: h => h(isMobile ? AppMobile : AppPc)
  })
  return {app, router}
}