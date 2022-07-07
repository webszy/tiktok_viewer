<script setup lang="ts">
loadUser()
</script>

<template>
  <div class="w-full h-full flex flex-col justify-between items-center" :class="$style.bg">
    <UserCard />
    <UserPost />
  </div>
</template>

<style module>
.bg{
  background-color:#272727;
}
</style>
