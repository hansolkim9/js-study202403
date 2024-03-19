var result; // 변수 선언

result = 10 + 20; // '=' 같다는 뜻이 아니라 값을 변수에 할당(대입)한다는 뜻

var multiple = result * 3; // 90
console.log(multiple);

var fruit;
fruit = '자몽';
console.log(fruit);

var food = '볶음밥';
food = '돈까스'; // 변수 재선언
console.log(food); 

// 변수 이름 규칙
var num7ber;                         // 변수명 사이에 숫자 가능(제일앞은 불가능)
var current_login_user_phone_number; // snake case (문법적으로는 가능, 관례적으로는 비추)
var currentLoginUserPhoneNumber;     // camel case (js: o)

var apple; var APPLE; var Apple;     // 얘네는 전부 다른 변수다
var $myPetName_;                     // 특수문자 중 $, _ 얘네는 사용 가능
// 그 외에 띄워쓰기, 특수문자, 예약어는 변수명으로 사용 불가능

const $orange ='ffa808';
$orange = 'asdlfk';     // TypeError: Assignment to constant variable 에러 작성
console.log($orange);
// 그래서 상수는 대문자로 지정하며 camel case 사용이 불가하여 snake case 사용한다
const COLOR_RED = "#F00";