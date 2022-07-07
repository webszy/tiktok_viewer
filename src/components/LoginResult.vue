<script setup lang="ts">
/* eslint-disable @typescript-eslint/member-delimiter-style */

import { shortenLargeNumber } from '~/utils'

interface Tprops {
  show: boolean;
}
interface Temit {
  (e: 'continue'): void
  (e: 'cancel'): void
}
const props = defineProps<Tprops>()
const emits = defineEmits<Temit>()
const show = ref(props.show)
watch(() => props.show, () => { show.value = props.show }, { flush: 'post' })
const [profileUrl, name, followers] = useState(['profileUrl', 'name', 'followers'])
const followerStr = computed(() => shortenLargeNumber(unref(followers), 2))
const handleContinue = () => {
  emits('continue')
}
const handleCancel = () => {
  emits('cancel')
}
</script>

<template>
  <var-popup
    v-model:show="show"
    :class="$style.layer"
    position="bottom"
    teleport="body"
    :close-on-click-overlay="false"
  >
    <div class="w-full h-auto flex justify-start items-center">
      <var-image
        width="60px"
        height="60px"
        fit="cover"
        :radius="10"
        :src="profileUrl"
        lazy
        loading="/img/loading.svg"
      />
      <div :class="$style.info">
        <p>{{ name }}</p>
        <p>Followers: {{ followerStr }}</p>
      </div>
    </div>
    <div :class="$style.btns" class="w-full h-auto flex justify-between items-center">
      <var-button :class="$style.btn" @click="handleContinue">
        Continue
      </var-button>
      <var-button :class="$style.btn" @click="handleCancel">
        Cancel
      </var-button>
    </div>
  </var-popup>
</template>

<style module>
.layer{
  padding: 50px 30px 30px 30px;
}
.layer p{
  color: var(--color-text);
  font-size:18px;
  line-height: 22px;
}
.info{
  padding-left: 20px;
}

.btns{
  padding-top: 25px;
}
.btn{
  width: 48%;
  color: var(--color-text);
  background-color:#404040;
}
</style>
