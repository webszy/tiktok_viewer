import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import './styles/main.css'
import './styles/reset.css'
import 'virtual:windi-utilities.css'
import dark from '@varlet/ui/es/themes/dark'
import { StyleProvider } from '@varlet/ui'
import '@varlet/ui/es/snackbar/snackbar.css'
import '@varlet/ui/es/popup/popup.css'
import './modules/mediaQuery'
import { check_webp_feature } from './utils'
import App from './App.vue'
import { useState } from '~/composables'
const app = createApp(App)
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})
// eslint-disable-next-line no-console
console.log('routes', routes)
app.use(router)
app.mount('#app')
StyleProvider(dark)
check_webp_feature('lossy').then((supported) => {
  const webpSupported = useState('webpSupported')
  webpSupported.value = supported
})
