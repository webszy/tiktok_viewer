import { get as _get } from 'lodash-es'
import type { TUserResponse } from '~/types'
export const setUser = (data: TUserResponse) => {
  const [profileUrl, name, followers, openFavorite, privateAccount] = useState(['profileUrl', 'name', 'followers','openFavorite','privateAccount'])
  profileUrl.value = _get(data.user, 'avatarMedium')
  name.value = _get(data.user, 'uniqueId')
  followers.value = _get(data.user, 'followerCount')
  openFavorite.value = _get(data.user, 'openFavorite')
  privateAccount.value = _get(data.user, 'privateAccount')
}
