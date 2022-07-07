export function shortenLargeNumber(num: number, digits: number) {
  const units = ['k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y']
  let decimal = null

  for (let i = units.length - 1; i >= 0; i--) {
    decimal = 1000 ** (i + 1)
    if (num <= -decimal || num >= decimal) {
      return +(num / decimal).toFixed(digits) + units[i]
    }
  }
  return num
}
export const check_webp_feature = (feature: 'lossy' | 'lossless' | 'alpha' | 'animation') => {
  const kTestImages = {
    lossy: 'UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA',
    lossless: 'UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==',
    alpha: 'UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==',
    animation: 'UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA',
  }
  return new Promise((resolve) =>{
    const img = new Image()
    img.onload = function () {
      const result = (img.width > 0) && (img.height > 0)
      resolve(result)
    }
    img.onerror = function () {
      resolve(false)
    }
    img.src = `data:image/webp;base64,${kTestImages[feature]}`
  })
}
