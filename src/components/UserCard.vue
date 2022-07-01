<script setup lang="ts">
import { shortenLargeNumber } from '~/utils'

const [profileUrl, name, followers, signature, heartCount] = useState(['profileUrl', 'name', 'followers', 'signature', 'heartCount'])
const followerStr = computed(() => shortenLargeNumber(followers.value, 2))
const heartStr = computed(() => shortenLargeNumber(heartCount.value, 2))
const open = () => {
  window.open(`https://www.tiktok.com/@${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <var-card
    :title="name"
    :subtitle="signature"
    :src="profileUrl"
    layout="row"
  >
    <template #extra>
      <var-row :gutter="5">
        <var-col :span="8">
          <var-chip :round="false">
            <template #left>
              <var-icon name="account-circle-outline" color="var(--color-text)"/>
              <p :class="$style.num">{{ followerStr }}</p>
            </template>
          </var-chip>
        </var-col>
        <var-col :span="8">
          <var-chip :round="false">
            <template #left>
              <var-icon name="heart" color="var(--color-text)"/>
              <p :class="$style.num">{{ heartStr }}</p>
            </template>
          </var-chip>
        </var-col>
        <var-col :span="3">
          <var-button type="primary" round @click="open">
            <var-icon name="play-circle-outline" />
          </var-button>
        </var-col>
      </var-row>
    </template>
  </var-card>
</template>

<style module>
.num{
  color:var(--color-text);
  padding-left: 8px;
}
</style>
