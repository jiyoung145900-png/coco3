applyLang();
checkLogin();

function login() {
  const id = document.getElementById('id').value;
  const pw = document.getElementById('pw').value;
  const msg = document.getElementById('msg');

  msg.textContent = '';
  msg.className = 'msg';

  if (!id || !pw) {
    msg.textContent = '아이디와 비밀번호를 입력하세요';
    msg.classList.add('error');
    return;
  }

  // Mock API 로그인
  if (id === 'admin' && pw === '1234') {
    msg.textContent = '로그인 성공!';
    msg.classList.add('success');

    localStorage.setItem('isLogin', 'true');

    setTimeout(showDashboardAnimated, 600);
  } else {
    msg.textContent = '아이디 또는 비밀번호가 틀렸습니다';
    msg.classList.add('error');
  }
}

function logout() {
  localStorage.removeItem('isLogin');
  location.reload();
}

function checkLogin() {
  if (localStorage.getItem('isLogin') === 'true') {
    showDashboardAnimated();
  }
}
