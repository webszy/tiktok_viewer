/* eslint-disable @typescript-eslint/member-delimiter-style */
interface TQueryItem{
  width: number;
  '--icon-size': string;
  '--app-bar-height': string;
}
const queryMap: TQueryItem[] = [
  {
    'width': 0,
    '--icon-size': '14px',
    '--app-bar-height': '54px',
  },
  {
    'width': 600,
    '--icon-size': '30px',
    '--app-bar-height': '96px',
  }]

// TODO: 窗口变化时动态修改css变量
const breakDown = [600, 900, 1200, 1800]
const observer = new ResizeObserver(([entries]) => {
  const [{ inlineSize }] = entries.devicePixelContentBoxSize
  let currentBreak = breakDown.slice(0)
  currentBreak.push(inlineSize)
  currentBreak = currentBreak.sort((a, b) => a - b)
  const currentBreakPoint = currentBreak[currentBreak.indexOf(inlineSize) -1]
  // eslint-disable-next-line no-console
  console.log('currentBreakPoint', currentBreakPoint)
  let vars: TQueryItem | null = null
  if (queryMap.some(e => e.width === currentBreakPoint)){
    vars = queryMap.find(e => e.width === currentBreakPoint) as TQueryItem
  }
  else {
    vars = queryMap.find(e => e.width === 0) as TQueryItem
  }
  Object.entries(vars).forEach((item) => {
    if (item.length === 2 && item[0] !== 'width'){
      document.documentElement.style.setProperty(item[0], item[1])
    }
  })
  // eslint-disable-next-line no-console
  console.log('responsive vars',vars)
})
observer.observe(document.documentElement)
export default observer
