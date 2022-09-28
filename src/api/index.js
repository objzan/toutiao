import request from '@/utils/request'

/**
 * 获取所有频道
 * @returns Promise
 */
export const getAllChannelsAPI = () =>
  request({
    url: '/v1_0/channels'
  })

/**
 * 登陆接口
 * @param {mobile, code}
 * @returns Promise
 */
export const loginAPI = ({ mobile, code }) =>
  request({
    url: '/v1_0/authorizations',
    method: 'POST',
    data: {
      mobile,
      code
    }
  })
