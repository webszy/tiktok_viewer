import type { TState } from './store'
import type { TUserResponse } from '~/types'

export const setUser = (data: TUserResponse) => {
  const store = useState([])
  const userInfo = {
    profileUrl: data?.user?.avatarThumb ?? '/img/defautl_avatar.png',
    name: data?.user?.uniqueId,
    followers: data?.user?.followerCount,
    openFavorite: data?.user?.openFavorite,
    privateAccount: data?.user?.privateAccount,
    signature: data?.user?.signature,
    heartCount: data?.user?.heart,
  }
  localStorage.setItem('user', JSON.stringify(userInfo))
  Object.assign(store, userInfo)
  if (data.post.list.length) {
    const post = data.post.list.map((e) => {
      const {
        id,
        desc,
      } = e
      const {
        dynamicCover,
        originCover,
        cover,
        playAddr,
        definition,
        downloadAddr,
      } = e.video
      return {
        ...e.stats,
        id,
        desc,
        dynamicCover,
        originCover,
        cover,
        playAddr,
        definition,
        downloadAddr,
      }
    })
    store.post = post
  }
}
export const loadUser = () => {
  const userStr = localStorage.getItem('user')
  const store = useState([])
  if (userStr && toRaw(store).name === '') {
    const data: TState = JSON.parse(userStr)
    Object.assign(store, data)
  }
}
