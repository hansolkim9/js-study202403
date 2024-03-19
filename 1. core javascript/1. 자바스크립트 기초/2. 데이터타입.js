
var num = 90;   // 90을 저장해도 90.0으로 저장된다.
console.log(typeof num);

console.log(num / 5);

var foodName = num;
console.log(foodName);

foodName = '깐풍기';    // 'a' "a" `a` 다 가능하지만 js 개발하는사람덜은 주로 'a'를 쓴다는 소문이..
console.log(foodName);

var element = '<nav>\n\t<ul>\n\t\t<li>딸기</li>\n\t</ul>\n</nav>';
console.log(element);

var elem = `
<nav>
    <ul>
        <li>안녕</li>
    <ul>
<nav>
`;          // 백틱 (``)을 사용하면 이렇게 여러줄도 입력 가능
console.log(elem);

console.log('======================================');

var month = 4;
var day = 5;
var anni = '식목일';

var sentence = month + '월 ' + day + '일은 ' + anni + '입니다.';
console.log(sentence);
var sentence2 = `${month}월 ${day}일은 ${anni}입니다.`
console.log(sentence2);

var userAge = 30;

var flag = userAge > 19;
console.log(typeof flag);
console.log(flag);


// undefined, null type 구분하는것이 매우 중요!
// undefined: 아직 값이 없는 상태 (고의로 값을 안넣은게 아님), 아직 값이 할당되지 않은 상태!
// null: 일부러 값을 없앤 상태 (고의로 값을 없앰)
var petName;
console.log(petName);

var myHobby = '산책';
myHobby = null;

function buyNewCar(money) {
    if (money > 5000) return '그랜져';
    else if (money > 3000) return '아반떼';
    else if (money <= 0) return null;
}