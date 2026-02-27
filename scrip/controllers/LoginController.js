import AuthService from '../services/AuthService.js';
import User from '../models/User.js';

export default class LoginController {
  constructor(formElement, authService) {
    this.form = formElement;
    this.authService = authService;
    this.attachEvents();
  }

  attachEvents() {
    this.form.addEventListener('submit', ev => {
      ev.preventDefault();
      const username =
        this.form.querySelector('input[placeholder="username"], input[placeholder="nombre de usuario"]').value;
      const password =
        this.form.querySelector('input[type="password"]').value ||
        this.form.querySelector('input[placeholder="password"]').value;
      this.handleLogin(username, password);
    });
  }

  async handleLogin(username, password) {
    try {
      const user = new User(username, password);
      const result = await this.authService.login(user);
      console.log('Login successful', result);
      // redirect or show success message
    } catch (err) {
      console.error('Login failed', err);
      alert('Error al iniciar sesión');
    }
  }
}
