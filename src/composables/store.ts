/* eslint-disable @typescript-eslint/brace-style,@typescript-eslint/member-delimiter-style */
interface TState {
  profileUrl: string;
  name: string;
  followers: number;
  openFavorite: boolean;
  privateAccount: boolean;
}
const __state: TState = {
  profileUrl: '',
  name: '',
  followers: 0,
  openFavorite: false,
  privateAccount: false,
}
const state = reactive<TState>(__state)
const concatAllParams = (key: string | string[], ...rest: string[]) => {
  const params: string[] = [].concat(<[]>rest)
  if (Array.isArray(key)){
    params.unshift(...key)
  } else {
    params.unshift(key)
  }
  return params.filter(e => typeof e === 'string' && e !== '')
}
export const useState = (key: string | string[], ...rest: string[]) => {
  const params = concatAllParams(key, ...rest)
  const len = params.length
  const hasKey = (keyName: any) => keyName in state
  const getOne = (keyName: any) => hasKey(keyName) ? (toRefs(state) as Record<any, any>)[keyName] : undefined
  if (len === 0){
    return toRefs(state)
  } else if (len === 1) {
    return getOne(params[0])
  } else {
    return params.map(getOne)
  }
}
export const resetStore = () => Object.keys(__state).forEach((key:any) => (state as Record<any, any>)[key] = (__state as Record<any, any>)[key])
