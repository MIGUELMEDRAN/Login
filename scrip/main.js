import ApiClient from './utils/ApiClient.js';
import AuthService from './services/AuthService.js';
import LoginController from './controllers/LoginController.js';
import { API_BASE_URL } from './config.js';

window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');
  if (!form) return;

  const apiClient = new ApiClient(API_BASE_URL);
  const authService = new AuthService(apiClient);
  const errorElement = document.getElementById('login-error');

  new LoginController(form, errorElement, authService);
});
