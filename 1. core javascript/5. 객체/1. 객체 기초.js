

// 객체 생성
// 우리 집 강아지 정보 저장
var name = '김뽀삐';
var kind = '시바이누';
var age = 3;
var injection = true;
var favorite = ['산책', '간식'];
var bark = () => console.log('왈왈');

var dog = ['김뽀삐', '진돗개', 3, true, ['산책', '간식'], () => console.log('왈왈')];
// 배열은 순서 기억해야하고 바뀌면 안됨!

var dog = {
    name: '김뽀삐',
    kind: '시바이누',
    age: 3,
    injection: true,
    favorite: ['산책', '간식'],
    bark: () => console.log('왈왈'),
    hate: '목욕'
};

//우리 집 고양이 정보 저장
var cat = {
    name: '김순자',
    favorite: ['잠자기', '파괴하기'],
    kind: '코숏',
    age: 5,
    injection: true
};


console.log(dog.name);
console.log(cat.name);


var 게시판글 = {
    글번호: 11,
    작성자: {
        계정명: '김회원',
        닉네임: '김천재',
        가입일자: '2012-12-01',            
    },
    글내용: '배고프다',
    작성일자: '2024-03-26',
    hate: {},
}


// key에는 
// 되도록 숫자 쓰지 말것 문자만 쓰는걸로!
// 띄어쓰기도 하지 말것! 굳이 해야한다면 ''로 묶기, 근데 되도록이면 하지 말자.

console.log('==========');

// 객체에 저장된 데이터 참조(조회)
console.log(dog.age);
console.log(cat.injection);
console.log(cat.favorite[1]);

// 데이터 타입: 어떤 데이터가 할 수 있는 일을 정의!
dog.age++;
!dog.injection;
dog.favorite.push('꼬리흔들기');

cat.favorite.splice(0, 1);

dog.favorite.splice(1, 1);
dog.favorite.reverse();
console.log(dog.favorite);

// 객체를 참조하는 두번째 방법
console.log('==========');

var key = 'name';
console.log(dog.name);
console.log(dog['name']);
console.log(dog[key]);

// 프로퍼티 수정 (기존에 있는 key로 접근)
console.log('==========');

dog.age = 4;
cat.favorite[1] = '장난감';

console.log(dog);
console.log(cat);

// 프로퍼티 동적 추가 (기존에 없는 key로 접근)
console.log('==========');

cat.friend = '김철수';

console.log(cat);

// 프로퍼티 삭제
delete cat.hate;
delete cat.friend;


console.log(cat);