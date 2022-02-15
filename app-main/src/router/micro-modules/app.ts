/*
 * @Author: jrucker
 * @Description:
 * @Date: 2021/10/25 11:12:57
 * @LastEditors: jrucker
 * @LastEditTime: 2022/02/15 10:45:20
 */

// import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const AppRouter = [
  {
    path: '/app',
    component: Layout,
    name: 'sub-vue3',
    meta: {
      title: 'sub-vue3'
    },
    redirect: '/app/sub-vue3',
    children: [
      {
        path: 'sub-vue3',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'sub-vue3',
        meta: {
          title: 'sub-vue3',
          icon: '#icondashboard'
        }
      }
    ]
  },
  {
    path: '/app',
    component: Layout,
    name: 'sub-vue',
    meta: {
      title: 'sub-vue'
    },
    redirect: '/app/sub-vue',
    children: [
      {
        path: 'sub-vue',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'sub-vue',
        meta: {
          title: 'sub-vue',
          icon: '#icondashboard'
        }
      }
    ]
  },
  {
    path: '/app/:pathMatch(.*)',
    name: 'Layout',
    meta: {
      hidden: true
    },
    component: Layout
  }
]

export default AppRouter
