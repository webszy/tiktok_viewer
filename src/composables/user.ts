import type { TUserResponse } from '~/types'
export const setUser = (data: TUserResponse) => {
  const store = useState([])
  const userInfo = {
    profileUrl: data?.user?.avatarMedium,
    name: data?.user?.uniqueId,
    followers: data?.user?.followerCount,
    openFavorite: data?.user?.openFavorite,
    privateAccount: data?.user?.privateAccount,
    signature: data?.user?.signature,
  }
  Object.assign(store, userInfo)
}
