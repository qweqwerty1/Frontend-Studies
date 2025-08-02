// 1. 필요한 HTML 요소들 선택하기
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todos'; // localStorage의 key 값으로 사용할 문자열

// 2. To-Do 리스트 데이터를 담을 배열 (업데이트 가능해야 하므로 let 사용)
let todos = [];

// 3. 데이터를 localStorage에 저장하는 함수
function saveTOdos() {
    // todos 배열을 JSON 문자열로 변환하여 저장
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

// 4. 화면에 할 일을 그려주는 함수
function paintTodo(newTodoObj) {
    const li = document.createElement('li');
    li.id = newTodoObj.id // 각 li에 고유 id 부여
    const span = document.createElement('span');
    span.innerText = newTodoObj.text; // span에는 할 일 텍스트

    const button = document.createElement('button');
    button.innerText = '❌'; // 삭제 버튼 추가
    button.addEventListener('click', deleteTodo);

    if (newTodoObj.done) {
        li.classList.add('done'); // 완료 상태이면 .done 클래스 추가
    }

    li.addEventListener('click', toggleTodoDone);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

// 5. 할 일 삭제 함수
function deleteTodo(event) {
    const li = event.target.parentElement; // 클릭된 버튼의 부모 li를 찾음
    // todos 배열에서 클릭된 li와 id가 다른 항목만 남김
    todos = todos.filter(todo => todo.id !== parseInt(li.id));
    li.remove(); // 화면에서 li 삭제
    saveTOdos(); // 변경된 내용을 localStorage에 저장
}

// 6. 할 일 완료/미완료 토글 함수
function toggleTodoDone(event) {
    // span이나 li 어디를 클릭해도 li를 찾도록 수정
    const li = event.target.closest('li');
    if (!li) return; // li가 아니면 종료

    // todos 배열에서 해당 id를 찾아 done 사앹를 반전
    const todo = todos.find(todo => todo.id === parseInt(li.id));
    if (todo) {
        todo.done = !todo.done;
    }

    li.classList.toggle('done');
    saveTOdos();
}

// 7. Form 제출 이벤트 핸들러
function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodoText = todoInput.value;
    todoInput.value = '';

    const newTodoObj = {
        text: newTodoText,
        id: Date.now(), // 고유 ID로 현재 시간의 타임스탬프 사용
        done: false,
    };

    todos.push(newTodoObj); // 배열에 새 할 일 추가
    paintTodo(newTodoObj); // 화면에 새 할 일 그리기
    saveTOdos(); // localStorage에 저장
}

todoForm.addEventListener('submit', handleTodoSubmit);

// 8. 페이지 로드 시 실행되는 부분
const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos); // JSON 문자열을 실제 배열로 변환
    todos = parsedTodos; // 기존 데이터를 todos 배열에 할당
    parsedTodos.forEach(paintTodo);
}

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newTodoText = todoInput.value;

    if (newTodoText === '') return;

    const newTodoItem = document.createElement('li');
    newTodoItem.textContent = newTodoText; 

    todoList.append(newTodoItem);

    todoInput.value = '';

    addToggleEvent(newTodoItem);
});

function addToggleEvent(item) {
    item.addEventListener('click', () => {
        item.classList.toggle('done');
    });
}