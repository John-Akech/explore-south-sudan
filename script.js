document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');

  // Handle login form submission
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;

      try {
        // Sending login data to Django backend using fetch API
        const response = await fetch('http://localhost:8000/api/login/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
          throw new Error('Login failed');
        }

        // Handle successful login (redirect, display message, etc.)
        alert('Login successful!');
        console.log('Login successful');

        // Example: Redirect to another page after successful login
        window.location.replace('dashboard.html');
      } catch (error) {
        // Handle login error (show error message, clear form fields, etc.)
        alert('Login failed. Please try again.');
        console.error('Login error:', error.message);
      }
    });
  }

  // Handle register form submission
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('registerName').value;
      const email = document.getElementById('registerEmail').value;
      const password = document.getElementById('registerPassword').value;

      try {
        // Sending registration data to Django backend using fetch API
        const response = await fetch('http://localhost:8000/api/register/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password }),
        });

        if (!response.ok) {
          throw new Error('Registration failed');
        }

        // Handle successful registration (redirect, display message, etc.)
        alert('Registration successful!');
        console.log('Registration successful');

        // Example: Redirect to another page after successful registration
        window.location.replace('dashboard.html');
      } catch (error) {
        // Handle registration error (show error message, clear form fields, etc.)
        alert('Registration failed. Please try again.');
        console.error('Registration error:', error.message);
      }
    });
  }
});
