
// 프로그램 전체에서 사용할 전역적인 변수와 함수를 정의
const $userInput = document.getElementById('input-number');

const $addBtn = document.getElementById('btn-add');
const $subtractBtn = document.getElementById('btn-subtract');
const $multiplyBtn = document.getElementById('btn-multiply');
const $divideBtn = document.getElementById('btn-divide');
let idx = 1;

// result 요소노드
const $currentResult = document.getElementById('current-result');
// 계산 로그 요소노드
const $currentCalculation = document.getElementById('current-calculation');

// result에 그려질 숫자
let currentResult = 0;

// ========== 함수 정의 영역 ========== //
// 계산 기능 헬퍼 함수
const calculate = (e) => {
    // 더하기를 해야 함
    // 계산 전 값을 백업
    const prevResult = currentResult;
    // 1. 입력창에 입력한 숫자를 읽어온다.
    const enteredNumber = +$userInput.value;
    
    // 2. 결과에 누적
    const operator = e.target.textContent
    switch (operator) {
        case '+':
            currentResult += enteredNumber;
            break;
        case '-':
            currentResult -= enteredNumber;
            break;
        case '*':
            currentResult *= enteredNumber;
            break;
        case '/':
            currentResult /= enteredNumber;
            break;
    }
    // currentResult += enteredNumber;

    // 3. 화면에 렌더링
    $currentResult.textContent = currentResult;
    // 계산 로그 생성
    const descriptionLog = `${prevResult} ${operator} ${enteredNumber}`;
    $currentCalculation.textContent = descriptionLog;

    // 계산 로그 추가
    const $parentUl = document.querySelector('.log-entries');
    const $newLi = document.createElement('li');
    $newLi.classList.add('log-entries__item');
    $newLi.textContent = `#${idx}. ${descriptionLog} = ${currentResult}`;
    $parentUl.appendChild($newLi);
    const $logs = document.getElementById("logs");

    // 결과 출력 스크롤 하단 고정
    $logs.scrollTo(0, $logs.scrollHeight); 

    // 실행 횟수 카운트
    idx++;
};