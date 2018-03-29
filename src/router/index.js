// createRouter
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// createRouter工厂方法
export function createRouter () {
  return new Router({
    mode: 'history', // 注意这里要使用history模式，因为hash不会发送到服务端
    fallback: false,
    routes: [
      {
        path: '/',
        name: 'index',
        meta: {
          active: 'index',
          title: {
            zh: '首页 - 香港鸿升集团',
            hk: '首页 - 香港鸿升集团',
            en: '首页 - 香港鸿升集团',
          },
        },
        component: () => import('@/views/index') // 代码分片
      }, {
        path: '/about',
        name: 'about',
        meta: {
          active: 'about',
          title: {
            zh: '关于鸿升 - 香港鸿升集团',
            hk: '关于鸿升 - 香港鸿升集团',
            en: '关于鸿升 - 香港鸿升集团',
          },
        },
        component: () => import('@/views/about') // 代码分片
      }, {
        path: '/advantage',
        name: 'advantage',
        meta: {
          active: 'advantage',
          title: {
            zh: '我们的优势 - 香港鸿升集团',
            hk: '我们的优势 - 香港鸿升集团',
            en: '我们的优势 - 香港鸿升集团',
          },
        },
        component: () => import('@/views/advantage') // 代码分片
      }, {
        path: '/product',
        name: 'product',
        meta: {
          active: 'product',
          title: {
            zh: '产品及服务 - 香港鸿升集团',
            hk: '产品及服务 - 香港鸿升集团',
            en: '产品及服务 - 香港鸿升集团',
          },
        },
        component: () => import('@/views/product') // 代码分片
      },
      
    ]
  })
}