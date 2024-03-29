/*
 * @Author: jrucker
 * @Description:
 * @Date: 2021/10/25 11:12:57
 * @LastEditors: jrucker
 * @LastEditTime: 2022/02/12 00:20:20
 */

import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const DashboardRouter: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: {
      hidden: true
    },
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'dashboard',
        meta: {
          title: '首页',
          icon: '#icondashboard',
          affix: true
        }
      }
    ]
  }
]

export default DashboardRouter
