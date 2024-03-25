
var tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];
while (true) {
    var userInput = +prompt(`현재멤버: [${tvxq}]\n메뉴를 선택하세요.\n1. 새로운 이름 추가\n2. 기존 이름 삭제\n3. 프로그램 종료`);

    if (userInput === 1) { // 1번 입력, 새로운 이름 추가
        while(true) {
            var addName = prompt(`추가할 새로운 멤버의 이름을 입력하세요\n그만 하시려면 0을 입력하시거나 취소를 누르세요.`);
            if (addName === '0' || addName === null) {
                alert(`초기화면으로 돌아갑니다.`);
                break;
            }
            if (tvxq.includes(addName)) {
                alert(`이미 존재하는 이름입니다. 다시 입력하세요`);
                continue;
                // 공백을 검증하는 메서드 .trim()
            } else if(addName.trim() === ``) {
                alert(`값을 입력하지 않았습니다. 다시 입력하세요.`)
            } else {
            tvxq.push(addName);
            alert(`${addName}이(가) 추가되었습니다.\n현재 멤버: [${tvxq}]`);
            }
        }
        
    } else if (userInput === 2) { // 2번 입력, 기존 이름 삭제
        while(true) {
            if (tvxq.length === 0) {
                alert(`더 이상 삭제할 멤버가 없습니다.\n초기화면으로 돌아갑니다.`);
                break;
            }
            var delName = prompt(`삭제할 멤버의 이름을 입력하세요.\n현재 멤버: [${tvxq}]\n그만 하시려면 0을 입력하시거나 취소를 누르세요.`);
            if (delName === '0' || delName === null) {
                alert(`초기화면으로 돌아갑니다.`);
                break;
            }
            if (tvxq.includes(delName)) {
                var idx = tvxq.indexOf(delName);
                tvxq.splice(idx, 1);
                alert(`${delName}이(가) 삭제되었습니다.`);
            } else {
                alert(`${delName}은(는) 잘못된 이름입니다.\n다시 입력하세요!`);
            }
        }
    
    } else if (userInput === 3) { // 3번 입력, 프로그램 종료
        alert(`프로그램을 종료합니다.`);
        break;
    } else { // 1,2,3 제외 다른거 입력
        alert(`올바른 번호를 입력해 주세요.`);
    }

}