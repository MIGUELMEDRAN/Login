export default class AuthService {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  login(email, password) {
    return this.apiClient.post('/auth/login', { email, password });
  }
}
