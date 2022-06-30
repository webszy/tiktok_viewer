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
import App from './App.vue'
const app = createApp(App)
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})
app.use(router)
app.mount('#app')
StyleProvider(dark)
