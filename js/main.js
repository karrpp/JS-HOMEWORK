// 유저 데이터
const user = {
  id: 'asd@naver.com',
  pw: 'spdlqj123!@',
};

// 이메일 유효성 검사 함수
function emailReg(text) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 간단한 이메일 정규식
  return re.test(text);
}

// 비밀번호 유효성 검사 함수
function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/; // 비밀번호 정규식
  return re.test(text);
}

// 유효성 검사와 오류 메시지 표시
function validateInput(node, errorNode, isValid, errorMessage) {
  if (isValid) {
    node.setAttribute('aria-invalid', 'false');
    errorNode.style.display = 'none';
  } else {
    node.setAttribute('aria-invalid', 'true');
    errorNode.style.display = 'block';
    errorNode.textContent = errorMessage;
  }
}

// 로그인 처리 함수
function handleLogin(event) {
  event.preventDefault(); // 폼 기본 동작 방지

  // DOM 요소 가져오기
  const emailNode = document.getElementById('userEmail');
  const pwNode = document.getElementById('userPassword');
  const emailErrorNode = document.getElementById('userEmailError');
  const pwErrorNode = document.getElementById('userPasswordError');

  const emailValue = emailNode.value.trim();
  const pwValue = pwNode.value.trim();

  // 유효성 검사
  const isEmailValid = emailReg(emailValue);
  validateInput(
    emailNode,
    emailErrorNode,
    isEmailValid,
    '아이디는 이메일 형식으로 입력해 주세요.'
  );

  const isPwValid = pwReg(pwValue);
  validateInput(
    pwNode,
    pwErrorNode,
    isPwValid,
    '비밀번호는 특수문자 포함 6자리 이상 입력해 주세요.'
  );

  // 유효성 검사 실패 시 종료
  if (!isEmailValid || !isPwValid) {
    return;
  }

  // 아이디 및 비밀번호 비교
  if (emailValue === user.id && pwValue === user.pw) {
    window.location.href = 'welcome.html'; // 페이지 이동
  } else {
    alert('아이디 또는 비밀번호가 일치하지 않습니다.'); // 오류 메시지
  }
}

// DOM 요소 이벤트 연결
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', handleLogin);
