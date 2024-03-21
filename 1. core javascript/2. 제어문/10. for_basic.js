
var i = 1;
while (i <= 5) {
    console.log('hello');
    i++
}
console.log('=====');
//     1           2       4
for (var i = 1 ; i <= 5 ; i++) {
    //          3
    console.log('hello');
} // 순서 : 1 > 2 > 3 > 4 > 2 > 3 > 4 > 2 > 3 > 4 > 2

// 정확한 반복 횟수를 알 고 있을때 for문을 쓰는 것이 '가독성' 측면에서 좋다.

// 1 ~ 10 누적합
var total = 0;
for (var i = 1 ; i <= 10 ; i ++) {
    total += i;
}
console.log(total);

// 횟수 지정 반복문
for (var i = 1 ; i <= 5 ; i++) {
    console.log(ㅋ);
}