// 1부터 입력한 정수n 까지의 모든 약수를 출력하고 개수를 출력

var n = +prompt('정수를 입력하세요');

var result = '';
var count = 0;
for (var i = 1 ; i <= n ; i++) {
    if (n % i === 0) {
        result += `${i}\n`;
        count++
    }
}
// alert(result + '약수는 ' + count + '개 입니다.')
alert(result + `약수는 ${count}개 입니다.`)