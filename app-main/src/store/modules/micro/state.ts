/*
 * @Author: jrucker
 * @Description:
 * @Date: 2021/10/25 18:56:51
 * @LastEditors: jrucker
 * @LastEditTime: 2022/02/14 18:29:26
 */

export interface MicroState {
  msg: string
  setGlobalState: any
}

export const state: MicroState = {
  msg: '',
  setGlobalState: null
}
