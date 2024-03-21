// 1번문제 a 부터 b 까지 누적 합
var a = +prompt('양의 정수를 입력');
var b = +prompt('양의 정수를 입력');
var c = 0;
var total = 0;

if (a > b) {
    c = b;
    while (a >= c) {
        total += c;
        c++;
    }
    alert(`${b}에서 ${a}까지의 누적 합은 ${total}입니다.`)
} else {
    c = a;
    while (b >= c) {
        total += c;
        c++;
    }
    alert(`${a}에서 ${b}까지의 누적 합은 ${total}입니다.`)
}
