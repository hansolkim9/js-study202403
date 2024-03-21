
/*
var count = 0;
for(var i = 0 ; i < 3 ; i++) {      // 3회 반복하는 루프
    for (var j = 0 ; j < 2 ; j++) {     // 2회 반복하는 루프
        // console.log('2회반복을 3회반복하는 루프' + ++count);
        console.log(`${i}, ${j}`)
    }
}
*/



// 구구단 2단
/*
var level = 2;  // 단수

console.log(`# 구구단 ${level}단`);
for (var line = 1 ; line <= 9 ; line++) {
    console.log(`> ${level} x ${line} = ${level * line}`);
}
*/


// level 2 ~ 9

for (var level = 2 ; level <= 9 ; level ++) {
    for (var line = 1 ; line <= 9 ; line++) {
        console.log(`> ${level} x ${line} = ${level * line}`);
    }
    console.log('============')
}