import ApiClient from '../utils/ApiClient.js';

export default class AuthService {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async login(user) {
    // user can be an instance of User or a plain object with username/password
    return this.apiClient.post('/login', {
      username: user.username,
      password: user.password
    });
  }
}
