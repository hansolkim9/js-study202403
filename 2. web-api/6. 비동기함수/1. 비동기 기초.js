

// 비동기함수 setTimeout
// 코드를 순서대로 진행시키는게 아닌 시간차로 진행시킬 수 있게 함.

console.log('오늘의 할 일');

setTimeout(() => {
    console.log('간지나게 숨쉬기');
}, 1500);

setTimeout(() => {
    for (let i = 0; i < 3; i++) {
        console.log(`hello${i}`);    
    }    
}, 2000) // 지연시간 : 밀리초
setTimeout(() => {
    for (let i = 0; i < 4; i++) {
        console.log(`bye${i}`);
    }    
}, 0);


