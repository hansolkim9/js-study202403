// 매개변수

// x부터 y까지의 누적합을 구해야 함

function calcRangeTotal (x, y) {
    var total = 0;
    for (var i = x ; i <= y ; i++){
        total += i;
    }
    return total;
}

var result1 = calcRangeTotal(1, 10);
console.log(result1);

var result2 = calcRangeTotal(4, 7);
console.log(result2);

// 매개변수의 기본값
                    // ES6 문법
function sayHello(language = '한국어') {

    // ES5
    // language = language || '한국어';

    switch (language) {
        case '한국어':
            console.log('안녕하세요');
            break;
        case '영어':
            console.log('hello');
            break;
        case '중국어':
            console.log('안녕하냐해~');
            break;
        case '일본어':
            console.log('안녕하시무니까');
            break;
        default:
            console.log('??');
    }
}

sayHello();


// 매개변수가 없는 함수
function selectRandomPet() {

    var pets = ['개', '고양이', '말', '양', '닭', '소'];
    var rn = Math.floor(Math.random() * pets.length);

    return pets[rn];
}

var r1 = selectRandomPet();
var r2 = selectRandomPet();
var r3 = selectRandomPet();
console.log(`r1: ${r1}`);
console.log(`r2: ${r2}`);
console.log(`r3: ${r3}`);