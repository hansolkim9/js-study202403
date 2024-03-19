console.log(27/5);

// 나머지 연산
console.log(27 % 5); // 2
console.log(4 % 10); // 4
console.log(5 % 0);  // 0으로 나눗셈 자체가 불가, NaN 출력
console.log(0 % 5);  // 몫과 나머지 전부 0

// 제곱 연산
console.log(3 ** 2); // 3의 2제곱 9출력

console.log('=======================================');

// wmdrka dustkswk
var x = 3;
++x;
x++; 
x--;
--x;
console.log(`x: ${x}`);

// 전위 연산, 후위 연산
var n1 = 10;
var n2 = n1++; // 연산은 나중에
console.log(`n1: ${n1}, n2: ${n2}`);

var n3 = 10;
var n4 = ++n3; // 연산 먼저
console.log(`n3: ${n3}, n4: ${n4}`);

var xx = 5;
//xx++;           // 값은 같지만 얘가 연산 속도가 매우 빠르다. +연산 한번으로 결과 출력
//xx += 1; xx = xx + 1;    // +연산 1번, = 연산 1번

// 할당 연산자
xx *= 3;  // 15
xx /= 5;  // 3
xx **= 2; // 9
xx %= 4;  // 1