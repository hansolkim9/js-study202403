// 입력한 정수 이하의 2의 제곱수를 가로로 출력

var a = +prompt('양의 정수를 입력하세요');
var result = '';
for (var i = 2 ; i <= a ; i *= 2) {
    result += `${i} `;
}
alert(result)