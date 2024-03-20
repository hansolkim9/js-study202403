
// prompt(): 브라우저에서 입력을 할 수 있게 해주는 함수
// confirm(): 브라우저에서 확인/취소를 할 수 있게 해주는 함수
// alert(): 브라우저에서 알림창을 띄우는 함수

var yourName = prompt('당신의 이름을 입력하세요');
var yourAge = +prompt('당신의 나이를 입력하세요');
var now = new Date();
var year = now.getFullYear();
var birthYear = year - yourAge + 1;

alert(`${yourName}님은 ${birthYear}년생 이십니다.`);
