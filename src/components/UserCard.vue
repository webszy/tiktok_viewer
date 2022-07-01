<script setup lang="ts">
const [profileUrl, name, signature] = useState(['profileUrl', 'name', 'followers'])
</script>

<template>
  <var-card
    :title="name"
    :subtitle="signature"
    :src="profileUrl"
    layout="row"
  >
    <template #extra>
      <var-row>
        <var-col :span="8"><var-icon name="account-circle-outline" /></var-col>
        <var-col :span="8"><var-icon name="heart" /></var-col>
      </var-row>


    </template>
  </var-card>
</template>

<style scoped>

</style>
