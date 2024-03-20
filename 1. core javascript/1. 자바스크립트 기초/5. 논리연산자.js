var t = true; f = false;

// and연산: 논리곱 - &&
console.log(t && t);    // t
console.log(t && f);    // f
console.log(f && t);    // f
console.log(f && f);    // f


console.log('==============');

// or연산: 논리합 - ||
console.log(t || t);    // t
console.log(t || f);    // t
console.log(f || t);    // t
console.log(f || f);    // f

console.log('==============');

// not연산: 논리반전 - !
console.log(!t);    // f

var money = 0;
if (!money) {
    console.log('나는 돈이 없어용!');
} else {
    console.log('나는 돈이 있어용!');
}