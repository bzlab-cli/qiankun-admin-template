/*
 * @Author: jrucker
 * @Description:
 * @Date: 2021/10/25 11:14:55
 * @LastEditors: jrucker
 * @LastEditTime: 2022/02/11 18:39:35
 */

import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const OtherRouter: Array<RouteRecordRaw> = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  }
]

export default OtherRouter
