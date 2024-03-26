
var phone = {
    company: '삼성',
    color: '펄 화이트',
    model: '갤럭시 S24 Ultra',
    price: 1200000
};

// for ~ in : '값'이 아닌 '키'가 반복됨
for (var data in phone) {
    // console.log(data);
    console.log(phone[data]); // key가 string타입 인 경우 대괄호[]로 묶는다.
    // console.log(typeof data);
}

// phone.memory = 111;

// 객체 프로퍼티 유무 확인`
// phone에 새로운 프로퍼티 추가하고 싶음

var newkey = 'memory';

if(!('memory' in phone)) {
    phone[newkey] = '32GB';
}

console.log(phone);