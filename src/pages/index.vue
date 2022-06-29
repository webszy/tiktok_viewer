<script setup lang="ts">
/* eslint-disable @typescript-eslint/space-before-blocks,curly */
import { Snackbar } from '@varlet/ui'

const username = $ref('')
const handleLogin = () => {
  if (username === ''){
    Snackbar.info('username required,not nickName')
  }
  Snackbar({
    type: 'loading',
    position: 'bottom',
    content: 'please wait',
    forbidClick: true,
    lockScroll: true,
  })
  setTimeout(() => {
    Snackbar({
      type: 'success',
      position: 'bottom',
      content: 'please wait',
    })
  }, 5000)
}
const errorText = ref('')
</script>

<template>
<div
    :class="$style.login"
    class="w-full h-full border-box flex flex-col justify-start items-center"
>
  <input v-model="username" class="block" placeholder="Your Tiktok username"/>
  <var-button
      :class="$style.btn"
      ripple
      @click="handleLogin"
  >
    Continue &gt;&gt;
  </var-button>
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
