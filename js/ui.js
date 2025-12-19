function showDashboardAnimated() {
  const loginBox = document.getElementById('loginBox');
  const dashboard = document.getElementById('dashboard');

  loginBox.classList.add('hide');

  setTimeout(() => {
    loginBox.style.display = 'none';
    dashboard.style.display = 'block';
    dashboard.classList.add('fade-in');
  }, 500);
}

function showLogin() {
  const loginBox = document.getElementById('loginBox');
  const dashboard = document.getElementById('dashboard');

  dashboard.style.display = 'none';
  loginBox.style.display = 'block';
  loginBox.classList.remove('hide');
}
