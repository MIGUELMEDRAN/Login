export default class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async request(path, options = {}) {
    const response = await fetch(`${this.baseUrl}${path}`, options);
    if (response.status === 204) return null;

    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(payload.message || 'Error en la petición');
    }

    return payload;
  }

  get(path, token) {
    return this.request(path, {
      method: 'GET',
      headers: this.buildHeaders(token)
    });
  }

  post(path, body, token) {
    return this.request(path, {
      method: 'POST',
      headers: this.buildHeaders(token),
      body: JSON.stringify(body)
    });
  }

  put(path, body, token) {
    return this.request(path, {
      method: 'PUT',
      headers: this.buildHeaders(token),
      body: JSON.stringify(body)
    });
  }

  delete(path, token) {
    return this.request(path, {
      method: 'DELETE',
      headers: this.buildHeaders(token)
    });
  }

  buildHeaders(token) {
    const headers = { 'Content-Type': 'application/json' };
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    return headers;
  }
}
