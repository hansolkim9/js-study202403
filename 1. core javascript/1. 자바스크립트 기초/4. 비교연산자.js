var a = 5;
var b = '5';

console.log(a === b);
console.log(a !== b);

console.log('0' === ''); //f
console.log(0 === ''); //f
console.log('0' === 0); //f
console.log(false === 'false'); //f
console.log(false === '0'); //f

// 대소 비교

console.log('a' > 'A'); //97 > 65 true
console.log('강'<'황');  // true