export default class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async post(path, body) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error || 'Network response was not ok');
    }

    return response.json();
  }
}
