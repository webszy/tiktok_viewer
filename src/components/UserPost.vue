<script setup lang="ts">
import type { TPostItem } from '~/composables/store'
const [post, name, webpSupported] = useState(['post', 'name', 'webpSupported'])
const showPop = ref(false)
const player = shallowRef<any>(null)
const showVideo = (item: TPostItem) => {
  showPop.value = true
  nextTick(() => {
    player.value = new (window as any).Artplayer({
      container: '#artplayer-app',
      url: item.playAddr,
      autoSize: true,
      autoplay: true,
      muted: true,
      loop: true,
      miniProgressBar: true,
      icons: {
        loading: '<img src="/img/loading.svg">',
        state: '<img width="150" heigth="150" src="/img/state.svg">',
        indicator: '<img width="16" heigth="16" src="/img/loading.svg">',
      },
    })
  })
}
const destoryVideoPlayer = () => {
  unref(player)?.destroy()
}
const perloadVideo = (src: string) => {
  const video = document.createElement('video')
  video.oncanplay = () => {
    document.body.removeChild(video)
  }
  video.src = src
  document.body.appendChild(video)
}
onMounted(() => {
  post.value.slice(0, 5).forEach((e: TPostItem) => { perloadVideo(e.playAddr) })
})
</script>

<template>
  <div class="a w-full flex-1 flex flex-wrap justify-around items-start overflow-y-auto">
    <var-button v-for="item in post" :key="item.id" class="cover" @click="showVideo(item)">
      <var-image
        width="100%"
        height="100%"
        fit="cover"
        lazy
        :src="webpSupported ? item.dynamicCover : item.cover"
      />
    </var-button>
  </div>
  <var-popup v-model:show="showPop" @close="destoryVideoPlayer">
    <div id="artplayer-app" />
  </var-popup>
</template>

<style scoped>
.a{
  padding-top: 10px;
}
::v-deep(.cover)
{
  width: 33%;
  height: 168px;
  padding:0;
  margin-bottom: 1PX;
}
::v-deep(.cover .var-button__content){
  width: 100%;
  height: 100%;
}
#artplayer-app{
  width: 80vw;
  height: 60vh;
}
</style>
