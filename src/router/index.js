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
          active: 'about',
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
      }, {
        path: '/customer',
        name: 'customer',
        meta: {
          active: 'customer',
          title: {
            zh: '客户及行业 - 香港鸿升集团',
            hk: '客户及行业 - 香港鸿升集团',
            en: '客户及行业 - 香港鸿升集团',
          },
        },
        component: () => import('@/views/customer') // 代码分片
      }, {
        path: '/work',
        name: 'work',
        meta: {
          active: 'work',
          title: {
            zh: '求职 - 香港鸿升集团',
            hk: '求职 - 香港鸿升集团',
            en: '求职 - 香港鸿升集团',
          },
        },
        component: () => import('@/views/work') // 代码分片
      }, {
        path: '/workDetail',
        name: 'workDetail',
        meta: {
          active: 'work',
          title: {
            zh: '求职 - 香港鸿升集团',
            hk: '求职 - 香港鸿升集团',
            en: '求职 - 香港鸿升集团',
          },
        },
        component: () => import('@/views/workDetail') // 代码分片
      }, {
        path: '/contact',
        name: 'contact',
        meta: {
          active: 'contact',
          title: {
            zh: '联络我们 - 香港鸿升集团',
            hk: '联络我们 - 香港鸿升集团',
            en: '联络我们 - 香港鸿升集团',
          },
        },
        component: () => import('@/views/contact') // 代码分片
      },
    ]
  });
}
