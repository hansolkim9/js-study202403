var n = 10;

while (n >= 0) {
    console.log(`${n}!!`);
    n--;
}


console.log('==============');

// 구구단

var level = 8;
var n = 1;

while (n <= 9) {
    console.log(`${level} x ${n} = ${level * n}`);
    n++;
}

console.log('==============');

// 10 ~ 34까지의 정수를 1씩 증가하면서 출력

var m = 10; // begin

while (m <= 34) {
    console.log(m);
    m++;
}

console.log('==============');

// 1 ~ 10 까지의 누적 합

var total = 0;
var i = 1;

while (i <= 10) {
    total += i;
    i++
}

console.log(total);