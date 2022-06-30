import { Snackbar } from '@varlet/ui'
import { extend } from 'umi-request'

export const umiRequest = extend({
  prefix: import.meta.env.VITE_APP_TIKTOK_API_URL,
  timeout: 20 * 1000,
  headers: {
    'Content-Type': 'application/json',
  },
  // params: {
  //   token: 'xxx', // 所有请求默认带上 token 参数
  // },
  errorHandler(error) {
    /* 异常处理 */
    // eslint-disable-next-line no-console
    console.log(error)
    Snackbar.info({
      position: 'bottom',
      content: 'Sorry some errors occurred,please try later',
    })
  },
})
