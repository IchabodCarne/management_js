export const requestInterceptor = (req, res, next) => {
  const urlSplitList = req.url.split('/')
  const module = Array.isArray(urlSplitList) && urlSplitList.length && urlSplitList.at(1)
  if (module === 'login') {
    next()
  } else {
    res.end()
  }
}
