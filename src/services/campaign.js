// import api from './api'

// const CampaignService = {
//   createCampaign: (data) => api.post('/campaigns', data),
//   getCampaigns: () => api.get('/campaigns'),
//   getCampaignById: (id) => api.get(`/campaigns/${id}`),
//   updateCampaign: (id, data) => api.put(`/campaigns/${id}`, data),
//   deleteCampaign: (id) => api.delete(`/campaigns/${id}`),
//   uploadCSV: (file) => {
//     const formData = new FormData()
//     formData.append('file', file)
//     return api.post('/campaigns/upload', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       }
//     })
//   },
//   getCampaignMetrics: (id) => api.get(`/campaigns/${id}/metrics`),
//   scheduleCampaign: (id, scheduleData) => api.post(`/campaigns/${id}/schedule`, scheduleData)
// }

// export default CampaignService