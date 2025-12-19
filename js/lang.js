const texts = {
  ko: {
    title: '로그인',
    id: '아이디',
    pw: '비밀번호',
    login: '로그인',
    success: '로그인에 성공했습니다.'
  },
  en: {
    title: 'Login',
    id: 'ID',
    pw: 'Password',
    login: 'Login',
    success: 'Login successful.'
  }
};

function setLang(lang) {
  localStorage.setItem('lang', lang);
  applyLang();
}

function applyLang() {
  const lang = localStorage.getItem('lang') || 'ko';

  document.getElementById('title').textContent = texts[lang].title;
  document.getElementById('id').placeholder = texts[lang].id;
  document.getElementById('pw').placeholder = texts[lang].pw;
  document.getElementById('loginBtn').textContent = texts[lang].login;
  document.getElementById('successText').textContent = texts[lang].success;

  document.getElementById('btnKr').classList.remove('active');
  document.getElementById('btnEn').classList.remove('active');

  if (lang === 'ko') {
    document.getElementById('btnKr').classList.add('active');
  } else {
    document.getElementById('btnEn').classList.add('active');
  }
}

// 페이지 열릴 때 자동 적용
applyLang();
