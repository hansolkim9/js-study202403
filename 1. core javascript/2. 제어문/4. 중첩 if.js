var userHeight = +prompt('당신의 키를 입력하세요');

if (userHeight >= 140) {
    var userAge = +prompt('당신의 나이를 입력하세요');
    if (userAge >= 8) {
        alert('놀이기구에 탑승할 수 있습니다.');
    } else {
        alert('나이 제한으로 인해 놀이기구에 탑승할 수 없습니다.');
    }
} else {
    alert('신장 미달로 놀이기구에 탑승할 수 없습니다.');
}

alert('오늘 하루 즐거운 시간되세요!');