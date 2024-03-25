
true && true;   // t
false && true;  // f
false && true;  // f
false && false; // f


true || true;   // t
false || true;  // t
false || true;  // t
false || false; // f

// OR연산 : 첫번째 truthy를 반환
console.log('hello' || 'bye');
console.log(null || 'ㅎㅇ');

// AND연산: 첫번째 falsy를 반환
console.log('ㅋㅋ' && 'ㅎㅎ');
console.log(0 && '오');

if (조건) {
    console.log('bb');
}

조건 && console.log('bb');

/*

    <h1>안녕하세요</h1>
    login && <h2>xxx님 환영합니다</h2>

    쿠폰당첨여부 && sendCoupon();
    내게시물여부 && <button>삭제</button>

    쿠폰당첨여부 || sendMessage();
    !쿠폰당첨여부 && sendMessage();
    
    - 실무에서는 보통 &&를 많이 쓴다 -

*/