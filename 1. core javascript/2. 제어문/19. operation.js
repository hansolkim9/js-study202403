var result;
var oper;
var qNum = 1;
var correct = 0;
var incorrect = 0;
var max;

while (true) {
    alert(`즐겁게 문제를 풀다가 지겨우면 0을 누르세요!`);
    var level = +prompt(`난이도를 설정합니다.\n 1. 상 (1~100) | 2. 중 (1~50) | 3. 하 (1~20)`)
    if (level === 1) {
        max = 100;
    } else if (level === 2) {
        max = 50;
    } else if (level === 3) {
        max = 20;
    } else {
        max = 100;
        alert(`잘못 입력하셨습니다.\n난이도 '상(1~100)'이 자동으로 설정됩니다.`);
    }

    while (true) {
        var a = Math.floor(Math.random() * max) + 1;
        var b = Math.floor(Math.random() * max) + 1;
        var c = Math.floor(Math.random() * 4) + 1;
        if (c===1) {
            oper = '+';
            result = a + b ;
        } else if (c === 2) {
            oper = '-';
            result = a - b;
        } else if (c === 3 && a % b === 0) {
            oper = '/';
            result = a / b;
        } else {
            oper = '*';
            result = a * b;
        }

        if (a > b) {
            var input = +prompt(`Q${qNum}. ${a} ${oper} ${b} = ?`);
            if (input === 0) {
                alert(`게임을 종료합니다.\n총 ${qNum - 1}개의 문제를 푸셨으며\n정답은 ${correct}회, 오답은 ${incorrect}회 입니다.`)
                break;
            } else if (input === result) {
                alert(`정답입니다.`);
                correct++;
            } else {
                alert(`틀렸습니다.\n정답은 ${result}입니다.`);
                incorrect++;
            }
            qNum++
        }
    }
    var reGame = confirm('한 번 더 하시겠습니까?');
    if (!reGame) {
        alert('게임을 종료합니다.');
        break;
    }
}