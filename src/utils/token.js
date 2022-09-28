const key = 'toutiao'

// 设置token
export const setToken = token => {
  localStorage.setItem(key, token)
}
// 获取token
export const getToken = token => {
  localStorage.getItem(key, token)
}
// 清楚token
export const removeToken = token => {
  localStorage.clear(key)
}
