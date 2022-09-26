// 基于axios封装网络请求
import theAxios from 'axios'

// 新建一个新的axios实例
const axios = theAxios.create({
  baseURL: 'http://toutiao.itheima.net', // 基地址
  timeout: 20000 // 设置请求超时
})

// 导出自定义函数, 参数对象解构赋值
export default ({ url, method = 'GET', params = {}, data = {}, headers = {} }) => {
  return axios({
    url,
    method,
    params,
    data,
    headers
  })
}
