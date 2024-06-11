import insertTodoData from './todo-insert.js';


const handlerBinding = () => {
    // 추가 버튼 클릭 이벤트
    document.getElementById('add').addEventListener('click', e => {
        e.preventDefault(); // 기본 동작 방지
        insertTodoData();
        // console.log('clicked!'); // 클릭 동작 확인
    });

    // 삭제 버튼 클릭 이벤트
    document.querySelector('.todo-list').addEventListener('click', e => {
        
        // 클릭한 버튼이 포함된 li 탐색
        const $targetLi = e.target.closest('.todo-list-item');
        const dataId = +$targetLi.dataset.id

        if (e.target.matches('.remove span')) {
        // 삭제 처리 진행

        // 화면에서 제거
        // document.querySelector('.todo-list').removeChild($targetLi);
        $targetLi.remove();

        // 배열에서 데이터 제거
        removeTodoData(dataId);

        } else if (e.target.matches('.checkbox input[type=checkbox]')) { // 체크박스 클릭하면
            // console.log('체크박스');
            e.target.closest('.checkbox').classList.toggle('checked');
            // 체크 데이터 처리
            togleDone(dataId);

        } else if (e.target.matches('.modify span')) {
            // console.log('수정');
            toggleModifyMode(e.target);
        }
    });
};

export default handlerBinding;