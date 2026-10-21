// ===== 푸터에 현재 연도 자동 표시 =====
// id가 "year"인 요소를 찾아 올해 연도를 넣어줌
document.getElementById('year').textContent = new Date().getFullYear();

// ===== 연결 확인용 메시지 =====
// 브라우저 개발자 도구(F12) > Console 탭에서 확인 가능
console.log('「다시, 나」 script.js 연결 완료');