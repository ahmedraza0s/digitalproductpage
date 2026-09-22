document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('admin-login-form');
  const errorDiv = document.getElementById('login-error');
  const loginBtn = document.getElementById('login-btn');

  // If already logged in, redirect to dashboard
  if (sessionStorage.getItem('admin_token')) {
    window.location.href = 'dashboard.html';
  }

  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      errorDiv.classList.add('hidden');
      loginBtn.disabled = true;
      loginBtn.textContent = 'Signing in...';

      try {
        const response = await adminApi.request('/admin/login', {
          method: 'POST',
          body: JSON.stringify({ username, password })
        });

        sessionStorage.setItem('admin_token', response.token);
        window.location.href = 'dashboard.html';
      } catch (error) {
        errorDiv.textContent = error.message || 'Invalid credentials';
        errorDiv.classList.remove('hidden');
      } finally {
        loginBtn.disabled = false;
        loginBtn.textContent = 'Sign In';
      }
    });
  }
});
