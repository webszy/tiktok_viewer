<script setup lang="ts">
/* eslint-disable @typescript-eslint/member-delimiter-style */
interface TProps{
  dynamicCover: string;
  cover: string;
  desc: string;
  author: string;
  id: string;
}
const item = defineProps<TProps>()
const alt = computed(() => `${item.author} - ${item.id}`)
</script>

<template>
  <picture>
  <source :srcset="item.dynamicCover" type="image/webp">
  <img :src="item.cover" :alt="alt">
</picture>
</template>

<style scoped>

</style>
