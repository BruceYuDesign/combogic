export const useUserAgent = () => {

  const getInfo = () => {
    return navigator.userAgent
  }

  const isMobile = () => {
    const deviceList = [
      'Android',
      'webOS',
      'iPhone',
      'iPad',
      'iPod',
      'BlackBerry',
      'Windows Phone',
    ]
    return deviceList.some( device => getInfo().includes( device ) )
  }

  return {
    getInfo,
    isMobile,
  }
}