import request from '@/utils/request'

export const getAllChannelsAPI = () => {
  return request({
    url: '/v1_0/channels'
  })
}
