export default class VariedadesService {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  list(token) {
    return this.apiClient.get('/variedades', token);
  }

  create(payload, token) {
    return this.apiClient.post('/variedades', payload, token);
  }

  update(id, payload, token) {
    return this.apiClient.put(`/variedades/${id}`, payload, token);
  }

  remove(id, token) {
    return this.apiClient.delete(`/variedades/${id}`, token);
  }
}
