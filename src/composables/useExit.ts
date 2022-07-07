import type { Router } from 'vue-router'
export const useExit = (router: Router) => {
  return () => {
    router.replace('/').then(() => resetStore())
  }
}
