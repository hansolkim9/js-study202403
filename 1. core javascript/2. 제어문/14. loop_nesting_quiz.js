var a = +prompt('세로의 길이를 입력하세요')
var b = +prompt('가로의 길이를 입력하세요')

var result = '';
for (var i = 1 ; i <= a ; i++) {
    for (var j = 1 ; j <= b ; j++) {
        result += '* ';
    }
    result += '\n'
}
alert(result);