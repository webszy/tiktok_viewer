<script setup lang="ts">
import { Snackbar } from '@varlet/ui'
import type { TUserData } from '~/types'

const username = ref('tiktok')
const showLoginResult = ref(false)
const router = useRouter()
const handleInput = (e: Event) => {
  (e.target as HTMLInputElement)?.focus()
}
const handleLogin = () => {
  if (unref(username) === ''){
    Snackbar.info('username required,not nickName')
  }
  Snackbar({
    type: 'loading',
    position: 'bottom',
    content: 'please wait',
    forbidClick: true,
    lockScroll: true,
  })
  umiRequest<TUserData>('/user', { method: 'get', params: { name: unref(username) } })
    .then((res) => {
      if (!res) { throw new Error('request failed') }
      if (res.code === 404){
        Snackbar.error({ content: res.message, position: 'top' })
        return
      }
      if (res.code === 200 && res.data){
        Snackbar.success({
          position: 'top',
          content: 'Successfully logged in!',
        })
        setUser(res.data)
        showLoginResult.value = true
      }
    })
}
const goMainPage = () => {
  router.push({ name: 'main' })
}
const reset = () => {
  showLoginResult.value = false
  username.value = ''
  resetStore()
}
</script>

<template>
  <div
    :class="$style.login"
    class="w-full h-full border-box flex flex-col justify-start items-center box-border"
  >
    <input v-model="username" class="block" placeholder="Your Tiktok username" @click="handleInput($event)">
    <var-button
      :class="$style.btn"
      ripple
      @click="handleLogin"
    >
      Continue &gt;&gt;
    </var-button>
    <LoginResult :show="showLoginResult" @continue="goMainPage" @cancel="reset" />
  </div>
</template>

<style module>
.login{
  padding-top: 30px;
  background: url('../assets/images/bg.png') rgb(21,24,34) no-repeat center top;
}
.login input{
  width: 60%;
  height: 50px;
  max-width: 250px;
  background: #171717;
  border: 1PX solid #535353;
  border-radius: 10px;
  margin-top:300px;
  color: var(--color-text);
  text-align: center;
  font-size:18px;
  margin-bottom:80px;
}
.login input::placeholder,
.login input::-webkit-input-placeholder {
  color:#fff !important;
  opacity: 1;
  font-weight: 400;
  font-size: 18px;
}
.btn{
  width: 90%;
  max-width: 300px;
  height: 50px;
  color: var(--color-text);
  background: #535353;
}
</style>
