/*
 * @Author: jrucker
 * @Description:
 * @Date: 2021/10/25 18:56:51
 * @LastEditors: jrucker
 * @LastEditTime: 2022/02/15 17:34:19
 */

import { lifeCycle } from '@/core/render'

/**
 * @name 导出微应用生命周期
 */
const { bootstrap, mount, unmount } = lifeCycle()
export { bootstrap, mount, unmount }
