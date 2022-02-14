/*
 * @Description:
 * @Author: jrucker
 * @Date: 2021/11/08 11:32:52
 * @LastEditors: jrucker
 * @LastEditTime: 2022/02/10 10:27:08
 */

import { RouteRecordRaw } from 'vue-router'
// import Layout from '@/layout/index.vue'

const systemRouter: Array<RouteRecordRaw> = [
  {
    path: '/system/user',
    component: () => import('@/views/system/user/index.vue'),
    name: 'user',
    meta: {
      title: '用户管理',
      icon: '#iconquanxian'
    }
  },
  {
    path: '/system/role',
    component: () => import('@/views/system/role/index.vue'),
    name: 'role',
    meta: {
      title: '角色管理',
      icon: '#iconquanxian'
    }
  },
  {
    path: '/system/menu',
    component: () => import('@/views/system/menu/index.vue'),
    name: 'menu',
    meta: {
      title: '菜单管理',
      icon: '#iconquanxian'
    }
  },
  {
    path: '/system/org',
    component: () => import('@/views/system/org/index.vue'),
    name: 'org',
    meta: {
      title: '组织管理',
      icon: '#iconquanxian'
    }
  }
  // {
  //   path: '/system',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   meta: {
  //     title: '系统管理',
  //     icon: '#iconquanxian',
  //     alwaysShow: true
  //   },
  //   children: [
  //     {
  //       path: 'user',
  //       component: () => import('@/views/system/user/index.vue'),
  //       name: 'user',
  //       meta: {
  //         title: '用户管理',
  //         icon: '#iconquanxian'
  //       }
  //     },
  //     {
  //       path: 'role',
  //       component: () => import('@/views/system/role/index.vue'),
  //       name: 'role',
  //       meta: {
  //         title: '角色管理',
  //         icon: '#iconquanxian'
  //       }
  //     },
  //     {
  //       path: 'menu',
  //       component: () => import('@/views/system/menu/index.vue'),
  //       name: 'menu',
  //       meta: {
  //         title: '菜单管理',
  //         icon: '#iconquanxian'
  //       }
  //     },
  //     {
  //       path: 'org',
  //       component: () => import('@/views/system/org/index.vue'),
  //       name: 'org',
  //       meta: {
  //         title: '组织管理',
  //         icon: '#iconquanxian'
  //       }
  //     }
  //   ]
  // }
]

export default systemRouter
