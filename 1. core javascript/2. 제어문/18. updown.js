var a = 1;
var b = 100;
var rn = Math.floor(Math.random() * (b - a + 1) + a);
var count;
while (true) {
    var select = +prompt('난이도를 선택하세요\n 1. 상 (기회 3번) | 2. 중 (기회 6번) | 3. 하 (기회 10번)');
    if (select === 1) {
        count = 3;
        alert(`난이도 '상'을 선택하셨습니다. 기회는 총 ${count}번 입니다.`);
    } else if (select === 2) {
        count = 6;
        alert(`난이도 '중'을 선택하셨습니다. 기회는 총 ${count}번 입니다.`);
    } else if (select === 3) {
        count = 10;
        alert(`난이도 '하'을 선택하셨습니다. 기회는 총 ${count}번 입니다.`);
    } else {
        count = 3;
        alert(`잘못된 숫자를 입력하셨습니다. 난이도 '상'이 자동선택 됩니다. 기회는 총 ${count}번 입니다.`);
    }

    var c = count
    while(true) {
        var input = +prompt(`숫자를 입력하세요![${a} ~ ${b}]`);
        
        c--;
        if (input < a || input > b) {
            alert(`값을 잘못 입력했습니다. 다시 입력하세요! 횟수는 차감하겠습니다 ㅎㅎ\n기회는 ${c}번 남았습니다.`);
            if (c === 0) {
                alert(`기회가 0번 남았습니다.\n정답은${rn}입니다.\n게임을 종료합니다.`)
                break;
            }
            continue;
        }

        if (c > 0) {
            if (input === rn) {
                alert(`정답입니다.\n${count-c}번 만에 정답을 맞추셨습니다.\n게임을 종료합니다.`);
                break;
            } else if (rn > input) {
                alert(`UP! 기회는 ${c}번 남았습니다.`);
                a = input;
            } else {
                alert(`DOWN! 기회는 ${c}번 남았습니다.`);
                b = input;
            }  
        } else if (c === 0) {
            alert(`기회가 0번 남았습니다.\n정답은${rn}입니다.\n게임을 종료합니다.`)
            break;
        }
    }
    var reGame = confirm('한번 더 하실래요?');
    if (!reGame) {
    alert('게임을 종료합니다.');
    break;
  }

}