/*
 * @Author: jrucker
 * @Description:
 * @Date: 2021/10/28 22:49:45
 * @LastEditors: jrucker
 * @LastEditTime: 2022/02/11 17:00:50
 */

declare interface IResponseModel<T> {
  retCode: number
  retMsg: string
  data?: T
}
declare interface IObjModel {
  [propName: string]: any
}

declare type Recordable<T = any> = Record<string, T>

declare global {
  interface Window  {
    qiankunStarted: any;
  }
}
