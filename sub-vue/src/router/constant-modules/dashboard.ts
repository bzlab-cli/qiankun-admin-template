/*
 * @Author: jrucker
 * @Description:
 * @Date: 2021/10/25 11:12:57
 * @LastEditors: jrucker
 * @LastEditTime: 2022/02/15 18:15:29
 */

import { RouteRecordRaw } from 'vue-router'

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
]

export default DashboardRouter
