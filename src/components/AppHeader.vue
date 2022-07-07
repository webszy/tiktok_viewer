<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const showExit = computed(() => route.name === 'main')
const exit = useExit(router)
</script>

<template>
  <var-app-bar style="flex-shrink: 0;" title="Tiktok with Anonymous" title-position="center">
    <template #left>
      <a href="https://github.com/webszy/tiktok_viewer" class="">
        <var-icon name="github" :size="30" />
      </a>
    </template>
    <template #right>
      <var-button :class="$style.btn" @click="exit" v-show="showExit">
        <var-icon name="power" />
      </var-button>
    </template>
  </var-app-bar>
</template>

<style module>
.btn{
  box-shadow: none;
  background-color:transparent;
}
</style>
