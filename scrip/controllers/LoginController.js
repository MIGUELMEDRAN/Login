export default class LoginController {
  constructor(formElement, errorElement, authService) {
    this.form = formElement;
    this.errorElement = errorElement;
    this.authService = authService;
    this.attachEvents();
  }

  attachEvents() {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = this.form.email.value;
      const password = this.form.password.value;
      this.handleLogin(email, password);
    });
  }

  async handleLogin(email, password) {
    try {
      this.showError('');
      const data = await this.authService.login(email, password);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      window.location.href = './variedades.html';
    } catch (error) {
      this.showError(error.message);
    }
  }

  showError(message) {
    if (!message) {
      this.errorElement.style.display = 'none';
      this.errorElement.textContent = '';
      return;
    }

    this.errorElement.textContent = message;
    this.errorElement.style.display = 'block';
  }
}
