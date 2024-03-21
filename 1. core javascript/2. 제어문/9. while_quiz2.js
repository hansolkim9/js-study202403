// 입력받은 정수만큼의 기호를 출력하되 + - 가 교차되어 나오도록 하세요
var a = +prompt('양의 정수를 입력');
var i = 1;
var result = '';
while (a >= i) {
    if (i % 2 === 1) {
        result += '+';
    } else {
        result += '-';
    }
    i++;
}
alert(`${result}`);