
var x = '30.3', y = '40.4';

var result = Number(x) + Number(y);
var result2 = parseInt(x) + parseInt(y); 
// parseInt는 문자를 숫자로 바꿀 때 '정수' 형태로 변환시킨다.
// parseDouble을 사용하면 소수점 지킬 수 있다.
var result3 = +x + +y;


console.log(result);
console.log(result2);
console.log(result3);

var m = '' + 10 + 20;
console.log(m);

var f = '' + false;

console.log('=====');

console.log(Boolean('hello'));
console.log(Boolean(null));
console.log(Boolean(!!999));
console.log(Boolean(!!undefined));


var x = '30.5',
  y = '40.5';

var result = Number(x) + Number(y);
// parseInt는 문자를 숫자로 바꿀때 정수로 바꾼다.
// parseDouble을 사용하면 소수점을 지킬 수 있음.
var result2 = parseInt(x) + parseInt(y);
var result3 = +x + +y;

console.log(result);
console.log(result2);
console.log(result3);

var m = '' + 10 + 20;
console.log(m);

var f = '' + false;

console.log('==================');

console.log(Boolean('hello'));
console.log(Boolean(null));
console.log(!!999);
console.log(!!undefined);

// 회원 로그인 여부 확인
function isLogin() {
  // const token = window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
  // return token !== null;

  return !!window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
}

const isLogin = () => !!window.localStorage.getItem('LOGIN_ACCESS_TOKEN');