import { apiClient } from 'common/vue/service/api-client.js';
import _ from 'lodash';
import BaseService from '../BaseService'

const baseUrl = '/api/multi_class';
const baseService = new BaseService({ baseUrl })

export const MultiClass = _.assignIn(baseService, {
  // 获取班课课时列表
  async getLessons(multiClassId, params) {
    return apiClient.get(`${this.baseUrl}/${multiClassId}/lessons`, { params })
  },

  // 编辑班课
  async editorMultiClass(multiClassId, params) {
    return apiClient.patch(`${this.baseUrl}/${multiClassId}`, params)
  },

  // 复制班课
  async copyMultiClass(multiClassId, params) {
    return apiClient.post(`${this.baseUrl}/${multiClassId}/clone`, params)
  }
})
