/* eslint-disable @typescript-eslint/member-delimiter-style */
const defaultOptions = {
  timeout: 10 * 1000,
  method: 'get',
  baseUrl: import.meta.env.VITE_APP_TIKTOK_API_URL,
}
interface TOptions {
  timeout: number;
  headers?: Record<string, string>;
  method: string;
  baseUrl?: string;
  query: Record<string, string>;
  body: any;
}
const request = (url: string, params: any = {}) => {
  if (url.startsWith('http')){
    url += defaultOptions.baseUrl
  }
  const options: TOptions = Object.assign({}, params, defaultOptions)
  if (Object.keys(options.headers).length){
    const headers = new Headers();
  }
  return new Promise((resolve, reject) => {
    fetch(
        url,
        {

        }
    )
        .then(res => {

        })
  })
}
export default request
