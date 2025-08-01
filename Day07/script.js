// 1. 필요한 HTML 요소들 선택하기
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

// 2. Form의 제출(submit) 이벤트 처리하기
todoForm.addEventListener('submit', (event) => {
    // A. Form의 기본 동작(페이지 새로고침)을 막습니다.
    event.preventDefault();

    // B. 입력창의 현재 값을 가져옵니다.
    const newTodoText = todoInput.value;

    // C. 입력값이 비어있으면 아무것도 하지 않습니다.
    if (newTodoText === '') return;

    // D. 새로운 'li' 요소를 만듭니다.
    const newTodoItem = document.createElement('li');
    newTodoItem.textContent = newTodoText; // li에 입력값 넣기

    // E. 목록(ul)에 새로 만든 li를 추가합니다.
    todoList.append(newTodoItem);

    // F. 입력창을 비웁니다.
    todoInput.value = '';

    // G. 새로 추가된 항목에도 완료(취소선) 토글 이벤트를 추가합니다.
    addToggleEvent(newTodoItem);
});

// 3. 할 일 항목에 클릭 이벤트(완료/미완료 토글)를 추가하는 함수
function addToggleEvent(item) {
    item.addEventListener('click', () => {
        // classList.toggle은 해당 클래스가 있으면 제거하고, 없으면 추가합니다.
        item.classList.toggle('done');
    });
}