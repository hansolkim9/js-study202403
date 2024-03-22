
// 1 ~ 100 사이의 정수
// random() + (y - x + 1) + x


var i = 1;
while (true) {
    var rn = Math.floor(Math.random() * 100) + 1;
    console.log(`${rn}, ${i}`);
    i++
    if (rn === 77) break;    
}