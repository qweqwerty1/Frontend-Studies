import { useState } from 'react';
import './App.css'; // 간단한 스타일을 위해 CSS 파일을 import 합니다.

function App() {
  // 1. 할 일 목록을 관리할 state. 초기값은 빈 배열.
  const [todos, setTodos] = useState([]);
  // 2. 입력창의 값을 관리할 state. 초기값은 빈 문자열.
  const [input, setInput] = useState('');

  // 3. 폼 제출 시 실행될 함수
  const handleSubmit = (e) => {
    // 폼의 기본 동작(페이지 새로고침) 방지
    e.preventDefault();

    // 입력값이 없으면 함수 종료
    if (input.trim() === '') return;

    // 새 할 일 객체를 기존 todos 배열에 추가
    // 중요: state의 불변성을 위해 push 대신 스프레드 문법(...) 사용
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);

    // 입력창 비우기
    setInput('');
  };

  // 4. 입력창의 내용이 바뀔 떄마다 실행될 함수
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // 5. 할 일을 클릭했을 때 done 상태를 토글하는 함수
  const handleToggle = (id) => {
    setTodos(
      todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo)
    );
  };

  return (
    <div className="app-container">
      <h1>React To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={input} // input의 값을 React state와 동기화
        onChange={handleInputChange} // 내용이 바뀔 때마다 state 업데이트
        placeholder="할 일을 입력하세요"
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        {/* 6. todos 배열을 map으로 순회하며 각 todo에 대한 li 렌더링 */}
        {todos.map((todo) => (
          <li
            key={todo.id} // React가 각 항목을 구분하기 위한 고유한 key prop
            onClick={() => handleToggle(todo.id)}
            style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
            >
              {todo.text}
            </li>
        ))}
      </ul>
    </div>
  );
}

export default App;