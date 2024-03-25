
var pets = ['강아지', '고양이', '송아지']

console.log(pets);

pets[3] = '오징어'
console.log(pets);

// push(): 배열 맨 끝에 데이터 추가
pets.push('삼겹살');
pets.push('알파카', '금붕어', '카멜레온', '치킨');

console.log(pets);

// pop(): 배열 맨 끝 데이터 삭제
var myPet1 = pets.pop();
pets.pop();
var myPet2 = pets.pop();

console.log(pets);
console.log(myPet1);
console.log(myPet2);

// shift(): 배열의 맨 첫번째 데이터 삭제
// unshift(): 배열의 맨 첫번째 자리에 데이터 추가

pets.shift();

console.log(pets);
pets.unshift('양꼬치');
console.log(pets);