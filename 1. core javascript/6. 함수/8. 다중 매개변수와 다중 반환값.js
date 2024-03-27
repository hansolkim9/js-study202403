
function add2(n1, n2) {
    return n1 + n2;
}

var r1 = add2(5, 9);
// console.log(`r1: ${r1}`);

// 만약 n개의 정수 합을 구해주는 함수를 만들어야 한다면?
// 파라미터에 집합자료형을 전달한다!

function addAll(numbers) {
    var total = 0;
    for (var n of numbers) {
        total += n;
    }
    return total;
}

var r1 = addAll([5, 9, 2]);
console.log(`r1: ${r1}`);

// ES6 - spread 문법
function addAllES6 (first, second, ...numbers) { // first, second, ...numbers > 가능 // ...numbers, last > 불가능
    console.log(numbers); // [ 10, 20, 30 ] 출력
    var total = 0;
    for (var n of numbers) {
        total += n;
    }
    return total;
}
var r2 = addAllES6(10, 20, 30);


console.log(('===================='));

// 다중 반환값
// 함수의 반환값은 언제나 하나다.

function arithmeticOperate(n1, n2) {
    // var addResult = n1 + n2;
    // var subResult = n1 - n2;
    // var multiResult = n1 * n2;
    // var divResult = n1 / n2;
    return {
        multi: n1 * n2,
        sub: n1 - n2,
        div: n1 / n2,
        add: add2(n1, n2), // 위의 함수를 재활용!
        // other: subResult ** divResult,
    };
}

var r3 = arithmeticOperate(20, 10);
console.log(`덧셈결과: ${r3.add}`);
console.log(`뺄셈결과: ${r3.sub}`);
console.log(`곱셈결과: ${r3.multi}`);
console.log(`나눗셈결과: ${r3.div}`);

// 함수의 재사용

var r4 = arithmeticOperate(5, 3).multi;
console.log(`r4: ${r4}`);