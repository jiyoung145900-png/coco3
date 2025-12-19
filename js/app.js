function login() {
  const id = document.getElementById('id').value;
  const pw = document.getElementById('pw').value;

  if (!id || !pw) {
    alert('아이디와 비밀번호를 입력하세요');
    return;
  }

  if (id === 'admin' && pw === '1234') {
    alert('로그인 성공!');
  } else {
    alert('로그인 실패');
  }
}
