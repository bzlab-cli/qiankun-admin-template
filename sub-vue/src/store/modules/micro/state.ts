/*
 * @Author: jrucker
 * @Description:
 * @Date: 2021/10/25 18:56:51
 * @LastEditors: jrucker
 * @LastEditTime: 2022/02/15 11:43:12
 */

export interface MicroState {
  name: string
  setGlobalState: any
  msg: string
}

export const state: MicroState = {
  name: '',
  setGlobalState: null,
  msg: ''
}
