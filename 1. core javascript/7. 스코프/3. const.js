
let x;
x = 'ㅋㅋ'
x = 'ㅎㅎ'
console.log(x);

const y = '?!';
// y = '안바뀌지롱';
console.log(y);

const PI = 3.14159265;
const COLOR_GREEN = '#0f0'
/*
    $div.style.background = COLOR_GREEN;
*/

// 상수는 객체의 불변성을 유지할 수 있다.
const kim = {
    name: '김영수',
    age: 30,
}
// 이건 가능
kim.age = 31;
kim.name = '김영식';

// 이건 불가능
// kim = {
//     name: '김철수',
//     age: 30,
// }

const array = {
    0: 'z',
    1: 'dd',
    2: 'ttt',
    length: 3,
}

const userName = 'zz';
for (let i = 0 ; i < 5; i++) {}