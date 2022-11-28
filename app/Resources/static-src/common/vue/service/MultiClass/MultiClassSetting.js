import { apiClient } from 'common/vue/service/api-client.js';
import _ from 'lodash';
import BaseService from '../BaseService'

const baseUrl = '/api/multi_class_settings';
const baseService = new BaseService({ baseUrl })

export const MultiClassSetting = _.assignIn(baseService,{

})
