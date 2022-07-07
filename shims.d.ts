declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'lodash-es'
declare global {
  interface Window {
    store:any;
    Artplayer:any;
  }
}
