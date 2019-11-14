
import BMap from 'BMap'
const isWechat = /MicroMessenger/i.test(window.navigator.userAgent)

export const baiduGeolocation = callback => {
  const geo = new BMap.Geolocation()
  geo.getCurrentPosition(
    res => {
      if (geo.getStatus() === window.BMAP_STATUS_SUCCESS) return callback(null, res)
      callback(new Error('定位失败'))
    },
    { enableHighAccuracy: true }
  )
}

export const geolocation = callback => {
  if (navigator.geolocation) {
    return navigator.geolocation.watchPosition(position => {
      const { latitude: lat, longitude: lng } = position.coords
      const ggPoint = new BMap.Point(lng, lat)
      const convertor = new BMap.Convertor()
      const from = isWechat ? 1 : 3
      convertor.translate([ggPoint], from, 5, res => {
        const { points = [] } = res || {}
        const point = points[0] || ggPoint
        const geo = new BMap.Geocoder()
        geo.getLocation(point, res => callback(null, res))
      })
    }, callback)
  } else {
    // 不支持navigator.geolocation的情况下调用百度地图的IP定位
    baiduGeolocation(callback)
  }
}