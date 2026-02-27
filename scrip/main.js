import ApiClient from './utils/ApiClient.js';
import AuthService from './services/AuthService.js';
import LoginController from './controllers/LoginController.js';

// punto de entrada de la aplicación
window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (!form) return; // no hay formulario en esta página

  const apiClient = new ApiClient('https://tu-backend.com/api'); // cambia URL a tu servidor
  const authService = new AuthService(apiClient);
  new LoginController(form, authService);
});
