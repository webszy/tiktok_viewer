import type { TState } from './store'
import type { TUserResponse } from '~/types'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultAvatar = require('../assets/images/defautl_avatar.png')
export const setUser = (data: TUserResponse) => {
  const store = useState([])
  const userInfo = {
    profileUrl: data?.user?.avatarThumb ?? defaultAvatar,
    name: data?.user?.uniqueId,
    followers: data?.user?.followerCount,
    openFavorite: data?.user?.openFavorite,
    privateAccount: data?.user?.privateAccount,
    signature: data?.user?.signature,
    heartCount: data?.user?.heart,
  }
  localStorage.setItem('user', JSON.stringify(userInfo))
  Object.assign(store, userInfo)
}
export const loadUser = () => {
  const userStr = localStorage.getItem('user')
  const store = useState([])
  if (userStr && toRaw(store).name === ''){
    const data: TState = JSON.parse(userStr)
    Object.assign(store, data)
  }
}
