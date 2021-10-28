import { apiClient } from 'common/vue/service/api-client';

const baseUrl = '/api/live_replay';

export const LiveReplay = {
  async get({ query, params }) {
    return apiClient.get(`${baseUrl}`, { params, query });
  },

  async delete({ params }) {
    return apiClient.delete(`${baseUrl}`, params);
  }
}
