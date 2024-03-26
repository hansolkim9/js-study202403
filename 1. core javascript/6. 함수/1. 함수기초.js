/*
console.log(`김영철님 ㅎㅇ!안녕하세요!`);
console.log(`오늘도 즐거운 하루 되세요!`);


// 수많은 코드가 있다고 가정


console.log(`김영희님 ㅎㅇ!안녕하세요!`);
console.log(`오늘도 즐거운 하루 되세요!`);


// 수많은 코드가 있다고 가정


console.log(`김영식님 ㅎㅇ!안녕하세요!`);
console.log(`오늘도 즐거운 하루 되세요!`);
*/

// 함수 정의(만든다)
// 함수 이름은 관례적으로 동사형으로 만든다.
function sayHello(userName) {
    console.log(`${userName}님 안녕하세요!`);
    console.log(`오늘도 즐거운 하루 되세요!`);
}

// 함수 호출 (사용한다)
sayHello('김영식');
sayHello('김영수');

function makeLine() {
    console.log('====================');
}

makeLine();
sayHello('a');
makeLine();
sayHello('b');
makeLine();
sayHello('c');
makeLine();

// 나의 프로그램에서는 원의 넓이를 자주 구한다.
const PI = 3.14159265;

// 반지름이 r인 원의 넓이를 구하는 함수 정의
function calcAreaCircle(r) {
    return PI * r ** 2;
}

// 반지름이 5인 원의 넓이
var circle1 = PI * 5 ** 2;
console.log(circle1);

// 반지름이 17인 원의 넓이
var circle2 = calcAreaCircle(17);
console.log(circle2);

// 게시글을 삭제하는 함수
function removeBoardArticle() {

}