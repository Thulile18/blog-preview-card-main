function handleSignup() {
      const btn = document.querySelector('.btn-signup');
      btn.textContent = 'Redirecting...';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Sign Up';
        btn.disabled = false;
        alert('Sign up flow would start here!');
      }, 1200);
    }