/*
 * @Author: jrucker
 * @Description:
 * @Date: 2021/10/25 11:12:57
 * @LastEditors: jrucker
 * @LastEditTime: 2022/02/11 10:56:30
 */

import { RouteRecordRaw } from 'vue-router'
// import Layout from '@/layout/index.vue'

const DashboardRouter: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    component: () => import('@/views/dashboard/index.vue'),
    name: 'dashboard',
    meta: {
      title: '首页',
      icon: '#icondashboard',
      affix: true
    }
  }
  // {
  //   path: '/micro',
  //   component: Layout,
  //   // redirect: '/micro/dashboard',
  //   meta: {
  //     hidden: true
  //   },
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: () => import('@/views/dashboard/index.vue'),
  //       name: 'dashboard',
  //       meta: {
  //         title: '首页',
  //         icon: '#icondashboard',
  //         affix: true
  //       }
  //     }
  //   ]
  // }
]

export default DashboardRouter
