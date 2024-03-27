
var x = 99; // global scope: 전역변수
var y = true;

function foo() {
    // var x = '홍길동'; // local scope: 지역변수
    console.log(`foo x: ${x}`);
    var y = '김철수';
    console.log(`foo y: ${y}`);  // 함수 내부에서는 지역변수 우선
    var z = 100;
    return x;
}

var y = foo();
console.log(`x: ${x}`);
console.log(`y: ${y}`);
// console.log(`z: ${z}`); // 함수 내부에서 선언된 변수 사용 못한다.



console.log('====================');

// 중첩함수: 함수 안에 함수를 정의
function outer(m) {
    var n = 'outer local n'
    var v = 'outer local v'
    
    console.log(n);
    console.log(v);
    console.log(m);

    // 헬퍼함수: 바깥쪽 함수 전용함수
    function inner() {
        console.log(n);
        var m = 'inner local m';
        console.log(m);
    }
    inner();
}

outer('outer param m')



var userName = '홍길동';
function funcA() {
    userName = '박영희';
}
function funcB() {
    userName = '튀김';
}